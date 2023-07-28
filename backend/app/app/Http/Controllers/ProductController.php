<?php

namespace App\Http\Controllers;

use App\Http\Helpers\ApiResponse;
use App\Http\Helpers\CloudinaryHelper;
use App\Models\Image;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    protected $cols_to_get = [
        'products.id',
        'products.name',
        'products.description',
        'products.year',
        'products.brand',
        'products.price',
        'products.is_offer',
        'products.is_trend',
        'products.condition',
        'products.calification',
        'c.name as city',
        'c.country as country',
        'i.link as image_link',
        'i.filename as image_filename',
        'i.type as image_type',
        'products.image_id',
        'u.name as vendor_name',
        'u.lastname as vendor_lastname',
        'u.email as vendor_email',
        'products.created_at',
        'products.updated_at',
    ];

    public function index(Request $request)
    {
        $filter_options = [
            // @TODO add year and price if is necessary
            // 'year',
            'brand',
            // 'price',
            'is_offer',
            'is_trend',
            'condition',
            'city',
            'country',
            'calification'
        ];

        $products = Product::join('cities as c', 'products.city_id', 'c.id')
            ->leftJoin('images as i', 'products.image_id', 'i.id')
            ->leftJoin('vendors as v', 'products.vendor_id', 'v.id')
            ->leftJoin('users as u', 'v.user_id', 'u.id');

        foreach ($filter_options as $filter) {
            $filter_value = $request->query($filter);

            if ($filter_value) {
                if ($filter === 'city') {
                    if (Str::contains($filter_value, ['-', '_'])) {
                        $filter_value = Str::swap([
                            '-' => ' ',
                            '_' => ' '
                        ], $filter_value);
                    }

                    $filter_value = Str::title($filter_value);

                    $products = $products->where('c.name', Str::ucfirst($filter_value));
                    continue;
                }

                if ($filter === 'country') {
                    $products = $products->where('c.country', $filter_value);
                    continue;
                }

                $products = $products->where($filter, $filter_value);
            }
        }

        $products = $products->orderBy('products.id', 'asc')
            ->get($this->cols_to_get);

        return ApiResponse::create($products);
    }

    public function show($id)
    {
        $product = Product::join('cities as c', 'products.city_id', 'c.id')
            ->leftJoin('images as i', 'products.image_id', 'i.id')
            ->leftJoin('vendors as v', 'products.vendor_id', 'v.id')
            ->leftJoin('users as u', 'v.user_id', 'u.id')
            ->where('products.id', $id)
            ->first($this->cols_to_get);

        if (!$product) {
            return [
                "message" => "Product doesn't exists",
                "success" => false,
                "data" => []
            ];
        }

        return ApiResponse::create($product);
    }

    public function store(Request $request)
    {
        $new_images_ids = [];
        $new_images = [];
        if (is_array($request->file('image'))) {
            $images_files = $request->file('image');

            foreach ($images_files as $image_file) {
                $file_uploaded_path = CloudinaryHelper::uploadFile($image_file);

                $created_image = Image::create([
                    'filename' => $image_file->getClientOriginalName(),
                    'type' => $request->image_type,
                    'link' => $file_uploaded_path,
                ]);

                $new_images_ids[] = $created_image->id;
                $new_images[] = [
                    'id' => $created_image->id,
                    'filename' => $created_image->filename,
                    'type' => $created_image->type,
                    'link' => $created_image->link
                ];
            }
        } else {
            $image_file = $request->file('image');

            $file_uploaded_path = CloudinaryHelper::uploadFile($image_file);

            $created_image = Image::create([
                'filename' => $image_file->getClientOriginalName(),
                'type' => $request->image_type,
                'link' => $file_uploaded_path,
            ]);

            $new_images_ids[] = $created_image->id;
            $new_images[] = [
                'id' => $created_image->id,
                'filename' => $created_image->filename,
                'type' => $created_image->type,
                'link' => $created_image->link
            ];
        }

        $productToCreate = [
            'image_id' => json_encode($new_images_ids),
            'name' => $request->name,
            'description' => $request->description,
            'year' => $request->year,
            'brand' => $request->brand,
            'price' => $request->price,
            'is_offer' => $request->is_offer,
            'is_trend' => $request->is_trend,
            'condition' => $request->condition,
            'city_id' => $request->city_id,
            'calification' => $request->calification,
            'vendor_id' => $request->vendor_id
        ];

        $product = Product::create($productToCreate);

        $product = $product->toArray();

        $product['images_details'] = $new_images;

        return ApiResponse::create($product);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'year' => 'required|integer',
            'brand' => 'required|integer',
            'price' => 'required|numeric',
            'is_offer' => 'required|boolean',
            'is_trend' => 'required|boolean',
            'condition' => 'required',
            'city_id' => 'required|integer',
            'calification' => 'required|integer|min:1|max:5',
        ]);

        $product = Product::findOrFail($id);
        $product->update($request->all());
        return ApiResponse::create($product);
    }

    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();
        return ApiResponse::create(null);
    }

    public function related($id) {

        $product = Product::find($id);

        if ($product === null) {
            return ApiResponse::create(null, "Producto no encontrado", ".");
        }

        $relatedProducts = Product::where('id', '!=', $id)
            ->where(function ($query) use ($product) {
                $minPrice = $product->price * 0.5;
                $maxPrice = $product->price * 1.5;
                $query->whereBetween('price', [$minPrice, $maxPrice])
                    ->where('brand', '=', $product->brand)
                    ->where('city_id', '=', $product->city_id);
            })
            ->orderBy('calification', 'desc')
            ->get();

        $count = $relatedProducts->count();

        if ($count < 3) {
            $relatedProducts = Product::where('id', '!=', $id)
                ->where('brand', '=', $product->brand)
                ->where('city_id', '=', $product->city_id)
                ->orderBy('calification', 'desc')
                ->get();

            $count = $relatedProducts->count();
            if ($count < 3) {
                $relatedProducts = Product::where('id', '!=', $id)
                    ->where('city_id', '=', $product->city_id)
                    ->orderBy('calification', 'desc')
                    ->get();

                $count = $relatedProducts->count();
            }
        }


        if ($count > 0) {
            return ApiResponse::create($relatedProducts, "Productos encontrados", "");
        } else {
            return ApiResponse::create([], "", "No se encontraron productos relacionados");
        }
    }
}

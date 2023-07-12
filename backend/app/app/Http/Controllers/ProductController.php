<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
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

        $cols_to_get = [
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
            'products.created_at',
            'products.updated_at',
        ];

        $products = Product::join('cities as c', 'products.city_id', 'c.id');

        foreach ($filter_options as $filter) {
            $filter_value = $request->query($filter);

            if ($filter_value) {
                if ($filter === 'city') {
                    $products = $products->where('c.name', $filter_value);
                    continue;
                }

                if ($filter === 'country') {
                    $products = $products->where('c.country', $filter_value);
                    continue;
                }

                $products = $products->where($filter, $filter_value);
            }
        }

        $products = $products->get($cols_to_get);

        return response()->json($products);
    }

    public function show($id)
    {
        $product = Product::findOrFail($id);
        return response()->json($product);
    }

    public function store(Request $request)
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

        $product = Product::create($request->all());
        return response()->json($product, 201);
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
        return response()->json($product);
    }

    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();
        return response()->json(null, 204);
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Helpers\ApiResponse;
use App\Models\Vendor;
use Illuminate\Http\Request;

class VendorController extends Controller
{

    protected $cols_to_get = [
        'vendors.id',
        'vendors.user_id',
        // 'vendors.product_id',
        'u.name',
        'u.lastname',
        'u.email',
        // 'p.name as product',
        // 'p.description',
        // 'p.year',
        // 'p.brand',
        // 'p.price',
        // 'p.condition',
        // 'c.name as city',
        // 'c.country as country',
        'vendors.created_at',
        'vendors.updated_at',
    ];

    public function index(Request $request)
    {
        $filter_options = [
            'name',
            'city'
        ];

        $vendors = Vendor::join('users as u', 'vendors.user_id', 'u.id');
            // ->join('products as p', 'vendors.product_id', 'p.id')
            // ->join('cities as c', 'p.city_id', 'c.id');

        foreach ($filter_options as $filter) {
            $filter_value = $request->query($filter);

            if ($filter_value) {
                if ($filter === 'name') {
                    $vendors = $vendors->where('u.name', $filter_value);
                    continue;
                }

                // if ($filter === 'city') {
                //     $vendors = $vendors->where('c.name', $filter_value);
                //     continue;
                // }

                $vendors = $vendors->where($filter, $filter_value);
            }
        }

        $vendors = $vendors->get($this->cols_to_get);

        return ApiResponse::create($vendors);
    }

    public function show($id)
    {
        $vendors = Vendor::join('users as u', 'vendors.user_id', 'u.id')
            // ->join('products as p', 'vendors.product_id', 'p.id')
            // ->join('cities as c', 'p.city_id', 'c.id')
            ->where('vendors.user_id', $id);
        $vendors = $vendors->get($this->cols_to_get);
        if (!$vendors->isEmpty()) {
            return ApiResponse::create($vendors, 'Vendedor encontrado');
        } else {
            return ApiResponse::create(null, null, "Vendedor no encontrado");
        }
    }

    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|integer',
            // 'product_id' => 'required|integer',
        ]);

        $vendor = Vendor::create($request->all());
        return ApiResponse::create($vendor);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'user_id' => 'required|integer',
            // 'product_id' => 'required|integer',
        ]);

        $vendor = Vendor::findOrFail($id);
        $vendor->update($request->all());
        return ApiResponse::create($vendor);
    }

    public function destroy($id)
    {

        $vendor = Vendor::find($id);

        if (isset($vendor)) {
            $res = Vendor::destroy($id);
            if ($res) {
                return ApiResponse::create($vendor, "Vendedor eliminado");
            } else {
                return ApiResponse::create(null, null, "Vendedor no eliminado");
            }
        } else {
            return ApiResponse::create(null, null, "Vendedor no encontrado");
        }
    }
    public function __construct()
    {
        $this->middleware('access')->only(['destroy']);
    }
}

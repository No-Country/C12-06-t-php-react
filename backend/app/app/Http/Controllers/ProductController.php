<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
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

<?php

namespace App\Http\Controllers;

use App\Http\Helpers\ApiResponse;
use App\Models\Sale;
use Illuminate\Http\Request;

class SaleController extends Controller
{
    public function index()
    {
        $sales = Sale::all();
        return ApiResponse::create($sales);
    }

    public function show($id)
    {
        $sale = Sale::findOrFail($id);
        return ApiResponse::create($sale);
    }

    public function store(Request $request)
    {
        $request->validate([
            'booking_id' => 'required|integer',
            'product_id' => 'required|integer',
            'comment' => 'required',
        ]);

        $sale = Sale::create($request->all());
        return ApiResponse::create($sale);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'booking_id' => 'required|integer',
            'product_id' => 'required|integer',
            'comment' => 'required',
        ]);

        $sale = Sale::findOrFail($id);
        $sale->update($request->all());
        return ApiResponse::create($sale);
    }

    public function destroy($id)
    {
        $sale = Sale::findOrFail($id);
        $sale->delete();
        return ApiResponse::create(null);
    }
}

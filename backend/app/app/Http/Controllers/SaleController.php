<?php

namespace App\Http\Controllers;

use App\Models\Sale;
use Illuminate\Http\Request;

class SaleController extends Controller
{
    public function index()
    {
        $sales = Sale::all();
        return response()->json($sales);
    }

    public function show($id)
    {
        $sale = Sale::findOrFail($id);
        return response()->json($sale);
    }

    public function store(Request $request)
    {
        $request->validate([
            'booking_id' => 'required|integer',
            'product_id' => 'required|integer',
            'comment' => 'required',
        ]);

        $sale = Sale::create($request->all());
        return response()->json($sale, 201);
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
        return response()->json($sale);
    }

    public function destroy($id)
    {
        $sale = Sale::findOrFail($id);
        $sale->delete();
        return response()->json(null, 204);
    }
}

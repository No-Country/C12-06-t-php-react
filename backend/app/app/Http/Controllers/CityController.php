<?php

namespace App\Http\Controllers;

use App\Models\City;
use Illuminate\Http\Request;

class CityController extends Controller
{
    public function index()
    {
        $cities = City::all();
        return response()->json($cities);
    }

    public function show($id)
    {
        $city = City::findOrFail($id);
        return response()->json($city);
    }

    public function store(Request $request)
    {
        $request->validate([
            'city_name' => 'required',
            'country_name' => 'required',
            'post_code' => 'required',
        ]);

        $city = City::create($request->all());
        return response()->json($city, 201);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'city_name' => 'required',
            'country_name' => 'required',
            'post_code' => 'required',
        ]);

        $city = City::findOrFail($id);
        $city->update($request->all());
        return response()->json($city);
    }

    public function destroy($id)
    {
        $city = City::findOrFail($id);
        $city->delete();
        return response()->json(null, 204);
    }
}

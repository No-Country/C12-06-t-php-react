<?php

namespace App\Http\Controllers;

use App\Http\Helpers\ApiResponse;
use App\Models\City;
use Illuminate\Http\Request;

class CityController extends Controller
{
    public function index()
    {
        $cities = City::all();
        return ApiResponse::create($cities);
    }

    public function show($id)
    {
        $city = City::findOrFail($id);
        return ApiResponse::create($city);
    }

    public function store(Request $request)
    {
        $request->validate([
            'city_name' => 'required',
            'country_name' => 'required',
            'post_code' => 'required',
        ]);

        $city = City::create($request->all());
        return ApiResponse::create($city,);
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
        return ApiResponse::create($city);
    }

    public function destroy($id)
    {
        $city = City::findOrFail($id);
        $city->delete();
        return ApiResponse::create(null);
    }
}

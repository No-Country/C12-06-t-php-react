<?php

namespace App\Http\Controllers;

use App\Http\Helpers\ApiResponse;
use App\Models\Client;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function index()
    {
        $clients = Client::all();
        return ApiResponse::create($clients);
    }

    public function show($id)
    {
        $client = Client::findOrFail($id);
        return ApiResponse::create($client);
    }

    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|integer',
            'product_id' => 'required|integer',
            'phone_number' => 'required|integer',
        ]);

        $client = Client::create($request->all());
        return ApiResponse::create($client);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'user_id' => 'required|integer',
            'product_id' => 'required|integer',
            'phone_number' => 'required|integer',
        ]);

        $client = Client::findOrFail($id);
        $client->update($request->all());
        return ApiResponse::create($client);
    }

    public function destroy($id)
    {
        $client = Client::findOrFail($id);
        $client->delete();
        return ApiResponse::create(null);
    }
}

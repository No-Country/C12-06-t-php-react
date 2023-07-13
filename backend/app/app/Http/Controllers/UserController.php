<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }

    public function show($id)
    {
        $user = User::findOrFail($id);
        return response()->json($user);
    }

    public function store(Request $request)
    {
        // Validación y creación del usuario

    }

    public function update(Request $request, $id)
    {
        // Validación y actualización del usuario

    }

    public function destroy($id)
    {
        // Eliminación del usuario

    }

    public function getCurrentUser()
    {
        $user = auth()->user();
        return response()->json($user);
    }

    public function __construct()
    {
        $this->middleware('auth:sanctum')->except(['store', 'login', 'register']);
    }
}

<?php

use App\Http\Controllers\BookingController;
use App\Http\Controllers\CarouselController;
use App\Http\Controllers\CityController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RelatedController;
use App\Http\Controllers\TestimonyController;
use App\Http\Controllers\VendorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/test', [Controller::class, 'testDb']);

// AutoApp endpoints
// @TODO add more - Ver si los hacemos como resources o los hacemos individualmente
Route::apiResource('bookings', BookingController::class);
Route::apiResource('cities', CityController::class);
Route::apiResource('carousel', CarouselController::class);
Route::apiResource('products', ProductController::class);
Route::apiResource('users', UserController::class);
Route::apiResource('vendors', VendorController::class);
Route::apiResource('testimonials',TestimonyController::class);
Route::apiResource('images',ImageController::class);
Route::get('products/related/{id}', [ProductController::class, 'related']);
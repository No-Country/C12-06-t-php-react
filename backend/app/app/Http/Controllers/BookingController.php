<?php

namespace App\Http\Controllers;

use App\Http\Helpers\ApiResponse;
use App\Models\Booking;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function index()
    {
        $bookings = Booking::all();
        return ApiResponse::create($bookings);
    }

    public function show($id)
    {
        $booking = Booking::findOrFail($id);
        return ApiResponse::create($booking);
    }

    public function store(Request $request)
    {
        $request->validate([
            'product_id' => 'required|integer',
            'client_id' => 'required|integer',
            'state' => 'required|in:1,2,3',
        ]);

        $booking = Booking::create($request->all());
        return ApiResponse::create($booking);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'product_id' => 'required|integer',
            'client_id' => 'required|integer',
            'state' => 'required|in:1,2,3',
        ]);

        $booking = Booking::findOrFail($id);
        $booking->update($request->all());
        return ApiResponse::create($booking);
    }

    public function destroy($id)
    {
        $booking = Booking::findOrFail($id);
        $booking->delete();
        return ApiResponse::create(null);
    }
}

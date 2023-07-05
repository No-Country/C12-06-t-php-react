<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller as BaseController;

use App\Models\User;
use App\Models\Booking;
use App\Models\City;
use App\Models\Client;
use App\Models\Product;
use App\Models\Sale;
use App\Models\Vendor;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function testDb()
    {
        return new JsonResponse(['success' => true, 'data' => ['test' => 'test']]);
    }
}

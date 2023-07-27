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
        $response = [
            'success' => true,
            'data' => [
                'test' => 'test',
                'DB_CONNECTION' => getenv('DB_CONNECTION'),
                'DB_HOST' => getenv('DB_HOST'),
                'DB_PORT' => getenv('DB_PORT'),
                'DB_DATABASE' => getenv('DB_DATABASE'),
                'DB_USERNAME' => getenv('DB_USERNAME'),
                'DB_PASSWORD' => getenv('DB_PASSWORD'),
                'MYSQL_ATTR_SSL_CA' => getenv('MYSQL_ATTR_SSL_CA'),
                'PLANETSCALE_DB' => getenv('PLANETSCALE_DB'),
                'PLANETSCALE_DB_USERNAME' => getenv('PLANETSCALE_DB_USERNAME'),
                'PLANETSCALE_DB_PASSWORD' => getenv('PLANETSCALE_DB_PASSWORD'),
                'PLANETSCALE_DB_HOST' => getenv('PLANETSCALE_DB_HOST'),
                'PLANETSCALE_SSL_CERT_PAT' => getenv('PLANETSCALE_SSL_CERT_PAT'),
            ]
        ];

        return new JsonResponse($response);
    }
}

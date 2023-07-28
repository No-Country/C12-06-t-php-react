<?php

namespace App\Http\Helpers;

class ApiResponse
{
    public static function create($data, $message = '', $error_message = null)
    {
        $response = [
            "success" => true,
            "message" => $message,
            "data" => $data
        ];

        if ($error_message) {
            $message = $error_message;
            $response['success'] = false;
        }

        return $response;
    }
}

<?php

namespace App\Http\Helpers;

use Cloudinary\Configuration\Configuration;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Support\Str;

class CloudinaryHelper
{
    public static function uploadFile($image_file) {
        return Cloudinary::upload($image_file->getRealPath(), [
            'folder' => 'products/images',
            'public_id' => Str::before($image_file->getClientOriginalName(), '.')
        ])->getSecurePath();
    }
}

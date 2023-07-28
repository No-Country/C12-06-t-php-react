<?php

namespace App\Http\Helpers;

use App\Models\Image;
use Illuminate\Support\Str;

class ImagesHelper
{
    public static function getImagesIdsByFilename($model) {
        $images = Image::where('filename', 'like', "%$model%")
            ->where('type', Image::PRODUCT_IMAGE)->get('id');

        $images_ids = [];
        if ($images) {
            $images_ids = [];
            foreach ($images as $image) {
                $images_ids[] = $image;
            }
        }

        return $images_ids;
    }
}

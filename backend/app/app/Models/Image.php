<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;
    protected $fillable = [
        'link',
        'type',
        'filename',
    ];

    const PRODUCT_IMAGE = "product_image";
    const CAROUSEL_IMAGE = "carousel_image";
}

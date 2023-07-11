<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'description',
        'year',
        'brand',
        'price',
        'is_offer',
        'is_trend',
        'condition',
        'city_id',
        'calification',
    ];

    /**
     * Get the vendor associated with the product.
     */
    public function vendor()
    {
        return $this->belongsTo(Vendor::class);
    }

    /**
     * Get the city associated with the product.
     */
    public function city()
    {
        return $this->belongsTo(City::class);
    }

    const STATUS_NEW = 1;
    const STATUS_USED = 2;
}

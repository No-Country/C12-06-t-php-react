<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'product_id',
        'client_id',
        'state',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'state' => 'integer',
    ];

    /**
     * The possible states for the booking.
     *
     * @var array
     */
    public static $states = [
        1 => 'New',
        2 => 'Pending',
        3 => 'Accepted',
    ];
}


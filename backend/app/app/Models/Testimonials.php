<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testimonials extends Model {
    use HasFactory;

    protected $fillable = [
        'client_id',
        'company',
        'icon_company',
        'comment',
        'avatar',
        'position'
    ];

    public function client() {
        return $this->belongsTo(Client::class);
    }
}

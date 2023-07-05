<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\User;
use App\Models\Product;
use App\Models\Client;
use App\Models\Vendor;
use App\Models\Booking;
use App\Models\City;
use App\Models\Sale;

class DatabaseSeeder extends Seeder {
    /**
     * Seed the application's database.
     */
    public function run(): void {

        User::factory(10)->create();
        City::factory(10)->create();
        Product::factory(30)->create();
        Client::factory(15)->create();
        Vendor::factory(20)->create();
        Booking::factory(20)->create();
        Sale::factory(20)->create();
    }
}

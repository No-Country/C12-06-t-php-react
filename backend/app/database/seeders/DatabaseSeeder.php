<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\User;
use App\Models\Product;
use App\Models\Client;
use App\Models\Vendor;
use App\Models\Booking;
use App\Models\City;
use App\Models\Image;
use App\Models\Sale;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        User::factory(10)->create();
        City::factory(10)->create();
        Product::factory(30)->create();
        Client::factory(15)->create();
        Vendor::factory(20)->create();
        Booking::factory(20)->create();
        Sale::factory(20)->create();
        $this->call(TestimonialsSeeder::class);
      
        $car_models = [
            "Cruze",
            "Camaro",
            "Equinox",
            "Spark",
            "Focus",
            "Mustang",
            "Escape",
            "F-150",
            "Golf",
            "Passat",
            "Tiguan",
            "Jetta",
            "Clio",
            "Megane",
            "Koleos",
            "Captur",
            "500",
            "Panda",
            "Tipo",
            "Doblo"
        ];

        foreach ($car_models as $model) {
            for ($i = 0; $i <= 4; $i++) {
                DB::table('users')->insert([
                    'type' => Image::PRODUCT_IMAGE,
                    'filename' => $model . $i,
                    'link' => "https://res.cloudinary.com/dddle4mos/image/upload/f_auto,q_auto/v1/products/images/" . $model . $i
                ]);
            }
        }
    }
}

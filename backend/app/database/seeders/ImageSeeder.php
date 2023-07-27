<?php

namespace Database\Seeders;

use App\Models\Image;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ImageSeeder extends Seeder {
    /**
     * Run the database seeds.
     */
    public function run(): void {
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
            for ($i = 1; $i <= 4; $i++) {
                $image = new Image();
                $image->type = Image::PRODUCT_IMAGE;
                $image->filename = $model . $i;
                $image->link = "https://res.cloudinary.com/dddle4mos/image/upload/f_auto,q_auto/v1/products/images/" . $model . $i . '.webp';

                $image->save();
            }
        }
    }
}


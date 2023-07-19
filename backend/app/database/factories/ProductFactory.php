<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ProductFactory extends Factory {
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = Product::class;

    public function definition(): array {
        return [
            'name' => $this->faker->words(2, true),
            'description' => $this->faker->paragraph(2, false),
            'year' => $this->faker->numberBetween(1960, 2020),
            'brand' => $this->faker->randomElement([
                "Chevrolet",
                "Ford",
                "Volkswagen",
                "Renault",
                "Fiat",
                "Peugeot",
                "Toyota",
                "Honda",
                "Yamaha",
                "Suzuki",
                "Mercedes-Benz",
                "BMW",
                "Audi",
                "Nissan",
                "Citroën",
                "Kawasaki",
                "Hyundai",
                "Kia",
                "Harley-Davidson",
                "Ducati"
            ]),
            'price' => $this->faker->randomFloat(1, 10000, 40000),
            'is_offer' => $this->faker->boolean(),
            'is_trend' => $this->faker->boolean(),
            'condition' => $this->faker->randomElement([Product::STATUS_NEW, Product::STATUS_USED]), // 1. New, 2. Used
            'city_id' => $this->faker->numberBetween(1, 10),
            'calification' => $this->faker->numberBetween(1, 5)
        ];
    }
}

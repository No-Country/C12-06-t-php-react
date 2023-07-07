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
            'brand' => $this->faker->randomElement([1, 2, 3, 4, 5, 6]), //'Toyota', 'Susuki', 'BMW', 'Ford', 'Honda','Yamaha'
            'price' => $this->faker->randomFloat(1, 10000, 40000),
            'is_offer' => $this->faker->boolean(),
            'is_trend' => $this->faker->boolean(),
            'condition' => $this->faker->randomElement(['nuevo', 'usado']),
            'city_id' => $this->faker->numberBetween(1, 10),
            'calification' => $this->faker->numberBetween(1, 5)
        ];
    }
}

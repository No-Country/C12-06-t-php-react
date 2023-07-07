<?php

namespace Database\Factories;

use App\Models\Sale;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class SaleFactory extends Factory {
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Sale::class;

    public function definition(): array {
        return [
            'booking_id' => $this->faker->numberBetween(1, 20),
            'product_id' => $this->faker->numberBetween(1, 30),
            'comment' => $this->faker->paragraph()
        ];
    }
}

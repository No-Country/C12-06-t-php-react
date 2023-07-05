<?php

namespace Database\Factories;

use App\Models\Booking;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class BookingFactory extends Factory {
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Booking::class;

    public function definition(): array {
        return [
            'product_id' => $this->faker->numberBetween(1, 30),
            'client_id' => $this->faker->numberBetween(1, 15),
            'state' => $this->faker->randomElement([1, 2, 3]) //Note: '1. Nueva, 2. Pendiente, 3. Aceptada']
        ];
    }
}

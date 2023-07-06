<?php

namespace Database\Factories;

use App\Models\Client;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ClientFactory extends Factory {
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = Client::class;

    public function definition(): array {
        return [
            'user_id' => $this->faker->numberBetween(1,10),
            'product_id' => $this->faker->numberBetween(1,30),
            'phone_number' => $this->faker->randomNumber(8, true)
        ];
    }
}

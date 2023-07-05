<?php

namespace Database\Factories;

use App\Models\City;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class CityFactory extends Factory {
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = City::class;

    public function definition(): array {
        return [
            'city_name' => $this->faker->city(),
            'country_name' => $this->faker->country(),
            'post_code' => $this->faker->postcode()
        ];
    }
}

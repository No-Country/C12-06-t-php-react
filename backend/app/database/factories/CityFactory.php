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
        $country = $this->faker->randomElement([
            'Argentina',
            'Chile',
            'Brasil'
        ]);

        switch ($country) {
            case 'Chile':
                $city = $this->faker->randomElement([
                    'Santiago',
                    'Valparaíso',
                    'Viña del Mar',
                    'Concepción',
                    'Valdivia',
                    'La Serena',
                    'Arica',
                    'Antofagasta',
                    'Puerto Montt',
                    'Iquique'
                ]);
                break;
        
            case 'Argentina':
                $city = $this->faker->randomElement([
                    'Buenos Aires',
                    'Córdoba',
                    'Rosario',
                    'Mendoza',
                    'Mar del Plata',
                    'San Miguel de Tucumán',
                    'La Plata',
                    'Salta',
                    'Santa Fe',
                    'San Juan'
                ]);
                break;
        
            case 'Brasil':
                $city = $this->faker->randomElement([
                    'São Paulo',
                    'Rio de Janeiro',
                    'Brasília',
                    'Salvador',
                    'Fortaleza',
                    'Belo Horizonte',
                    'Manaus',
                    'Curitiba',
                    'Recife',
                    'Porto Alegre'
                ]);
                break;
        
            default:
                $city = 'Ciudad no disponible.';
                break;
        }
        

        return [
            'name' => $city,
            'country' => $country,
            'post_code' => $this->faker->postcode()
        ];
    }
}

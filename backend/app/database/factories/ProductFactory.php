<?php

namespace Database\Factories;

use App\Http\Helpers\ImagesHelper;
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

        $brand = $this->faker->randomElement([
            "Chevrolet",
            "Ford",
            "Volkswagen",
            "Renault",
            "Fiat"
        ]);

        $images_ids = json_encode([]);
        
        switch ($brand) {
            case 'Chevrolet':
                $model = $this->faker->randomElement([
                    "Cruze",
                    "Camaro",
                    "Equinox",
                    "Spark",
                ]);
        
                switch ($model) {
                    case 'Cruze':
                        $description = 'Descubre el Chevrolet Cruze, la combinación perfecta entre estilo y rendimiento. Con un diseño aerodinámico y elegante, este sedán te llevará a nuevos horizontes. Disfruta de su tecnología de vanguardia, comodidad interior y potente motor que ahorra combustible. Conduce con confianza gracias a sus avanzadas características de seguridad. El Cruze te ofrece una experiencia de manejo incomparable, perfecta para la ciudad y la carretera. ¡Conquista el camino con el Chevrolet Cruze ahora!';
                        $images_ids = json_encode(ImagesHelper::getImagesIdsByFilename($model));
                        break;
                    case 'Camaro':
                        $description = 'El Chevrolet Camaro te ofrece un rendimiento impresionante con su motor V8 y diseño deportivo icónico. Acelera de 0 a 100 km/h en segundos y disfruta de su manejo ágil y preciso. Su interior está diseñado para brindar comodidad y tecnología avanzada. Conduce con confianza con sus sistemas de seguridad mejorados. El Camaro es el muscle car que siempre has deseado. ¡Siente la emoción al volante con el Chevrolet Camaro!';
                        $images_ids = json_encode(ImagesHelper::getImagesIdsByFilename($model));
                        break;
                    case 'Equinox':
                        $description = 'Descubre la versatilidad y elegancia de la Chevrolet Equinox. Esta SUV combina un diseño moderno con amplio espacio interior y comodidad para todos los pasajeros. Disfruta de su avanzada tecnología de conectividad y entretenimiento, así como de su eficiente motor que ahorra combustible. Con capacidades todoterreno y características de seguridad líderes en su clase, la Equinox es el vehículo ideal para tu estilo de vida activo. ¡Vive cada aventura con la Chevrolet Equinox!';
                        $images_ids = json_encode(ImagesHelper::getImagesIdsByFilename($model));
                        break;
                    case 'Spark':
                        $description = 'El Chevrolet Spark es el compacto perfecto para la ciudad. Su tamaño compacto te permite estacionar fácilmente y maniobrar en espacios reducidos. Pero no te dejes engañar por su tamaño, su interior es sorprendentemente espacioso y lleno de tecnología innovadora. Además, su motor eficiente te lleva más lejos con menos combustible. Disfruta de la diversión y la eficiencia combinadas en el Chevrolet Spark. ¡Explora la ciudad con estilo!';
                        $images_ids = json_encode(ImagesHelper::getImagesIdsByFilename($model));
                        break;
                    default:
                        $description = 'Descripción del modelo no disponible.';
                        $images_ids = json_encode(ImagesHelper::getImagesIdsByFilename($model));
                        break;
                }
                break;
        
            case 'Ford':
                $model = $this->faker->randomElement([
                    "Focus",
                    "Mustang",
                    "Escape",
                    "F-150",
                ]);
        
                switch ($model) {
                    case 'Focus':
                        $description = 'Descubre el Ford Focus, el compacto que combina un diseño sofisticado con un rendimiento emocionante. Su conducción ágil y eficiente te hará disfrutar cada trayecto. Además, su interior está lleno de comodidades y tecnología para mantenerte conectado y seguro en el camino. Con espacio para toda la familia y eficiencia de combustible, el Focus es ideal para tu estilo de vida activo. ¡Experimenta la emoción del Ford Focus ahora!';
                        $images_ids = json_encode(ImagesHelper::getImagesIdsByFilename($model));
                        break;
                    case 'Mustang':
                        $description = 'El Ford Mustang, un ícono legendario, te ofrece un rendimiento excepcional con su potente motor y diseño icónico. Su estilo agresivo y su interior elegante te envuelven en una experiencia de conducción única. Disfruta de la emoción de un verdadero muscle car mientras recorres las carreteras. Además, cuenta con tecnología avanzada y sistemas de seguridad para una conducción confiable. ¡Siente la pasión del Ford Mustang!';
                        $images_ids = json_encode(ImagesHelper::getImagesIdsByFilename($model));
                        break;
                    case 'Escape':
                        $description = 'La Ford Escape es la SUV versátil y espaciosa para tus aventuras diarias. Con un diseño aerodinámico y eficiente, este SUV te llevará más lejos con menos combustible. Su interior cómodo y repleto de tecnología te mantiene conectado y entretenido. Además, cuenta con sistemas de seguridad avanzados para conducir con confianza. Vive cada momento con la Ford Escape, perfecta para el día a día y las escapadas de fin de semana.';
                        $images_ids = json_encode(ImagesHelper::getImagesIdsByFilename($model));
                        break;
                    case 'F-150':
                        $description = 'La legendaria Ford F-150 es la pick-up que combina fuerza y sofisticación. Su resistente chasis y poderoso motor le permiten llevar cargas pesadas con facilidad. Además, su interior está diseñado para brindar comodidad y tecnología avanzada para mantenerte conectado. Con capacidades todoterreno y sistemas de seguridad líderes en su clase, la F-150 es la pick-up ideal para el trabajo y el tiempo libre. ¡Conquista nuevos horizontes con la Ford F-150!';
                        $images_ids = json_encode(ImagesHelper::getImagesIdsByFilename($model));
                        break;
                    default:
                        $description = 'Descripción del modelo no disponible.';
                        $images_ids = json_encode(ImagesHelper::getImagesIdsByFilename($model));
                        break;
                }
                break;
        
            case 'Volkswagen':
                $model = $this->faker->randomElement([
                    "Golf",
                    "Passat",
                    "Tiguan",
                    "Jetta",
                ]);
        
                switch ($model) {
                    case 'Golf':
                        $description = 'Descubre el Volkswagen Golf, el hatchback que combina elegancia y rendimiento. Con su diseño moderno y líneas fluidas, te llevará a disfrutar de cada trayecto. Disfruta de su interior espacioso y lleno de tecnología avanzada para mantenerte conectado. Su conducción ágil y precisa te brinda una experiencia de manejo excepcional. El Golf es el compañero perfecto para tus aventuras urbanas. ¡Disfruta cada recorrido con el Volkswagen Golf!';
                        $images_ids = json_encode(ImagesHelper::getImagesIdsByFilename($model));
                        break;
                    case 'Passat':
                        $description = 'El Volkswagen Passat es la elegancia en movimiento. Con un diseño sofisticado y líneas suaves, esta berlina te hará destacar en cualquier lugar. Su interior está diseñado para brindar comodidad y tecnología avanzada para mantenerte conectado. Además, su potente motor y tecnología de ahorro de combustible te llevan más lejos con menos. Disfruta de la combinación perfecta entre rendimiento y lujo con el Volkswagen Passat.';
                        $images_ids = json_encode(ImagesHelper::getImagesIdsByFilename($model));
                        break;
                    case 'Tiguan':
                        $description = 'Descubre la versatilidad de la Volkswagen Tiguan, la SUV que se adapta a todas tus necesidades. Con espacio para toda la familia y un interior versátil, esta SUV es ideal para tus aventuras diarias y escapadas de fin de semana. Disfruta de tecnología de vanguardia y sistemas de asistencia al conductor para una conducción segura y conectada. Vive cada momento al máximo con la Volkswagen Tiguan, la compañera perfecta para tu estilo de vida activo.';
                        $images_ids = json_encode(ImagesHelper::getImagesIdsByFilename($model));
                        break;
                    case 'Jetta':
                        $description = 'El Volkswagen Jetta es el sedán que combina estilo, rendimiento y tecnología. Su diseño elegante y deportivo te hará destacar en la carretera. Con un interior cómodo y lleno de comodidades, disfrutarás cada trayecto. Su potente motor y tecnología de eficiencia de combustible te permiten ahorrar en cada recorrido. Conduce con confianza gracias a sus avanzados sistemas de seguridad. Descubre el placer de manejar con el Volkswagen Jetta.';
                        $images_ids = json_encode(ImagesHelper::getImagesIdsByFilename($model));
                        break;
                    default:
                        $description = 'Descripción del modelo no disponible.';
                        $images_ids = json_encode(ImagesHelper::getImagesIdsByFilename($model));
                        break;
                }
                break;
        
            case 'Renault':
                $model = $this->faker->randomElement([
                    "Clio",
                    "Megane",
                    "Koleos",
                    "Captur",
                ]);
        
                switch ($model) {
                    case 'Clio':
                        $description = 'Descubre el Renault Clio, el compacto urbano con un diseño moderno y vanguardista. Su tamaño compacto te permite moverte fácilmente en la ciudad, mientras que su interior ofrece comodidad y tecnología de vanguardia. Conduce con eficiencia gracias a su motor de bajo consumo de combustible. El Clio es el compañero perfecto para la vida urbana. ¡Disfruta cada viaje con el Renault Clio!';
                        $images_ids = json_encode(ImagesHelper::getImagesIdsByFilename($model));
                        break;
                    case 'Megane':
                        $description = 'El Renault Megane es el sedán que combina estilo y elegancia. Con un diseño aerodinámico y líneas sofisticadas, te llevará con estilo a cualquier destino. Disfruta de un interior espacioso y lleno de tecnología para tu comodidad. Su motor eficiente te permite ahorrar en cada recorrido. Además, cuenta con sistemas de seguridad avanzados para una conducción confiable. Conquista la carretera con el Renault Megane.';
                        $images_ids = json_encode(ImagesHelper::getImagesIdsByFilename($model));
                        break;
                    case 'Koleos':
                        $description = 'Descubre la aventura con el Renault Koleos, la SUV todoterreno que te lleva más allá de lo conocido. Con un diseño robusto y una tracción inteligente, enfrentarás cualquier terreno con confianza. Su interior espacioso y repleto de tecnología te mantendrá conectado y cómodo en cada viaje. Disfruta de un rendimiento eficiente y sistemas de seguridad avanzados. Convierte cada viaje en una experiencia inolvidable con el Renault Koleos.';
                        $images_ids = json_encode(ImagesHelper::getImagesIdsByFilename($model));
                        break;
                    case 'Captur':
                        $description = 'El Renault Captur es la SUV compacta que combina estilo y funcionalidad. Su diseño moderno y personalizable te permite expresar tu estilo único. Con espacio para toda la familia y tecnología avanzada, el Captur es ideal para tus aventuras urbanas y escapadas de fin de semana. Su motor eficiente te lleva más lejos con menos combustible. Descubre un nuevo nivel de comodidad y versatilidad con el Renault Captur.';
                        $images_ids = json_encode(ImagesHelper::getImagesIdsByFilename($model));
                        break;
                    default:
                        $description = 'Descripción del modelo no disponible.';
                        $images_ids = json_encode(ImagesHelper::getImagesIdsByFilename($model));
                        break;
                }
                break;
        
            case 'Fiat':
                $model = $this->faker->randomElement([
                    "500",
                    "Panda",
                    "Tipo",
                    "Doblo",
                ]);
        
                switch ($model) {
                    case '500':
                        $description = 'Descubre el Fiat 500, el icónico compacto que combina estilo y personalidad. Con un diseño retro y elegante, este hatchback te llevará a tus destinos con estilo. Disfruta de su interior lleno de detalles y tecnología para tu comodidad. Su tamaño compacto te permite moverte con facilidad en la ciudad. El Fiat 500 es el símbolo de la vida urbana y la diversión al volante. ¡Disfruta cada recorrido con el Fiat 500!';
                        $images_ids = json_encode(ImagesHelper::getImagesIdsByFilename($model));
                        break;
                    case 'Panda':
                        $description = 'El Fiat Panda es el vehículo compacto y versátil para la ciudad. Con su diseño funcional y eficiente, este hatchback te permite estacionar fácilmente y maniobrar en espacios reducidos. Su interior es sorprendentemente espacioso y lleno de tecnología para tu comodidad. Además, cuenta con sistemas de seguridad avanzados para una conducción confiable. Vive la ciudad con el Fiat Panda, tu compañero perfecto para el día a día.';
                        $images_ids = json_encode(ImagesHelper::getImagesIdsByFilename($model));
                        break;
                    case 'Tipo':
                        $description = 'Descubre el Fiat Tipo, la elegancia italiana en movimiento. Con un diseño sofisticado y líneas suaves, esta berlina te hará destacar en cualquier lugar. Su interior está diseñado para brindar comodidad y tecnología avanzada para mantenerte conectado. Además, su potente motor y tecnología de ahorro de combustible te llevan más lejos con menos. Disfruta de la combinación perfecta entre rendimiento y lujo con el Fiat Tipo.';
                        $images_ids = json_encode(ImagesHelper::getImagesIdsByFilename($model));
                        break;
                    case 'Doblo':
                        $description = 'El Fiat Doblo es la solución ideal para tus necesidades de carga y transporte. Con su diseño funcional y espacioso, esta furgoneta te permite llevar cargas pesadas con facilidad. Su interior está diseñado para brindar comodidad y versatilidad, ideal para tus actividades comerciales. Además, cuenta con tecnología de seguridad para una conducción confiable. Descubre la capacidad y el rendimiento del Fiat Doblo.';
                        $images_ids = json_encode(ImagesHelper::getImagesIdsByFilename($model));
                        break;
                    default:
                        $description = 'Descripción del modelo no disponible.';
                        $images_ids = json_encode(ImagesHelper::getImagesIdsByFilename($model));
                        break;
                }
                break;
        
            default:
                $description = 'Descripción de la marca no disponible.';
                break;
        }

        return [
            'name' => "$brand $model",
            'description' => $description,
            'year' => $this->faker->numberBetween(2014, 2023),
            'brand' => $brand,
            'price' => $this->faker->randomFloat(1, 5000, 60000),
            'is_offer' => $this->faker->boolean(),
            'is_trend' => $this->faker->boolean(),
            'condition' => $this->faker->randomElement([Product::STATUS_NEW, Product::STATUS_USED]), // 1. New, 2. Used
            'city_id' => $this->faker->numberBetween(1, 10),
            'calification' => $this->faker->numberBetween(1, 5),
            'vendor_id' => $this->faker->numberBetween(1, 20),
            'image_id' => $images_ids
        ];
    }
}

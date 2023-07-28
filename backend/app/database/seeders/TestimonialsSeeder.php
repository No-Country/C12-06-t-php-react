<?php

namespace Database\Seeders;

use App\Models\Testimonials;
use Illuminate\Database\Seeder;

class TestimonialsSeeder extends Seeder {
    /**
     * Run the database seeds.
     */
    public function run(): void {
        $testimonials = new Testimonials();
        $testimonials->client_id = "1";
        $testimonials->company = "TUPLE";
        $testimonials->icon_company = "https://www.logocrea.com/wp-content/uploads/2016/07/aguila1.png";
        $testimonials->comment = "Estoy muy contento con mi nuevo auto. El proceso de compra fue fácil y sin problemas, y el personal de la empresa fue muy amable y servicial en todo momento. Definitivamente recomendaría esta empresa a cualquiera que esté buscando un nuevo auto";
        $testimonials->avatar = "https://recursosweb.prisaradio.com/fotos/original/010002641183.png";
        $testimonials->position = "CEO";
        $testimonials->save();

        $testimonials1 = new Testimonials();
        $testimonials1->client_id = "2";
        $testimonials1->company = "Workcation";
        $testimonials1->icon_company = "https://www.logocrea.com/wp-content/uploads/2016/07/gato1.png";
        $testimonials1->comment = "Compré un auto usado en esta empresa y estoy muy satisfecho con mi compra. El auto estaba en excelentes condiciones y el proceso de compra fue rápido y fácil. El equipo de ventas fue muy amable y profesional en todo momento. Definitivamente compraría aquí de nuevo en el futuro";
        $testimonials1->avatar = "https://recursosweb.prisaradio.com/fotos/original/010003028154.png";
        $testimonials1->position = "CEOO";
        $testimonials1->save();

        $testimonials2 = new Testimonials();
        $testimonials2->client_id = "3";
        $testimonials2->company = "Algodonera";
        $testimonials2->icon_company = "https://www.logocrea.com/wp-content/uploads/2016/07/juguete1.png";
        $testimonials2->comment = "Nunca había comprado un auto en una empresa antes, pero el personal de esta empresa fue muy útil en todo momento y me guió a través de todo el proceso. Me sentí muy cómodo y seguro con mi compra, y estoy muy satisfecho con mi nuevo auto";
        $testimonials2->avatar = "https://adnsur-assets.tadevel-cdn.com/6462d2c7000d0ff7166f0012/t256.jpeg";
        $testimonials2->position = "CHRO";
        $testimonials2->save();
    }
}


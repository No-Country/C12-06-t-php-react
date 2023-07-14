<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->integer('year');
            $table->string('brand');
            $table->float('price');
            $table->boolean('is_offer')->default(false);
            $table->boolean('is_trend')->default(false);
            $table->integer('condition');
            $table->unsignedBigInteger('city_id');
            $table->integer('calification')->nullable();
            $table->timestamps();

            // Not allowed on PlanetScale
            // https://planetscale.com/docs/learn/operating-without-foreign-key-constraints
            // $table->foreign('city_id')->references('id')->on('cities');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}

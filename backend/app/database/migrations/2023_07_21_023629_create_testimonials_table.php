<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('testimonials', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('client_id');
            $table->string('company');
            $table->string('icon_company');
            $table->text('comment');
            $table->string('avatar');
            $table->string('position');
            $table->timestamps();

            // Not allowed on PlanetScale
            // https://planetscale.com/docs/learn/operating-without-foreign-key-constraints
            // $table->foreign('client_id')->references('id')->on('clients');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('testimonials');
    }
};

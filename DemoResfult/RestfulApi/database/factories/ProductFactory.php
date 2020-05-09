<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        "name" => $faker->text(20),
        "description" => $faker->text(20),
        "price" => $faker->numberBetween(100, 1000)
    ];
});

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_id',
        'status',
        'amount',
        'address',
        'area',
        'rooms',
        'bathrooms',
        'kitchens',
        'refrigerators',
        'cloakrooms',
        'pets',
        'adults',
        'children'
    ];
}


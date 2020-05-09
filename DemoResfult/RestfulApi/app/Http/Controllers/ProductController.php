<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Requests\ProductRequest;
use App\Http\Requests\StoreProductRequest;
use App\Product;
use http\Env\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{

    public function index()
    {
        $product = Product::all();
        return response()->json($product);
    }

    public function store(ProductRequest $request)
    {
        $product = Product::create($request->all());
        return response()->json($product);
    }

    public function show($id)
    {
        $product = Product::findOrFail($id);
        return response()->json($product);
    }


    public function update(StoreProductRequest $request, $id)
    {
        $product = Product::findOrFail($id);
        $product->update($request->all());
        return response()->json($product);
    }

    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();
        return response()->json();
    }

    public function search(\Illuminate\Http\Request $request)
    {
        $search = $request->get('data');
        $dataSearch = DB::table("products")->where("name", "Like", "%{$search}%")
            ->orwhere("description", "Like", "%{$search}%")
            ->orWhere("price", "Like", "%{$search}%")->get();
        return response()->json(['data' => $dataSearch]);
    }
}

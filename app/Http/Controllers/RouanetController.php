<?php

namespace App\Http\Controllers;

use App\Models\Rouanet as Rouanet;
use Illuminate\Http\Request;

class RouanetController extends Controller
{
    public function index()
    {
        return Rouanet::all();
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show(Rouanet $rouanet)
    {
        //
    }

    public function edit(Rouanet $rouanet)
    {
        //
    }

    public function update(Request $request, Rouanet $rouanet)
    {
        //
    }

    public function destroy(Rouanet $rouanet)
    {
        //
    }
}

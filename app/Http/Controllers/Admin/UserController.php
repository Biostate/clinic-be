<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/App/Users/index');
    }

    public function create()
    {
        return Inertia::render('Admin/App/Users/create');
    }
}

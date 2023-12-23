<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        // TODO: Add pagination
        return Inertia::render('Admin/App/Users/index', [
            'users' => User::where('id', '!=', auth()->id())->get()->append('avatar'),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/App/Users/create');
    }
}

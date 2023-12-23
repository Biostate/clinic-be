<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function login()
    {
        return Inertia::render('Admin/Auth/Login',[
            'status' => session('status'),
        ]);
    }

    public function employeeLogin()
    {
        return Inertia::render('Admin/Auth/EmployeeLogin',[
            'status' => session('status'),
        ]);
    }
}

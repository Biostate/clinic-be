<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class EmployeeController extends Controller
{
    public function myAdvances(){
        return Inertia::render('Admin/App/MyAdvances/index');
    }

    public function myLeaves(){
        return Inertia::render('Admin/App/MyLeaves/index');
    }
}

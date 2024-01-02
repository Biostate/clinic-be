<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class EmployeeController extends Controller
{
    public function myAdvances(): Response
    {
        return Inertia::render('Admin/App/MyAdvances/index');
    }

    public function myLeaves(): Response
    {
        return Inertia::render('Admin/App/MyLeaves/index');
    }
}

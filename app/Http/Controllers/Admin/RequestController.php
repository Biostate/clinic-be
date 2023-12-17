<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RequestController extends Controller
{
    public function leaveRequest(){
        return Inertia::render('Admin/App/LeaveRequest/index');
    }


    public function advanceRequest(){
        return Inertia::render('Admin/App/AdvanceRequest/index');
    }
}

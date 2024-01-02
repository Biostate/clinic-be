<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class RequestController extends Controller
{
    public function leaveRequest(): Response
    {
        return Inertia::render('Admin/App/LeaveRequest/index');
    }


    public function advanceRequest(): Response
    {
        return Inertia::render('Admin/App/AdvanceRequest/index');
    }


    public function leaveRequests(): Response
    {
        return Inertia::render('Admin/App/LeaveRequests/index');
    }


    public function advanceRequests(): Response
    {
        return Inertia::render('Admin/App/AdvanceRequests/index');
    }
}

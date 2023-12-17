<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MeetingController extends Controller
{
    public function meeting()
    {
        return Inertia::render('Admin/App/Meeting/index');
    }
}

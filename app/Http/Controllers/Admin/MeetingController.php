<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Meeting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MeetingController extends Controller
{
    public function meeting()
    {
        return Inertia::render('Admin/App/Meeting/index', [
            'meetings' => Meeting::with('user')->latest()->get()->each(function ($meeting){
                $meeting->user->append('avatar');
            })->toArray(),
        ]);
    }

    public function store(Request $request)
    {
        Meeting::factory()->create([
            'user_id' => auth()->user()->id,
        ]);

        return redirect()->back()->with('success', 'Meeting created successfully');
    }
}

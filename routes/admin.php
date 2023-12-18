<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('admin')->middleware('auth')->group(function () {
    Route::get('/', [\App\Http\Controllers\Admin\DashboardController::class, 'dashboard'])
        ->name('admin.dashboard');

    Route::get('/request/leave', [\App\Http\Controllers\Admin\RequestController::class, 'leaveRequest'])
        ->name('admin.leave');
    Route::get('/request/advance', [\App\Http\Controllers\Admin\RequestController::class, 'advanceRequest'])
        ->name('admin.advance');

    Route::get('/meeting', [\App\Http\Controllers\Admin\MeetingController::class, 'meeting'])
        ->name('admin.meeting');

    Route::get('/todo', [\App\Http\Controllers\Admin\TodoController::class, 'index'])
        ->name('admin.todo');
});


Route::prefix('admin')->middleware('guest')->group(function () {
    Route::get('/login', [\App\Http\Controllers\Admin\AuthController::class, 'login'])
        ->name('admin.profile');
});

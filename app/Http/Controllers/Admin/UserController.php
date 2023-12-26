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
        return Inertia::render('Admin/App/Users/form');
    }

    public function edit(Request $request, User $user)
    {
        return Inertia::render('Admin/App/Users/form', [
            'user' => $user->append('avatar'),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'surname' => ['required', 'max:255'],
            'phone' => ['required', 'max:255'],
            'address' => ['required', 'max:255'],
        ]);

        $data = $request->only('name', 'email', 'surname', 'phone', 'address');
        $data['password'] = bcrypt('password');

        User::create($data);

        return redirect()->route('admin.users.index')->with('success', 'User created.');
    }

    public function update(Request $request, User $user)
    {
        // Todo add password validation
        // Todo: add role
        $validated = $request->validate([
            'name' => ['required', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'surname' => ['required', 'max:255'],
            'phone' => ['required', 'max:255'],
            'address' => ['required', 'max:255'],
        ]);

        $user->update($validated);

        return redirect()->route('admin.users.index')->with('success', 'User updated.');
    }

    public function destroy(User $user)
    {
        $user->delete();

        return redirect()->route('admin.users.index')->with('success', 'User deleted.');
    }
}

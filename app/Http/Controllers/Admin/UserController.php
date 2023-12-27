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
            'user' => $user->append(['avatar', 'role']),
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
            'role' => 'required|in:user,admin',
            'password' => 'required|confirmed|min:8',
        ]);

        $data = $request->only('name', 'email', 'surname', 'phone', 'address');
        $data['password'] = bcrypt($validated['password']);

        $user = User::create($data);
        $user->assignRole($validated['role']);

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

        if ($request->has('password')) {
            $validated = $request->validate([
                'password' => 'required|confirmed|min:8',
            ]);
            $validated['password'] = bcrypt($validated['password']);
        }

        $user->update($validated);

        if ($request->has('role')) {
            $user->syncRoles($request->role);
        }

        return redirect()->route('admin.users.index')->with('success', 'User updated.');
    }

    public function destroy(User $user)
    {
        $user->delete();

        return redirect()->route('admin.users.index')->with('success', 'User deleted.');
    }
}

<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function index(): Response
    {
        // TODO: Add pagination
        return Inertia::render('Admin/App/Users/index', [
            'users' => User::where('id', '!=', auth()->id())->get()->append('avatar'),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/App/Users/form');
    }

    public function edit(Request $request, User $user): Response
    {
        return Inertia::render('Admin/App/Users/form', [
            'user' => $user->append(['avatar', 'role']),
        ]);
    }

    public function store(Request $request): \Illuminate\Http\RedirectResponse
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
        $user->assignRole((string) $validated['role']);

        return redirect()->route('admin.users.index')->with('success', 'User created.');
    }

    public function update(Request $request, User $user): \Illuminate\Http\RedirectResponse
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
            $user->syncRoles((string) $request->role);
        }

        return redirect()->route('admin.users.index')->with('success', 'User updated.');
    }

    public function destroy(User $user): \Illuminate\Http\RedirectResponse
    {
        $user->delete();

        return redirect()->route('admin.users.index')->with('success', 'User deleted.');
    }
}

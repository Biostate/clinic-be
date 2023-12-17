<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'name' => 'Özgür Özarpacı',
                'email' => 'oozarpac@gmail.com',
            ],
            [
                'name' => 'Hacer Kılıç',
                'email' => 'khacer001@gmail.com',
            ],
            [
                'name' => 'Ali Asım Bulut',
                'email' => 'aliasim1625@gmail.com',
            ],
            [
                'name' => 'Osman Gürlek',
                'email' => 'osmangurlek10@gmail.com',
            ],
            [
                'name' => 'Sinem Kadakal',
                'email' => 'sinemkadakall@gmail.com',
            ],
            [
                'name' => 'Betül Mollamusa',
                'email' => 'mullamusabetul@gmail.com',
            ],
            [
                'name' => 'Enes Kaan Kaplan',
                'email' => 'erciyes1030510395@gmail.com',
            ],
            [
                'name' => 'Muhammed Fatih Culfa',
                'email' => 'mfthclf@gmail.com',
            ],
            [
                'name' => 'Esra Molla',
                'email' => 'esra.molla20@gmail.com',
            ],
            [
                'name' => 'İsmail Yiğit İzmir',
                'email' => 'y.izmir2000@gmail.com',
            ],
        ];

        foreach ($users as $user) {
            User::factory()->create($user);
        }
    }
}

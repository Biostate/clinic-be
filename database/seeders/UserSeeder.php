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
                'name' => 'Özgür',
                'surname' => 'Özarpacı',
                'email' => 'oozarpac@gmail.com',
            ],
            [
                'name' => 'Hacer',
                'surname' => 'Kılıç',
                'email' => 'khacer001@gmail.com',
            ],
            [
                'name' => 'Ali Asım',
                'surname' => 'Bulut',
                'email' => 'aliasim1625@gmail.com',
            ],
            [
                'name' => 'Osman',
                'surname' => 'Gürlek',
                'email' => 'osmangurlek10@gmail.com',
            ],
            [
                'name' => 'Sinem',
                'surname' => 'Kadakal',
                'email' => 'sinemkadakall@gmail.com',
            ],
            [
                'name' => 'Betül',
                'surname' => 'Mollamusa',
                'email' => 'mullamusabetul@gmail.com',
            ],
            [
                'name' => 'Enes Kaan',
                'surname' => 'Kaplan',
                'email' => 'erciyes1030510395@gmail.com',
            ],
            [
                'name' => 'Muhammed Fatih',
                'surname' => 'Culfa',
                'email' => 'mfthclf@gmail.com',
            ],
            [
                'name' => 'Esra',
                'surname' => 'Molla',
                'email' => 'esra.molla20@gmail.com',
            ],
            [
                'name' => 'İsmail Yiğit',
                'surname' => 'İzmir',
                'email' => 'y.izmir2000@gmail.com',
            ],
        ];

        foreach ($users as $user) {
            $userModel = User::factory()->create($user);

            $userModel->assignRole('admin');
        }
    }
}

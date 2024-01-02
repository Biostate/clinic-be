# Clinic Project

This project is made for a group project in the course of Software Development at the Erciyes University.

## Installation

Clone the project.
```
git clone git@github.com:Biostate/clinic-be.git
```

copy .env.example to .env and add your database credentials.
```
cp .env.example .env
```

Install dependencies.
```
composer install
npm install
```

Generate application key.
```
php artisan key:generate
```

c
```
php artisan project:install
```
## Development

Please run the following commands after pulling from master branch.
```
composer install
npm install
php artisan migrate
php artisan patch:run
```

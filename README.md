# Clinic Project

[PROJECT DESCRIPTION]

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

Run install project command.
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

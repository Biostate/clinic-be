<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class ProjectInstallCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'project:install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command installs the project';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Installing project...');

        $this->info('Migrating database...');
        $this->callSilent('migrate:fresh', ['--force' => true]);

        $this->info('Seeding database...');
        $this->callSilent('db:seed', ['--force' => true]);
    }
}

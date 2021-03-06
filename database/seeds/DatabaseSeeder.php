<?php

use App\Model\Category;
use App\Model\Like;
use App\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class, 10)->create();
        factory(Category::class, 5)->create();
        factory(\App\Model\Question::class, 10)->create();
        factory(\App\Model\Reply::class, 50)->create()->each(function ($reply) {
            return $reply->like()->save(factory(Like::class)->make());
        });
    }
}

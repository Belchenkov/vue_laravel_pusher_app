<?php

namespace App\Http\Controllers;

use App\Model\Like;
use App\Model\Reply;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class LikeController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('JWT');
    }

    public function likeIt(Reply $reply)
    {
        $reply->like()->create([
            'user_id' => auth()->id()
        ]);

        return response('Created', Response::HTTP_CREATED);
    }

   public function unLikeIt(Reply $reply)
   {
        $reply->like()->where('user_id', auth()->id())->first()->delete();

       return response('Deleted', Response::HTTP_NO_CONTENT);
   }
}

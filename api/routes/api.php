<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\LimaController;
use App\Http\Controllers\DevController;
/*

|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('v1/listatiposolicitud',[LimaController::class,'listSolicitud']);
Route::get('v1/tiposolicitud/{id}',[LimaController::class,'getSolicitud']);
Route::post('v1/registrarsolicitud',[LimaController::class,'registerSolicitud']);


Route::get('v1/listprocess/{typedocument}/{numberdocument}',[LimaController::class,'listaProcesos']);
Route::get('v1/detalleprocess/{processnumber}',[LimaController::class,'detalleProceso']);


Route::group(['prefix'=>'dev'],function(){

    Route::get('v1/listatiposolicitud',[DevController::class,'listSolicitud']);
    Route::get('v1/tiposolicitud/{id}',[DevController::class,'getSolicitud']);
    Route::post('v1/registrarsolicitud',[DevController::class,'registerSolicitud']);


    Route::get('v1/listprocess/{typedocument}/{numberdocument}',[DevController::class,'listaProcesos']);
    Route::get('v1/detalleprocess/{processnumber}',[DevController::class,'detalleProceso']);

});

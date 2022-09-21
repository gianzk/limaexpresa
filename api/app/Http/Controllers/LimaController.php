<?php

namespace App\Http\Controllers;
use SoapClient;



class LimaController extends Controller{

    public function getData(){
        try{
          $url="http://172.30.50.71:8006/KcorFaleConosco/kcorFaleConosco.asmx?WSDL";
            $client=new SoapClient($url);
            $params=array('ProcessNumber'=>1237919);
             /*    $params=array('Classe'=>'SUGERENCIA');
            $resultado=$client->ListarTiposProcessos($params);*/
            $resultado=$client->DetalhesProcesso($params);
            $xml_string=$resultado;
            dd($resultado);
/*             $xml = simplexml_load_string($xml_string);
            $json = json_encode($xml);
            $array = json_decode($json,TRUE);

          dd($array,$json); */
 /*            dd(gettype( $resultado));*/


            return response($array,200);

        }catch(Exception $ex){
            echo "Exception".$ex;
        }

    }
    public function getDataTwo(){
        return response([],200);

    }

    public function getSolicitud($id){
        return response($id,200);
    }

}

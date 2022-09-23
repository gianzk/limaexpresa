<?php

namespace App\Http\Controllers;
use SoapClient;
use Illuminate\Http\Request;


class LimaController extends Controller{
    public function listSolicitud(){
        $url="http://172.30.50.71:8006/KcorFaleConosco/kcorFaleConosco.asmx?WSDL";
        $client=new SoapClient($url);
        $resultado=$client->ListarClassProcessos();
        $xml_string=$resultado->ListarClassProcessosResult->any;
        $xml = simplexml_load_string($xml_string);
        $json = json_encode($xml);
        $array = json_decode($json,TRUE);

        return response($array,200);
    }
    public function getSolicitud($id){
        $url="http://172.30.50.71:8006/KcorFaleConosco/kcorFaleConosco.asmx?WSDL";
        $client=new SoapClient($url);
        $params=array('Classe'=>strtoupper($id));
        $resultado=$client->ListarTiposProcessos($params);
        $xml_string=$resultado->ListarTiposProcessosResult->any;
        $xml = simplexml_load_string($xml_string);
        $json = json_encode($xml);
        $array = json_decode($json,TRUE);
        return response($array,200);
    }

    public function registerSolicitud(Request $request){

        $fields=$request->validate([
            'ddd'=>'string',
            'telefone'=>'string',
            'nome'=>'string',
            'CodTipoProcesso'=>'string',
            'Descricao'=>'string',
            'email'=>'string',
            'TipoDocumento'=>'string',
            'NumDocumento'=>'string',
            'TmpFile'=>'string',
            'TmpFileName'=>'string'
        ]);
        $url="http://172.30.50.71:8006/KcorFaleConosco/kcorFaleConosco.asmx?WSDL";
        $client=new SoapClient($url);
         $params=array(
            'ddd'=>$fields['ddd'],
            'telefone'=>$fields['telefone'],
            'nome'=>$fields['nome'],
            'CodTipoProcesso'=>$fields['CodTipoProcesso'],
            'Descricao'=>$fields['Descricao'],
            'email'=>$fields['email'],
            'TipoDocumento'=>$fields['TipoDocumento'],
            'NumDocumento'=>$fields['NumDocumento'],
            'TmpFile'=>$fields['TmpFile'],
            'TmpFileName'=>$fields['TmpFileName']
        );

        $resultado=$client->CadastrarSolicitacao($params);
        $returnCode=$resultado->CadastrarSolicitacaoResult->ReturnCode;
        $processNumber=$resultado->CadastrarSolicitacaoResult->ProcessNumber;
        $message=$resultado->CadastrarSolicitacaoResult->Message;
        return response(["returnCode"=>$returnCode,
                        "processNumber"=>$processNumber,
                        "message"=>$message],200);
    }

    public function listaProcesos($typedocument,$numberdocument){
        $url="http://172.30.50.71:8006/KcorFaleConosco/kcorFaleConosco.asmx?WSDL";
        $client=new SoapClient($url);
        $params=array('docType'=>strtoupper($typedocument),'document'=>$numberdocument);
        $resultado=$client->ProcessList($params);
        $xml_string=$resultado->ProcessListResult->any;
        $xml = simplexml_load_string($xml_string);
        $json = json_encode($xml);
        $array = json_decode($json,TRUE);
        return response($array,200);
    }

    public function detalleProceso($processnumber){
        $url="http://172.30.50.71:8006/KcorFaleConosco/kcorFaleConosco.asmx?WSDL";
        $client=new SoapClient($url);
        $params=array('ProcessNumber'=>$processnumber);
        $resultado=$client->DetalhesProcesso($params);
        $data=$resultado->DetalhesProcessoResult;
        $json = json_encode($data);
        $array = json_decode($json,TRUE);
        return response($array,200);
    }
}


<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DevController extends Controller{


    public function listSolicitud(){
        $data='{
            "NewDataSet": {
                "ListarClassProcessos": [
                    {
                        "ClassProcesso": "ASSISTENCIA"
                    },
                    {
                        "ClassProcesso": "DENUNCIA"
                    },
                    {
                        "ClassProcesso": "ELOGIO"
                    },
                    {
                        "ClassProcesso": "ORIENTACION"
                    },
                    {
                        "ClassProcesso": "RECLAMO"
                    },
                    {
                        "ClassProcesso": "SEGURIDAD"
                    },
                    {
                        "ClassProcesso": "SIMPLE"
                    },
                    {
                        "ClassProcesso": "SOLICITUD"
                    },
                    {
                        "ClassProcesso": "SUGERENCIA"
                    },
                    {
                        "ClassProcesso": "VICIADA"
                    }
                ]
            }
        }';
        $mJson=json_decode($data,true);
        return response($mJson,200);
    }
    public function getSolicitud($id){
        $data='[]';
        $id=strtoupper($id);
        switch($id){
            case 'ELOGIO':
                $data='{
                    "NewDataSet": {
                        "ListarTiposProcessos": {
                            "CodTipoProcesso": "1000",
                            "TipoProcesso": "ELOGIO - LAMSAC"
                        }
                    }
                }';
            break;
            case 'ORIENTACION':
                $data='{
                    "NewDataSet": {
                        "ListarTiposProcessos": [
                            {
                                "CodTipoProcesso": "1100",
                                "TipoProcesso": "ORIENTACI??N - ATU LAMSAC"
                            },
                            {
                                "CodTipoProcesso": "1102",
                                "TipoProcesso": "ORIENTACI??N - PEAJE"
                            }
                        ]
                    }
                }';
            break;
            case 'RECLAMO':
                $data='{
                    "NewDataSet": {
                        "ListarTiposProcessos": [
                            {
                                "CodTipoProcesso": "202",
                                "TipoProcesso": "RECLAMO - MANTENIMIENTO "
                            },
                            {
                                "CodTipoProcesso": "203",
                                "TipoProcesso": "RECLAMO - OBRAS"
                            },
                            {
                                "CodTipoProcesso": "204",
                                "TipoProcesso": "RECLAMO - OPERACI??N VIAL"
                            },
                            {
                                "CodTipoProcesso": "205",
                                "TipoProcesso": "RECLAMO - PEAJE"
                            },
                            {
                                "CodTipoProcesso": "206",
                                "TipoProcesso": "RECLAMO - SEGURIDAD"
                            },
                            {
                                "CodTipoProcesso": "208",
                                "TipoProcesso": "RECLAMO - WEB"
                            },
                            {
                                "CodTipoProcesso": "1200",
                                "TipoProcesso": "RECLAMO - ATU LAMSAC"
                            }
                        ]
                    }
                }';
            break;
            case 'SOLICITUD':
                $data='{
                    "NewDataSet": {
                        "ListarTiposProcessos": [
                            {
                                "CodTipoProcesso": "302",
                                "TipoProcesso": "SOLICITUD - MANTENIMIENTO"
                            },
                            {
                                "CodTipoProcesso": "303",
                                "TipoProcesso": "SOLICITUD - OBRAS"
                            },
                            {
                                "CodTipoProcesso": "304",
                                "TipoProcesso": "SOLICITUD - OPERACI??N VIAL"
                            },
                            {
                                "CodTipoProcesso": "305",
                                "TipoProcesso": "SOLICITUD - PEAJE"
                            },
                            {
                                "CodTipoProcesso": "1300",
                                "TipoProcesso": "SOLICITUD - ATU LAMSAC"
                            },
                            {
                                "CodTipoProcesso": "1301",
                                "TipoProcesso": "SOLICITUD - EMERGENCIAS"
                            }
                        ]
                    }
                }';
            break;
            case 'SUGERENCIA':
                $data='{
                    "NewDataSet": {
                        "ListarTiposProcessos": [
                            {
                                "CodTipoProcesso": "402",
                                "TipoProcesso": "SUGERENCIA - MANTENIMIENTO"
                            },
                            {
                                "CodTipoProcesso": "403",
                                "TipoProcesso": "SUGERENCIA - OBRAS"
                            },
                            {
                                "CodTipoProcesso": "404",
                                "TipoProcesso": "SUGERENCIA - OPERACI??N VIAL"
                            },
                            {
                                "CodTipoProcesso": "405",
                                "TipoProcesso": "SUGERENCIA - PEAJE"
                            },
                            {
                                "CodTipoProcesso": "406",
                                "TipoProcesso": "SUGERENCIA - SEGURIDAD"
                            },
                            {
                                "CodTipoProcesso": "1400",
                                "TipoProcesso": "SUGERENCIA - ATU LAMSAC"
                            },
                            {
                                "CodTipoProcesso": "1402",
                                "TipoProcesso": "SUGERENCIA - WEB LAMSAC"
                            }
                        ]
                    }
                }';
            break;
            default:
                $data='[]';
        }
        $mJosn=json_decode($data,true);
        return response($mJosn,200);
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
        $response='{
            "returnCode": 0,
            "processNumber": 7393022,
            "message": "Solicita????o enviada com sucesso. Solicita????o enviada. Por??m, houve um problema ao anexar o arquivo.Longitud no v??lida para una matriz de caracteres Base-64."
        }';
        $mJson=json_decode($response,true);

        return response($mJson,200);
    }

    public function listaProcesos($typedocument,$numberdocument){
        $data='[]';
        if(strtoupper($typedocument)=='DNI'&& $numberdocument=='12345678'){
            $data='{
                "NewDataSet": {
                    "ProcessList": [
                        {
                            "ProcessNumber": "7364022",
                            "DateTime": "22/09/2022 07:12:19 p.m.",
                            "ProcessDetail": "VIA  - CALZADA",
                            "ProcessType": "RECLAMO - MANTENIMIENTO ",
                            "Status": "Pendente"
                        },
                        {
                            "ProcessNumber": "1237919",
                            "DateTime": "27/02/2019 03:00:00 p.m.",
                            "ProcessDetail": "??REAS VERDES",
                            "ProcessType": "RECLAMO - MANTENIMIENTO ",
                            "Status": "Encerrado"
                        },
                        {
                            "ProcessNumber": "2197416",
                            "DateTime": "18/04/2016 12:28:00 p.m.",
                            "ProcessDetail": "CALL CENTER OPCION 3 - DEMORA EN CONTESTAR",
                            "ProcessType": "RECLAMO - ATENCION AL USUARIO",
                            "Status": "Encerrado"
                        }
                    ]
                }
            }';

        }

        $mJson=json_decode($data,true);
        return response($mJson,200);
    }

    public function detalleProceso($processnumber){
        $data='{
            "DateTime": "",
            "ProcessNumber": 121231231,
            "UserName": "",
            "DocumentType": "",
            "DocumentNumber": "",
            "Phone": "",
            "EmailAddress": "",
            "ProcessType": "",
            "ProcessDetail": "",
            "Description": "",
            "Reply": "",
            "Status": "N??o encontrado",
            "FinishDate": ""
        }';
        if($processnumber=="7393022"){
            $data='{
                "DateTime": "23/09/2022 06:10:56 p.m.",
                "ProcessNumber": 7393022,
                "UserName": "JUAN PEREZ          ",
                "DocumentType": "DNI",
                "DocumentNumber": "12345678        ",
                "Phone": " 955555481245",
                "EmailAddress": "12321321@gmail.com                  ",
                "ProcessType": "SOLICITUD - MANTENIMIENTO",
                "ProcessDetail": "VIA ",
                "Description": "ddddddddddd           ",
                "Reply": "",
                "Status": "Pendente",
                "FinishDate": ""
            }';
        }

        $mJson=json_decode($data,true);
        return response($mJson,200);
    }

}

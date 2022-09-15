//function change select c.e}
(function(a,b){if(typeof define==="function"&&define.amd){define([],b);}else{if(typeof exports==="object"){module.exports=b();}else{a.X2JS=b();}}}(this,function(){return function(z){var t="1.2.0";z=z||{};i();u();function i(){if(z.escapeMode===undefined){z.escapeMode=true;}z.attributePrefix=z.attributePrefix||"_";z.arrayAccessForm=z.arrayAccessForm||"none";z.emptyNodeForm=z.emptyNodeForm||"text";if(z.enableToStringFunc===undefined){z.enableToStringFunc=true;}z.arrayAccessFormPaths=z.arrayAccessFormPaths||[];if(z.skipEmptyTextNodesForObj===undefined){z.skipEmptyTextNodesForObj=true;}if(z.stripWhitespaces===undefined){z.stripWhitespaces=true;}z.datetimeAccessFormPaths=z.datetimeAccessFormPaths||[];if(z.useDoubleQuotes===undefined){z.useDoubleQuotes=false;}z.xmlElementsFilter=z.xmlElementsFilter||[];z.jsonPropertiesFilter=z.jsonPropertiesFilter||[];if(z.keepCData===undefined){z.keepCData=false;}}var h={ELEMENT_NODE:1,TEXT_NODE:3,CDATA_SECTION_NODE:4,COMMENT_NODE:8,DOCUMENT_NODE:9};function u(){}function x(B){var C=B.localName;if(C==null){C=B.baseName;}if(C==null||C==""){C=B.nodeName;}return C;}function r(B){return B.prefix;}function s(B){if(typeof(B)=="string"){return B.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;");}else{return B;}}function k(B){return B.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&amp;/g,"&");}function w(C,F,D,E){var B=0;for(;B<C.length;B++){var G=C[B];if(typeof G==="string"){if(G==E){break;}}else{if(G instanceof RegExp){if(G.test(E)){break;}}else{if(typeof G==="function"){if(G(F,D,E)){break;}}}}}return B!=C.length;}function n(D,B,C){switch(z.arrayAccessForm){case"property":if(!(D[B] instanceof Array)){D[B+"_asArray"]=[D[B]];}else{D[B+"_asArray"]=D[B];}break;}if(!(D[B] instanceof Array)&&z.arrayAccessFormPaths.length>0){if(w(z.arrayAccessFormPaths,D,B,C)){D[B]=[D[B]];}}}function a(G){var E=G.split(/[-T:+Z]/g);var F=new Date(E[0],E[1]-1,E[2]);var D=E[5].split(".");F.setHours(E[3],E[4],D[0]);if(D.length>1){F.setMilliseconds(D[1]);}if(E[6]&&E[7]){var C=E[6]*60+Number(E[7]);var B=/\d\d-\d\d:\d\d$/.test(G)?"-":"+";C=0+(B=="-"?-1*C:C);F.setMinutes(F.getMinutes()-C-F.getTimezoneOffset());}else{if(G.indexOf("Z",G.length-1)!==-1){F=new Date(Date.UTC(F.getFullYear(),F.getMonth(),F.getDate(),F.getHours(),F.getMinutes(),F.getSeconds(),F.getMilliseconds()));}}return F;}function q(D,B,C){if(z.datetimeAccessFormPaths.length>0){var E=C.split(".#")[0];if(w(z.datetimeAccessFormPaths,D,B,E)){return a(D);}else{return D;}}else{return D;}}function b(E,C,B,D){if(C==h.ELEMENT_NODE&&z.xmlElementsFilter.length>0){return w(z.xmlElementsFilter,E,B,D);}else{return true;}}function A(D,J){if(D.nodeType==h.DOCUMENT_NODE){var K=new Object;var B=D.childNodes;for(var L=0;L<B.length;L++){var C=B.item(L);if(C.nodeType==h.ELEMENT_NODE){var I=x(C);K[I]=A(C,I);}}return K;}else{if(D.nodeType==h.ELEMENT_NODE){var K=new Object;K.__cnt=0;var B=D.childNodes;for(var L=0;L<B.length;L++){var C=B.item(L);var I=x(C);if(C.nodeType!=h.COMMENT_NODE){var H=J+"."+I;if(b(K,C.nodeType,I,H)){K.__cnt++;if(K[I]==null){K[I]=A(C,H);n(K,I,H);}else{if(K[I]!=null){if(!(K[I] instanceof Array)){K[I]=[K[I]];n(K,I,H);}}(K[I])[K[I].length]=A(C,H);}}}}for(var E=0;E<D.attributes.length;E++){var F=D.attributes.item(E);K.__cnt++;K[z.attributePrefix+F.name]=F.value;}var G=r(D);if(G!=null&&G!=""){K.__cnt++;K.__prefix=G;}if(K["#text"]!=null){K.__text=K["#text"];if(K.__text instanceof Array){K.__text=K.__text.join("\n");}if(z.stripWhitespaces){K.__text=K.__text.trim();}delete K["#text"];if(z.arrayAccessForm=="property"){delete K["#text_asArray"];}K.__text=q(K.__text,I,J+"."+I);}if(K["#cdata-section"]!=null){K.__cdata=K["#cdata-section"];delete K["#cdata-section"];if(z.arrayAccessForm=="property"){delete K["#cdata-section_asArray"];}}if(K.__cnt==0&&z.emptyNodeForm=="text"){K="";}else{if(K.__cnt==1&&K.__text!=null){K=K.__text;}else{if(K.__cnt==1&&K.__cdata!=null&&!z.keepCData){K=K.__cdata;}else{if(K.__cnt>1&&K.__text!=null&&z.skipEmptyTextNodesForObj){if((z.stripWhitespaces&&K.__text=="")||(K.__text.trim()=="")){delete K.__text;}}}}}delete K.__cnt;if(z.enableToStringFunc&&(K.__text!=null||K.__cdata!=null)){K.toString=function(){return(this.__text!=null?this.__text:"")+(this.__cdata!=null?this.__cdata:"");};}return K;}else{if(D.nodeType==h.TEXT_NODE||D.nodeType==h.CDATA_SECTION_NODE){return D.nodeValue;}}}}function o(I,F,H,C){var E="<"+((I!=null&&I.__prefix!=null)?(I.__prefix+":"):"")+F;if(H!=null){for(var G=0;G<H.length;G++){var D=H[G];var B=I[D];if(z.escapeMode){B=s(B);}E+=" "+D.substr(z.attributePrefix.length)+"=";if(z.useDoubleQuotes){E+='"'+B+'"';}else{E+="'"+B+"'";}}}if(!C){E+=">";}else{E+="/>";}return E;}function j(C,B){return"</"+(C.__prefix!=null?(C.__prefix+":"):"")+B+">";}function v(C,B){return C.indexOf(B,C.length-B.length)!==-1;}function y(C,B){if((z.arrayAccessForm=="property"&&v(B.toString(),("_asArray")))||B.toString().indexOf(z.attributePrefix)==0||B.toString().indexOf("__")==0||(C[B] instanceof Function)){return true;}else{return false;}}function m(D){var C=0;if(D instanceof Object){for(var B in D){if(y(D,B)){continue;}C++;}}return C;}function l(D,B,C){return z.jsonPropertiesFilter.length==0||C==""||w(z.jsonPropertiesFilter,D,B,C);}function c(D){var C=[];if(D instanceof Object){for(var B in D){if(B.toString().indexOf("__")==-1&&B.toString().indexOf(z.attributePrefix)==0){C.push(B);}}}return C;}function g(C){var B="";if(C.__cdata!=null){B+="<![CDATA["+C.__cdata+"]]>";}if(C.__text!=null){if(z.escapeMode){B+=s(C.__text);}else{B+=C.__text;}}return B;}function d(C){var B="";if(C instanceof Object){B+=g(C);}else{if(C!=null){if(z.escapeMode){B+=s(C);}else{B+=C;}}}return B;}function p(C,B){if(C===""){return B;}else{return C+"."+B;}}function f(D,G,F,E){var B="";if(D.length==0){B+=o(D,G,F,true);}else{for(var C=0;C<D.length;C++){B+=o(D[C],G,c(D[C]),false);B+=e(D[C],p(E,G));B+=j(D[C],G);}}return B;}function e(I,H){var B="";var F=m(I);if(F>0){for(var E in I){if(y(I,E)||(H!=""&&!l(I,E,p(H,E)))){continue;}var D=I[E];var G=c(D);if(D==null||D==undefined){B+=o(D,E,G,true);}else{if(D instanceof Object){if(D instanceof Array){B+=f(D,E,G,H);}else{if(D instanceof Date){B+=o(D,E,G,false);B+=D.toISOString();B+=j(D,E);}else{var C=m(D);if(C>0||D.__text!=null||D.__cdata!=null){B+=o(D,E,G,false);B+=e(D,p(H,E));B+=j(D,E);}else{B+=o(D,E,G,true);}}}}else{B+=o(D,E,G,false);B+=d(D);B+=j(D,E);}}}}B+=d(I);return B;}this.parseXmlString=function(D){var F=window.ActiveXObject||"ActiveXObject" in window;if(D===undefined){return null;}var E;if(window.DOMParser){var G=new window.DOMParser();var B=null;if(!F){try{B=G.parseFromString("INVALID","text/xml").getElementsByTagName("parsererror")[0].namespaceURI;}catch(C){B=null;}}try{E=G.parseFromString(D,"text/xml");if(B!=null&&E.getElementsByTagNameNS(B,"parsererror").length>0){E=null;}}catch(C){E=null;}}else{if(D.indexOf("<?")==0){D=D.substr(D.indexOf("?>")+2);}E=new ActiveXObject("Microsoft.XMLDOM");E.async="false";E.loadXML(D);}return E;};this.asArray=function(B){if(B===undefined||B==null){return[];}else{if(B instanceof Array){return B;}else{return[B];}}};this.toXmlDateTime=function(B){if(B instanceof Date){return B.toISOString();}else{if(typeof(B)==="number"){return new Date(B).toISOString();}else{return null;}}};this.asDateTime=function(B){if(typeof(B)=="string"){return a(B);}else{return B;}};this.xml2json=function(B){return A(B);};this.xml_str2json=function(B){var C=this.parseXmlString(B);if(C!=null){return this.xml2json(C);}else{return null;}};this.json2xml_str=function(B){return e(B,"");};this.json2xml=function(C){var B=this.json2xml_str(C);return this.parseXmlString(B);};this.getVersion=function(){return t;};};}));
let base64="";
let arrayId=[];
const temaRelacionado={
    "RECLAMO":[{"id":1,"legacy_id":"202","type_contactant_id":1,"name":"RECLAMO - MANTENIMIENTO","created_at":null,"updated_at":null},{"id":2,"legacy_id":"203","type_contactant_id":1,"name":"RECLAMO - OBRAS","created_at":null,"updated_at":null},{"id":3,"legacy_id":"204","type_contactant_id":1,"name":"RECLAMO - OPERACI\u00d3N VIAL","created_at":null,"updated_at":null},{"id":4,"legacy_id":"205","type_contactant_id":1,"name":"RECLAMO - PEAJE","created_at":null,"updated_at":null},{"id":5,"legacy_id":"206","type_contactant_id":1,"name":"RECLAMO - SEGURIDAD","created_at":null,"updated_at":null},{"id":6,"legacy_id":"208","type_contactant_id":1,"name":"RECLAMO - WEB","created_at":null,"updated_at":null},{"id":7,"legacy_id":"1200","type_contactant_id":1,"name":"RECLAMO - ATU LIMA EXPRESA","created_at":null,"updated_at":null}],
    "SOLICITUD":[{"id":8,"legacy_id":"302","type_contactant_id":2,"name":"SOLICITUD - MANTENIMIENTO","created_at":null,"updated_at":null},{"id":9,"legacy_id":"303","type_contactant_id":2,"name":"SOLICITUD - OBRAS","created_at":null,"updated_at":null},{"id":10,"legacy_id":"304","type_contactant_id":2,"name":"SOLICITUD - OPERACI\u00d3N VIAL","created_at":null,"updated_at":null},{"id":11,"legacy_id":"305","type_contactant_id":2,"name":"SOLICITUD - PEAJE","created_at":null,"updated_at":null},{"id":13,"legacy_id":"1300","type_contactant_id":2,"name":"SOLICITUD - ATU LIMA EXPRESA","created_at":null,"updated_at":null},{"id":14,"legacy_id":"1301","type_contactant_id":2,"name":"SOLICITUD - EMERGENCIAS","created_at":null,"updated_at":null}],
    "SUGERENCIA":[{"id":15,"legacy_id":"402","type_contactant_id":3,"name":"SUGERENCIA - MANTENIMIENTO","created_at":null,"updated_at":null},{"id":16,"legacy_id":"403","type_contactant_id":3,"name":"SUGERENCIA - OBRAS","created_at":null,"updated_at":null},{"id":17,"legacy_id":"404","type_contactant_id":3,"name":"SUGERENCIA - OPERACI\u00d3N VIAL","created_at":null,"updated_at":null},{"id":18,"legacy_id":"405","type_contactant_id":3,"name":"SUGERENCIA - PEAJE","created_at":null,"updated_at":null},{"id":19,"legacy_id":"406","type_contactant_id":3,"name":"SUGERENCIA - SEGURIDAD","created_at":null,"updated_at":null},{"id":20,"legacy_id":"1400","type_contactant_id":3,"name":"SUGERENCIA - ATU LIMA EXPRESA","created_at":null,"updated_at":null},{"id":21,"legacy_id":"1402","type_contactant_id":3,"name":"SUGERENCIA - WEB LIMA EXPRESA","created_at":null,"updated_at":null}]
}

const dataTest=[
    {
        "nroreq":1023721,"fecha":"07/02/2020 05:18.00pm",
        "tema":"ORIENTACION - ATU LAMSAC","categoria":"LLAMADA",
        "ESTADO":"Encerrado"
    },
    {
        "nroreq":1023722,"fecha":"07/02/2020 05:18.00pm",
        "tema":"ORIENTACION - ATU LAMSAC","categoria":"LLAMADA",
        "ESTADO":"Encerrado"
    },
    {
        "nroreq":1023723,"fecha":"07/02/2020 05:18.00pm",
        "tema":"ORIENTACION - ATU LAMSAC","categoria":"LLAMADA",
        "ESTADO":"Encerrado"
    }
];

const headerXML='<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body></soap:Body>';
const footerXML=' </soap:Body></soap:Envelope>';


const uploadImage = async (event) => {
    const file = event.target.files[0];
    let inputFileName=document.getElementById("input-file-form-text");
    inputFileName.value=file.name;
    base64 = await convertBase64(file);
};

const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};



function addEvent(data){
    function getDetail(data){
        console.log(data,"data");
        document.getElementById("tableResultRequeriment").style.display='none';
        document.getElementsByClassName('boxResult-detail')[0].style.display='block';
    }
   data.map(e=>{
        let id=e.split("-")[1];
        console.log(typeof id);
        document.getElementById(e).addEventListener("click",function(){
            getDetail(id);
        },false);
   })
}


function buildTable(data){
   let tableBuild=document.getElementById("tableResultRequeriment");
  
   data.map((e,index)=>{
    
    let template=`<tr id="tx-${e.nroreq}-${index}">
                        <td>${e.nroreq}</td>
                        <td>${e.fecha}</td>
                        <td>${e.tema}</td>
                        <td>${e.categoria}</td>
                        <td>${e.ESTADO}</td>
                     </tr>`;
    tableBuild.innerHTML+=template;
    arrayId.push(`tx-${e.nroreq}-${index}`);
   });
   addEvent(arrayId);
}

function showError(){
    let show=document.getElementsByClassName("boxResult-Error")[0];
    show.style.display="block";
}   

function pivotMessage(){
    let hidden=document.getElementsByClassName("requeriment-message-before")[0];
    let show=document.getElementsByClassName("requeriment-message-after")[0];
    let containerShow=document.getElementsByClassName("container-search")[0];
    hidden.style.display="none";
    show.style.display="block";
    containerShow.style.display="block";    
}

window.addEventListener('load',function(){
    const formAttention=document.getElementById('attention-form');
    const formRequeriment=document.getElementById('requeriment-form');
    const inputFileSecction = document.getElementById("input-file-form");

    inputFileSecction.addEventListener("change", (e) => {
        uploadImage(e);
    });

    formAttention.addEventListener('submit', (event) => {
        // handle the form data
        event.preventDefault();
        let type=formAttention.elements["select-attention"].value;
        let nombre=formAttention.elements["input-name"].value.trim();
        let typeDocument=formAttention.elements["select-tipoDocumento"].value;
        let numeroDocument=formAttention.elements["input-nroDocument"].value.trim();
        let telefono=formAttention.elements["input-telefono"].value.trim();
        let correo=formAttention.elements["input-correo"].value.trim();
        let selectRelaciondo=formAttention.elements["select-temaRelacionado"].value;

        console.log(type,nombre,typeDocument,numeroDocument,telefono,correo,selectRelaciondo);
        console.log("============");
        console.log(file.value,base64);
    });

    formRequeriment.addEventListener('submit',(event)=>{
        event.preventDefault();
        let typeDocument=formRequeriment.elements["selectAttention-tipoDocumento"].value;
        let numeroDocument=formRequeriment.elements["inputAttention-nroDocument"].value.trim();
       buildTable(dataTest);
        pivotMessage();
      //  showError();

    });

});

function getDetail(){}
 
function changeSelectFormAttention(selectObject){
    let inputDocumentSelect=document.getElementById('input-nroDocument');
    if(selectObject.value=='CE'){
        inputDocumentSelect.setAttribute('type','text');
    }else{
        inputDocumentSelect.setAttribute('type','number');
    }
}
function changeSelectFormRequeriment(selectObject) {
    let inputDocumentSelect=document.getElementById('inputAttention-nroDocument');
    if(selectObject.value=='CE'){
        inputDocumentSelect.setAttribute('type','text');
    }
    else{
        inputDocumentSelect.setAttribute('type','number');
    }
}


function parseXML(objecto){
    let x2js=new X2JS();
    let result=x2js.json2xml_str(objecto);
    return result;
}

async function callRequest(body){
    let data=headerXML+body+footerXML;
    function createRequest(method,url){
        let xhr=new XMLHttpRequest();
        xhr.open(method,url,false);
        return xhr;
    }
    let xhr=createRequest("POST","http://172.30.50.71:8006/KcorFaleConosco/kcorFaleConosco.asmx");
    xhr.setRequestHeader('Content-Type','text/xml');
    xhr.send(data);
    xhr.onload=function(){
        let result=xhr.responseText;
        return result;
    }
    
}


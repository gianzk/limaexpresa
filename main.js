
let base64="";
let nameFile="";
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


const uploadImage = async (event) => {
    const file = event.target.files[0];
    let inputFileName=document.getElementById("input-file-form-text");
    inputFileName.value=file.name;
    nameFile=file.name;
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
        console.log(file.value,base64,nameFile);
        //FXFETCH();
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







const apiurl='https://pla.in.net/lima-expresa/api/public/api/dev';

function addEvent(data){
    function getDetailTwo(data){
        console.log(data,"data");
        document.getElementById("tableResultRequeriment").style.display='none';
        document.getElementsByClassName('boxResult-detail')[0].style.display='block';
    }
   data.map(e=>{
        let id=e.split("-")[1];
        console.log(typeof id);
        document.getElementById(e).addEventListener("click",function(){
            getDetailTwo(id);
        },false);
   })
}

function getDetail(data){
    document.getElementById("tableResultRequeriment").style.display='none';
    document.getElementsByClassName('boxResult-detail')[0].style.display='block';
    
    document.getElementById("ResFecha").innerText=data.DateTime?data.DateTime:"-";
    document.getElementById("ResNombre").innerText=data.UserName?data.UserName:"-";
    document.getElementById("ResTipoDocumento").innerText=data.DocumentType?data.DocumentType:"-";
    document.getElementById("ResNroDocument").innerText=data.DocumentNumber?data.DocumentNumber:"-";
    document.getElementById("ResTelefono").innerText=data.Phone?data.Phone:"-";
    document.getElementById("ResRelacionado").innerText=data.ProcessType?data.ProcessType:"-";
    document.getElementById("ResEmail").innerText=data.EmailAddress?data.EmailAddress:"-";
    document.getElementById("ResAsunto").innerText=data.ProcessDetail?data.ProcessDetail:"-";
    document.getElementById("ResRespuesta").innerText=data.Reply?data.Reply:"-";
    document.getElementById("ResEstado").innerText=data.Status?data.Status:"-";
    document.getElementById("ResFechaCierre").innerText=data.FinishDate?data.FinishDate:"-";
    
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
 
function pivotMessage(){
    let hidden=document.getElementsByClassName("requeriment-message-before")[0];
    let show=document.getElementsByClassName("requeriment-message-after")[0];
    let containerShow=document.getElementsByClassName("container-search")[0];
    containerShow.style.display="block";  
    hidden.style.display="none";
    show.style.display="block";

}

function showError(){
    let show=document.getElementsByClassName("boxResult-Error")[0];
    show.style.display="block";
}   
function initStatus(){
    document.getElementById("tableResultRequeriment").style.display='block';
    document.getElementsByClassName('boxResult-detail')[0].style.display='none';
}
window.addEventListener('load',function(){
    const formRequeriment=document.getElementById('requeriment-form');

    formRequeriment.addEventListener('submit',(event)=>{
        event.preventDefault();
        initStatus();
        let typeDocument=formRequeriment.elements["selectAttention-tipoDocumento"].value;
        let numeroDocument=formRequeriment.elements["inputAttention-nroDocument"].value.trim();
        management(typeDocument,numeroDocument);
    });
})

async function management(typeDocument,numeroDocument){
    if(typeDocument==="nro-req"){
        const response=await fetch(`${apiurl}/v1/detalleprocess/${numeroDocument}`);
        const data = await response.json();
        console.log(data);
        if(data.Status=="Não encontrado"){
            showError();
            pivotMessage();
        }else{
            pivotMessage();
            getDetail(data);
        }
    }
    else{
        const response=await fetch(`${apiurl}/v1/listprocess/${typeDocument}/${numeroDocument}`);
        const data = await response.json();
        console.log(data,data.length);
        if(data.NewDataSet){
            console.log("here3");
            pivotMessage();
        } else{
            showError();
            pivotMessage();
            console.log("here2");
            
        }
    }
}
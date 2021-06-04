var ntask={task:" ",
           ded :" ",
           };
var tasks=[]

function addTask (){

    ntask.task=document.getElementById("ip").value;
    ntask.ded=document.getElementById("dl").value;
    tasks.push(ntask)
    var span =document.createElement("span")
    var txt=document.createTextNode("\u00D7")
    span.className="close"
    span.appendChild(txt)
       var text=document.createElement("li")
    var node=document.createTextNode((ntask.task)+"\n"+(ntask.ded)+"   ")
    text.appendChild(node)
    var out=document.getElementById("task")
    span.addEventListener('click',()=>{
        text.remove();
    });
    text.appendChild(span)
    out.appendChild(text)

}
/*function dispTask(){
    len=tasks.length
    for (i=0;i<len;i++) {

        out+=i+1+" "+tasks[i]+"<br/>";
    }
    out.toString

    document.getElementById("task").innerHTML=out

}*/

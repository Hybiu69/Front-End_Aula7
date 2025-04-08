function E1(){
    
    const p = document.getElementById("mensagem");
    
    p.textContent="MIMEMAMOMU";

}
function E2(){
    const text = document.createElement("p");

    text.textContent="MIMEMAMOMU";

    const div=document.getElementById("container2");

    div.appendChild(text);
}

function E3(){
    const btn=document.createElement("button");

    const div=document.getElementById("container");

    btn.textContent="|BOTÃO MIMEMAMOMU|";

    container.appendChild(btn);
}

function E4(){
    const div=document.getElementById("box");
    div.classList.toggle("destacado")
}

function addItem(){
    const ul=document.getElementById("lista");
    const li=document.createElement("li");
    li.textContent="Mi Me Ma Mo Mu";
    ul.appendChild(li);

}
function incrementar(){

    const span = document.getElementById('contador');

    span.textContent=parseInt(span.textContent)+1;

}
function modal(){
    const div=document.getElementById("modal");
    div.classList.toggle("block");
}

function selec(este) {
    var sele = este.getAttribute("class").split(" ")
    var lista = document.getElementsByTagName("main")[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
    var filtro = este.innerHTML;
    if (sele.indexOf("seleccion") > 0) {
        este.classList.remove("seleccion");
        for(i=0;i<=lista.length-1;i++){
            if(lista[i].getElementsByTagName("div")[0].getElementsByClassName("mod")[0].innerHTML == filtro){
                lista[i].style.display = "none"
            }
        }
    }
    else {
        este.classList.add("seleccion");
        for(i=0;i<=lista.length-1;i++){
            if(lista[i].getElementsByTagName("div")[0].getElementsByClassName("mod")[0].innerHTML == filtro){
                lista[i].style.display = "flex"
            }
        }
    }
}
// document.addEventListener("DOMContentLoaded", function(event) {
//     var title = document.getElementById("titulo");

// }) 

// document.querySelector("#titulo").value;

var a;

document.addEventListener("DOMContentLoaded", formVals);

var l = localStorage;

titulo.addEventListener("focusout", function() {
    l.setItem("tit", titulo.value);
  })

autor.addEventListener("focusout", function() {
    l.setItem("aut", autor.value);
  })

subject.addEventListener("focusout", function() {
    l.setItem("sub", subject.value);
})

description.addEventListener("focusout", function() {
    l.setItem("des", description.value);
})

categoria.addEventListener("focusout", function() {
    l.setItem("cat", categoria.value);
})

lenguaje.addEventListener("focusout", function() {
    l.setItem("len", lenguaje.value);
})

editor.addEventListener("focusout", function() {
    l.setItem("edi", editor.value);
})

fuente.addEventListener("focusout", function() {
    l.setItem("fue", fuente.value);
})

relation.addEventListener("focusout", function() {
    l.setItem("rel", relation.value);
})

covertura.addEventListener("focusout", function() {
    l.setItem("cov", covertura.value);
})

derechos.addEventListener("focusout", function() {
    l.setItem("der", derechos.value);
})

format.addEventListener("focusout", function() {
    l.setItem("for", format.value);
})

date.addEventListener("focusout", function() {
    l.setItem("dat", date.value);
})



function formVals() {
    titulo.value = l.getItem("tit");
    autor.value = l.getItem("aut");
    subject.value = l.getItem("sub");
    description.value = l.getItem("des");
    categoria.value = l.getItem("cat");
    lenguaje.value = l.getItem("len");
    editor.value = l.getItem("edi");
    fuente.value = l.getItem("fue");
    relation.value = l.getItem("rel");
    covertura.value = l.getItem("cov");
    derechos.value = l.getItem("der");
    format.value = l.getItem("for");
    date.value = l.getItem("dat");

    console.log(titulo.value);
}


document.getElementById("submit").addEventListener('click',function(){
    var nom = $('#nombre').val();
    var cor = $('#correo').val();
    var tel = $('#telefono').val();
    var com = $('#comen').val();

    alert(nom+" "+cor+" "+tel+" "+com);
})
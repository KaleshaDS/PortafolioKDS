
/***Efectos de textos***/
$(document).ready(function() {
	$(".name").addClass("animated fadeInUp");
    $(".title").addClass("animated fadeInDown");
    $("blockquote").addClass("animated fadeInRight");
});

/*****************************Navbar**************************/
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

/*********************Contacto**********************************/

$(document).ready(function(){
    $("#github").mouseover(function(){
        $("#github").addClass("animated tada");
        setTimeout(function(){
        	$("#github").removeClass("animated tada");
        }, 1100);
    });
    $("#facebook").mouseover(function(){
        $("#facebook").addClass("animated tada");
        setTimeout(function(){
        	$("#facebook").removeClass("animated tada");
        }, 1100);
    });
    $("#twitter").mouseover(function(){
        $("#twitter").addClass("animated tada");
        setTimeout(function(){
        	$("#twitter").removeClass("animated tada");
        }, 1100);
    });
    $("#instangram").mouseover(function(){
        $("#instangram").addClass("animated tada");
        setTimeout(function(){
        	$("#instangram").removeClass("animated tada");
        }, 1100);
    });
    $("#linkedin").mouseover(function(){
        $("#linkedin").addClass("animated tada");
        setTimeout(function(){
        	$("#linkedin").removeClass("animated tada");
        }, 1100);
    });
     $("#correo").mouseover(function(){
        $("#correo").addClass("animated tada");
        setTimeout(function(){
        	$("#correo").removeClass("animated tada");
        }, 1100);
    });   
});


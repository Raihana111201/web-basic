/*
window.onload = function check(){
				var r = confirm("Klik OK untuk mendapatkan notifikasi");
				if (r==true){
				  alert("Kamu akan mendapatkan notifikasi dari web ini")
					}
				}
*/
document.getElementById("follow").addEventListener("click", function check() {
	var s = confirm("Apakah kamu ingin mendaftar menjadi member?");
				if (s==true){
				  alert("Selamat!! \n Anda Sudah Terdaftar Menjadi Member Kami");
				}
});

function mOver(obj) {
  obj.innerHTML= "Daftar";
}

function mOut(obj) {
  obj.innerHTML = "Ikuti Kami";
}

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 40px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
document.getElementById("myBtn").addEventListener("click", function(){
	document.body.scrollTop = 0;
  	document.documentElement.scrollTop = 0;		
});


function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

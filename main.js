    let ubahText = document.getElementById("ubahText");
    let reset     = document.getElementById("reset");
    let warnaText = document.getElementById("warnaText");
    let warnaLatar = document.getElementById("warnaLatar");
    let posisiText = document.getElementById("posisiText");
    let ukuranText = document.getElementById("ukuranText");
    let kecepatanText = document.getElementById("kecepatanText");
    let body = document.querySelector("body");
    let jalanText = document.getElementById("jalanText");
	  let hamburger = document.getElementById("hamburger");
    let que = document.getElementById("marquee");
   //nampilin pengaturan
   function muncul(){
	let nav = document.getElementById("nav");
	nav.style.display = "block";
   };
   //nutup pengaturan 
    function tutup(){
	  let nav = document.getElementById("nav");
     nav.style.display ="none";
   };
  	 //nampilkan text
function tampil(){
// let  que = document.getElementById("marquee");
//let ubahText = document.getElementById("ubahText");
que.innerText = ubahText.value;
localStorage.setItem('one',ubahText.value);
 };
	//menyimpan di localStorage
  let one = localStorage.getItem('one');
	que.innerText =  one;
	//reset text
	function hapus(){
		// let que = document.getElementById("marquee");
		 que.innerText = "";
	};
	//warna tex
 warnaText.addEventListener('input',function(){
  marquee.style.color = warnaText.value;
  localStorage.setItem('two',warnaText.value);
	});
	let two = localStorage.getItem('two');
	marquee.style.color = two;
	//warna background
	warnaLatar.addEventListener('input',function(){
		body.style.backgroundColor = warnaLatar.value;
	localStorage.setItem('three',warnaLatar.value);
	});
    let three = localStorage.getItem('three');
    body.style.backgroundColor = three;
	//posisi text
	posisiText.addEventListener('input',posisi);
   function posisi(){
	que.style.marginTop = posisiText.value + "px";
	localStorage.setItem('for',posisiText.value + "px");
	};
	let fo = localStorage.getItem('for');
   que.style.marginTop = fo;
	//Ukuran text
	ukuranText.addEventListener('input',function(){
		que.style.fontSize = ukuranText.value + "px";
		localStorage.setItem('five', ukuranText.value + "px");
	});
	let five = localStorage.getItem('five');
	que.style.fontSize = five;
	//kecepatan text
	kecepatanText.addEventListener('change',function(){
	que.scrollAmount = kecepatanText.value ;
	localStorage.setItem('six',kecepatanText.value);
	});
	  let six = localStorage.getItem('six');
	  que.scrollAmount = six;
	//arah Jalan text 
	jalanText.addEventListener('change',function(){
		que.direction = jalanText.value;
			localStorage.setItem('seven',jalanText.value)
	});
	let seven = localStorage.getItem('seven');
	que.direction = seven;
	//untuk menyimpan local storge 

      alert("setelah mengsetting harap refresh halaman untuk melihat hasil terimakasih ☺️")

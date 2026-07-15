console.log("MRT Otomotiv sitesi başarıyla yüklendi!");

function menuAc(){
    document.getElementById("menu").classList.toggle("active");
}

function sorgula(){

let kod=document.getElementById("kod").value.toUpperCase();

let sonuc="";

switch(kod){

case "P0299":
sonuc="🚗 Turbo basıncı düşük. Turbo sistemi kontrol edilmelidir.";
break;

case "P0300":
sonuc="🚗 Rastgele silindir ateşleme hatası.";
break;

case "P0401":
sonuc="🚗 EGR akışı yetersiz.";
break;

case "P2002":
sonuc="🚗 Dizel partikül filtresi (DPF) verimliliği düşük.";
break;

case "P0420":
sonuc="🚗 Katalitik konvertör verimliliği düşük.";
break;

default:
sonuc="❌ Bu arıza kodu veri tabanında bulunamadı. Lütfen MRT Otomotiv ile iletişime geçin.";
}

document.getElementById("sonuc").innerHTML=sonuc;

}

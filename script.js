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

function aramaYap() {

let kod = document.getElementById("aramaKutusu").value.toUpperCase();

let veri = arizaKodlari[kod];

if(veri){

document.getElementById("sonuc").innerHTML = `
<h3>${kod}</h3>

<p><b>Anlamı:</b> ${veri.anlam}</p>

<p><b>Belirtiler:</b> ${veri.belirti}</p>

<p><b>Olası Neden:</b> ${veri.neden}</p>

<p><b>Tahmini Süre:</b> ${veri.sure}</p>

`;

}else{

document.getElementById("sonuc").innerHTML = `
<h3>❌ Arıza kodu bulunamadı.</h3>
<p>Lütfen kodu kontrol edin veya MRT Otomotiv ile iletişime geçin.</p>
`;

}

}

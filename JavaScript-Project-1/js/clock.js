let isim = prompt("isim giriniz:")
let name = document.getElementById("myName");
name.innerHTML = isim


function showTime() {
    gunler = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
    let simdi = new Date();
    let saat = simdi.getHours().toString().padStart(2, "0");
    let dakika = simdi.getMinutes().toString().padStart(2, "0");
    let saniye = simdi.getSeconds().toString().padStart(2, "0");
    let zaman = saat + ":" + dakika + ":" + saniye;
    document.getElementById("myClock").innerHTML = zaman + " " + gunler[simdi.getDay()];
  }

  setInterval(showTime, 1000);
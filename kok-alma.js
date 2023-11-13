//KAREKÖK ALMA
// const kok_alma = [4,3,9,7,2,1];
// const karekok = []; // tüm sayıların tek tek karaköklerinin geleceği dizi.

// for (i = 0; i < kok_alma.length; i++) { // dizideki her elemanın karakökünü almak için bir döngü açıyoruz.
//   karekok.push(Math.sqrt(kok_alma[i])); // Math.sqrt fonksiyonu ile karaköklerini karakok dizisine pushluyoruz.
// }
// console.log("sayıların karekökü:" + karekok); // ekrana yazdırma satırı.

//KARESİNİ ALMA
// const kare_alma = [7,4,3,5];
// const karesi =[];

// for (i = 0; i < kare_alma.length; i++){
//     let kare = kare_alma[i] * kare_alma[i];
//     karesi.push((kare))
// }
// console.log("sayıların karesi:" + karesi);

//KAREKÖK VE KARESİNİ ALMA
// const sayilar =[4,3,9,7,2,1];
// const sonuc = [];

// for (i = 0; i < sayilar.length; i++){
//     sonuc.push(Math.sqrt(sayilar[i]));
//     sonuc.push(Math.floor(sayilar[i]));
//     if (Math.sqrt = Math.floor);
//     else {Math.floor(sayilar[i]) * Math.floor(sayilar[i])}
// }
// console.log("sayıların karekökü ve karesi:" + sonuc)

//KAREKÖK VE KARESİNİ ALMA SON

const liste = [];

input = document.querySelector("#kare");

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sonuc();
  }
});

function sonuc() {
  const sayi = +input.value; // gönderilen sayıyı tam sayıya çevirir.
  input.value = ""; // sonuç butonuna basıldıktan sonra input boş olur.
  $(input).focus(); // sonuç butonuna bastıktan sonra input a odaklanır.
  liste.push(sayi); // listeye sayıyı pushluyoruz.
  render();
}

function render() {
  const sonuclar = [];

  liste.forEach((sayi) => {
    const karekok = Math.sqrt(sayi); // Math.sqrt fonk ile sayinin karekökünü alıyoruz.
    if (karekok === Math.floor(karekok)) {
      // eğer karekök tam sayı çıkıyorsa,
      sonuclar.push(`√${sayi} = ${karekok}`); // sonuclara sayının karekökünü pushluyoruz.
    } else {
      sonuclar.push(`${sayi}*2 = ${sayi * sayi}`); // sayının karekökü tam sayı çıkmıyorsa sayını karesini alıyoruz.
    }
  });

  const sonuclarListesi = document.getElementById("sonuclar"); // sonucların liste olacağı kısım.
  sonuclarListesi.innerHTML = ""; // sonuclar listenin içini boşaltmak için.
  sonuclar.forEach(function (sonuc) {
    // sonuclar için her sonuc elemanına uygular.
    const listItem = document.createElement("li"); // liste li oluşturur.
    listItem.textContent = sonuc; // oluşan liste elemanı sonuca verilir.
    listItem.className = "list-group-item"; // bootstrap ile li elemanlarını düzenlemek için class.
    sonuclarListesi.appendChild(listItem); // sonucların listelendiği yer.
  });
}

document.addEventListener("DOMContentLoaded", render); // sayfa yüklendiğinde render fonk çağırıyor.

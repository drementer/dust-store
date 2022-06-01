/*!
 * @author drementer
 * klncarslanburak@gmail.com
 * @license MIT (https://github.com/drementer/dred/blob/master/LICENSE)
 */

/* İmport */
import {
	scroll_ac,
	scroll_kapat,
	log,
	go_top,
	pozisyon,
} from "./scripts/__functions.js";

// Çerez
import cerez from "./components/__cerez-popup.js";
cerez();

// Sliders
import sliders from "./scripts/__sliders.js";
sliders();

// Lazy Load
import lazy_load from "./scripts/__lazy-load.js";
lazy_load();

// Form Elemanları
import form_elemanlari from "./components/__form-elemanlari.js";
form_elemanlari();

// Cursor
import cursor from "./components/__cursor.js";
cursor();

// Go Top
import got_to_top from "./components/__go-top.js";
got_to_top();

// // Loader
// import loader from "./components/__loader.js";
// loader();
// /* İmport SON */

/* Atamalar */
const doc = document,
	body = doc.body;

// Atamalar
const urun_gorseller = doc.querySelectorAll(".urun__gorsel");

urun_gorseller.forEach((urun_gorsel, i) => {
	// Atamalar
	const urun_kart_demo = doc.querySelector(".urun-kart-demo"),
		urun_kart_kapsayici = doc.querySelector(".urun-kartlar");

	// Her görsele data-urun-id="i + 1" attr'si ekleniyor
	urun_gorsel.setAttribute("data-urun-id", i + 1);

	// Yeni urun_kart oluşturulup kapsayıcısının içine atılıyor
	const urun_kart = urun_kart_demo.content.cloneNode(true);
	urun_kart_kapsayici.appendChild(urun_kart);
});

// Atamalar
const urun_kartlar = doc.querySelectorAll(".urun-kart");

urun_kartlar.forEach((urun_kart, i) => {
	// Her karta data-urun-id="i + 1" attr'si ekleniyor
	urun_kart.setAttribute("data-urun-id", i + 1);

	// Gorsel bilgileri karta ekleniyor
	let gorsel = urun_gorseller[i];
	urun_kart.querySelector(".urun-kart__gorsel").src = gorsel.src;
	urun_kart.querySelector(".urun-kart__baslik").textContent = gorsel.title;

	urun_kart.addEventListener("click", () => {

		// Atamalar
		let gorsel_id = urun_kart.dataset.urunId,
			aktif_gorsel = doc.querySelector(".urun__gorsel.aktif"),
			gorsel = doc.querySelector(
				`.urun__gorsel[data-urun-id='${gorsel_id}']`
			),
			aktif_kart = doc.querySelector(".urun-kart.aktif");
		
		aktif_kart.classList.remove("aktif");
		urun_kart.classList.add("aktif");

		// Aktif görselden aktif class'ı alınıyor
		aktif_gorsel.classList.remove("aktif");

		// Artık aktif olmadığı için pasif class'ı ekleniyor
		aktif_gorsel.classList.add("pasif");

		// Açılacak görselden varsa pasif class'ı alınıp
		// aktif class'ı veriliyor
		gorsel.classList.add("aktif");
		gorsel.classList.contains("pasif") && gorsel.classList.remove("pasif");

		let tema;

		gorsel.dataset.tema ? (tema = gorsel.dataset.tema) : (tema = "#F3EEEE");

		body.style.backgroundColor = tema;
	});
});

urun_kartlar[0].classList.add("aktif");

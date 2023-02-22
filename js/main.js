particlesJS.load("particles-js", "particles.json", function () {
  console.log("callback - particles.js config loaded");
});
let displayAllItems = document.getElementById("display");

let allItems = [];
let ayahs = [];
async function getSurah() {
  let response = await fetch(`https://api.alquran.cloud/v1/quran/ar.alafasy`);
  let result = await response.json();
  allItems = result.data.surahs;
  display();
}
getSurah();

function display() {
  let cartona = "";
  for (let i = 0; i < allItems.length; i++) {
    cartona += `<div class="text-center col-md-3 my-5">
    <h2 class="fs-1" onclick="getAyah(${i})">${allItems[i].name}</h2>
    <h2 class="fs-1" onclick="getAyah(${i})">${allItems[i].englishName}</h2>
    </div>`;
  }

  displayAllItems.innerHTML = cartona;
}
let allayahs = document.getElementById("ayahs");

async function getAyah(index) {
  let finalAyahs = allItems[index].ayahs;
  let cartona = " ";
  for (let i = 0; i < finalAyahs.length; i++) {
    // console.log(finalAyahs[i++].audio);
    cartona += `<div class=" col-md-12 fs-1 text-center">
    <h5 class ="fs-1">${finalAyahs[i].text}</h5>
    </div>
    <div class=" col-md-12 fs-1 my-4">
      <audio src="${finalAyahs[i].audio}" preload="auto" class="w-100" id="ayahsAudio" controls></audio> 
    </div>
    `;
  }
  scroll({
    top: 0,
    behavior: "smooth",
  });
  allayahs.innerHTML = cartona;
}


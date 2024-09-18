const cards = document.getElementById("cards");
const wishlist = document.getElementById("wishlist");

function fillCards() {
  data.map((item) => {
    cards.innerHTML += `
        <div class="card w-[220px] h-[280px] border border-[gray] rounded-md overflow-hidden">
            <img class="w-full h-100px" src="${item.img}" alt="card photo" />
            <div class="mt-5 p-2">
                <p class="text-[14px]">Add Favorite  <span onclick="addFav(${item.id}, this)" class="fa-solid fa-heart cursor-pointer"></span></p>
                <h2 class="font-bold">${item.name}</h2>
                <p class="mt-3 text-[14px]">Qiymet: <span>${item.price}</span></p>
            </div>
        </div>
    `;
  });
}
fillCards();

function openFav() {
  wishlist.style.right = "0";
}
function closeFav() {
  wishlist.style.right = "-130%";
}

let favArr = [];

function addFav(id, heart) {
  console.log(heart);

  heart.classList.add("text-red-500");
  let filtered = data.find((item) => item.id == id);
  if (!favArr.includes(filtered)) {
    favArr.push(filtered);
    wishlist.innerHTML += `
      <div class="favCard flex gap-[20px] justify-between mt-5 mb-2 border border-slate-300 p-2">
          <div class="flex gap-3">
              <img class="w-[50px]" src="${filtered.img}" alt="photo" />
              <div>
                  <h3>${filtered.name}</h3>
                  <p>id: <span>${filtered.id}</span></p>
              </div>
          </div>
          <button onclick="delFav(this)" class="bg-red-500 text-white px-3 text-[12px] h-[30px]">Sil</button>
      </div>
  `;
  } else alert("You already add this one");
}

function delFav(fav) {
  fav.closest(".favCard").style.display = "none";
}

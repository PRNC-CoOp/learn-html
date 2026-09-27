const main = document.querySelector(".main");
const h1 = document.querySelector(".h1");
const p = document.querySelector(".p");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btno");
// const card = document.querySelectorAll(".card");
let toggle = document.querySelector("#light");
let card = document.getElementsByClassName("card");
const p2 = document.querySelector(".p2");
const nav = document.querySelector(".nav");
const dev = document.querySelector(".dev");
const h1o = document.querySelector(".h1o");
const footer = document.querySelector(".footer");
const cardm = document.querySelector(".cardsm");
// const card = document.querySelector(".cardsm");
console.log(cardm)

for (let n = 0; n < card.length; n++) {
    // console.log(card[n])
    card[n] = n;
}
// console.log(card[0]);

// console.log(card.length);

let light = false;
toggle.addEventListener("click", () => {
    light = !light;
    // console.log(light)

    if (light == true) {
        main.classList.add("mainl");
        h1.classList.add("text");
        p.classList.add("para");
        btn1.classList.add("btn1l");
        btn2.classList.add("btn2l");
        card[0].classList.add("cardl");
        card[1].classList.add("cardl");
        card[2].classList.add("cardl");
        card[3].classList.add("cardl");
        card[4].classList.add("cardl");
        card[5].classList.add("cardl");
        card[6].classList.add("cardl");
        card[7].classList.add("cardl");
        p2.classList.add("p2l");
        dev.classList.add("p2l");
        h1o.classList.add("h1ol");
        footer.classList.add("footerl");
        cardm.classList.add("mainl");
    }

    if (light == false) {
        main.classList.remove("mainl");
        h1.classList.remove("text");
        p.classList.remove("para");
        btn1.classList.remove("btn1l");
        btn2.classList.remove("btn2l");
        card[0].classList.remove("cardl");
        card[1].classList.remove("cardl");
        card[2].classList.remove("cardl");
        card[3].classList.remove("cardl");
        p2.classList.remove("p2l");
        dev.classList.remove("p2l");
        h1o.classList.remove('h1ol');
        footer.classList.remove("footerl");
        cardm.classList.remove("mainl");
    }
})
const LIST = [
  "../kepek/dachshund1.jpg",
  "../kepek/dachshund2.jpg",
  "../kepek/dachshund3.jpg",
  "../kepek/dachshund4.jpg",
];

window.addEventListener("load", function () {
  const SZULOELEM = document.querySelector("article");
  feltoltes(SZULOELEM);
  const KISKEPEK = document.querySelectorAll("article div img");

  for (let index = 0; index < LIST.length; index++) {
    KISKEPEK[index].addEventListener("click", () => {
      console.log(event.target.src);
      const NAGYKEP = document.querySelectorAll("section div img");
      console.log(NAGYKEP);
      NAGYKEP[0].src = LIST[index];
    });
  }
});

function feltoltes(SZULOELEM) {
  let kepek = "<div class = kepek>";
  for (let index = 0; index < LIST.length; index++) {
    kepek += `<div><img src=${LIST[index]} id=kep${index + 1} alt=Tacsó${
      index + 1
    }></div>`;
  }
  kepek += "</div>";
  SZULOELEM.innerHTML += kepek;
}

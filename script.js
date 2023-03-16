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



  let SZAMLALO = 0;
  const JOBBGOMB = document.getElementById("#jobb");
  const BALGOMB = document.getElementById("#bal");
  NAGYKEP = document.getElementById("#nagykep img");

  JOBBGOMB.addEventListener("click", function () {
    SZAMLALO = (SZAMLALO + 1) % LIST.length;
    NAGYKEP.src = LIST[SZAMLALO];
    if (SZAMLALO >= LIST.length) {
      NAGYKEP[0].src = LIST[0];
      SZAMLALO = 0;
    }
    SZAMLALO += 1;
  });

  BALGOMB[0].addEventListener("click", function () {
    SZAMLALO = (SZAMLALO - 1 + LIST.length) % LIST.length;
    NAGYKEP[0].src = LIST[SZAMLALO];
    if (SZAMLALO >= LIST.length) {
      NAGYKEP[0].src = LIST[0];
      SZAMLALO = 0;
    }
    SZAMLALO -= 1;
  });

  /*const JOBBGOMB = document.querySelectorAll(".jobb");
  JOBBGOMB[0].addEventListener("click", function () {
    const FOKEP = document.querySelectorAll(".nagykep img");
    FOKEP[0].style.width = "100%";
    let SZAMLALO = 0;

    FOKEP[0].src = LIST[SZAMLALO];
    if (SZAMLALO >= LIST.length) {
      FOKEP[0].src = LIST[0];
      SZAMLALO = 0;
    }
    SZAMLALO += 1;
  });

  const BALGOMB = document.querySelectorAll(".bal");
  BALGOMB[0].addEventListener("click", function () {
    const FOKEP = document.querySelectorAll(".nagykep img");
    FOKEP[0].style.width = "100%";
    let SZAMLALO = 0;

    FOKEP[0].src = LIST[SZAMLALO];
    if (SZAMLALO >= LIST.length) {
      FOKEP[0].src = LIST[0];
      SZAMLALO = 0;
    }
    SZAMLALO += 1;
  });*/
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

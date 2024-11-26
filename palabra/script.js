const enlaces = document.querySelectorAll(".image-mapper-shape");

enlaces.forEach((enlace) => {
  enlace.addEventListener("click", function (e) {
    e.preventDefault();

    const idAncla = this.getAttribute("xlink:href").substring(1);

    document.getElementById(idAncla).scrollIntoView({
      behavior: "smooth",
    });

    const ancla = document.getElementById(idAncla);

    ancla.classList.add("blink");

    setTimeout(() => {
      ancla.classList.remove("blink");
    }, 3000); 
  });
});

const enlacescopy = document.querySelectorAll(".image-mapper-shape-copy");

enlacescopy.forEach((enlace) => {
  enlace.addEventListener("click", function (e) {
    e.preventDefault();

    const idAncla = this.getAttribute("xlink:href").substring(1);

    document.getElementById(idAncla).scrollIntoView({
      behavior: "smooth",
    });

    const ancla = document.getElementById(idAncla);

    ancla.classList.add("blink");

    setTimeout(() => {
      ancla.classList.remove("blink");
    }, 3000); 
  });
});

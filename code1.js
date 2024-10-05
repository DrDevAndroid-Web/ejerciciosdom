let pantalla = 0; //Se crea variable para controlar que funciones operan segun la pantalla/sección que este abierta
const $boton1 = document.getElementById("boton");
const $menu = document.getElementById("listaMenus");
const $seccion1 = document.getElementById("S1");
const $seccion2 = document.getElementById("S2");
const $seccion3 = document.getElementById("S3");
const $seccion4 = document.getElementById("S4");
const $seccion5 = document.getElementById("S5");
const sections = document.querySelectorAll("section");
let menuVisible = false; // Variable para controlar el estado del menú y el cambio de imagen del boton acorde a esa variable boleana del menu
const $menu1 = document.querySelector(".li1");
const $menu2 = document.querySelector(".li2");
const $menu3 = document.querySelector(".li3");
const $menu4 = document.querySelector(".li4");
const $menu5 = document.querySelector(".li5");
const d = document,
  w = window;
let ls = localStorage;

d.addEventListener("DOMContentLoaded", () => {
  //Función para guardar y obtener valores desde localSorage

  if (ls.getItem("modo") === null) ls.setItem("modo", "claro");
  if (ls.getItem("modo") === "claro") modoClaro();
  if (ls.getItem("modo") === "oscuro") modoOscuro();

  if (ls.getItem("pantalla") === "1")
    mostrarocultarPantallas($seccion1, 1, "pantalla", "1");
  if (ls.getItem("pantalla") === "2")
    mostrarocultarPantallas($seccion2, 2, "pantalla", "2");
  if (ls.getItem("pantalla") === "3")
    mostrarocultarPantallas($seccion3, 3, "pantalla", "3");
  if (ls.getItem("pantalla") === "4")
    mostrarocultarPantallas($seccion4, 4, "pantalla", "4");
  if (ls.getItem("pantalla") === "5")
    mostrarocultarPantallas($seccion5, 5, "pantalla", "5");
  //if(ls.getItem("pantalla") === "null") ls.setItem("pantalla", "1");

  seccion4();
});

$btnScroll = d.getElementById("btnScroll");

w.addEventListener("scroll", () => {
  //hay que poner el listener en windows para que se desencadene al scroll

  let $scrollTop = d.documentElement.scrollTop;

  if ($scrollTop > 50) {
    //=> cantidad de pixeles que se mueve la barra, es modificable segun el proyecto en cuestion

    $btnScroll.style.visibility = "visible";
  } else if ($scrollTop == 0) {
    $btnScroll.style.visibility = "hidden";
  }

  //console.log($scrollTop);
});
/*Dos metodos para detectar el evento scroll

windows.pageYOffSet(); desde el objeto window (por algun motivo no funciono)

document.documentElement.scrollTop(); desde el DOM/HTML

*/

$btnScroll.addEventListener("click", () => {
  w.scrollTo({ top: 0, left: 0, behavior: "smooth" }); //en la propiedad scrollTo, al usar las opciones se deben encerrar en parentesis (Ver MDN)
});

function menuMostradoTeclas(ev) {
  if (ev.ctrlKey && ev.key === "m") {
    if (menuVisible) {
      // Si el menú está visible, lo ocultamos y cambiamos la imagen
      $menu.style.visibility = "hidden";
      $boton1.setAttribute("src", "./btnHamburguesa.png"); // Imagen original
      $boton1.setAttribute("title", "De click para abrir menú de secciones");
    } else {
      // Si el menú está oculto, lo mostramos y cambiamos la imagen
      $menu.style.visibility = "visible";
      $boton1.setAttribute("src", "./btnHambuerguesa2.png"); // Nueva imagen
      $boton1.setAttribute("title", "De click para cerrar menú de secciones");
    }

    menuVisible = !menuVisible; // Cambiamos el estado del menú

    const $sonidoBotonHamburguesa = document.createElement("audio");
    $sonidoBotonHamburguesa.src = "assets/click_effect.mp3";
    $sonidoBotonHamburguesa.play();
  }
}

$boton1.addEventListener("click", (e) => {
  if (menuVisible) {
    // Si el menú está visible, lo ocultamos y cambiamos la imagen
    $menu.style.visibility = "hidden";
    $boton1.setAttribute("src", "./btnHamburguesa.png"); // Imagen original
    $boton1.setAttribute("title", "De click para abrir menú de secciones");
  } else {
    // Si el menú está oculto, lo mostramos y cambiamos la imagen
    $menu.style.visibility = "visible";
    $boton1.setAttribute("src", "./btnHambuerguesa2.png"); // Nueva imagen
    $boton1.setAttribute("title", "De click para cerrar menú de secciones");
  }

  menuVisible = !menuVisible; // Cambiamos el estado del menú

  const $sonidoBotonHamburguesa = document.createElement("audio");
  $sonidoBotonHamburguesa.src = "assets/click_effect.mp3";
  $sonidoBotonHamburguesa.play();
});

$menu.addEventListener("mouseover", () => {
  //Evento para reproducir sonido al pasar el mouse encima de los elementos
  const $sonidoBotonesMenu = document.createElement("audio");
  $sonidoBotonesMenu.src = "assets/start.mp3";
  $sonidoBotonesMenu.play();
});

$menu.addEventListener("mouseleave", () => {
  //Evento para esconder el menu cuando salga el mouse encima de este
  $menu.style.visibility = "hidden";
  $boton1.setAttribute("src", "/btnHamburguesa.png"); // Imagen original
  $boton1.setAttribute("title", "De click para abrir menú de secciones");
  menuVisible = !menuVisible;
});

$menu.addEventListener("mouseover", (e) => {
  if (e.target.matches("#listaMenus .li1")) {
    $menu1.textContent = "Reloj Dijital y Alarma Sonora";
  }
  if (e.target.matches("#listaMenus .li2")) {
    $menu2.textContent = "Movimiento de Pelota";
  }
  if (e.target.matches("#listaMenus .li3")) {
    $menu3.textContent = "Trabajando con fecha/Tiempo";
  }
  if (e.target.matches("#listaMenus .li4")) {
    $menu4.textContent = "Sin asignar";
  }
  if (e.target.matches("#listaMenus .li5")) {
    $menu5.textContent = "Validación de Formularios";
  }
});

$menu.addEventListener("mouseout", (e) => {
  if (e.target.matches("#listaMenus .li1")) {
    $menu1.textContent = "Sección 1";
  }
  if (e.target.matches("#listaMenus .li2")) {
    $menu2.textContent = "Sección 2";
  }
  if (e.target.matches("#listaMenus .li3")) {
    $menu3.textContent = "Sección 3";
  }
  if (e.target.matches("#listaMenus .li4")) {
    $menu4.textContent = "Sección 4";
  }
  if (e.target.matches("#listaMenus .li5")) {
    $menu5.textContent = "Sección 5";
  }
});

function mostrarocultarPantallas(
  pantallaCss,
  identificadorPantalla,
  keyLocalSotarage,
  valueLocalStorage
) {
  pantallaCss.classList.add("secciones");
  sections.forEach((element) => {
    element.style.visibility = "hidden";
    pantallaCss.style.visibility = "visible";
    pantalla = identificadorPantalla;
    ls.setItem(`${keyLocalSotarage}`, `${valueLocalStorage}`);
  });
}

$menu.addEventListener("click", (e) => {
  if (e.target.matches("#listaMenus .li1"))
    mostrarocultarPantallas($seccion1, 1, "pantalla", "1");
  else if (e.target.matches("#listaMenus .li2"))
    mostrarocultarPantallas($seccion2, 2, "pantalla", "2");
  else if (e.target.matches("#listaMenus .li3"))
    mostrarocultarPantallas($seccion3, 3, "pantalla", "3");
  else if (e.target.matches("#listaMenus .li4"))
    mostrarocultarPantallas($seccion4, 4, "pantalla", "4");
  else if (e.target.matches("#listaMenus .li5"))
    mostrarocultarPantallas($seccion5, 5, "pantalla", "5");

  /*$seccion4.classList.add("secciones");
       $seccion1.style.visibility = "hidden";
       $seccion2.style.visibility = "hidden";
       $seccion3.style.visibility = "hidden";
       $seccion4.style.visibility = "visible";
       $seccion5.style.visibility = "hidden";
       pantalla = 4;
       ls.setItem("pantalla", "4");*/ //CODIGO VIEJO QUE FUE REEMPLAZADO POR UNA FUNCION TOY ESCAPA`O
});

/*SECCIÓN 1*/
//Reloj

const reloj = document.getElementById("reloj"),
  btnPlay = document.getElementById("activar-reloj"),
  btnStop = document.getElementById("desactivar-reloj");

let clockTempo;
btnPlay.addEventListener("click", (e) => {
  clockTempo = setInterval(() => {
    let clockHour = new Date().toLocaleTimeString();
    document.getElementById("reloj").innerHTML = `<H3>${clockHour}</H3>`;
  }, 1000);

  btnPlay.disabled = true;
  btnStop.disabled = false;
});

btnStop.addEventListener("click", (e) => {
  clearInterval(clockTempo);
  btnPlay.disabled = false;
  document.getElementById("reloj").innerHTML = `<H3>RELOJ DETENIDO</H3>`;
  btnStop.disabled = true;
});

//TRATA DE AÑADIR UN BOTON PARA CAMBIAR EL TIPO DE LETRA (NÚMERO) Y FONDO DEL RELOJ

//Alarma

let alarmTempo;
const $alarm = document.createElement("audio");
$alarm.src = "assets/alarma.mp3";
btnPlayAlarma = document.getElementById("activar-alarma");
btnStopAlarma = document.getElementById("desactivar-alarma");

$alarm.addEventListener("ended", () => {
  //Evento que se desencadena cuando termina de reproducir el audio
  btnPlayAlarma.disabled = false;
});

btnPlayAlarma.addEventListener("click", (e) => {
  alarmTempo = setTimeout(() => {
    $alarm.play();
  }, 2000);
  btnPlayAlarma.disabled = true;

  $alarm.ended();
});

btnStopAlarma.addEventListener("click", (e) => {
  $alarm.pause();
  clearTimeout(alarmTempo);
  btnPlayAlarma.disabled = false;
}); //Añade un input con dos botones, subir y bajar valor, para que el usuario selecciones a los cuantos segundos comienza la alarma

//SECCIÓN 2: PELOTA MOVIENDOSE CON EVENTOS DE TECLADO

const $pelota = document.getElementById("pelota");
const $cuadro = document.getElementById("cuadro");
let x = 0,
  y = 0; //declaro variables que usare luego para propiedad transform de css de la pelota $pelota

/*Ahora a declarar los bordes de cada elemento para identificar sus colisiones y evitar que la pelota salga del div, cuadrado*/

document.addEventListener("keydown", (ev) => {
  menuMostradoTeclas(ev);

  if (pantalla === 2) {
    //para que el codigo funcione solo en la seccion 2

    const limitePelota =
        $pelota.getBoundingClientRect() /*muestra los datos de las distancias y la posicion del elemento al que se aplica en este ejemplos se ponen luego del
    listener keydown, para que se actualice luego de pulsar cada tecla, si se pone fuera se quedan con valores fijos y no funciona*/,
      limiteCuadro = $cuadro.getBoundingClientRect();

    if (ev.key === "l" && ev.ctrlKey) {
      alert(`Este es un evento de teclado combinadas`);
    }
    switch (
      ev.key //estructura de flujo que permite varias entradas y salidas pora cada entrada
    ) {
      case "ArrowUp":
        ev.preventDefault();
        if (limitePelota.top > limiteCuadro.top) y--;
        break;

      case "ArrowDown":
        ev.preventDefault();
        if (limitePelota.bottom < limiteCuadro.bottom) y++; //aca se cambian el tipo de operacion

        break;

      case "ArrowLeft":
        ev.preventDefault();
        if (limitePelota.left > limiteCuadro.left) x--;
        break;

      case "ArrowRight":
        ev.preventDefault();
        if (limitePelota.right < limiteCuadro.right) x++;
        break;
    }
    $pelota.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
  }
});

//SECCION 3 FECHA CRONOMETRADA

const $hora = document.getElementById("tiempo");
const $fecha = document.getElementById("fecha");
const lblProbando = document.getElementById("probando");
let txtSegundos = document.getElementById("segundosEntrados");
let temporizador = 0;

const btnComenzarCuenta = document.getElementById("comenzarCuenta");

const tiempo = setInterval(() => {
  let hora = new Date().toLocaleTimeString();
  let fecha = new Date().toLocaleDateString();

  $hora.textContent = `Hora actual: ${hora}`;
  $fecha.textContent = `Fecha actual: ${fecha}`;
}, 1000);

btnComenzarCuenta.addEventListener("click", () => {
  if (txtSegundos.value == isNaN) {
    lblProbando.textContent = "Ingrese un valor numerico";

    temporizador = 0;
  } else {
    temporizador = txtSegundos.value;
    setInterval(() => {
      lblProbando.textContent = temporizador--;
    }, 1000);
  }
});

//Cambiando tema oscuro/claro
//Se utiliza algo llamada data atribute para seleccionar a que elementos html se le va a añadir los cambios

const $themeBtn = d.getElementById("dark-theme-btn");
//dark-mode

const $selector = d.querySelectorAll("[data-dark]"); //data-dark fue el data atribute seleccionado para este ejemplo, puede llamarse de cualquier forma
/*Para seleccionar data atributes (con el nombre que le pongas), se usa querySelectorAll
con corchetes [] dentro de las comillas, evita escribir mucho codigo para añadir 
los estilos o clases*/

let modo = 0;

function modoClaro() {
  $selector.forEach((el) => el.classList.add("dark-mode"));
  $themeBtn.textContent = "☀️";
  modo = 1;
  ls.setItem("modo", "claro");
}

function modoOscuro() {
  $selector.forEach((el) => el.classList.remove("dark-mode"));
  $themeBtn.textContent = "🌙";
  modo = 0;
  ls.setItem("modo", "oscuro");
}

$themeBtn.addEventListener("click", () => {
  if (modo === 0) {
    modoClaro();
  } else if (modo === 1) {
    modoOscuro();
  }
});

//SECCION 4: TRABAJANDO CON EL OBJETO NAVIGATOR

function seccion4() {
  const nav = navigator;
  const $contenedor4 = d.getElementById("conexion");
  let textoPdf = "";

  const text4 = d.createElement("p");

  text4.textContent = `${nav.userAgent}`;

  (text4.textContent += ` Esta en línea: ${nav.onLine}`),
    (text4.textContent += ` ${nav.languages}`);

  $contenedor4.appendChild(text4);

  const otroContenedor = d.createElement("div"),
    parrafo2 = d.createElement("p");

  otroContenedor.setAttribute("id", "conexion2");

  $contenedor4.appendChild(otroContenedor);
  $contenedor4.appendChild(parrafo2);

  const btnNav = d.createElement("button");

  btnNav.textContent = "Pegar texto desde clipboard";

  otroContenedor.appendChild(btnNav);

  const btnPdf = d.createElement("button");

  btnPdf.textContent = "Generar .Pdf";

  btnPdf.classList.add("btn");

  otroContenedor.insertAdjacentElement("beforeend", btnPdf);

  btnNav.addEventListener("click", () => {
    let textoCopiado = nav.clipboard
      .readText()
      .then((e) => {
        parrafo2.textContent = e;
        textoPdf = e;
      })
      .catch((err) => {
        parrafo2.textContent = err;
      });
  });
  //Crear pdf con API

  btnPdf.addEventListener("click", downloadPdf);

  function downloadPdf() {
    var docDefinition = {
      content: [{ text: textoPdf }],
      defaultStyle: {},
    };
    pdfMake.createPdf(docDefinition).print();
  }
}



//Sección 5: Validación de formulario

const $form = d.querySelector(".contact-form"),
  $inputs = d.querySelectorAll(".contact-form [required]"); //se selecciona la clase y dentro de corchetes los que tengan el atributo selecciondao
 

const nombre = d.getElementById("nombre"), 
 correo = d.getElementById("correo"), 
 asunto = d.getElementById("asunto "),
  comentarios = d.getElementById("comentario");
; 




function cajaNombre(){
  let textoNombre = nombre.value;
  const expresionNombre = new RegExp ("^([A-Za-zÁÉÍÓÚáéíóúÑñ]+ ?){2,4}$");

  if(!expresionNombre.test(textoNombre)){
 mostrarToast(`${nombre.title}`)
} 

}

function cajaCorreo(){
  let textoCorreo = correo.value;

  const expresionCorreo = new RegExp ("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");

  if(!expresionCorreo.test(textoCorreo)){
    mostrarToast(`${correo.title}`)
   };
  }


//Con ayuda de ChatGPT
function mostrarToast(mensaje) {
  const toast = document.getElementById("toast");
  toast.textContent = mensaje //Yo modifiqué esto
  toast.className = "toast show";
  setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
}



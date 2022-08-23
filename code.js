/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt('Ingresa tu nombre');
  
  
  if(datosPersona.nombre == null || datosPersona.nombre == ""){
    alert("Has ingresado un valor incorrecto o has cancelado la opción");
    return false;
  }
  else if (!/^[a-zA-Z]+$/.test(datosPersona.nombre)){
    alert("No ingreses carácteres especiales");
    return false;
  } 
  datosPersona.edad = 2022 - prompt('Ingresa el año en que naciste');

  if(!Number.isInteger(datosPersona.edad)){
    alert("Valor ingresado no corresponde a un número entero")
    return false;
    
  }
  
  datosPersona.ciudad = prompt('En que ciudad vives');

  if(datosPersona.ciudad == null || datosPersona.ciudad == ""){
    alert("Has ingresado un valor incorrecto o has cancelado la opción");
    return false;
  }
  else if (!/^[a-zA-Z]+$/.test(datosPersona.ciudad)){
    alert("No ingreses carácteres especiales");
    return false;
  } 
  datosPersona.interesPorJs = confirm('¿Te interesa Javascript?')? "Sí":"No";
  
  }
  


function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.getElementById('nombre').textContent = datosPersona.nombre;
  document.getElementById('edad').textContent = datosPersona.edad;
  document.getElementById('ciudad').textContent = datosPersona.ciudad;
  document.getElementById('javascript').textContent = datosPersona.interesPorJs;


}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const validar = document.querySelectorAll('.caja');
  const tarjetas = document.getElementById('fila');
  
  if(validar.length === 0){
    
    listado.forEach(list => {
    const card = ` <div class="caja">
                      <img src = ${list.imgUrl} alt=${list.lenguajes}>
                      <p class = "lenguaje">${list.lenguajes}</p>
                      <p class = "bimestre">${list.bimestre}</p>
                      </div>`;
                      
  tarjetas.innerHTML += card;
  
  });
  
  }  else {
    validar.forEach(i => {
    tarjetas.removeChild(i);
    }
  );
  }
  console.log(validar);

  }

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  let cambiarTema = document.getElementById('sitio');
  cambiarTema.classList.toggle('dark');
  


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
const aparecer = document.getElementById('card');
aparecer == document.activeElement;
document.addEventListener('keypress', logKey);

function logKey(e) {
  if(e.code === "KeyF"){
    console.log(e.code);
    const sobreMi = document.getElementById('sobre-mi');
    sobreMi.style.visibility = "visible";
  }
  console.log(e.code)
}

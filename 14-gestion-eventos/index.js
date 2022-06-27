let boton = document.getElementById("btn-alert")

boton.addEventListener("click", () => alert("Este es el alerta del boton"))


$("#btn-alert").click(() => { 
  console.log("Hola, estoy utilizando jQuery")
})
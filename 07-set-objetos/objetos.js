const datosPersonales = {
  nombre: "Ruperto",
  apellido: "Pesto",
  edad: "55",
  altura: 1.82,
  isdeveloper: true
};

const getEdad = datosPersonales.edad;
console.log(getEdad);

const listaConAmigos = [
  {...datosPersonales},
{
  nombre: "Armando",
  apellido: "Zamarbide",
  edad: "75",
  altura: 1.61,
  isdeveloper: false
},
{
  nombre: "Armando",
  apellido: "Casas",
  edad: "21",
  altura: 1.75,
  isdeveloper: true
}
]

const listasOrdenadas = listaConAmigos.sort((a,b) => b.edad - a.edad)

console.log(listasOrdenadas);

console.log(listaConAmigos);
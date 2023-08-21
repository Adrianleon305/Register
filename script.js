let datos = {
  materia: '',
  nombre: '',
  act: '',
  realizacion: '',
  entrega: '',
  calificacion: '',
  Descripcion: ''
};

function mostrarFormularioTexto() {
  const formulariosTexto = document.getElementById("formulariosTexto");
  formulariosTexto.style.display = "block";
}

function mostrarFormularioExportar() {
  const exportarForm = document.getElementById("exportarForm");
  datos.materia = document.getElementById("materia").value;
  datos.nombre = document.getElementById("nombre").value;
  datos.act = document.getElementById("no").value;
  datos.realizacion = document.getElementById("realizacion").value;
  datos.entrega = document.getElementById("entrega").value;
  datos.calificacion = document.getElementById("calificacion").value;
  datos.Descripcion = document.getElementById("Descripcion").value;

  // Verificar si los campos están vacíos y mostrar advertencias
  if (
    datos.materia === '' ||
    datos.nombre === '' ||
    datos.act === '' ||
    datos.realizacion === '' ||
    datos.entrega === '' ||
    datos.calificacion === '' ||
    datos.Descripcion === ''
  ) {
    alert("Por favor completa todos los campos para poder continuar");
    return; // No continúa si hay campos vacíos
  }

  exportarForm.style.display = "block";
}

function exportarDatos() {
  const filename = datos.materia + "_" + datos.realizacion + ".txt";
  const dataStr = JSON.stringify(datos, null, 2);
  const blob = new Blob([dataStr], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = filename; // Utilizamos el nombre del archivo generado
  a.textContent = "Descargar Datos"; // Texto del enlace
  document.getElementById("exportarForm").innerHTML = ''; // Limpiamos el contenido anterior
  document.getElementById("exportarForm").appendChild(a); // Agregamos el enlace al elemento exportarForm
}

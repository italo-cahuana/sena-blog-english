/*
  Este es tu archivo JavaScript personalizado.
  Bootstrap 5 usa 'DOMContentLoaded' para asegurarse de que el
  DOM (la estructura HTML) esté completamente cargado antes de ejecutar código JS.
*/

document.addEventListener('DOMContentLoaded', (event) => {
    
    // Mostramos un mensaje en la consola del navegador para confirmar que el archivo se cargó.
    // Puedes ver esto presionando F12 en tu navegador y yendo a la pestaña "Consola".
    console.log('DOM completamente cargado y analizado.');
    console.log('El blog de evidencias está listo.');

    // -----------------------------------------------------------------
    // AQUÍ PUEDES AÑADIR TU PROPIO CÓDIGO JAVASCRIPT
    // -----------------------------------------------------------------
    
    /*
      Ejemplo de futura funcionalidad:
      Si en el futuro quieres que los enlaces se abran en un 'modal' (ventana emergente)
      en lugar de una nueva pestaña, podrías añadir ese código aquí.
      
      Por ejemplo, para capturar clics en todos los botones:
      
      const botonesVer = document.querySelectorAll('.btn-primary');
      
      botonesVer.forEach(boton => {
          boton.addEventListener('click', (e) => {
              // Previene que el enlace se abra por defecto
              e.preventDefault(); 
              
              // Obtiene el enlace del botón
              const url = e.target.href;
              
              // Aquí iría el código para abrir un modal de Bootstrap
              // y cargar la 'url' dentro de él.
              console.log('Se hizo clic en un botón. La URL es:', url);
              
              // Por ahora, solo abrimos en una nueva pestaña si el enlace no es '#'
              if (url !== '#') {
                  window.open(url, '_blank');
              } else {
                  alert('¡Aún no has añadido un enlace a esta sección!');
              }
          });
      });
    */

});
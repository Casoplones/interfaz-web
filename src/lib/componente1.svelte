<script>
    // Variable para rastrear qué imagen está ampliada
    let enlargedImage = null;
  
    // Función para alternar la ampliación de la imagen
    function toggleEnlarge(image) {
      if (enlargedImage === image) {
        enlargedImage = null; // Si ya está ampliada, se cierra
      } else {
        enlargedImage = image; // Se amplía la imagen seleccionada
      }
    }
  </script>
  
  <style>
    .image-container {
      display: flex;
      gap: 20px;
    }
  
    .image {
      width: 150px;
      height: 100px;
      object-fit: cover;
      cursor: pointer;
      transition: transform 0.3s;
    }
  
    .image.enlarged {
      transform: scale(5);
      z-index: 1000;
    }


  </style>
  
  <div class="image-container">
    <img
      src="src\assets\imagen1.jpeg"
      alt="Imagen 1"
      class="image {enlargedImage === 1 ? 'enlarged' : ''}"
      on:click={() => toggleEnlarge(1)}
    />
    <img
      src="src\assets\imagen2.jpeg"
      alt="Imagen 2"
      class="image {enlargedImage === 2 ? 'enlarged' : ''}"
      on:click={() => toggleEnlarge(2)}
    />
  </div>
<script>
  let imagenSeleccionada = ''; // Almacena la imagen seleccionada

  // Función para seleccionar una imagen
  const seleccionarImagen = (src) => {
    imagenSeleccionada = src;
  };

  // Función para cerrar la vista de la imagen seleccionada
  const cerrarImagen = () => {
    imagenSeleccionada = '';
  };
</script>

<div class="galeria">
  <img src="../src/assets/alberto.jpeg" alt="Foto 1" on:click={() => seleccionarImagen('../src/assets/alberto.jpeg')} />
  <img src="../src/assets/alberto.jpeg" alt="Foto 2" on:click={() => seleccionarImagen('../src/assets/alberto.jpeg')} />
</div>

{#if imagenSeleccionada}
  <div class="overlay" on:click={cerrarImagen}>
    <div class="modal-imagen" on:click|stopPropagation>
      <img src={imagenSeleccionada} alt="Imagen seleccionada" />
      <button class="cerrar" on:click={cerrarImagen}>X</button>
    </div>
  </div>
{/if}

<style>
  .galeria {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
  }

  .galeria img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    cursor: pointer;
    transition: transform 0.2s;
  }

  .galeria img:hover {
    transform: scale(1.05);
  }

  .modal-imagen {
    position: relative;
    max-width: 80%;
    max-height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-imagen img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 10px;
  }

  .cerrar {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #fff;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    font-weight: bold;
  }
</style>
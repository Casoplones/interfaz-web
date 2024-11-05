<script>
    let esModoOscuro = false;
  
    const alternarModo = () => {
      esModoOscuro = !esModoOscuro;
    };
  </script>
  
  <div class="contenedor" class:oscuro={esModoOscuro}>
    <h2>Toogle Dark Mode</h2>
    <p>El modo actual es: {esModoOscuro ? 'Oscuro' : 'Claro'}</p>
    <button on:click={alternarModo}>Alternar Modo</button>
  </div>
  
  <style>
    .contenedor {
      text-align: center;
      padding: 1rem;
      border: 2px solid #333;
      border-radius: 8px;
      width: 300px;
      margin: 1rem auto;
      font-family: Arial, sans-serif;
      background-color: white;
      color: black;
    }
  
    button {
      margin: 0.5rem;
      padding: 0.5rem 1rem;
      font-size: 1rem;
    }
  
    .oscuro {
      background-color: #2c2c2c;
      color: white;
    }
  </style>
  
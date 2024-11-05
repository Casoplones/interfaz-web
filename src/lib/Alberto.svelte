<script>
    let contador = 0;
  
    const incrementar = () => {
      contador += 1;
    };
  
    const decrementar = () => {
      contador -= 1;
    };
  </script>
  
  <div class="contador">
    <h2>Alberto Contador</h2>
    <p>{contador}</p>
    <button on:click={incrementar}>Incrementar</button>
    <button on:click={decrementar}>Decrementar</button>
  </div>
  
  <style>
    .contador {
      text-align: center;
      padding: 1rem;
      border: 2px solid #333;
      border-radius: 8px;
      width: 400px;
      margin: 1rem auto;
      font-family: Arial, sans-serif;
    }
  
    button {
      margin: 0.5rem;
      padding: 0.5rem 1rem;
      font-size: 1rem;
    }
  </style>
  
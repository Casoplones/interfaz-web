<script>
    let tareas = ""; 
    let dificultad = "Facil"; 
    let nombretarea = [];
    function agregarTarea() {
      if (tareas.trim() !== "") {
        nombretarea = [...nombretarea, { name: tareas, dificultad }];
        tareas = ""; 
      }
    }
  </script>
  
  <div class="contenedor_lista">
    <input
      type="text"
      placeholder="Escribe el nombre de la tarea"
      bind:value={tareas}
    />
  
    <select bind:value={dificultad}>
      <option value="Facil">Fácil</option>
      <option value="Media">Media</option>
      <option value="Dificil">Difícil</option>
    </select>
    
    <button on:click={agregarTarea}>Agregar Tarea</button>
  
    <div class="task-list">
      <h3>Lista de Tareas:</h3>
      <ul>
        {#each nombretarea as tarea}
          <li>{tarea.name} - Dificultad: {tarea.dificultad}</li>
        {/each}
      </ul>
    </div>
  </div>
  
  <style>
      .facil {
    color: green;
  }

  .media {
    color: yellow;
  }

  .dificil {
    color: red;
  }
  </style>
  
<script>
  let tareas = [];
  let tarea = '';
  let prioridad = 1;

  function agregarTarea() {
      if (tarea.trim() !== '') {
          tareas = [...tareas, { tarea, prioridad }];
          tarea = '';
          prioridad = 1;
      }
  }

  $: tareas = tareas.sort((a, b) => a.prioridad - b.prioridad);

  function eliminarTarea(index) {
      tareas = tareas.filter((tarea, i) => i !== index);
  } 
</script>

<div>
  <h1>Lista de tareas con propiedad</h1>
  <input type="text" bind:value={tarea} placeholder="Agregar tarea" />
  <select bind:value={prioridad}>
      <option value="1">Alta</option>
      <option value="2">Media</option>
      <option value="3">Baja</option>
  </select>
  <button on:click={agregarTarea}>Agregar tarea</button>
  <ul>
      {#each tareas as { tarea, prioridad }, index}
        <li class={prioridad === '1' ? 'alta' : prioridad === '2' ? 'media' : 'baja'}>
          Tarea: {tarea}, Prioridad: {prioridad}
          <button on:click={() => eliminarTarea(index)}>Eliminar</button>
        </li>
      {/each}
  </ul>
</div>

<style>
  h1 {
    color: white;
    font-size: 45px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  .alta {
    background-color: lightcyan;
    color: red;
    font-weight: bold;
    padding: 10px;
    margin: 5px;
    border-radius: 10px;
  }
  .media {
    background-color: lightcyan;
    color: orange;
    font-weight: bold;
    padding: 10px;
    margin: 5px;
    border-radius: 10px;
  }
  .baja {
    background-color: lightcyan;
    color: green;
    font-weight: bold;
    padding: 10px;
    margin: 5px;
    border-radius: 10px;
  }
</style>
<script>
  import { tareas } from '../stores/store.js';

  export let index = 0;

  function eliminarTarea() {
      $tareas = $tareas.filter((tarea, i) => i !== index);
  } 
</script>

<div>
  <button on:click={eliminarTarea}>Eliminar</button>
</div>
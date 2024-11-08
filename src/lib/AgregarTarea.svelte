<script>
  import { tareas } from '../stores/store.js';
  import { get } from 'svelte/store';
  
  export let tarea;
  export let prioridad;

  function agregarTarea() {
    if ( tarea !== '') {
      tareas.update(tareas => [...tareas, { tarea, prioridad }]);
      tarea = '';
      prioridad = 1;
    }
  }
  $: $tareas = [...$tareas].sort((a, b) => a.prioridad - b.prioridad);
</script>

<div>
  <button on:click={agregarTarea}>Agregar tarea</button>
</div>
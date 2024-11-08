<script>
  import { tareas } from '../stores/store.js';
  import { get } from 'svelte/store';
  import AgregarTarea from './AgregarTarea.svelte';
  import EliminarTarea from './EliminarTarea.svelte';

  let tarea = '';
  let prioridad = 1; 
  
  $:console.log(get(tareas));
  
</script>

<div>
  <h1>Lista de tareas con propiedad</h1>
  <div class="tareas-container"> 
    <input type="text" bind:value={tarea} placeholder="Agregar tarea" />
    <select bind:value={prioridad}>
        <option value="1">Alta</option>
        <option value="2">Media</option>
        <option value="3">Baja</option>
    </select>
    <AgregarTarea tarea = {tarea} prioridad = {prioridad} />
  </div>
    <ul>
        {#each $tareas as { tarea, prioridad }, index}
          <li class={prioridad === '1' ? 'alta' : prioridad === '2' ? 'media' : 'baja'}>
            <p>Tarea: {tarea}, Prioridad: {prioridad}</p>
            <EliminarTarea  index = {index}/>
          </li>
        {/each}
    </ul>
</div>

<style>
  .tareas-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border: 2px solid #333;
    border-radius: 8px;
  }
  input {
    padding: 10px;
    margin: 5px;
    border-radius: 10px;
  }
  select {
    padding: 10px;
    margin: 5px;
    border-radius: 10px;
  }
  h1 {
    color: white;
    font-size: 45px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  p {
    margin: 5px;
  }
  .alta {
    background: linear-gradient(to right, white, red);
    color: red;
    font-weight: bold;
    padding: 5px;
    margin: 5px;
    border-radius: 10px;
  }
  .media {
    background: linear-gradient(to right, white, orange);
    color: orange;
    font-weight: bold;
    padding: 5px;
    margin: 5px;
    border-radius: 10px;
  }
  .baja {
    background: linear-gradient(to right, white, green);
    color: green;
    font-weight: bold;
    padding: 5px;
    margin: 5px;
    border-radius: 10px;
  }
</style>
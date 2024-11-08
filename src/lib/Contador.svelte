<script>
  import { count } from '../stores/store';
  import Incrementar from './Incrementar.svelte';
  import Decrementar from './Decrementar.svelte';
</script>
  
<div class="contador">
  <h2>Contador</h2>
  <p>{$count}</p>
  <Incrementar />
  <Decrementar />
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
</style>
  
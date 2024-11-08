<script>
  import { count } from '../stores/store';
  function increment () {
    count.update(n => n + 1);
  }
</script>

<div class="incrementar">
  <button on:click={increment}>Incrementar</button>
</div>

<style>
  .incrementar {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border: 2px solid #333;
    border-radius: 8px;
  }
</style>
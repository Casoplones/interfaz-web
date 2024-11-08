<script>
  import { count } from '../stores/store';
  function decrement () {
    count.update(n => n - 1);
  }
</script>

<div class="decrementar">
  <button on:click={decrement}>Decrementar</button>
</div>

<style>
  .decrementar {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border: 2px solid #333;
    border-radius: 8px;
  }
</style>
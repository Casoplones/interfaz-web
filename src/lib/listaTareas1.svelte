<script>
    let task = ""; // variable para almacenar la nueva tarea
    let isImportant = false; // variable para determinar si la tarea es importante o no
    let tasks = []; // lista de tareas
  
    function addTask() {
        if (task.trim()) {
            tasks = [
                ...tasks,
                { text: task, important: isImportant }
            ];
            task = ""; // reiniciar el input
            isImportant = false; // reiniciar la importancia
        }
    }
  
    function removeTask(index) {
        tasks = tasks.filter((_, i) => i !== index);
    }
</script>

<style>
  
    .container {
      max-width: 400px;
      margin: 20px auto;
      padding: 20px;
      border: 2px solid #ccc;
      border-radius: 10px;
      background-color: #f9f9f9;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    }
    
    h2{
        font-size: 40px;
        margin: 0px;
        margin-bottom: 10px;
    }
    .input-section {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 15px;
    }
  
    input[type="text"] {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 1em;
      width: 95%;
    }
  
    .button-group {
      display: flex;
      gap: 10px;
    }
  
    button {
      flex: 1;
      padding: 10px;
      color: white;
      border: none;
      border-radius: 5px;
      font-size: 1em;
      cursor: pointer;
      transition: background-color 0.3s;
    }
  
    .important-button {
      background-color: #d9534f;
    }
  
    .important-button:hover {
      background-color: #c9302c;
    }
  
    .not-important-button {
      background-color: #5cb85c;
    }
  
    .not-important-button:hover {
      background-color: #4cae4c;
    }
  
    .task-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  
    .task {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      border-radius: 5px;
    }
  
    
    .important {
      background-color: #ffdddd;
      color: rgb(223, 0, 0);
    }
  
    .not-important {
      background-color: #ddffdd;
      color: #0b0;
    }
  
    .delete-button {
      cursor: pointer;
      font-size: 1.2em;
      color: #b00;
      transition: transform 0.2s;
    }
  
    .delete-button:hover {
      transform: scale(1.2);
}</style>
  
<div class="container">
    <div class="input-group">
        <input
            type="text"
            placeholder="Nueva tarea"
            bind:value={task}
            on:keydown={(e) => e.key === "Enter" && addTask()}
        />
        <label class="checkbox-label">
            <input type="checkbox" bind:checked={isImportant} />
            Importante
        </label>
        <button on:click={addTask}>Agregar</button>
    </div>
    
    <div class="task-list">
        {#each tasks as { text, important }, index}
            <div class="task">
                <p class={important ? "important" : "not-important"}>{text}</p>
                <span class="delete-button" on:click={() => removeTask(index)}>❌</span>
            </div>
        {/each}
    </div>
</div>

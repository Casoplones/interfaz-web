<script>
    let task = "";
    let tasks = [];
  
    function addTask(important) {
      if (task.trim()) {
        tasks = [
          ...tasks,
          { text: task, important }
        ];
        task = "";
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
      color: #b00;
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
    }
  </style>
  
  <div class="container">
    <h2>TO-DO LIST  ☑</h2>
    <div class="input-section">
      <input
        type="text"
        placeholder="Nueva tarea"
        bind:value={task}
        on:keydown={(e) => e.key === "Enter" && addTask(false)}
      />
      <div class="button-group">
        <button class="important-button" on:click={() => addTask(true)}>Importante</button>
        <button class="not-important-button" on:click={() => addTask(false)}>No Importante</button>
      </div>
    </div>
  
    <div class="task-list">
      {#each tasks as { text, important }, index}
        <div class="task {important ? 'important' : 'not-important'}">
          <span>{text}</span>
          <span class="delete-button" on:click={() => removeTask(index)}>❌</span>
        </div>
      {/each}
    </div>
  </div>
  
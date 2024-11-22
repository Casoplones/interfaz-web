import { writable, derived } from 'svelte/store';

function tareasStore(){
  const { subscribe, set, update} = writable([]);

  return{
    subscribe, 

    listarTareas: () => update(tareas => tareas),

    agregarTarea: (tarea) => update(tareas => {
      const nuevaTarea = { id: tareas.length + 1, ...tarea, estado: false };
      return [...tareas, nuevaTarea];
    }),

    actualizarTarea: (id, tarea) => update(tareas => {
      const tareaEditada = tareas.map(tarea => tarea.id === id ? {...tarea, ...tarea} : tarea);
      return tareaEditada;
    }),

    eliminarTarea: (id) => update(tareas => tareas.filter(tarea => tarea.id !== id)),

    }

    reset : () => set([])
}

export const listaTareas = tareasStore();
export const numeroClientes = derived(listaTareas, ($listaTareas) => $listaTareas.length);

export let count = writable(0);
export let tareas = writable([]);
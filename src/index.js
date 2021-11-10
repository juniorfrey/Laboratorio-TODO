import './style.css';
// Importaciones de clases
import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './components/componentes';

//? Declaraciones

export const todoList = new TodoList();


const tarea = new Todo('Aprender javascript');

tarea.completado = false;

todoList.nuevoTodo( tarea );

console.log(todoList);

crearTodoHtml( tarea );



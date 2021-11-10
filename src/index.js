import './style.css';
// Importaciones de clases
import { Todo, TodoList } from './classes'

//? Declaraciones

const todoList = new TodoList();


const tarea = new Todo('Aprender javascript');
const tarea2 = new Todo('Hacer el trabajo de algebra');


todoList.nuevoTodo( tarea );
todoList.nuevoTodo( tarea2 );
console.log(todoList);



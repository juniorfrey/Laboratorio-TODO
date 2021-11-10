import './style.css';
// Importaciones de clases
import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './components/componentes';

//? Declaraciones

export const todoList = new TodoList();
console.log(todoList.todos);

todoList.todos.forEach(todo => crearTodoHtml( todo ));





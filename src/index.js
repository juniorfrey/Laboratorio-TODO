import './style.css';
// Importaciones de clases
import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './components/componentes';

//? Declaraciones

export const todoList = new TodoList();
console.log(todoList.todos);

todoList.todos.forEach(todo => crearTodoHtml( todo ));

const newTodo = new Todo('prueba');
todoList.todos[0].imprimirClase();
console.log('todos', todoList.todos);





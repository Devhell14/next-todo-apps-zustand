import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid';
import { addTodo, deleteTodo, editTodo } from '@/api'; 
import { Todo } from '@/types/tasks';

  interface TodoStore {
    todos: Todo[];
    addTodo: (text: string) => void;
    editTodo: (id: string, newText: string) => void;
    deleteTodo: (id: string) => void;
  }
  
  const useTodoStore = create<TodoStore>((set) => ({
    todos: [],
    addTodo: async (text) => {
      await addTodo({
        id: uuidv4(),
        text: text,
      });
      set((state) => ({ todos: [...state.todos, { id: uuidv4(), text }] }));
    },
    editTodo: async (id, newText) => {
      await editTodo({
        id: id,
        text: newText,
      });
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, text: newText } : todo
        ),
      }));
    },
    deleteTodo: async (id) => {
      await deleteTodo(id);
      set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) }));
    },
  }));
  
  export default useTodoStore;
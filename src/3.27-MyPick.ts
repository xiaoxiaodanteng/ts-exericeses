/**
 * Implement the built-in Pick<T, K> generic without using it.

Constructs a type by picking the set of properties K from T

For example:

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
 */

// K约束为T的key
type MyPick<T, K extends keyof T> = {
  [key in keyof T as key extends K ? key : never]: T[key]
}

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo1: TodoPreview = {
  title: 'Clean room',
  completed: false,
}

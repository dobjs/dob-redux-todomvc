import { createReduxStore } from "dob-redux"
import Todo from "./todo"

const { store, actions } = createReduxStore({
  todo: Todo
})

export { store, actions }

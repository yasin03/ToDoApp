import axios from "axios";

const getToDos = async () => {
  return await axios.get(
    "https://63209402e3bdd81d8efd9b91.mockapi.io/api/v1/todos"
  );
};

const createToDo = async (todo) => {
  return await axios.post(
    "https://63209402e3bdd81d8efd9b91.mockapi.io/api/v1/todos",
    todo
  );
};
const updateToDo = async (todo) => {
  return await axios.put(
    `https://63209402e3bdd81d8efd9b91.mockapi.io/api/v1/todos/${todo.id}`,
    todo
  );
};
const deleteToDo = async (id) => {
  return await axios.delete(
    `https://63209402e3bdd81d8efd9b91.mockapi.io/api/v1/todos/${id}`
  );
};

export { getToDos, createToDo, updateToDo, deleteToDo };

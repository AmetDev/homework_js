// Promise.all([
//     new Promise(),
//     new Promise(),
//     new Promise()
// ]);

//fulfilled - если все промисы со статусом фуллфил
//rejected  - вернет если хотяб один будет из промисов rejected
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'
const todosIds =[43, 10, 5, 100, 101]
const dataContainer = document.querySelector('#data-container')
const createTodoElement = (text) => {
    const todoElement = document.createElement('li');
    const todoElementAnchor = document.createElement('a');
    todoElementAnchor.href = '#';
    todoElementAnchor.textContent = text;
    todoElement.append(todoElementAnchor);
    return todoElement;
}
const getTodosByIds = (ids) => {
    const request = ids.map((id) => fetch(`${TODOS_URL}/${id}`))
    Promise.all(request)
        .then((responses) => {
           const dataResult = responses.map((responses) => responses.json())
            return Promise.all(dataResult);

        })
        .then((todos) => {
            console.log('todos', todos)
            todos.forEach((todo) => {
                const todoHTML = createTodoElement(todo.title);
                dataContainer.append(todoHTML)
            })
        })
        .catch((error) =>  {
            console.log(error)
        })
}
getTodosByIds(todosIds);
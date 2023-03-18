//fetch
//fetch(url);
//GET, POST, RESULT
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'
const createTodoElement = (text) => {
    const todoElement = document.createElement('li');
    const todoElementAnchor = document.createElement('a');
    todoElementAnchor.href = '#';
    todoElementAnchor.textContent = text;
    todoElement.append(todoElementAnchor);
    return todoElement;
}
const dataContainer = document.querySelector('#data-container')
const toggleLoader = () => {
    const loaderHTML = document.querySelector('#loader');
    const isHidden = loaderHTML.hasAttribute('hidden')
    if(isHidden) {
        loaderHTML.removeAttribute('hidden')
    } else {
        loaderHTML.setAttribute('hidden','')
    }
}
const getAllTodos = () =>{
    toggleLoader()
    const result = fetch(TODOS_URL, {
        method: 'GET',
    })
    console.log(result)
    result
        .then((response) =>{
            console.log(response)
            if(!response.ok) {
                throw new Error('ERROR!');
            }
            return response.json();
        })
        .then((todos) => {
            console.log(todos)
            todos.forEach((todo) => {
                const todoHTML = createTodoElement(todo.title)
                dataContainer.append(todoHTML)

            })
            console.log(todos)
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() =>{
            toggleLoader()
        })
}

getAllTodos()

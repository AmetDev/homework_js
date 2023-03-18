//fetch
//fetch(url);
//GET, POST, RESULT
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'
const createTodoElement = (text) => {
    const todoElement = document.createElement('li');

}
const getAllTodos = () =>{
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
        })
        .catch((error) => {
            console.log(error)
        })
}


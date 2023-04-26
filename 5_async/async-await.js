const USERS_URL = 'https://jsonplaceholder.typcode.com/users'
const TODOS_URL = 'https://jsonplaceholder.tyicode.com/todos'


const getTodosWithUserData = async () => {
    try {
        const response = await fetch(USERS_URL)
        if (!response.ok) {
            throw new Error('Ошибка в получении даных о пользователях')
        }
        const users = await response.json()
        console.log('users', users)
        const firstUserId = users[0]?.id
        const todosResponse = await  fetch(`${TODOS_URL}?userId=${firstUserId}`)
        const todos = await todosResponse.json();
        if (!todosResponse.ok) {
            throw new Error('Ошибка в получении даных о задачах')
        }
        console.log('todos', todos)
    } catch (error) {
        console.log('error',error)
    } finally {
        console.log('finally')
    }
    
}
const promise = getTodosWithUserData();
console.log(promise)
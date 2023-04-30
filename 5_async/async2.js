const userFetch = fetch('https://jsonplaceholder.typicode.com/users')
const aFunc =  async () => {
    try {
        return await userFetch.then(data => data.json())        
    } catch (error) {
        throw Error('ERROR >>>',error)
    }

}
//aFunc().then(data => console.log(data))
const todosFetch = fetch('https://jsonplaceholder.typicode.com/todos')

const  twoAFunc = async (aFunc) => {
    try {
        const todosJson = await todosFetch.then(data => data.json())
        const todosValue =  todosJson.find(element => element.id == 10)
        //console.log(todosValue)
        const userData = await aFunc.then(data => data.find(data => data.id == 10))
        const allInfoOfUser = {...userData, ...todosValue}
        console.log(allInfoOfUser)
        console.log(userData)
    let parent = document.querySelector('#parent');
                let p = document.createElement('p');
                p.innerHTML = ` name user:${allInfoOfUser.name}`;
                parent.appendChild(p);
                let p1 = document.createElement('p');
                p1.innerHTML = ` email user:${allInfoOfUser.email}`;
                parent.appendChild(p1);
                let p2 = document.createElement('p');
                p2.innerHTML = ` title user:${allInfoOfUser.title}`;
                parent.appendChild(p2);    
    } catch (error) {
        throw Error('Error >>>', error)
    }
    //console.log(aFunc.then(data => console.log(data)))
    
}
twoAFunc(aFunc())
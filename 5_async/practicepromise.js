console.log("hello world")
const USER_URL = 'https://jsonplaceholder.typicode.com/users'
const userfetch = fetch(USER_URL)
    .then(response => response.json())
    .then(data => {
        const jsuser = data;
   
        const getFamilyNumber = (id) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const number = jsuser.find(res => res.id === id)
                    if(number) {
                        resolve(number)
                    } else {
                        reject(Error('не найдено'))
                    }
                }, 0)
            })
        }
        const valuegetFamilyNUmber =  getFamilyNumber(1)
        valuegetFamilyNUmber
        .then(data2 => {
                return new Promise ((resolve, reject) => {
                    setTimeout(() => {
                        resolve(data2)
                    }) 
                })
        }).then(res => {
            const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'
            const POST_FETCH = fetch(POSTS_URL)
            POST_FETCH.then(response => response.json()).then(data => {
                const date1 = data
                const dete2 = date1.find(element => element.id == res.id) 
                const infoTitle = dete2.title
                const infoBody = dete2.body
                res.titleUser = infoTitle
                res.body = infoBody
                console.log(res)
                let parent = document.querySelector('#parent');
                let p = document.createElement('p');
                p.innerHTML = `${res.body}`;
                parent.appendChild(p);
            })
        })
       
    })
    .catch(reject => console.log(reject))


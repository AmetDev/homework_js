// console.log("Start")
// console.log("start 2")

// function Timeout2() {
// 	console.log('timeout2sec')
// }

// setTimeout(() => {
// 	console.log("inside timeout...after 2000 seconds")
// }, 2000);
// setTimeout(Timeout2, 2000)

// console.log('end')

// setTimeout(() => {
// 	console.log('set 1')
// }, 2000)
// const p = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		const backendData = {
// 			server: 'aws',
// 			typedate: 'arrays'
// 		}
// 	resolve(backendData)
// 	}, 2000)
	
// })
// p.then(data => {
// 	const p2 = new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			data.modified = true
// 			resolve(data)
// 			console.log('p2') 
// 			//console.log('Data received', data)
// 		}, 2000)
// 	})
// 	p2.then(Clientdata => {
// 		console.log(Clientdata)
// 	})
// })
// p.then(data => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			data.modified = true
// 			resolve(data)
// 			console.log('p2') 
// 			//console.log('Data received', data)
// 		}, 2000)
// 	})
// }).then(Clientdata => {
// 	console.log(Clientdata)
// 	Clientdata.fromPromisep3 = 'level3'
// 	return Clientdata
// }).then((modifiedClient) => {
// 	console.log('p4', modifiedClient)
// }).catch(error => {
// 	console.error('Error: ', error)
// }).finally(()=>{
// 	console.log('Finally')
// })
const sleep = ms => {
	return new Promise(resolve => {
		setTimeout(() => resolve(), ms)
	})
}
sleep(2000).then(() => {
	console.log('After 2 second')
})
sleep(3000).then(() => {
	console.log('After 3 second')
})

Promise.all([sleep(2000), sleep(5000)]).then(() => {
		console.log('All promises')
	})
Promise.race([sleep(2000), sleep(5000)]).then(() => {
		console.log('Race promises')
	})
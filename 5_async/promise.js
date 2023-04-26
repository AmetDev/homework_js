console.log('Start')
console.log('End')
window.setTimeout(() => {
  console.log("Async by 2000")
}, 2000);
window.setTimeout(()=>{
  console.log('async by 2000')
}, 5000)
console.log('text')

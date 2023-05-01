import { checkLS, showMessage} from "./index.js";
if(!checkLS()) console.log(showMessage('проблема'))

const btn = document.querySelector('.out_block-2')
btn.addEventListener("click", () => {
    console.log('click')
})

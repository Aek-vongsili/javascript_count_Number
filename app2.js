let count = 0
let number = document.querySelector("#number")
const btn = document.querySelectorAll(".btn")

btn.forEach(btns => {
    btns.addEventListener('click',function(e){
        const style = e.currentTarget.classList;
        if(style.contains('minus')){
            count--
        }
        else if(style.contains('plus')){
            count++
        }
        else{
            count=0
        }
        if(count<0){
            number.style.color="red"
        }
        else if(count>0){
            number.style.color="green"
        }
        else if(count===0){
            number.style.color="black"
        }
        number.textContent=count
        
    })
});
// HOME - PAGE
const open_btn = document.querySelector('.open-btn')
const year_txt = document.querySelectorAll('.year-text')

open_btn.addEventListener('click', () =>{
    for(let i = 0; i < 4; i++){
        year_txt[i].style.transform = "rotateX(-270deg)"
    }
})
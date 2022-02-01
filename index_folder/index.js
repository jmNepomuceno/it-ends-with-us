// HOME - PAGE
const open_btn = document.querySelector('.open-btn')

const year_txt = document.querySelectorAll('.year-text')

const notification_div = document.querySelector('.notification-div')
const notif_div = document.querySelector('.notification-div .notif-div')

const f_r_div = document.querySelector('.friend-request-div')
const f_r_accept_btn = document.querySelector('.friend-request-div .btn-primary')
const f_r_accept_div = document.querySelector('.f-r-accept-div')

let f_r_div_click = false


open_btn.addEventListener('click', () =>{
    for(let i = 0; i < 4; i++){
        year_txt[i].style.transform = "rotateX(-270deg)"
    }

    open_btn.style.pointerEvents = "none"
    open_btn.style.opacity = "0.1"

    let i = 1;
    let year_rolling_timer = setInterval(()=>{
        if(i == 7){
            clearInterval(year_rolling_timer)
            notification_div.style.opacity = "0.7"
            notification_div.style.pointerEvents = "auto"
            notification_div.style.cursor = "pointer"
            notif_div.style.display = "block"
        }
        i++;
    },100)
})

notification_div.addEventListener('click', () =>{
    notif_div.style.display = "none"

    if(!f_r_div_click){
        f_r_div.style.display = "block"
        f_r_div_click = true
    }else{
        f_r_div.style.display = "none"
        f_r_div_click = false
    }

})

f_r_accept_btn.addEventListener('click', () =>{
    f_r_accept_div.style.top = "2%"
    f_r_div.style.display = "none"
})
// MAIN BOOK
const book_section = document.querySelector('.book-section')

// BOOK PAGES 
const pages_div = document.querySelector('.pages-div')
const prev_btn = document.querySelector(".pages-div .prev-btn")
const next_btn = document.querySelector(".pages-div .next-btn")
const book = document.querySelector(".pages-div .pages-book-div")

const page_1 = document.querySelector(".pages-div #page-1")
const page_2 = document.querySelector(".pages-div #page-2")
const page_3 = document.querySelector(".pages-div #page-3")
const page_4 = document.querySelector(".pages-div #page-4")
const page_5 = document.querySelector(".pages-div #page-5")
const page_6 = document.querySelector(".pages-div #page-6")
const page_7 = document.querySelector(".pages-div #page-7")
const page_8 = document.querySelector(".pages-div #page-8")
const page_9 = document.querySelector(".pages-div #page-9")
const page_10 = document.querySelector(".pages-div #page-10")

let currentLocation = 1;
let numOfPapers = 10;
let max_location = numOfPapers + 1;

// mobile book
const pages_div_mobile = document.querySelector('.mobile-book')
const prev_btn_mobile = document.querySelector(".mobile-book .prev-btn")
const next_btn_mobile = document.querySelector(".mobile-book .next-btn")
const book_mobile = document.querySelector(".mobile-book .pages-book-div")

const page_1_mobile = document.querySelector(".mobile-book #page-1")
const page_2_mobile = document.querySelector(".mobile-book #page-2")
const page_3_mobile = document.querySelector(".mobile-book #page-3")
const page_4_mobile = document.querySelector(".mobile-book #page-4")
const page_5_mobile = document.querySelector(".mobile-book #page-5")
const page_6_mobile = document.querySelector(".mobile-book #page-6")
const page_7_mobile = document.querySelector(".mobile-book #page-7")
const page_8_mobile = document.querySelector(".mobile-book #page-8")
const page_9_mobile = document.querySelector(".mobile-book #page-9")
const page_10_mobile = document.querySelector(".mobile-book #page-10")

let currentLocation_mobile = 1;
let numOfPapers_mobile = 10;
let max_location_mobile = numOfPapers + 0.5;

// 
const open_book_btn = document.querySelector('.open-book-btn')
let first_open_book = true

// PAGES CONTENTS

// BACK 1 CONTENT
const view_btns = document.querySelectorAll('.contents-div .view_btn')
const contents_dates = document.querySelectorAll('.contents-div .contents-date')
const contents_body = document.querySelectorAll('.contents-div section')


const openBook = () =>{
    book.style.transform = "translateX(50%)";
    prev_btn.style.transform = "translateX(-180px)"
    next_btn.style.transform = "translateX(180px)"
}

const closeBook = (isAtBeginning) =>{
    if(isAtBeginning){
        book.style.transform = "translateX(0%)";
        pages_div.style.visibility = "hidden"
        book_section.style.display = "flex"

        open_book_btn.style.pointerEvents = "auto"
        open_book_btn.style.opacity = "1"
        first_open_book = true
    }else{
        book.style.transform = "translateX(100%)";
    }
    prev_btn.style.transform = "translateX(0px)"
    next_btn.style.transform = "translateX(0px)"


}

const goNextPage = (first) =>{
    pages_div.style.visibility = "visible"
    book_section.style.display = "none"
    first_open_book = false
    open_book_btn.style.pointerEvents = "none"
    open_book_btn.style.opacity = "0.3"
    
    if(currentLocation < max_location){
        switch(currentLocation){
            case 1:
                openBook();
                page_1.classList.add('flipped')
                page_1.style.zIndex = 1
                break;
            case 2:
                page_2.classList.add('flipped')
                page_2.style.zIndex = 2
                break;
            case 3:
                page_3.classList.add('flipped')
                page_3.style.zIndex = 3
                break;
            case 4:
                page_4.classList.add('flipped')
                page_4.style.zIndex = 4
                break;
            case 5:
                page_5.classList.add('flipped')
                page_5.style.zIndex = 5
                break;
            case 6:
                page_6.classList.add('flipped')
                page_6.style.zIndex = 6
                break;
            case 7:
                page_7.classList.add('flipped')
                page_7.style.zIndex = 7
                break;
            case 8:
                page_8.classList.add('flipped')
                page_8.style.zIndex = 8
                break;
            case 9:
                page_9.classList.add('flipped')
                page_9.style.zIndex = 9
                break;
            case 10:
                page_10.classList.add('flipped')
                page_10.style.zIndex = 10
                closeBook();
                break;
        }
        currentLocation++;
    }
}

const goPrevBtn = () => {
    if(currentLocation > 1){
        switch(currentLocation){
            case 2: 
                closeBook(true);
                page_1.classList.remove("flipped")
                page_1.style.zIndex = 10;
                break;
            case 3: 
                page_2.classList.remove("flipped")
                page_2.style.zIndex = 9;
                break;
            case 4: 
                page_3.classList.remove("flipped")
                page_3.style.zIndex = 8;
                break;
            case 5: 
                page_4.classList.remove("flipped")
                page_4.style.zIndex = 7;
                break;
            case 6: 
                page_5.classList.remove("flipped")
                page_5.style.zIndex = 6;
                break;

            case 7: 
                page_6.classList.remove("flipped")
                page_6.style.zIndex = 5;
                break;
            case 8: 
                page_7.classList.remove("flipped")
                page_7.style.zIndex = 4;
                break;
            case 9: 
                page_8.classList.remove("flipped")
                page_8.style.zIndex = 3;
                break;
            case 10: 
                page_9.classList.remove("flipped")
                page_9.style.zIndex = 2;
                break;
            case 11: 
                openBook()
                page_10.classList.remove("flipped")
                page_10.style.zIndex = 1;
                break;
        }
        currentLocation--;
    }
}

prev_btn.addEventListener('click', goPrevBtn)
next_btn.addEventListener('click', goNextPage)

// mobile buttons add event listeners

const goNextPage_mobile = (first) =>{
    pages_div_mobile.style.visibility = "visible"
    book_section.style.display = "none"
    open_book_btn.style.pointerEvents = "none"
    open_book_btn.style.opacity = "0.3"
    
    if(currentLocation_mobile < max_location_mobile){
        switch(currentLocation_mobile){
            case 1:
                page_1_mobile.classList.add('flipped')
                page_1_mobile.style.zIndex = 1
                book_mobile.style.left = "100%"
                break;
            case 1.5:
                book_mobile.style.left = "0"
                break;
            case 2:
                page_2_mobile.classList.add('flipped')
                page_2_mobile.style.zIndex = 2
                book_mobile.style.left = "100%"
                break;
            case 2.5:
                book_mobile.style.left = "0"
                break;
            case 3:
                page_3_mobile.classList.add('flipped')
                page_3_mobile.style.zIndex = 3
                book_mobile.style.left = "100%"
                break;

            case 3.5:
                book_mobile.style.left = "0"
                break;
            case 4:
                page_4_mobile.classList.add('flipped')
                page_4_mobile.style.zIndex = 4
                book_mobile.style.left = "100%"
                break;
            case 4.5:
                book_mobile.style.left = "0"
                break;
            case 5:
                page_5_mobile.classList.add('flipped')
                page_5_mobile.style.zIndex = 5
                book_mobile.style.left = "100%"
                break;

            // adsf
            
            case 5.5:
                book_mobile.style.left = "0"
                break;
            case 6:
                page_6_mobile.classList.add('flipped')
                page_6_mobile.style.zIndex = 6
                book_mobile.style.left = "100%"
                break;
            case 6.5:
                book_mobile.style.left = "0"
                break;
            case 7:
                page_7_mobile.classList.add('flipped')
                page_7_mobile.style.zIndex = 7
                book_mobile.style.left = "100%"
                break;

            case 7.5:
                book_mobile.style.left = "0"
                break;
            case 8:
                page_8_mobile.classList.add('flipped')
                page_8_mobile.style.zIndex = 8
                book_mobile.style.left = "100%"
                break;
            case 8.5:
                book_mobile.style.left = "0"
                break;
            case 9:
                page_9_mobile.classList.add('flipped')
                page_9_mobile.style.zIndex = 9
                book_mobile.style.left = "100%"
                break;
            case 9.5:
                book_mobile.style.left = "0"
                break;
            case 10:
                page_10_mobile.classList.add('flipped')
                page_10_mobile.style.zIndex = 10
                book_mobile.style.left = "100%"
                break;
        }

        currentLocation_mobile += 0.5
    }
    console.log(currentLocation_mobile , max_location_mobile)
}

const goPrevBtn_mobile = () => {
    // console.log(currentLocation_mobile)
    if(currentLocation_mobile > 1){
        switch(currentLocation_mobile){

            case 1.5:
                pages_div_mobile.style.visibility = "hidden"
                book_section.style.display = "flex"
                open_book_btn.style.pointerEvents = "auto"
                open_book_btn.style.opacity = "1"

                page_1_mobile.classList.remove("flipped")
                page_1_mobile.style.zIndex = 10;
                book_mobile.style.left = "0"
                break;
            case 2:
                book_mobile.style.left = "100%"
                break;
            case 2.5:
                page_2_mobile.classList.remove("flipped")
                page_2_mobile.style.zIndex = 9;
                book_mobile.style.left = "0"
                break;
            case 3: 
                book_mobile.style.left = "100%"
                break;
            case 3.5:
                page_3_mobile.classList.remove("flipped")
                page_3_mobile.style.zIndex = 8;
                book_mobile.style.left = "0"
                break;
            
            case 4: 
                book_mobile.style.left = "100%"
                break;
            case 4.5:
                page_4_mobile.classList.remove("flipped")
                page_4_mobile.style.zIndex = 7;
                book_mobile.style.left = "0"
                break;
            case 5: 
                book_mobile.style.left = "100%"
                break;
            case 5.5:
                page_5_mobile.classList.remove("flipped")
                page_5_mobile.style.zIndex = 6;
                book_mobile.style.left = "0"
                break;

            // asdf

            case 6:
                book_mobile.style.left = "100%"
                break;
            case 6.5:
                page_6_mobile.classList.remove("flipped")
                page_6_mobile.style.zIndex = 5;
                book_mobile.style.left = "0"
                break;
            case 7: 
                book_mobile.style.left = "100%"
                break;
            case 7.5:
                page_7_mobile.classList.remove("flipped")
                page_7_mobile.style.zIndex = 4;
                book_mobile.style.left = "0"
                break;
            
            case 8: 
                book_mobile.style.left = "100%"
                break;
            case 8.5:
                page_8_mobile.classList.remove("flipped")
                page_8_mobile.style.zIndex = 3;
                book_mobile.style.left = "0"
                break;
            case 9: 
                book_mobile.style.left = "100%"
                break;
            case 9.5:
                page_9_mobile.classList.remove("flipped")
                page_9_mobile.style.zIndex = 2;
                book_mobile.style.left = "0"
                break;
            case 10: 
                book_mobile.style.left = "100%"
                break;
            case 10.5:
                page_10_mobile.classList.remove("flipped")
                page_10_mobile.style.zIndex = 1;
                book_mobile.style.left = "0"
                break;

        }
        currentLocation_mobile -= 0.5
    }
}

prev_btn_mobile.addEventListener('click', goPrevBtn_mobile)
next_btn_mobile.addEventListener('click', goNextPage_mobile)


// open book btn
open_book_btn.addEventListener('click', ()=> {
    if(window.innerWidth <= 400 && window.innerHeight <= 700){
        goNextPage_mobile(first_open_book)
    }else{
        goNextPage(first_open_book)
    }
})


// PAGES CONTENTS
/*
    BACK 1 = 0
    FRONT 2 = 1
    BACK 2 = 2
    FRONT 3 = 3
    BACK 3 = 4
    FRONT 4 = 5
    BACK 4 = 6
    FRONT 5 = 7
    BACK 5 = 8
    
    MOBILE
    BACK 1 = 8
    FRONT 2 = 9
    BACK 2 = 10
    FRONT 3 = 11
    BACK 3 = 12
    FRONT 4 = 13
    BACK 4 = 14
    FRONT 5 = 15
    BACK 5 = 8

*/
// BACK 1 CONTENTS
const view_function = (event) =>{
    let index = parseInt(event.target.id)
    console.log(index)
    if(window.innerWidth <= 400 && window.innerHeight <= 700){
        console.log("kyla")
        contents_dates[index].style.display = "block"
        contents_body[index].style.display = "flex"

        view_btns[index].style.display = "none"
    }else{
        contents_dates[index].style.display = "block"
        contents_body[index].style.display = "flex"

        view_btns[index].style.display = "none"
    }
    
}
console.log("December 16, 2021".length)

for(let i = 0; i < 18; i++){
    view_btns[i].addEventListener('click', view_function, false)
}


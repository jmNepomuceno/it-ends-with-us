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

// mobile book
const pages_div_mobile = document.querySelector('.mobile-book')
const prev_btn_mobile = document.querySelector(".mobile-book .prev-btn")
const next_btn_mobile = document.querySelector(".mobile-book .next-btn")
const book_mobile = document.querySelector(".mobile-book .pages-book-div")

const page_1_mobile = document.querySelector(".mobile-book #page-1")
const page_2_mobile = document.querySelector(".mobile-book #page-2")
const page_3_mobile = document.querySelector(".mobile-book #page-3")

let currentLocation = 1;
let numOfPapers = 3;
let max_location = numOfPapers + 1;

// 
const open_book_btn = document.querySelector('.open-book-btn')
let first_open_book = true

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
                page_1.style.zIndex = 3;
                break;
            case 3: 
                page_2.classList.remove("flipped")
                page_2.style.zIndex = 2;
                break;
            case 4: 
                openBook()
                page_3.classList.remove("flipped")
                page_3.style.zIndex = 1;
                break;
        }
        currentLocation--;
    }
}

prev_btn.addEventListener('click', goPrevBtn)
next_btn.addEventListener('click', goNextPage)

// mobile buttons add event listeners
const openBook_mobile = () =>{
    book_mobile.style.transform = "translateX(50%)";
    prev_btn_mobile.style.transform = "translateX(-180px)"
    next_btn_mobile.style.transform = "translateX(180px)"
}

const closeBook_mobile = (isAtBeginning) =>{
    if(isAtBeginning){
        book_mobile.style.transform = "translateX(0%)";
        pages_div_mobile.style.visibility = "hidden"
        book_section.style.display = "flex"

        open_book_btn.style.pointerEvents = "auto"
        open_book_btn.style.opacity = "1"
        first_open_book = true
    }else{
        book_mobile.style.transform = "translateX(100%)";
    }
    prev_btn_mobile.style.transform = "translateX(0px)"
    next_btn_mobile.style.transform = "translateX(0px)"


}

const goNextPage_mobile = (first) =>{

    pages_div_mobile.style.visibility = "visible"
    book_section.style.display = "none"
    first_open_book = false
    open_book_btn.style.pointerEvents = "none"
    open_book_btn.style.opacity = "0.3"
    
    if(currentLocation < max_location){
        switch(currentLocation){
            case 1:
                openBook();
                page_1_mobile.classList.add('flipped')
                page_1_mobile.style.zIndex = 1
                break;
            case 2:
                page_2_mobile.classList.add('flipped')
                page_2_mobile.style.zIndex = 2
                break;
            case 3:
                page_3_mobile.classList.add('flipped')
                page_3_mobile.style.zIndex = 3
                closeBook();
                break;
        }
        currentLocation++;
    }
}

const goPrevBtn_mobile = () => {

    if(currentLocation > 1){
        switch(currentLocation){
            case 2: 
                closeBook(true);
                page_1_mobile.classList.remove("flipped")
                page_1_mobile.style.zIndex = 3;
                break;
            case 3: 
                page_2_mobile.classList.remove("flipped")
                page_2_mobile.style.zIndex = 2;
                break;
            case 4: 
                openBook()
                page_3_mobile.classList.remove("flipped")
                page_3_mobile.style.zIndex = 1;
                break;
        }
        currentLocation--;
    }
}

prev_btn_mobile.addEventListener('click', goPrevBtn_mobile)
next_btn_mobile.addEventListener('click', goNextPage_mobile)


// open book btn
open_book_btn.addEventListener('click', ()=> goNextPage_mobile(first_open_book))
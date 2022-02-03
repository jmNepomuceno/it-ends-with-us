// MAIN BOOK
const book_section = document.querySelector('.book-section')

// BOOK PAGES 
const pages_div = document.querySelector('.pages-div')
const prev_btn = document.querySelector(".prev-btn")
const next_btn = document.querySelector(".next-btn")
const book = document.querySelector(".pages-book-div")

const page_1 = document.querySelector("#page-1")
const page_2 = document.querySelector("#page-2")
const page_3 = document.querySelector("#page-3")

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
        first_open_book = true
    }else{
        book.style.transform = "translateX(100%)";
    }
    prev_btn.style.transform = "translateX(0px)"
    next_btn.style.transform = "translateX(0px)"


}

const goNextPage = (first) =>{
    if(first){
        pages_div.style.visibility = "visible"
        book_section.style.display = "none"
        first_open_book = false
    }
    
    
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

// open book btn
open_book_btn.addEventListener('click', ()=> goNextPage(first_open_book))
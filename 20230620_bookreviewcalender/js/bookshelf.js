console.log(books[3].img);

//HTML -> js
// .book-item > img 를 가져오기
const bookItems = document.getElementsByClassName("book-item"); //.book-item 덩어리 가져오기
let i =0;
for(let bookitem of bookItems) {    //.book-item 하나씩 꺼내기
    const bookItemImg = bookitem.getElementsByTagName("img")[0];    //.book-item > tag 0번째 선택
    bookItemImg.src = books[i].img; //거기에 data.js 에서 데이터 가져와 넣기
    i++;
}

// const bookItems = document.getElementsByClassName("book-item");
// console.log(bookItems);
// bookItems = bookItems[0];
// const bookItemImg = bookItem.getElementsByTagName("img")[0];
// bookItemImg.src = books[3].img;
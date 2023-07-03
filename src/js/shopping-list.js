import BookApi from './services';
// import Pagination from 'tui-pagination';
const bookApi = new BookApi();
const books=document.querySelector(".shopping-list-books");
const categories = bookApi.getBookDetail("643282b1e85766588626a087");
function GetShop(c,Shopname){
    const link=c
    for (element of c) {
        if (element.name==Shopname)
        return element.url;
      }
}
function MakeHTML({book_image="../images/logo.png",title,list_name,description,author,buy_links}){
    //console.log(c);
    const html= 
    `<div class="shopping-list-books-item">
    <div class="shopping-list-books-item-img-div">
    <img src="${book_image}" alt="${title}" class="shopping-list-books-item-img">
    </div>
    <div class="shopping-list-books-item-info">
    <div class="shopping-list-books-item-basic-info">
    <h2 class="shopping-list-books-item-header">${title}</h2>
    <p class="shopping-list-books-item-category">${list_name}</p>
    </div>
    <div class="shopping-list-books-item-description-stop-block">
    <p class="shopping-list-books-item-description">${description}</p>
    </div>
    <p class="shopping-list-books-item-author">${author}</p>
    <div class="shopping-list-books-item-shops">
        <a href="${GetShop(buy_links,"Amazon")}" class="shopping-list-books-item-amazon-svg">
            <svg width="32px" height="11px">
                <use href=""></use>
            </svg>
        </a>
        <a href="${GetShop(buy_links,"Bookshop")}" class="shopping-list-books-item-orange-book-svg">
            <svg width="16px" height="16px">
                <use href=""></use>
            </svg>
        </a>
        <a href="${GetShop(buy_links,"IndieBound")}" class="shopping-list-books-item-black-book-svg">
            <svg width="16px" height="16px">
                <use href=""></use>
            </svg>
        </a>
        </div>
        <a class="shopping-list-books-item-delete-svg-button">
    <svg width="16px" height="16px" class="shopping-list-delete-svg">
        <use href=""></use>
    </svg>
    </a>
</div>
</div>`
return html;
}

export default class ShoppingListMake{ 
    constructor(all){
        this.list=all;
        this.page=1;
        this.count_of_books=4; // в других 3 в мобильном 4.
    }
    clearAll() {
        books.innerHTML = '';
      }

    


    Make(){
        const Items= this.list
        .slice(this.count_of_books*(this.page-1),this.count_of_books*this.page)
        .map(MakeHTML)
        .join();
        books.insertAdjacentHTML('beforeend',Items);
    }
    removeByName(name){
        this.list=this.list.filter((value, index, arr) => {
            if (value.title === name)
            {
                arr.splice(index, 1);
                return true;
            }
                return false;  
        });
    }
    MakeToPage(index){
        this.page=index;
        const Items= this.list
        .slice(this.count_of_books*(this.page-1),this.count_of_books*this.page)
        .map(MakeHTML)
        .join();
        books.insertAdjacentHTML('beforeend',Items);
    }
}






categories.then(i=>{
    const Make= new ShoppingListMake([i,i,i,i,i,i,i,i,i]);
    Make.clearAll();
    Make.MakeToPage(3);
    })











// var pagination = new tui.Pagination('pagination', {
//     totalItems: 500,
//     itemsPerPage: 5,
//     visiblePages: 2
// });

// pagination.on('beforeMove', function(eventData) {
//     return confirm('Go to page ' + eventData.page + '?');
// });

// pagination.on('afterMove', function(eventData) {
//     alert('The current page is ' + eventData.page);
// });

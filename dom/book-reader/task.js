  
const book = document.getElementById('book');
const fontSizeLinksArray = book.querySelectorAll('.font-size');
const colorControl = book.querySelector('.book__control_color');
const colorLinksArray = colorControl.querySelectorAll('.color');
const bgControl = book.querySelector('.book__control_background');
const bgLinksArray = bgControl.querySelectorAll('.color');

fontSizeLinksArray.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        
        fontSizeLinksArray.forEach(font => font.classList.remove('font-size_active'));
        
        item.classList.add('font-size_active');

        book.classList.remove('book_fs-big', 'book_fs-small');
        const fontSize = item.dataset.size;
        if (fontSize) {
            book.classList.add(`book_fs-${fontSize}`);
        };
    });
});

colorLinksArray.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();

        colorLinksArray.forEach(color => color.classList.remove('color_active'));

        item.classList.add('color_active');

        book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');
        const textColor = item.dataset.textColor;
        if (textColor) {
            book.classList.add(`book_color-${textColor}`);
        }
    });   
});

bgLinksArray.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();

        bgLinksArray.forEach(color => color.classList.remove('color_active'));

        item.classList.add('color_active');

        book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
        const bgColor = item.dataset.bgColor;
        if (bgColor) {
            book.classList.add(`book_bg-${bgColor}`);
        }
    });   
});

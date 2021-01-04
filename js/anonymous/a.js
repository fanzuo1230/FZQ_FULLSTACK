class Book{
    constructor(isbn,title,author){
        this.isbn=isbn;
        this.title=title;
        this.author=author;
    }
    display(){
        return `
            ISBN号：${this.isbn}
            Title:${this.title}
            Author:${this.author}
        `
    }
}


const jsDontKnow = new Book ('111','aaa','dsada');
console.log(jsDontKnow.hasOwnProperty)('display');
//找到原型对象
console.log(jsDontKnow.__proto__=Book.prototype)
console.log(jsDontKnow.constructor==Book)
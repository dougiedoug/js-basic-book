function book(title,author,volume,price){
    this.title = title;
    this.author=author;
    this.volume=volume;
    this.price=price;
};
var html= new book('웹 표준의 정석','Ko','608','28,000');
var youtube= new book('유튜브 찍는 법','Ko','608','28,000');
var mtv= new book('엠티비','Ko','608','28,000');

var booklist = [html, youtube, mtv];
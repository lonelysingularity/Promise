let book = {
    topic: "JavaScript",
    edition: 7
}

console.log(book.topic);
console.log(book["edition"]);

book.author = 'abc'
book.contents = {}
// tag: ?.是es6中的新语法判断是否存在这个属性 相同判断还有 in 以及hasOwnProperty
console.log(book.contents?.ch1);// => undefined 
console.log('topic' in book);
console.log(book.hasOwnProperty('edition'));


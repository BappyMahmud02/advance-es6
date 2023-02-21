const numbers = [12,56,87,44] ;
const half = numbers.map(n => n/2)
const thirds = numbers.map(x => x/3);
// console.log(half) ;

const friends = ['bappy mahmud', 'bappy hasan', 'bappy hossain', 'bappy khan'] ;
const firstLetter = friends.map(f => f[0]) ;
// console.log(firstLetter)
const namefriend = friends.map(friends => friends.length) ;
// console.log(namefriend) ;
const products = [
    {id:1, name:'laptop', price:45000},
    {id:1, name:'mobile', price:80000},
    {id:1, name:'watch', price:35000},
    {id:1, name:'tablet', price:23000},
]
const item = products.map(products => products.name) ;
console.log(item);
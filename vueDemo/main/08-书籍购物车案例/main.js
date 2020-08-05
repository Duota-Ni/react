const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《JavaScrip编程艺术》',
                date: '2011-7',
                price: 49.00,
                count: 1
            },
            {
                id: 3,
                name: '《编程珠玑》',
                date: '2008-10',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: '《代码大全》',
                date: '2006-3',
                price: 128.00,
                count: 1
            }
        ]
    },
    //过滤器
    filters: {
        showPrice(price) {
            return '￥' + price.toFixed(2)
        }
    },
    methods: {
        add(index) {
            this.books[index].count++;
        },
        sub(index) {
            this.books[index].count--;
        },
        removeHandle(index) {
            this.books.splice(index, 1)
        }
    },
    computed: {
        totalPrice() {
            // 1.普通的for
            // let totalPrice = 0;
            // for(let i = 0; i < this.books.length; i++){
            //     totalPrice += this.books[i].price * this.books[i].count;
            // }
            // return totalPrice;

            //2.for( index in this.books)
            // let totalPrice = 0;
            // for (i in this.books) {
            //     totalPrice += this.books[i].price * this.books[i].count;
            // }
            // return totalPrice;

            //3.for(book of books)
            // let totalPrice = 0;
            // for (book of this.books) {
            //     totalPrice += book.price * book.count;
            // }
            // return totalPrice;
            
            //reduce
            return this.books.reduce(function(prev,cur){
                return prev + cur.price * cur.count;
            },0)
            
        }
    }
})
//编程范式：命令式编程/声明式变成
//编程范式：面向对象编程(第一公民：对象)/面向函数编程(第一公民：函数)
//filter/map/reduce
class ProductList {
    constructor(container = '.mainContainer'){
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this.fetchGoods();
        this.render();
    }
    fetchGoods() {
        this.goods = [
            { id: 1, title: 'BMW', price: 450000, src:'img/m1.jpg' },
            { id: 2, title: 'Honda', price: 150000, src:'img/m2.jpg' },
            { id: 3, title: 'Kawasaki', price: 300000, src:'img/m3.jpg' },
            { id: 4, title: 'Yamaha', price: 250000, src:'img/m4.jpg' },
            { id: 5, title: 'Suzuki', price: 200000, src:'img/m5.jpg' },
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const productObject = new ProductItem(product);
            
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render())
        }
    }
}

class ProductItem {
    constructor(product){
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = product.src;
    }
    render(){
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="image" class="product-img">
                <h3 class="product-title">${this.title}</h3>
                <p class="product-price">${this.price} руб</p>
                <button type="button" 
                        class="btn btn-success mt-3 toBasketBtn"
                        data-id="${this.id}"
                        data-price="${this.price}"
                        data-name="${this.title}"
                        >В корзину</button>
                </div>`;
    }
}

new ProductList();
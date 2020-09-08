Vue.component('cart', {
   props: ['cartItems', 'img', 'visibility'],
   template: `<div class="cart-block" v-show="visibility">
                <p v-if="!cartItems.length">Корзина пуста</p>
                <cart-item 
                v-for="product of cartItems"  
                :key="product.id_product"
                :img="img"
                :cart-item="product"></cart-item>
            </div>`
});
Vue.component('cart-item', {
    props: ['cartItem', 'img'],
    template: `<div class="cart-item" >
                    <div class="product-bio">
                        <img :src="img" alt="image">
                        <div class="product-desc">
                            <p class="product-title">{{cartItem.product_name}}</p>
                            <p class="product-quantity">Количество: {{cartItem.quantity}}</p>
                            <p class="product-single-price">руб {{cartItem.price}} за шт</p>
                        </div>
                    </div>
                    <div class="right-block">
                        <p class="product-price">Итог:{{cartItem.quantity*cartItem.price}}</p>
                        <button class="del-btn" @click="$parent.$emit('remove', cartItem)">&times;</button>
                    </div>
                </div>`
})
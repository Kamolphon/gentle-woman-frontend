<script setup>
import { ref } from "vue"

const props = defineProps({
    productForSell: {
        type: Object,
        required: true
    }
})

const products = props.productForSell.map(e => e)
for (const product of products) {
    console.log(product);
    for (const productItem of product.items) {
        console.log(productItem);
    }
}

console.log(products);
</script>
<template>
    <div id="GENTLEWOMAN CLUB" class="w-full text-center">
        <div v-for="product in products" class="mx-4">
            <div v-if="product.category === 'GENTLEWOMAN CLUB'">
                <p class="font-semibold">{{ product.category }}</p>
                <p>{{ product.description }}</p>
                    <div class="flex w-full h-full justify-between space-x-8 mb-5">
                        <div class="">
                            <img :src="`images/${product.items[0].image}`" />
                        </div>
                        <div class="flex flex-col justify-between mb-0">
                            <img :src="`images/${product.items[1].image}`" class="self-start" />
                            <img :src="`images/${product.items[2].image}`" class="self-end" />
                        </div>
                    </div>
            </div>
            <div class="flex items-center w-full">
                <div v-for="productItem in product.items">
                    <div class="flex items-center justify-center mx-4"
                        v-if="(product.category === 'GENTLEWOMAN CLUB' && productItem.itemDesc !== 'No Description')">
                        <div>
                            <img :src="`images/${productItem.image}`" />
                            <p>{{ productItem.itemDesc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>
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
    <div class="w-full text-center">
        <div v-for="product in products">
            <div v-if="product.category === 'GENTLEWOMAN CLUB'">
                <p class="font-semibold">{{ product.category }}</p>
                <p>{{ product.description }}</p>
                <div class="flex w-full h-full items-center">
                    <div class="mx-4"> 
                        <img :src="`images/${product.items[0].image}`" />
                    </div>
                    <div class="mx-4 mb-0 grid grid-rows-2 space-y-8"> 
                        <img :src="`images/${product.items[1].image}`" />
                        <img :src="`images/${product.items[2].image}`" />
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
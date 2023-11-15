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
            <p class="font-semibold mt-20">{{ product.category }}</p>
            <p>{{ product.description }}</p>
            <div class="flex items-center">
                <div v-for="productItem in product.items">
                    <div v-if="(product.category === 'NEW ARRIVALS' || product.category === 'GENTLEWOMAN CLUB')">
                        <div v-if="productItem.description === 'No Description'">
                            <img width="1000px" :src="`images/${productItem.image}`" />
                        </div>
                        <div class="flex items-center justify-center mx-4">
                            <img :src="`images/${productItem.image}`" />
                            <p>{{ productItem.itemDesc === "No Description" ? "" : productItem.itemDesc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>
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
            <div v-for="productItem in product.items" class="flex-cols items-center justify-center">
                <div>
                    <img class="w-10" :src="`images/${productItem.image}`" />
                    <p>{{ productItem.itemDesc === "No Description" ? "":productItem.itemDesc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>
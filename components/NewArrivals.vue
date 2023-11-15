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
    <div id="NEW ARRIVALS" class="w-full text-center">
        <div v-for="product in products">
            <div v-if="product.category === 'NEW ARRIVALS'">
                <p class="font-semibold">{{ product.category }}</p>
                <p>{{ product.description }}</p>
            </div>
            <div class="flex text-left">
                <div v-for="productItem in product.items" class="flex items-center justify-center mx-4">
                    <div v-if="(product.category === 'NEW ARRIVALS')">
                        <img :src="`images/${productItem.image}`" />
                        <p>{{ productItem.itemDesc === "No Description" ? "" : productItem.itemDesc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>
<script setup>
import { ref } from "vue"

const props = defineProps({
    productForSell: {
        type: Array,
        required: true
    }
})

const newArraivalsProducts = computed(()=>{
    return props.productForSell.filter(product => product.category === 'NEW ARRIVALS')
})


</script>
<template>
    <div id="NEW ARRIVALS" class="w-full text-center">
        <div v-for="product in newArraivalsProducts">
            <div>
                <p class="font-semibold">{{ product.category }}</p>
                <p>{{ product.description }}</p>
            </div>
            <div class="flex text-left">
                <div v-for="productItem in product.items" class="flex justify-center">
                    <div>
                        <img :src="`images/${productItem.image}`" />
                        <ItemDetail :productname="productItem.itemDesc" :allsize="productItem.allSize" :price="productItem.price"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>
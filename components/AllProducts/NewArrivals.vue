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
    <div id="NEW ARRIVALS" class="allproduct gentlewomensell w-full text-center">
        <div v-for="product in newArraivalsProducts">
            <div>
                <p class="text-sm md:text-lg category font-medium">{{ product.category }}</p>
                <p class="md:text-sm description font-extralight">{{ product.description }}</p>
            </div>
            <div class="flex text-left">
                <div v-for="productItem in product.items" class="flex justify-center w-full">
                    <div class="productCard">
                        <ItemDetail :image="productItem.image"  :productId="productItem.productId" :productname="productItem.itemDesc" :allsize="productItem.allSize" :price="productItem.price"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

</style>
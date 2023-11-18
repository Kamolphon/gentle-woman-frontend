<script setup>
import { ref, computed } from "vue"
import ItemDetail from "./ItemDetail.vue";

const props = defineProps({
    productForSell: {
        type: Array,
        required: true
    }
})

const gentleWomanClubProducts  = computed(()=>{
    return props.productForSell.filter(product => product.category === 'GENTLEWOMAN CLUB')
})

</script>
<template>
    <div id="GENTLEWOMAN CLUB" class="allproduct gentlewomensell w-full text-center">
        <div v-for="product in gentleWomanClubProducts">
            <div class="nownotforsell">
                <p class="text-sm md:text-lg category">{{ product.category }}</p>
                <p class="md:text-sm description">{{ product.description }}</p>
                    <div class="flex w-full h-full justify-between space-x-2.5 lg:space-x-8 mb-5">
                        <div class="">
                            <img :src="`images/${product.items[0].image}`" />
                        </div>
                        <div class="flex flex-col justify-between mb-0">
                            <img :src="`images/${product.items[1].image}`" class="self-start" />
                            <img :src="`images/${product.items[2].image}`" class="self-end" />
                        </div>
                    </div>
            </div>
            <div class="flex w-full text-left">
                <div v-for="productItem in product.items">
                    <div class="flex"
                        v-if="productItem.itemDesc !== 'No Description'">
                        <div class="productCard">
                            <ItemDetail :image="productItem.image" :productId="productItem.productId" :productname="productItem.itemDesc" :allsize="productItem.allSize" :price="productItem.price"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>
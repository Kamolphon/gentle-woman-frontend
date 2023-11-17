<script setup>
import { ref, computed } from "vue"
import ItemDetail from "../ItemDetail.vue";

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
    <div id="GENTLEWOMAN CLUB" class="w-full text-center">
        <div v-for="product in gentleWomanClubProducts">
            <div class="">
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
            <div class="flex w-full text-left">
                <div v-for="productItem in product.items">
                    <div class="flex"
                        v-if="productItem.itemDesc !== 'No Description'">
                        <div>
                            <img :src="`images/${productItem.image}`" />
                            <ItemDetail :productId="productItem.productId" :productname="productItem.itemDesc" :allsize="productItem.allSize" :price="productItem.price"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>
<script setup>
import { ref } from "vue"
import ModalProduct from "./ModalProduct.vue";
const isOpenModal = ref(false)
const productId = ref(null)
const props = defineProps({
    productId: {
        type: Number
    },
    productname: {
        type: String
    },
    allsize: {
        type: Array
    },
    price: {
        type: Number
    }
})

const openModalProduct = () => {
    isOpenModal.value = !isOpenModal.value
}

const buyProduct = (id) => {
    openModalProduct()
    productId.value = id
    console.log(id);
}

// console.log(props.productId);
// console.log(props.productname);
// console.log(props.allsize);
// console.log(props.price);

</script>
<template>
        <div class="flex flex-col justify-between md:space-y-5 space-y-2">
            <h1 class="font-semibold text-xs md:text-base">{{ props.productname }}</h1>
            <div class="flex flex-row justify-between text-center text-xs md:text-base">
                <div class="md:space-x-2 space-x-1">
                    <button :class="{
                        'md:w-6 w-3 border border-black': size.stock > 0,
                        'md:w-6 w-3 border border-gray-400 text-gray-400 cursor-not-allowed': size.stock === 0
                    }" v-for="size in allsize">
                        <div>{{ size.size }}</div>
                    </button>
                </div>
                <p class="font-semibold">{{ props.price.toLocaleString('en-US') }} THB</p>
            </div>
            <div  class="flex justify-between md:space-x-8 space-x-1 text-xs md:text-base">
                <button class="md:w-1/2 py-0.5 border border-black">{{ "ADD TO BAG".toUpperCase() }}</button>
                {{ props.productId }}
                <button :id="props.productId"  @click="buyProduct($event.currentTarget.id)" class="md:w-1/2 py-0.5 bg-black text-white">{{ "BUY NOW".toUpperCase()
                }}</button>
            </div>
            <ModalProduct @toggleModal="openModalProduct" v-show="isOpenModal" />
        </div>
       
</template>
<style scoped></style>
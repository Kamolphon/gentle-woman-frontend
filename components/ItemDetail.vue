<script setup>
import { ref } from "vue"
import ModalProduct from "./ModalProduct.vue";
const isOpenModal = ref(false)
const productId = ref(null)
const selectedSize = ref(null)
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
    if (isOpenModal.value === false) {
        selectedSize.value = null
    }
}

const buyProduct = (id) => {
    if (selectedSize.value === null || selectedSize.value === undefined) {
        alert("Please select size")
    } else {
        openModalProduct()
        productId.value = id
        console.log(id);
    }
}


const selectSize = (size) => {
    selectedSize.value = size
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
                <button :disabled="size.stock === 0 ? true : false" :class="{
                    'border-black': size.stock > 0,
                    'border border-gray-400 text-gray-400 cursor-not-allowed': size.stock === 0,
                    'border border-black bg-black text-white' : selectedSize === size.size
                }" class="md:w-6 w-3 border" v-for="size in allsize" :key="size.size" @click="selectSize(size.size)">
                    <div>{{ size.size }}</div>
                </button>
            </div>
            <p class="font-semibold">{{ props.price.toLocaleString('en-US') }} THB</p>
        </div>
        <div class="flex justify-between md:space-x-4 xl:space-x-8 space-x-1  text-xs md:text-base">
            <button class="md:w-1/2 py-0.5 border border-black">{{ "ADD TO BAG".toUpperCase() }}</button>
            <button :id="props.productId" @click="buyProduct($event.currentTarget.id)"
                class="md:w-1/2 py-0.5 bg-black text-white">{{ "BUY NOW".toUpperCase()
                }}</button>
        </div>
    </div>
    <ModalProduct :openModalValue="isOpenModal" :targetSize="selectedSize" :targetId="Number(productId)" @toggleModal="openModalProduct"
        v-show="isOpenModal" />
</template>
<style scoped></style>
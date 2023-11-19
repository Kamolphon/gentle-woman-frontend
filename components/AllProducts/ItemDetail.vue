<script setup>
import { ref } from "vue"
import ModalProduct from "./ModalProduct";
const isOpenModal = ref(false)
const productId = ref(null)
const selectedSize = ref(null)
const isShowFinalOrder = ref(false)
const closeFinalProduct = ref("")
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
    },
    image: {
        type: String
    }
})

const openModalProduct = (mode, closeFinalOrder) => {
    isOpenModal.value = !isOpenModal.value
    if (mode === 'close' && closeFinalOrder === 'closeFinalOrder') {
        selectedSize.value = null
        closeFinalProduct.value = 'closeFinalOrder'
        isShowFinalOrder.value = false
    } else {
        closeFinalProduct.value = closeFinalOrder
    }
}

const buyProduct = (id) => {
    if (selectedSize.value === null || selectedSize.value === undefined) {
        alert("Please select size")
    } else {
        openModalProduct('open', "")
        productId.value = id
    }
}


const selectSize = (size) => {
    selectedSize.value = size
}


</script>
<template>
    <div class="flex flex-col justify-between lg:space-y-4 md:space-y-2 space-y-1">
        <img :src="`images/${props.image}`" />
        <div class="overflow-hidden text-ellipsis">
            <h1 class="descriptionItem line-clamp-1">{{ props.productname }}</h1>
        </div>
        <div class="flex items-baseline buttonOfDetail flex-row justify-between text-center">
            <div class="md:space-x-2 space-x-1">
                <button :disabled="size.stock === 0 ? true : false" :class="{
                    'border-black': size.stock > 0,
                    'border border-gray-400 text-gray-400 cursor-not-allowed': size.stock === 0,
                    'border border-black bg-black text-white': selectedSize === size.size
                }" class="md:w-6 w-4 border buttonSize" v-for="size in allsize" :key="size.size"
                    @click="selectSize(size.size)">
                    <div>{{ size.size }}</div>
                </button>
            </div>
            <div class="overflow-hidden price">
                <p class="text-sm md:text-2xl line-clamp-1">{{ props.price.toLocaleString('en-US') }} THB</p>
            </div>
        </div>
        <div class="flex buybutton justify-between md:space-x-4 xl:space-x-8 space-x-1 pt-2 md:pt-0">
            <button class="w-1/2 py-0.5 border border-black">{{ "ADD TO BAG".toUpperCase() }}</button>
            <button :id="props.productId" @click="buyProduct($event.currentTarget.id)"
                class="w-1/2 py-0.5 bg-black text-white">{{ "BUY NOW".toUpperCase()
                }}</button>
        </div>
    </div>
    <ModalProduct :closeFinalOrder="closeFinalProduct" :showFinalOrders="isShowFinalOrder" :openModalValue="isOpenModal"
        :targetSize="selectedSize" :targetId="Number(productId)" @toggleModal="openModalProduct('close', 'closeFinalOrder')"
        v-show="isOpenModal" />
</template>
<style scoped></style>
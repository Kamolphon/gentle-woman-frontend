<script setup>
import { getProducts } from '~/composable/getProducts';

const allProducts = await getProducts()
const codeDiscount = ref("")
const disableApplyButton = ref(false)
const discountPrice = ref(0)
const targetProduct = ref()
const countProduct = ref(1)
const countPrice = ref()
const props = defineProps({
    targetId: {
        type: Number
    }
})

const allProductItems = []
for (const product of allProducts) {
    for (const category of product.productForSell) {
        for (const item of category.items) {
            allProductItems.push(item)
        }
    }
}

const howMuchDiscount = (code, currentPrice) => {
    if (code === 'GW20P') {
        countPrice.value = (currentPrice * 0.8)
        discountPrice.value = (currentPrice * 0.2)
        disableApplyButton.value = true
    } else if (code === 'GW30P') {
        countPrice.value = (currentPrice * 0.7)
        discountPrice.value = (currentPrice * 0.3)
        disableApplyButton.value = true
    } else if (code === 'GW65P') {
        countPrice.value = (currentPrice * 0.35)
        discountPrice.value = (currentPrice * 0.65)
        disableApplyButton.value = true
    } else {
        countPrice.value = targetProduct.value?.price * countProduct.value
        discountPrice.value = 0
        disableApplyButton.value = false
    }
}

console.log();

watchEffect(() => {
    props.targetId
    if (props.targetId) {
        targetProduct.value = allProductItems.find((product) => product.productId === props.targetId)
    }
    countProduct.value
    if (countProduct.value) {
        howMuchDiscount(codeDiscount.value, targetProduct.value?.price*countProduct.value)
        console.log(codeDiscount.value);
    }
})

const emits = defineEmits(['toggleModal'])
const increaseProduct = () => {
    countProduct.value += 1
}

const decreaseProduct = () => {
    if (countProduct.value !== 0) {
        countProduct.value -= 1
    } else if (countProduct.value === 1) {
        countProduct.value = 1
    }
}

</script>
<template>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
            <div class="fixed inset-0 z-10 flex items-center justify-center">
                <div
                    class="relative w-96 h-96 mx-3 md-size overflow-y-auto bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
                    <div class="mx-8 mt-5 flex flex-col md:space-y-10 space-y-5">
                        <div class="flex justify-center items-center">
                            <h1>SHOPPING BAG</h1>
                            <button class="absolute right-3 text-2xl" @click="$emit('toggleModal')">X</button>
                        </div>
                        <div class="flex space-x-4">
                            <img style="width: 140px; height: 210px;" :src="`images/${targetProduct?.image}`" />
                            <div class="flex flex-col justify-between">
                                <div class="flex space-x-5 items-center">
                                    <p class=" mr-7">{{ targetProduct?.itemDesc }}</p>
                                    <button :disabled="countProduct === 1 ? true : false" :class="countProduct === 1 ? 'cursor-not-allowed' : ''"
                                        @click="decreaseProduct">-</button>
                                    <p class="font-semibold text-lg">{{ countProduct }}</p>
                                    <button @click="increaseProduct">+</button>
                                </div>
                                <div class="flex justify-between">
                                    <p>S</p>
                                    <p>{{ targetProduct?.price.toLocaleString('en-US') }} THB</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-end space-x-2">
                            <input v-model.trim="codeDiscount" placeholder="DISCOUNT CODE" type="text"
                                class="border border-b-black border-t-white border-x-white w-full" />
                            <button :disabled="disableApplyButton" :class="disableApplyButton ? 'cursor-not-allowed border-gray-400 text-gray-400':'border-black'" class="border w-1/5" @click="howMuchDiscount(codeDiscount,countPrice)">
                                {{ "apply".toUpperCase() }}
                            </button>
                        </div>
                        <div>
                            <div class="flex justify-between">
                                <p>{{ countProduct }} ITEM</p>
                                <p>{{  countPrice?.toLocaleString('en-US') }} THB</p>
                            </div>
                            <div class="flex justify-between">
                                <p>DISCOUNT</p>
                                <p>{{ discountPrice }} THB</p>
                            </div>
                            <div class="flex justify-between">
                                <p>SHIPPING FEE</p>
                                <p>100 THB</p>
                            </div>
                        </div>
                        <div class="flex pt-5 justify-between font-bold text-xl">
                            <p>{{ "total".toUpperCase() }}</p>
                            <p>100 THB</p>
                        </div>
                    </div>
                    <div class="sticky md:absolute bottom-0 right-0 bg-black w-full h-9 md:h-12 items-center flex">
                        <button type="button" @click="$emit('toggleModal')" class="w-full text-white">Check out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@media (min-width: 768px) {
    .md-size {
        width: 546px;
        height: 658px;
    }
}
</style>

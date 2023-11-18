<script setup>
import { getProducts } from '~/composable/getProducts';

const allProducts = await getProducts()
const codeDiscount = ref("")
const shippingPrice = ref(50)
const disableApplyButton = ref(false)
const discountPrice = ref(0)
const targetProduct = ref()
const countProduct = ref(1)
const countPrice = ref()

const props = defineProps({
    targetId: {
        type: Number
    },

    targetSize: {
        type: String,
    },

    openModalValue: {
        type: Boolean
    },

    showFinalOrders: {
        type: Boolean
    },

    closeFinalOrder:{
        type: String
    }
})

const propShowFinalOrders = ref(props.showFinalOrders)
const allProductItems = []
const discountCodeArr = ref([])
for (const product of allProducts) {
    for (const discount of product.discountCode) {
        discountCodeArr.value.push(discount)
    }
    for (const category of product.productForSell) {
        for (const item of category.items) {
            allProductItems.push(item)
        }
    }
}

const howMuchDiscount = (currentPrice) => {
    const targetDiscount = discountCodeArr.value.find((code) => code.code === codeDiscount.value)
    if (targetDiscount) {
        countPrice.value = ((100 - targetDiscount.discountPercent) / 100) * currentPrice
        discountPrice.value = (targetDiscount.discountPercent / 100) * currentPrice
        disableApplyButton.value = true
    } else {
        countPrice.value = targetProduct.value?.price * countProduct.value
        discountPrice.value = 0
        disableApplyButton.value = false
    }
}

const countShippingPrice = () => {
    if (countPrice.value < 1000 && countPrice.value > 0) {
        shippingPrice.value = 50
    } else if (countPrice.value >= 1000) {
        shippingPrice.value = 100
    }
}

const totalPrice = computed(() => {
    return shippingPrice.value + countPrice.value
})

watchEffect(() => {
    props.targetId
    props.targetSize
    props.showFinalOrders
    if (props.targetId) {
        targetProduct.value = allProductItems.find((product) => product.productId === props.targetId)
    }
    countProduct.value
    if (countProduct.value) {
        howMuchDiscount(targetProduct.value?.price * countProduct.value)
        countShippingPrice()
    }
    if (props.openModalValue === false) {
        countProduct.value = 1
        codeDiscount.value = ""
    }
    if (props.closeFinalOrder) {
        propShowFinalOrders.value = props.showFinalOrders
    }

    console.log(props.showFinalOrders);
    console.log(propShowFinalOrders.value);
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

const checkoutButton = () => {
    propShowFinalOrders.value = !propShowFinalOrders.value
}



</script>
<template>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
            <div class="fixed inset-0 z-10 flex items-center justify-center">
                <div
                    class="relative mx-3 w-96 h-96 md-size overflow-y-auto bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
                    <div class="px-9 mt-5 flex flex-col md:space-y-10 space-y-5">
                        <div class="flex justify-center items-center">
                            <h1>SHOPPING BAG</h1>
                            <button class="absolute right-3 text-2xl" @click="$emit('toggleModal')">X</button>
                        </div>
                        <div class="flex space-x-4">
                            <img class="responsive-image" :src="`images/${targetProduct?.image}`" />
                            <div class="modalText flex flex-col justify-between">
                                <div class="flex md:space-x-5 space-x-1 items-baseline">
                                    <p class="mr-7">{{ targetProduct?.itemDesc }}</p>
                                    <button class=" text-lg" :disabled="countProduct === 1 ? true : false"
                                        :class="countProduct === 1 ? 'cursor-not-allowed' : ''"
                                        @click="decreaseProduct">-</button>
                                    <p class="text-lg font-semibold">{{ countProduct }}</p>
                                    <button class=" text-lg" @click="increaseProduct">+</button>
                                </div>
                                <div class="flex justify-between">
                                    <p>{{ props.targetSize }}</p>
                                    <p>{{ targetProduct?.price.toLocaleString('en-US') }} THB</p>
                                </div>
                            </div>
                        </div>
                        <div class="modalText flex items-end space-x-2">
                            <input v-model.trim="codeDiscount" placeholder="DISCOUNT CODE" type="text"
                                class="border border-b-black border-t-white border-x-white w-full" />
                            <button :disabled="disableApplyButton"
                                :class="disableApplyButton ? 'cursor-not-allowed border-gray-400 text-gray-400' : 'border-black'"
                                class="border w-1/5" @click="howMuchDiscount(countPrice)">
                                {{ "apply".toUpperCase() }}
                            </button>
                        </div>
                        <div class="modalText">
                            <div class="flex justify-between">
                                <p>{{ countProduct.toLocaleString('en-US') }} ITEM</p>
                                <p>{{ countPrice?.toLocaleString('en-US') }} THB</p>
                            </div>
                            <div class="flex justify-between">
                                <p>DISCOUNT</p>
                                <p>{{ discountPrice.toLocaleString('en-US') }} THB</p>
                            </div>
                            <div class="flex justify-between">
                                <p>SHIPPING FEE</p>
                                <p>{{ shippingPrice.toLocaleString('en-US') }} THB</p>
                            </div>
                        </div>
                        <div class="flex pt-5 justify-between font-semibold text-xl">
                            <p>{{ "total".toUpperCase() }}</p>
                            <p>{{ totalPrice.toLocaleString('en-US') }} THB</p>
                        </div>
                    </div>
                    <div class="sticky md:absolute bottom-0 right-0 bg-black w-full h-9 md:h-12 items-center flex">
                        <button type="button" @click="checkoutButton" class="w-full text-white">Check out</button>
                    </div>
                </div>
                <div v-show="propShowFinalOrders"
                    class="absolute mx-3 w-96 h-96 md-size overflow-y-auto bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
                    <div class="px-9 mt-5 flex flex-col md:space-y-10 space-y-5">
                        <div class="flex justify-center items-center">
                            <h1>ORDERS</h1>
                        </div>
                        <div>
                            <div class="flex justify-between">
                                <img class="responsive-image flex justify-center" :src="`images/${targetProduct?.image}`" />
                                <p>{{ props.targetSize }}</p>
                            </div>
                            <div class="modalText pt-5 flex flex-col justify-between">
                                <div class="items-baseline">
                                    <div class="flex justify-between">
                                        <p>{{ targetProduct?.itemDesc }}</p>
                                        <p>{{ countProduct.toLocaleString('en-US') }} ITEM</p>
                                    </div>
                                    <div class="flex py-5 justify-between font-semibold text-xl">
                                        <p>{{ "total".toUpperCase() }}</p>
                                        <p>{{ totalPrice.toLocaleString('en-US') }} THB</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="sticky md:absolute bottom-0 right-0 bg-black w-full h-9 md:h-12 items-center flex">
                        <button type="button" @click="$emit('toggleModal', 'close','closeFinalOrder')"
                            class="w-full text-white">CLOSE</button>
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

/* เริ่มต้นให้รูปภาพมีขนาด 140x210px */
.responsive-image {
    width: 140px;
    height: 210px;
}

/* ใช้ media query เพื่อปรับขนาดใหม่เมื่อหน้าจอกว้างกว่า 280px */
@media (max-width: 317px) {
    .responsive-image {
        width: 80px;
        height: 210px;
    }
}
</style>

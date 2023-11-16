<script setup>

const props = defineProps({
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

console.log(props.productname);
console.log(props.allsize);
console.log(props.price);

</script>
<template>
    <div class="flex flex-col justify-between md:space-y-5 space-y-2">
        <h1 class="font-semibold">{{ props.productname }}</h1>
        <div class="flex flex-row justify-between text-center">
            <div class="space-x-2">
                <button :class="{
                    'w-6 border border-black': size.stock > 0,
                    'w-6 border border-gray-400 text-gray-400 cursor-not-allowed': size.stock === 0
                }" v-for="size in allsize">
                    <div>{{ size.size }}</div>
                </button>
            </div>
            <p class="font-semibold">{{ props.price.toLocaleString('en-US') }}</p>
        </div>
        <div class="flex justify-between space-x-8">
            <button class="w-1/2 py-0.5 border border-black">{{ "ADD TO BAG".toUpperCase() }}</button>
            <button class="w-1/2 py-0.5 bg-black text-white">{{ "BUY NOW".toUpperCase() }}</button>
        </div>
    </div>
</template>
<style scoped></style>
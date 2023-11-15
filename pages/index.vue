<script setup>
import { getProducts } from "../composable/getProducts"
// import ProductList from "../components/ProductList"
const products = await getProducts()
console.log(products);
</script>
<template>
    <div>
        <h1 class="text-3xl font-bold underline">
            Hello world!
        </h1>
        <img src="../public/images/VioletHomePage.png" />
    </div>
    <ProductList />
</template>
<style scoped></style>
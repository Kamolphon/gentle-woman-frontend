<script setup>
import { getProducts } from "../composable/getProducts"
import Navbar from "~/components/Navbar/Navbar.vue";
import ProductList from "../components/ProductList"
const products = await getProducts()
products.map(element => {
    console.log(element);
});
</script>
<template>
    <div class="w-full">
        <Navbar />
        <div  v-for="product in products">
            <img :src="`images/${product.coverImage}`" :key="product.productId" alt="Product Image" />
            <ProductList :productForSell="product.productForSell"/>
        </div>
    </div>
</template>
<style scoped></style>
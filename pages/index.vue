<script setup>
import { getProducts } from "../composable/getProducts"
import Navbar from "~/components/Navbar/Navbar.vue";
import ProductList from "../components/ProductList"
import NewArrivalsVue from "~/components/NewArrivals.vue";
import GentleWomanClub from "~/components/GentleWomanClub.vue";
import Footer from "~/components/Footer/Footer.vue";
import Editorials from "~/components/Editorials.vue";
const products = await getProducts()
products.map(element => {
    console.log(element);
});
</script>
<template>
    <div class="w-full">
        <Navbar />
        <div v-for="product in products">
            <img :src="`images/${product.coverImage}`" :key="product.productId" alt="Product Image" />
            <NewArrivalsVue :productForSell="product.productForSell" />
            <GentleWomanClub :productForSell="product.productForSell"/>
            <Editorials :productForSell="product.productForSell"/>
        </div>
        <Footer/>
    </div>
</template>
<style scoped></style>
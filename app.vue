<script setup>
import { getProducts } from "./composable/getProducts.js"
import Navbar from "./components/layouts/Navbar.vue";
import NewArrivalsVue from "~/components/AllProducts/NewArrivals.vue";
import GentleWomanClub from "~/components/AllProducts/GentleWomanClub.vue";
import Footer from "~/components/layouts/Footer.vue";
import Editorials from "~/components/AllProducts/Editorials.vue";
import BackToTopBTN from "~/components/BackToTopBTN.vue";
const products = await getProducts()


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
        <BackToTopBTN/>
        <Footer/>
    </div>
</template>
<style scoped></style>
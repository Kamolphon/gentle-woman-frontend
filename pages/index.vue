<script setup>
import { getProducts } from "../composable/getProducts"
import Navbar from "~/components/Navbar/Navbar.vue";
import NewArrivalsVue from "~/components/AllProducts/NewArrivals.vue";
import GentleWomanClub from "~/components/AllProducts/GentleWomanClub.vue";
import Footer from "~/components/Footer/Footer.vue";
import Editorials from "~/components/AllProducts/Editorials.vue";
import BackToTopBTN from "~/components/BackToTopBTN.vue";
import ModalProduct from "~/components/ModalProduct.vue";
const products = await getProducts()
const allProductItems = []

for (const product of products) {
    for (const category of product.productForSell) {
        for (const item of category.items) {
            allProductItems.push(item)
        }
    }
}

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
        <ModalProduct :productItems="allProductItems" v-show="false"/>
    </div>
</template>
<style scoped></style>
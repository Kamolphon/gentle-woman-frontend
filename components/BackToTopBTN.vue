<script setup>

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

</script>
<template>
<div>
    <button id="backToTopBtn" class="fixed right-4 bottom-4 text-2xl font-semibold" @click="scrollToTop">
        Back to top
    </button>
</div>

</template>
<style scoped>

</style>
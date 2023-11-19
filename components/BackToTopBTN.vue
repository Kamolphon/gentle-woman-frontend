<script setup>

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

</script>
<template>
    <div class="fixed md:right-14 right-2 bottom-4">
        <button @click="scrollToTop" id="backToTopBtn" class="flex flex-col items-center text-sm md:text-lg space-y-3">
            <img src="/icons/arrowup.png" class="w-4" />
            <p class="textAlignVer">Back to top</p>
        </button>
    </div>
</template>
<style scoped>
.textAlignVer {
    writing-mode: vertical-lr;
}
</style>
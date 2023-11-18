<template>
  <div id="EDITORIALS" class="allproduct w-full text-center">
    <div v-for="product in editorialProducts" :key="product.id">
      <div>
        <p class="text-sm md:text-lg category">{{ product.category }}</p>
        <p class="md:text-sm description">{{ product.description }}</p>
      </div>
      <div v-for="(productItem, index) in product.items" :key="index" class="flex items-center justify-center">
        <div class="relative image-container">
          <img v-if="index === currentItemIndex" :src="`images/${productItem.image}`"
            class="w-full h-full object-cover" />
          <div class="absolute bottom-5 left-0 right-0 flex justify-center">
            <div v-for="(item, i) in product.items" :key="i" class="h-2 w-2 rounded-full mx-1 bg-white"
              :class="{ 'w-8': i === currentItemIndex }"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref, onMounted, computed } from 'vue';

const props = defineProps({
  productForSell: {
    type: Array,
    required: true
  }
});

const editorialProducts = computed(() => {
  return props.productForSell.filter(product => product.category === 'EDITORIALS');
});

const currentItemIndex = ref(0);

onMounted(() => {
  setInterval(() => {
    currentItemIndex.value = (currentItemIndex.value + 1) % 3; 
  }, 3000); 
});

// 0 % 3 = 0
// 1 % 3 = 1
// 2 % 3 = 2
// 3 % 3 = 0
// 4 % 3 = 1
// 5 % 3 = 2
// 6 % 3 = 0
</script>
  
<style scoped>
</style>
  
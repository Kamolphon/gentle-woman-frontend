<template>
  <div id="EDITORIALS" class="w-full text-center">
    <div v-for="product in editorialProducts" :key="product.id">
      <div>
        <p class="font-semibold">{{ product.category }}</p>
        <p>{{ product.description }}</p>
      </div>
      <div class="flex items-center">
        <div v-for="(productItem, index) in product.items" :key="index" class="flex items-center justify-center mx-4">
          <div v-if="index === currentItemIndex" class="relative image-container">
            <img :src="`images/${productItem.image}`" class="w-full h-full object-cover" />
            <div class="absolute bottom-5 left-0 right-0 flex justify-center">
              <div v-for="(item, i) in product.items" :key="i" class="h-2 w-2 rounded-full mx-1 bg-white"
                :class="{ 'w-8': i === currentItemIndex }"></div>
            </div>
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
    currentItemIndex.value = (currentItemIndex.value + 1) % 3; // Assuming 3 items per product
  }, 3000); // Change 3000 to the desired duration in milliseconds
});
</script>
  
<style>
/* Add any additional styles here */
</style>
  
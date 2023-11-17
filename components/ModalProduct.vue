<script setup>

// const props = defineProps({
//     isOpenModal: {
//         type: Boolean
//     }
// })

const emits = defineEmits(['toggleModal'])

</script>
<template>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
            <div class="fixed inset-0 z-10 flex items-center justify-center">
                <div
                    class="w-96 h-96 mx-3 md-size relative overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg">

                    
                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button type="button" @click="$emit('toggleModal')"
                            class="mt-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@media (min-width: 768px) {
    .md-size {
        width: 546px;
        height: 658px;
    }
}
</style>

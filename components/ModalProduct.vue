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
                    class="relative w-96 h-72 overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button type="button" @click="$emit('toggleModal')"
                            class="mt-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>

<!-- <div className="fixed text-zinc-700 inset-0 z-10 flex justify-center items-center bg-gray-100 bg-opacity-40 h-full modal">
    <div className="lg:w-2/6 md:w-3/6 w-5/6 bg-white rounded-3xl shadow-2xl modal-content">
        <div>
            <div className='text-right my-3 mr-4 flex justify-between items-center mx-5'> -->
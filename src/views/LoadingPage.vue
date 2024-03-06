<template>
    <div class="mainContainer  py-10 px-6 sm:px-6 bg-[#f9fbff]">
        <!-- Gradient Circle  -->
        <header>
            <div class="flex justify-center py-10 sm:py-4 ">
                <div
                    class="bg-gradient-to-b  from-white to-[#ebc7d2] w-64 h-64 sm:w-80 sm:h-80 rounded-full flex items-center justify-center">
                    <img class="w-40 sm:h-48" src="../assets/Group.png " alt="">
                </div>
            </div>
            <section>
                <div class="">
                    <p class="text-[26px] text-center font-600 text-darkBlue">“Jazz Hifazat Program Powered by EFU Life”</p>
                    <p class="text-lightBlue text-[14px] text-center my-2">Get Coverage 24/7with EFU’s Nano insurance
                        products which includes</p>
                </div>
            </section>
        </header>
        <footer class="mt-6">
            <div class="flex gap-3 items-center mt-1 pl-8 sm:pl-12 " v-for="(item, index) in items" :key="index">
                <div class="bg-darkPink rounded-full h-3 w-3 flex items-center justify-center">
                    <img class="h-2.5 w-2.5 " src="../assets/check.svg" alt="">
                </div>
                <div>
                    <p class="text-[13px]  text-lightBlue">{{ item.content }}</p>
                </div>
            </div>

            <div class="mt-10">
                <router-link to="/MainScreen">
                <button
                    class="bg-gradient-to-tr from-[#2e194e] to-[#7c1031] w-full py-3 rounded-md  text-white uppercase text-[12px] font-semibold">Proceed
                    Now
                </button>
            </router-link>
            </div>
        </footer>
    </div>
</template>
<script setup>
import { reactive } from 'vue';
const items = reactive([
    { content: ' Accidental Cover' },
    { content: 'Income Continuation Benefit' },
    { content: 'Education Continuation Benefit' },
    { content: 'Cover against Major Medical Illness*' },
    { content: 'Free 24/7 doctor’s helpline ' },
    { content: 'EFU mHealth Subscription' }
])
</script>
<style></style>
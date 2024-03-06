<template >
    <div class="mainContainer  bg-[#f9fbff] pb-10 ">
        <div class="bg-gradient-to-b from-[#2e194e] to-[#7c1031] h-52 relative">
            <div class="grid grid-cols-12 px-4">
                <div class="flex justify-start items-center col-span-2">
                    <router-link to="/">
                        <button class="border border-white rounded-md p-1">
                            <img src="../assets/left-arrow.svg" alt="">
                        </button>
                    </router-link>
                </div>
                <div class="  col-span-8 flex justify-end sm:justify-center">
                    <div>
                        <div class="flex items-center justify-center px-3 gap-2 bg-white  rounded-b-xl shadow-2xl h-14">
                            <div>
                                <img class="w-full" src="../assets/EFU Life Logo 1.png" alt="">
                            </div>
                            <div>
                                <p class="text-[9px] w-32 text-cyanDark">Get Insured by <strong>Jazz Hifazat</strong>
                                    Program powered by <strong>EFU Life</strong> </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-1">
                </div>
            </div>
            <div class="my-3">
                <p class="text-white text-[14px] font-bold text-center">Salman Ahmad</p>
            </div>
            <div class="absolute top-26 w-full px-3 ">
                <div class=" bg-white shadow-2xl inset-x-0 mx-auto text-center rounded-2xl  relative py-4 px-3">
                    <div class="flex gap-1 sm:gap-3 ">
                        <div class="">
                            <img src="../assets/life insurance 1.png" alt="">
                        </div>
                        <div class=" flex flex-col items-center justify-center">
                            <p class="font-bold text-lightBlue text-[12px] sm:text-[14px]">Haafiz Plus Platinum</p>
                            <p class="text-lightBlue text-[10px]">In Just <strong>8.80 </strong> /- PKR Avail Now</p>
                        </div>
                        <div class="absolute -right-1 top-6">
                            <div class="bg-gradient-to-b flex items-center justify-center from-[#413893] to-[#7c1031] rounded-l-2xl w-[100px] sm:w-[119px] h-[30px]">
                                <p class="text-[12px] sm:text-[14px] text-white font-bold">Best Value</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-2">
                        <p class="text-lightBlue text-[10px] px-3">Cover Information </p>
                    </div>
                    <div class="grid grid-cols-2 mt-3">
                        <div>
                            <div>
                                <p class="text-light-blue text-center text-[8px]">Income Continuation </p>
                                <p class="text-light-blue text-center text-[10px] font-bold">12 months (PKR) 20,000</p>
                            </div>
                            <div class="my-3">
                                <p class="text-light-blue text-center text-[8px]">Education Continuation </p>
                                <p class="text-light-blue text-center text-[10px] font-bold">12 months (PKR) 5,000</p>
                            </div>
                        </div>
                        <div>
                            <div class="">
                                <div class="">
                                    <p class="text-light-blue text-center text-[8px]">Accidental Death Sum Assured</p>
                                    <p class="text-light-blue text-center text-[10px] font-bold">(PKR) 500,000</p>
                                </div>
                                <div class="my-3">
                                    <p class="text-light-blue text-center text-[8px]">Major Medial Illness Covers</p>
                                    <p class="text-light-blue text-center text-[10px] font-semibold">(PKR) 50,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="absolute inset-x-0 mx-auto text-center">
                        <button
                            class="bg-gradient-to-b from-[#413893] to-[#7c1031] text-white text-[14px] font-bold py-2 px-6 rounded-lg">Get
                            Insured in 3 clicks</button>
                    </div>
                </div>
            </div>

        </div>
        <div class="mt-32 pl-5">
            <p class="text-[16px] font-bold text-lightBlue">What Hifazat Program Covers </p>
        </div>
        <div class="grid grid-cols-4 gap-2 px-5 sm:px-8 mt-6">
            <div class="" v-for="(card, index) in cards" :key="index">
                <div
                    class="bg-gradient-to-b py-3 px-3 rounded-lg h-16 flex items-center justify-center from-[#7c1031] to-[#413893]">
                    <img :src="card.imgSrc" alt="">
                </div>
                <div class="mt-1">
                    <p :href="dynmicHref" class="text-darkBlue text-center h-2 text-[10px] font-bold underline">{{
                        card.linkText }}
                    </p>
                </div>
            </div>
        </div>
        <div class="mt-12 px-8">
            <button
                class="flex bg-white shadow-2xl rounded-lg py-3 px-4 items-center justify-between w-full font-semibold text-[#677294] text-[15px]">
                <span class="text-center flex-grow">Browse All products</span>
                <!-- Use flex-grow to make the text fill the available space -->
                <img src="../assets/Group 11529.png" alt="Icon" class="ml-auto">
                <!-- Use ml-auto to push the icon to the right -->
            </button>
        </div>
        <div class="flex items-center justify-center mt-6 px-4 ">
            <div class="bg-white shadow-2xl   rounded-2xl  inset py-4 relative">
                <div class="flex gap-2 items-center px-3">
                    <div class="">
                        <img src="../assets/protection 1.png" alt="">
                    </div>
                    <div class="">
                        <p class="text-[16px] font-bold text-lightBlue">Haafiz Plus Gold</p>
                    </div>
                </div>
                <div class="flex items-center px-4 sm:px-8 relative">
                    <div>
                        <div>
                            <p class="text-light-blue text-center text-[8px]">Income Continuation </p>
                            <p class="text-light-blue text-center text-[8px] sm:text-[10px] font-bold">12 months (PKR) 20,000</p>
                        </div>
                        <div class="my-2">
                            <p class="text-light-blue text-center text-[8px]">Education Continuation </p>
                            <p class="text-light-blue text-center text-[8px] sm:text-[10px] font-bold">12 months (PKR) 5,000</p>
                        </div>
                    </div>
                    <div>
                        <div class="">
                            <div class="">
                                <p class="text-light-blue text-center text-[8px]">Accidental Death Sum Assured</p>
                                <p class="text-light-blue text-center text-[8px] sm:text-[10px] font-bold">(PKR) 500,000</p>
                            </div>
                            <div class="my-2">
                                <p class="text-light-blue text-center text-[8px]">Major Medial Illness Covers</p>
                                <p class="text-light-blue text-center text-[8px] sm:text-[10px] font-bold">(PKR) 50,000</p>
                            </div>
                        </div>
                    </div>
                    <div class="absolute -right-4">
                        <div
                            class="bg-gradient-to-b leading-tight from-[#7c1031] to-[#413893] h-[84px] w-[84px] sm:h-[93px] sm:w-[93px] rounded-full flex flex-col justify-center">
                            <p class="text-[7px] text-center text-white font-semibold">Get Insured Now In</p>
                            <p class="text-[26px] sm:text-[30px] font-bold text-center text-white">6.20</p>
                            <p class="text-[7px] text-center text-white font-semibold">(Daily Charging)</p>
                        </div>
                    </div>
                </div>
                <div class="pl-8 pr-20">
                    <p class="text-[8px] text-lightBlue">Additional Subscriber can available Online Consultation on
                        EFU mHealth Application for Entire Family.
                    </p>
                </div>
                <div class="absolute inset-x-0 mx-auto text-center mt-1">
                    <button
                        class="bg-gradient-to-b  from-[#7c1031] to-[#413893] text-white text-[14px] font-bold py-2 px-6 rounded-lg">Get
                        Insured Now</button>
                </div>
            </div>

        </div>
        <div class="mt-8 pl-5">
            <p class="text-lightBlue font-bold text-[16px]">Get You Claim Processed Now</p>
        </div>
        <div class=" px-8 mt-4">
            <button
                class="flex bg-white shadow-2xl rounded-lg py-3 px-4 items-center justify-between w-full font-semibold text-[#677294] text-[15px]">
                <span class="text-center flex-grow">Browse All products</span>
                <!-- Use flex-grow to make the text fill the available space -->
                <img src="../assets/health insurance 1.png" alt="Icon" class="ml-auto">
                <!-- Use ml-auto to push the icon to the right -->
            </button>
        </div>
    </div>
</template>
<script setup>
import { reactive } from 'vue';
const cards = reactive([
    { imgSrc: 'src/assets/life insurance 1 (1).png', linkText: 'Income Continuation', dynmicHref: '#' },
    { imgSrc: 'src/assets/job insurance 1.png', linkText: 'Education Continuation', dynmicHref: '#' },
    { imgSrc: 'src/assets/education insurance 1.png', linkText: 'Major Medical Illness Cover', dynmicHref: '#' },
    { imgSrc: 'src/assets/protection 4.png', linkText: 'Accidental Death Cover', dynmicHref: '#' },
])
</script>
<style ></style>
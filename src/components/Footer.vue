<script setup lang="ts">
import SocialMedia from './SocialMedia.vue';

</script>

<template>
    <footer class="footer">
        <div class="top">
            <div class="text">
                <h1>Ta1an</h1>
                <p>Designed and built with care. Always open to new ideas and collaborations — <br>
                    let's create something amazing together.</p>
            </div>
            <SocialMedia/>
        </div>
        <div class="bottom">
            <p>© 2023 Ta1an. All rights reserved.</p>            
        </div>
    </footer>
</template>

<style scoped>
    @reference "#main.css";

    .footer {
        @apply flex bg-bg flex-col gap-5 px-[10%] py-5;
    }

    .text h1 {
        @apply text-primary;
    }
    
    .text {
        @apply flex-col gap-3;
    }
    
    .text p {
        @apply hidden md:inline;
    }
    .top {
        @apply flex justify-between  gap-5;
    }
    .bottom {
        @apply text-center py-1
    }
</style>
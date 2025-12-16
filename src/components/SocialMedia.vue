<template>
    <div class="social-media">
        <a href="https://github.com/Ta1an"><i class='bx bxl-github'></i></a>
        <a href="https://www.linkedin.com/in/ta1an/"><i class='bx bxl-linkedin-square'></i></a>
        <a href="https://www.instagram.com/t.a1an/"><i class='bx bxl-instagram-alt' ></i></a>
    </div>
</template>

<style scoped>
     @reference "#main.css";

     .social-media {
        @apply flex items-center gap-6
     }
    .social-media a {
        @apply outline-none inline-flex p-2 border-primary border-2 rounded-full text-2xl md:text-3xl lg:text-3xl text-primary shadow-primary shadow-(--glow-small)
        ease-in-out duration-500 cursor-pointer;
    }
    .social-media a:hover {
        @apply bg-primary shadow-(--glow) text-black;
    }
</style>
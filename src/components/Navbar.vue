    <script setup>
        import { motion } from 'motion-v'
        import { ref } from 'vue';
        import { onMounted, onBeforeUnmount } from 'vue';
        const navLinks = ['Home', 'About', 'Skills', 'Services'];

        const isOpen = ref(false);
        const activeSection = ref('home');
        let observer;


        onMounted(() => {
  const sections = document.querySelectorAll('section')

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    {
      threshold: 0.3
    }
  )

  sections.forEach(section => observer.observe(section))
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
    </script>

    <template>
    <div class="navbar">
        <motion.div
        class="logo"
        :initial="{ opacity: 0, y: -10, filter: 'blur(3px)' }"
        :animate="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
        :transition="{ delay: 0.1, duration: 0.6, ease: 'easeOut' }">
        <h1>Ta1an</h1>
        </motion.div>
            
        <nav class="nav-links desktop">
            <motion.a :href="`#${link.toLowerCase()}`"
                    v-for="(link, i) in navLinks"
                    :key="link"
                    :class="{ active: activeSection === link.toLowerCase() }"
                    :initial="{ opacity: 0, y: -20, filter: 'blur(3px)' }"
                    :animate="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
                    :transition="{ delay: 0.2 + i * 0.1, duration: 0.6, ease: 'easeOut' }"
                    @click="isOpen = false">
                    {{ link }}
            </motion.a>

        </nav>    

        <motion.i class="bx bx-menu open-sidebar" @click="isOpen = true" :initial="{ opacity: 0, y: -10, filter: 'blur(3px)'}" 
        :animate="{ opacity: 1, y: 0, filter: 'blur(0px)' }" :transition="{ delay: 0.3, duration: 0.6, ease: 'easeOut' }"/>

        <nav class="nav-links mobile" :class="{ active: isOpen }">

            <i class="bx bx-x close-sidebar" @click="isOpen = false"></i>

            <a v-for="link in navLinks" :key="link" :class="{ active: activeSection === link.toLowerCase() }" :href="`#${link.toLowerCase()}`" @click="isOpen = false">
                {{ link }}
            </a>
        </nav>
    </div>
    </template>

    <style scoped>
        @reference "#main.css";

        .navbar {
            @apply bg-bg-dark flex fixed right-0 left-0 top-0 items-center justify-between px-[10%] py-1 z-99;
        }

        .navbar .logo {
            @apply text-primary;
        }

        .desktop {
            @apply flex items-center gap-10;
        }

        .open-sidebar {
            @apply hidden;
        } 

        .mobile {
            @apply hidden;
        }

        .nav-links a {
            transition: color .3s ease;
            @apply outline-none relative text-2xl font-medium;
        }

        .nav-links a::after {
            transition: transform .3s ease;
            transform: scaleX(0);
            @apply absolute content-[''] bg-primary h-0.5 w-full -bottom-1 left-0;
        }

        .nav-links a:hover::after {
        transform: scaleX(1);
        }
        
        .nav-links a:hover {
            color: var(--color-primary);
        }

        .nav-links a.active {
            color: var(--color-primary);
        }

        .nav-links a.active::after {
            transform: scaleX(1);
        }
        @media (max-width: 880px) {

            .desktop {
                @apply hidden;
            }
            
            .open-sidebar {
                transition: color .3s ease;
                @apply inline text-3xl cursor-pointer;
            } 

            .open-sidebar:hover {
                color: var(--color-primary);
            }
            
            .close-sidebar {
                transition: color .3s ease;
                @apply inline text-4xl absolute top-4 left-4; 
            }

            .close-sidebar:hover {
                color: var(--color-primary);
            }

            .mobile {
                @apply flex bg-bg-light fixed flex-col gap-4 items-start top-0 right-0 h-screen w-60 px-8 py-20;
                transform: translateX(100%);
                transition: transform .3s ease;
            }

            .mobile.active {
                transform: translateX(0);
            }
        }

    </style>
<script setup>
    import Footer from './components/Footer.vue';
    import MainSkillsCard from './components/MainSkillsCard.vue';
    import Navbar from './components/Navbar.vue';
    import ServiceCard from './components/ServiceCard.vue';
    import SkillsCard from './components/SkillsCard.vue';
    import SocialMedia from './components/SocialMedia.vue';
    import { ref, onMounted } from 'vue'
    import { motion } from 'motion-v';
    import Loader from './components/Loader.vue';

    const words = ['Frontend Developer', 'Web Designer', 'Android Developer']

    const mainSkills = [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'Vue JS' },
        { name: 'JavaScript' },
        { name: 'Tailwind' }
    ]

    const skills = [
    {
        imageUrl: '/icons/HTML.png',
        header: 'HTML',
        description: 'Language'
    },
    {
        imageUrl: '/icons/CSS.png',
        header: 'CSS',
        description: 'Language'
    },
    {
        imageUrl: '/icons/JavaScript.png',
        header: 'JavaScript',
        description: 'Language'
    },
    {
        imageUrl: '/icons/Vue JS.png',
        header: 'Vue JS',
        description: 'Framework'
    },
    {
        imageUrl: '/icons/Tailwind.png',
        header: 'Tailwind',
        description: 'Framework'
    },
    {
        imageUrl: '/icons/Figma.png',
        header: 'Figma',
        description: 'Design Tool'
    },
    {
        imageUrl: '/icons/Lightroom.png',
        header: 'Lightroom',
        description: 'Design Tool'
    },
    {
        imageUrl: '/icons/Node JS.png',
        header: 'Node JS',
        description: 'Runtime'
    },
    {
        imageUrl: '/icons/VS Code.png',
        header: 'VS Code',
        description: 'Code Editor'
    },
    {
        imageUrl: '/icons/Android Studio.png',
        header: 'Android Std.',
        description: 'Code Editor'
    },
    {
        imageUrl: '/icons/Kotlin.png',
        header: 'Kotlin',
        description: 'Language'
    },
    {
        imageUrl: '/icons/Linux.png',
        header: 'Linux',
        description: 'OS'
    },
    {
        imageUrl: '/icons/C++.png',
        header: 'C++',
        description: 'Language'
    },
    {
        imageUrl: '/icons/Java.png',
        header: 'Java',
        description: 'Language'
    },
    {
        imageUrl: '/icons/Git.png',
        header: 'Git',
        description: 'Version Control'
    },
    {
        imageUrl: '/icons/Blender.png',
        header: 'Blender',
        description: '3D Software'
    }
    ]

    const services = [
  {
    header: "UI/UX Design",
    description: "I craft interfaces that feel effortless to use and look great. Smooth flows, clear layouts, and tiny details make every interaction a delight.",
    iconClass: "bx bxs-palette"
  },
  {
    header: "Web Development",
    description: "I bring designs to life with responsive, fast, and maintainable websites. Clean code, modern tools, and attention to detail ensure everything works beautifully.",
    iconClass: "bx bx-code-alt"
  },
  {
    header: "Android Development",
    description: "I build Android apps that are smooth, intuitive, and a joy to use. From navigation to layouts, every element is designed to make mobile experiences seamless.",
    iconClass: "bx bx-mobile-alt"
  }
    ]

    
    const showLoader = ref(true)

    const onLoaderDone = () => {
        showLoader.value = false
    }

    const displayedText = ref('')

    const typingSpeed = 100
    const erasingSpeed = 60
    const startDelay = 500     // пауза перед началом печати
    const endDelay = 2000      // пауза после слова
    const nextWordDelay = 600  // пауза перед следующим словом

    let wordIndex = 0
    let charIndex = 0

    function type() {
        if (charIndex < words[wordIndex].length) {
            displayedText.value += words[wordIndex][charIndex]
            charIndex++
            setTimeout(type, typingSpeed)
        } 
        else {
        setTimeout(erase, endDelay)
        }
    }

    function erase() {
        if (charIndex > 0) {
            displayedText.value = displayedText.value.slice(0, -1)
            charIndex--
            setTimeout(erase, erasingSpeed)
        } else {
            wordIndex = (wordIndex + 1) % words.length
            setTimeout(type, nextWordDelay)
        }
    }     

    onMounted(() => {
        setTimeout(type, startDelay)

    })

    const fadeUp = {
        initial: {
            opacity: 0,
        },
        whileInView: {
            opacity: 1,
        },
        
        transition: (delay = 0) => ({
             duration: 0.6,

             ease: 'easeOut',
            delay
        }),
        
        inViewOptions: {
            once: true,
            amount: 0.3
        }
    }


</script>   

<template>
    <Loader v-if="showLoader" @done="onLoaderDone"/>

    <div v-else>
    <Navbar/>
    <main>
        <motion.section :initial="{ opacity: 0 }" :animate="{ opacity: 1 }" :transition="{ duration: 2, ease: 'easeOut'}" id="home">
            <img src="/hero-image.png" alt="Hero Image"/>
            
            <div class="right">
                <h1>Hi, It's <span>Alan</span></h1>
                <h2>I'm a <span>{{ displayedText }}</span></h2>
                <p>I'm the kind of person who can stare at a color palette longer than most people spend choosing a movie for the night. I love creating interfaces that don't just look good, but spark that quiet little “wow” from the user. In my free time, you'll often find me dissecting a tricky layout or dreaming up an animation nobody asked for but everyone ends up loving.</p>
                <SocialMedia/>
            </div>
        </motion.section>

        <section id="about">
            <div class="left">
                <motion.div class="text" v-bind="fadeUp" :transition="fadeUp.transition(0)">
                    <h1>About me</h1>
                    <p>I'm the type of person who can spend way too long choosing the perfect shade of blue and still enjoy every second of it. I love crafting interfaces that feel smooth, intuitive, and just a bit magical — the kind that make users smile without even realizing why.</p>
                </motion.div>

                <motion.div class="education" v-bind="fadeUp" :transition="fadeUp.transition(0.2)">
                    <h2>Education</h2>
                    <h3>Kazakh-British Technical University</h3>
                    <p>Bachelor's Degree<br>School of Infomation Technology and Engineering</p>
                </motion.div>

                <motion.div class="main-skills" v-bind="fadeUp" :transition="fadeUp.transition(0.4)">
                    <h2>Main Skills</h2>
                    
                    <div class="main-skills-container">
                        <MainSkillsCard v-for="(skill, index) in mainSkills" :key="skill.name" v-bind="skill" :index="index"/>
                    </div>  
                    
                </motion.div>
            </div>

            <motion.img src="/about-me.jpg" alt="About-me" v-bind="fadeUp" :transition="fadeUp.transition(0)" />
        </section>

        <section id="skills">
            <motion.h1 v-bind="fadeUp" :transition="fadeUp.transition(0)">Skills</motion.h1>
            <motion.p v-bind="fadeUp" :transition="fadeUp.transition(0.2)">Tools I Use to Bring Ideas to Life</motion.p>
            <div class="skills-container">
                <SkillsCard v-for="(skill, i) in skills" :key="skill.name" v-bind="skill" :index="i"/>
            </div>
        </section>

        <motion.section id="services" v-bind="fadeUp" :transition="fadeUp.transition(0)">
            <h1>What I Do?</h1>
            <p>How I turn ideas into clean, functional digital experiences</p>
            <div class="service-container">
                <ServiceCard v-for="(service, i) in services" :key="service.name" v-bind="service" :index="i"/>
            </div>
        </motion.section>
    </main>

    <Footer/>
    </div>
</template>

<style scoped>
    @reference '#main.css';

    main {
        @apply px-[10%];
    }

    section {
        scroll-margin-top: 120px;
    }

    #home {
        @apply flex items-center gap-8 py-25 justify-center flex-col
        lg:flex-row lg:py-50;
    }

    #home img {
        @apply bg-bg rounded-full w-50 md:w-70 lg:w-90 border-primary border-6 shadow-primary shadow-(--glow-small) 
        ease-in-out duration-300 hover:shadow-(--glow);
    }

    #home .right {
        @apply flex flex-col gap-2;
    }

    #home .right h2 span {
        white-space: nowrap;
        @apply relative;
    }

    #home .right h2 span::after{
        @apply absolute content-[''] bg-primary h-full w-0.5 -right-2; 
        animation: blink .8s infinite;
    }

    #about {
        @apply flex pb-25 items-center gap-10 justify-center
        lg:pb-50;
    }

    #about .left {
        @apply  flex flex-col gap-2;
    }

    #about .left .text {
        transition: transform .3s ease;
        @apply flex flex-col;
    }

    #about .left .text:hover,
    #about .left .education:hover {
        transform: translateX(-10px);
    }

    #about .left .education {
        transition: transform .3s ease;
        @apply flex flex-col gap-2;
    }
    
    #about .left h2 {
        @apply relative border-l-4 border-primary pl-2;
    }

    #about .left .main-skills {
        @apply flex flex-col gap-2;
    }

    #about .left .main-skills .main-skills-container {
        @apply flex gap-3 flex-wrap;
    }
    
    #about img {
        transition: box-shadow .3s ease;
        @apply hidden lg:block lg:w-100 rounded-4xl shadow-(--glow-small);
    }
    #about img:hover {
        @apply shadow-(--glow);
    }

    #skills {
        @apply flex text-center flex-col justify-start lg:h-screen gap-3 pb-20 lg:py-0;
    }

    #skills .skills-container {
        @apply justify-center grid gap-4 grid-cols-[repeat(auto-fit,minmax(120px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(240px,1fr))];
    }

    #services {
        @apply flex flex-col mb-40 gap-3 text-center;
    }

    #services .service-container {
        
        @apply grid justify-center gap-6 grid-cols-[repeat(auto-fit,minmax(240px,1fr))];
    }

</style>



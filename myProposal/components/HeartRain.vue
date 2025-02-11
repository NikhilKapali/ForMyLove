<script setup>
import { ref } from "vue";
import confetti from "canvas-confetti";

const hearts = ref([]);

// const startHeartRain = () => {
//     for (let i = 0; i < 30; i++) {
//         addHeart();
//     }
//     setTimeout(() => {
//         hearts.value = [];
//     }, 3000);
// };

const startHeartRain = () => {
    confetti({ particleCount: 100, spread: 160, shapes: ["circle", "square"] });
};

const addHeart = () => {
    const id = Math.random().toString(36).substr(2, 9);
    const style = {
        left: `${Math.random() * 100}vw`,
        animationDuration: `${2 + Math.random() * 3}s`,
        animationDelay: `${Math.random()}s`,
    };
    hearts.value.push({ id, style });
};

defineExpose({ startHeartRain });
</script>

<template>
    <div class="heart-container">
        <transition-group name="heart" tag="div">
            <div v-for="heart in hearts" :key="heart.id" class="heart" :style="heart.style"></div>
        </transition-group>
    </div>
</template>

<style scoped>
.heart-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    overflow: hidden;
}

.heart {
    position: absolute;
    top: -50px;
    font-size: 24px;
    color: red;
    animation: fall linear forwards;
}

@keyframes fall {
    0% {
        transform: translateY(0) scale(1);
        opacity: 1;
    }

    100% {
        transform: translateY(100vh) scale(0.5);
        opacity: 0;
    }
}
</style>

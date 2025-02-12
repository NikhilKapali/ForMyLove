<script setup>
import { ref } from "vue";
import HeartRain from "@/components/HeartRain.vue";
import { useMotion } from "@vueuse/motion";

const showGallery = ref(false);
const images = ref([
  { src: "/image53.png", cols: 6 },
  {
    src: "/image2.jpg",
    cols: 6,
    children: [
      { src: "/image3.jpg", cols: 12 },
      { src: "/image4.jpg", cols: 12 },
    ],
  },
  { src: "/image5.jpg", cols: 6 },
  { src: "/image6.jpg", cols: 4 },
  { src: "/image8.jpg", cols: 3 },
  { src: "/image7.jpg", cols: 5 },
  { src: "/image9.jpg", cols: 8 },
  { src: "/image10.jpg", cols: 4 },

  { src: "/image12.jpg", cols: 4 },
  {
    src: "/image13.jpg",
    cols: 8,
    children: [
      { src: "/image14.jpg", cols: 12 },
      { src: "/image15.jpg", cols: 12 },
    ],
  },
  { src: "/image16.jpg", cols: 6 },
  { src: "/image17.jpg", cols: 4 },
  { src: "/image18.jpg", cols: 3 },
  { src: "/image19.jpg", cols: 5 },
  { src: "/image20.jpg", cols: 8 },
  { src: "/image21.jpg", cols: 4 },

  { src: "/image32.jpg", cols: 4 },
  {
    src: "/image23.jpg",
    cols: 8,
    children: [
      { src: "/image24.jpg", cols: 12 },
      { src: "/image25.jpg", cols: 12 },
    ],
  },
  { src: "/image26.jpg", cols: 6 },
  { src: "/image27.jpg", cols: 4 },
  { src: "/image28.jpg", cols: 3 },
  { src: "/image29.jpg", cols: 5 },
  { src: "/image30.jpg", cols: 8 },
  { src: "/image31.jpg", cols: 4 },

  { src: "/image33.jpg", cols: 6 },
  {
    src: "/image34.jpg",
    cols: 6,
    children: [
      { src: "/image35.jpg", cols: 12 },
      { src: "/image36.jpg", cols: 12 },
    ],
  },
  { src: "/image37.jpg", cols: 6 },
  { src: "/image38.jpg", cols: 4 },
  { src: "/image39.jpg", cols: 3 },
  { src: "/image40.jpg", cols: 5 },
  { src: "/image41.jpg", cols: 8 },
  { src: "/image42.jpg", cols: 4 },

  { src: "/image43.jpg", cols: 5 },
  {
    src: "/image44.jpg",
    cols: 7,
    children: [
      { src: "/image45.jpg", cols: 12 },
      { src: "/image46.jpg", cols: 12 },
    ],
  },
  { src: "/image47.jpg", cols: 6 },
  { src: "/image48.jpg", cols: 4 },
  { src: "/image49.jpg", cols: 3 },
  { src: "/image50.jpg", cols: 5 },
  { src: "/image51.jpg", cols: 8 },
  { src: "/image52.jpg", cols: 4 },
  { src: "/image54.png", cols: 6 },
  { src: "/image55.png", cols: 6 },
]);

// about section
const aboutSection = ref(null);

useMotion(aboutSection, {
  initial: { opacity: 0, y: 100 },
  visibleOnce: { opacity: 1, y: 0, transition: { duration: 0.8 } },
});

const heartRain = ref(null);

const startRain = () => {
  heartRain.value?.startHeartRain();
};

const schedules = [
  {
    color: 'cyan',
    action: 'Wake up',
    heading: "Sujita's Schedule",
    message: 'Time to start a new day and get on the nerves of Nikhil again.'
  },
  {
    color: 'green',
    action: 'Eating Food',
    heading: "Sujita's Schedule",
    message: 'Thinking about how to start a fight and get angry at him.'
  },
  {
    color: 'pink',
    action: 'Scrolling through her phone',
    heading: "Sujita's Schedule",
    message: "See's anything relevent *Sends it to me*"
  },
  {
    color: 'amber',
    action: 'While doing something',
    heading: "Sujita's Schedule",
    message: 'Thinking about new ways to taunt me and get on my nerves AGAIN!!!'
  },
  {
    color: 'orange',
    action: 'While Asleep',
    heading: "Sujita's Schedule",
    message: "He's so lucky that he has me as his girlfriend."
  },
]


const showProposal = ref(false);

const startProposal = () => {
  showProposal.value = true; // Show the proposal dialog
};

</script>

<template>
  <v-container fluid class="container">
    <div class="background-blur"></div>
    <v-row align="start" no-gutters class="video-section">
      <v-col>
        <div class="video-overlay"></div>
        <div class="background-wrapper">
          <video autoplay loop muted class="background-video">
            <source src="/video1.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="video-overlay-text">
          <h2 class="headline">Welcome to a place made just for you</h2>
          <p class="subtext">
            Every moment here is a little piece of
            my love for you.
          </p>
          <h2 class="headline2">To my everything, Sujita</h2>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div ref="aboutSection" v-motion :enter="{ opacity: 0, y: 100 }" :visible="{ opacity: 1, y: 0 }"
          class="about-section">
          <div class="about-image">
            <img src="/image1.jpg" alt="Profile Picture" />
          </div>
          <v-card class="mx-auto" prepend-icon="mdi-heart" title="About This Amazing Lady" color="#FAF3E0" width="800"
            height="520">
            <v-card-text class="about-content">
              <p>
                First of all, Meet the most incredible person in the world the love of my life. She's the reason behind
                my
                happiest moments, my
                biggest smiles, and the love I never knew I needed. Kind, strong, and absolutely breathtaking, she makes
                life feel like a dream.
              </p>
              <p>
                Well she does sometimes make me go crazy and rip my hair off but still, there is no one else that I
                would
                rather spend my days like this that I spend with you.
                Every precious moment that we share together are tiny treasures just for us.
              </p>
              <p>
                ❤️ Favorite Person: EVERYONE FROM BTS <br />
                🎶 Loves: BTS <br />
                🍕 Weakness: Laphing & BTS <br />
                😂 Best at: Making me ANGRY & Arguing about BTS <br />
              </p>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
    <v-row class="timeline-section">
      <v-timeline align="start">
        <v-timeline-item v-for="(schedule, i) in schedules" :key="i" :dot-color="schedule.color" size="small">
          <template v-slot:opposite>
            <div :class="`pt-1 headline font-weight-bold text-${schedule.color}`" v-text="schedule.heading"></div>
          </template>
          <v-card>
            <v-card-title :class="`mt-n1 headline font-weight-light mb-4 text-${schedule.color}`">
              <div v-text="schedule.action"></div>
            </v-card-title>
            <v-card-text style="font-size: medium;">{{ schedule.message }}</v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-row>
    <v-spacer />
    <h1 style="color: blueviolet;">As you can see I'm on your mind the WHOLE DAY</h1>
    <v-spacer />

    <v-row no-gutters class="gallery-section d-flex flex-column align-center text-center py-10">
      <h2 class="text-h4 font-weight-bold mb-2" style="color: #9e1b32; font-weight: bold;">Memories of Us ❤️</h2>
      <p class="text-subtitle-1 mb-5">
        I only wanted to pick the one ones with us, but I realized that every picture holds a story, a smile, and a
        moment.
        <br />
        Even if I was'nt a part of the moment, I want to hold and cherish every smile you make forever. <br />
        Take a moment to relive them with me. 💕
      </p>

      <v-btn class="bg-purple-darken-2 openButton" @click="showGallery = true" elevation="5">
        <v-icon left>mdi-camera</v-icon> Open Gallery
      </v-btn>
      <v-dialog v-model="showGallery" max-width="90%">
        <v-card>
          <v-card-title class="d-flex justify-space-between align-center px-4">
            <h3 class="text-h5 font-weight-medium"> Our Beautiful Memories</h3>
            <v-btn icon @click="showGallery = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>

          <!-- Gallery Content -->
          <v-card-text>
            <v-row>
              <template v-for="(image, imgIdx) in images" :key="imgIdx">
                <v-col :cols="image.cols">
                  <v-img :src="image.src" height="100%" cover class="rounded-lg elevation-2"></v-img>
                </v-col>

                <!-- Nested children images (if any) -->
                <v-col v-if="image.children" class="d-flex flex-column" :cols="6">
                  <v-row>
                    <v-col v-for="(children, childIdx) in image.children" :key="childIdx" :cols="children.cols">
                      <v-img :src="children.src" height="100%" cover class="rounded-lg elevation-2"></v-img>
                    </v-col>
                  </v-row>
                </v-col>
              </template>
            </v-row>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
    <v-row align="center" justify="center" no-gutters class="proposal-section text-center py-10">
      <v-btn color="primary" @click="startProposal" elevation="5">
        ❤️ Now for the grand finale ❤️
      </v-btn>
      <v-dialog v-model="showProposal" max-width="50%">
        <v-card class="text-center pa-5 bg-purple-darken-2">
          <v-card-title class="text-h5 font-weight-bold">
            My Love, My Forever ❤️
          </v-card-title>
          <v-card-text class="text-body-1">
            From the moment I met you, my life changed in ways I never imagined.
            From the moment I fell in love with you, I knew you were the only one. Every day with you is a dream I never
            want
            to wake up from. (**Kahile kahi dherai jhagada gare pani**)<br />
            You are my happiness, my joy, my heart, the reason for my high blood pressure but most importantly, my home.
            During joy or bitterness, happiness or sadness, I want to go through every stage of life with you, together,
            holding hands, every step of the way.
            I can't imagine a future without you, because you are my future, my everything. So here I am, with all my
            love,
            asking the
            most important question of my life…
            <br /><br />
            <h3>💍 **Will you marry me?** 💍</h3>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn color="success" @click="startRain" class="heart-button">
              ❤️ Yes!! ❤️
            </v-btn>
            <HeartRain ref="heartRain" />
            <v-btn color="success" @click="startRain" class="heart-button">
              ❤️ Yes!! ❤️
            </v-btn>
            <HeartRain ref="heartRain" />
          </v-card-actions>
          <h4>Sorry love you don't have anyother choice</h4>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>


<style scoped>
.container {
  width: 100%;
  background-image: url("background4.jpg");
  /* background-size: cover; */
  background-position: center;
  background-repeat: repeat;
}

.video-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.gallery-section {
  /* position: absolute; */
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url("/image50.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.proposal-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.timeline-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: 0;
  filter: blur(2px);
}

/* video overlay */
.video-overlay-text {
  position: absolute;
  top: 2%;
  left: 50%;
  /* top: 80%;
  left: 22%; */
  transform: translate(10%, 10%);
  text-align: center;
  z-index: 1;
  padding: 0px;
  border-radius: 2px;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

/* video pverlay */
.headline {
  font-size: 2.8rem;
  font-weight: bold;
  color: pink;
}

.headline2 {
  font-size: 2.8rem;
  font-style: oblique;
  color: #E6AFA4;
}

.subtext {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: bisque;
}

.content-row {
  z-index: 1;
}

.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.heart-button {
  background: pink;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 8px;
}


/* about section */
.about-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 80px 10%;
  height: 100vh;
}

.about-image {
  flex: 1;
  max-width: 400px;
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.about-content {
  flex: 1;
}

.about-content h2 {
  font-size: 32px;
  color: #CBC3E3;
}

.about-content p {
  font-size: 18px;
  color: #800020;
  line-height: 1.6;
  margin-top: 10px;
}

/* about section */
</style>
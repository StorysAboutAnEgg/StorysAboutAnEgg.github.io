<template>
  <div class="story7">
    <transition leave-active-class="animate__animated animate__backOutLeft">
      <section v-if=visible class="p1" style="height: 100vh;">
        <img src="../assets/story7/p1.1.png" style="width: 50%;margin: auto">
        <img src="../assets/story7/p1.1文字.png" style="width: 50%; margin: auto" class="p1word" @click="disapear">
      </section>
    </transition>

    <section v-if=visible2 class="p2" style="height: 100vh;">
      <img src="../assets/story7/p1.2.png" style="width: 40%;">
      <img src="../assets/story7/p1.2蛋.png" style="width: 40%;" class="p2egg" @click="roll">
    </section>

    <transition leave-active-class="animate__animated animate__rotateOut">
      <section v-if=visible3 class="p3" style="height: 100vh;">
        <img class="p3pic" src="../assets/story7/p2.1.png" style="width: 40%;">
        <img class="p3word" @click="move3" src="../assets/story7/p2.1字.png" style="width: 40%;">
      </section>
    </transition>

    <section v-if=visible4 class="p4" style="height: 100vh;">
      <img class="p4pic" src="../assets/story7/p2.2.png" style="width: 40%;">
      <img class="p2shake" @click="move4" src="../assets/story7/p2.2文字.png" style="width: 40%;">
    </section>

    <section v-if=visible5 class="p5" style="height: 100vh;">
      <img class="p5pic1" src="../assets/story7/p3.1.png" style="width: 40%;">
      <img class="p5pic2" src="../assets/story7/p3.1字1.png" style="width: 40%;">
      <img @click="move5" class="p5pic3" src="../assets/story7/p3.1字2.png" style="width: 40%;">
    </section>

    <section v-if=visible6 class="p6" style="height: 100vh;">
      <img class="p6pic" src="../assets/story7/p3.2.png" style="width: 40%;">
      <img @click="move6" class="p6word" src="../assets/story7/p3.2字.png" style="width: 40%;">
    </section>

    <section v-if=visible7 class="p7" style="height: 100vh;">
      <img class="p7pic" src="../assets/story7/p4.1.png" style="width: 40%;">
      <img class="p7pic2" src="../assets/story7/p4.1嘴.png" style="width: 40%;">
      <img @click="move7" class="p7word" src="../assets/story7/p4.1字.png" style="width: 40%;">
    </section>

    <section v-if=visible8 class="p8" style="height: 100vh;">
      <img class="p8pic" src="../assets/story7/p4.2.png" style="width: 40%;">
      <img class="p8word1" src="../assets/story7/p4.2字1.png" style="width: 40%;">
      <img @click="move8" class="p8word2" src="../assets/story7/p4.2字2.png" style="width: 40%;">
    </section>

    <section class="p9" style="height: 100vh;">
      <img class="p9pic2" src="../assets/story7/p5.2.png" style="width: 40%;">
      <img class="p9pic" src="../assets/story7/p5.1.png" style="width: 40%;">
    </section>

    <div class="container">
      <section class="panel" style="height: 60vh;">
        <img src="../assets/story7/p6.1.png" style="width: 50%;">
        <img src="../assets/story7/p6.2.png" style="width: 50%;">
      </section>

      <section class="panel" style="height: 60vh;">
        <img src="../assets/story7/p7.1.png" style="width: 50%;">
        <img src="../assets/story7/p7.2.png" style="width: 50%;">
      </section>
    </div>

    <section class="blank" style="height: 40vh;">
      <img class="finalegg" src="../assets/story7/口号.png" style="height: 50%;" @click="re">
    </section>

  </div>
</template>

<script>
import 'animate.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  data() {
    return {
      visible: true,
      visible2: true,
      visible3: true,
      visible4: false,
      visible5: true,
      visible6: false,
      visible7: false,
      visible8: false,
      eggAnimation: null
    }
  },
  watch: {
    visible(newVal) {
      this.updateScrollState();
    },
    visible2(newVal) {
      this.updateScrollState();
    },
    visible3(newVal) {
      this.updateScrollState();
    },
    visible4(newVal) {
      this.updateScrollState();
    },
    visible5(newVal) {
      this.updateScrollState();
    },
    visible6(newVal) {
      this.updateScrollState();
    },
    visible7(newVal) {
      this.updateScrollState();
    },
    visible8(newVal) {
      this.updateScrollState();
    },
  },

  mounted() {
    this.an();
    this.tr();
    this.updateScrollState();
  },

  destroyed() {
    document.body.style.overflow = '';
  },

  methods: {
    updateScrollState() {
      if (this.visible || this.visible2 || this.visible3 || this.visible4 || this.visible5 || this.visible6 || this.visible7 || this.visible8) {
        document.body.style.overflowY = 'hidden';
      } else {
        document.body.style.overflowY = '';
      }
    },

    re() {
      this.$router.push('/menu');
    },

    disapear() {
      this.visible = false;
      gsap.from('.p2', { y: 1000, opacity: 0, duration: 2, ease: "power2.in" })
    },

    tr() {
      ScrollTrigger.create({
        trigger: '.p9',
        start: 'top top',
        markers: true,
        end: '+=1000',
        scrub: true,
        pin: true,
        animation:
          gsap.fromTo('.p9pic', { opacity: 1 }, { opacity: 0 })
      });

      let sections = gsap.utils.toArray(".panel");
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".container",
          pin: true,
          markers: true,
          scrub: 1,
          // snap: 1 / (sections.length-1),滚动到最近的
          // base vertical scrolling on how wide the container is so it feels more natural.
          end: "+=1000",
        }
      });
      gsap.to(".finalegg", { opacity: 0, yoyo: true, repeat: -1 });
    },

    an() {

      const t = gsap.timeline();

      t.fromTo(".p1word", { scale: 3, opacity: 0 }, {
        rotate: 720,
        opacity: 1,
        scale: 1,
        duration: 2,
      });

      t.to(".p1word", {
        opacity: 0,
        duration: 1,
        repeat: -1,
        yoyo: true,
      });

      this.eggAnimation = gsap.to(".p2egg", {
        opacity: 0,
        duration: 1,
        repeat: -1,
        yoyo: true,
      });
      this.eggAnimation.play();
    },

    roll() {//鸡蛋滚落
      if (this.eggAnimation) {
        this.eggAnimation.pause();
      }

      const t = gsap.timeline({
        //完成鸡蛋坠落后
        onComplete: () => {
          this.visible2 = false;

          this.$nextTick(() => {
            ScrollTrigger.refresh();
          });

          this.bbig();
        }
      });

      t.to(".p2egg", {
        opacity: 1,
        scale: 0,
        y: 700,
        rotate: 450,
        duration: 1,
      });
    },

    bbig() {
      const i = gsap.timeline();
      i.fromTo(".p3", { scale: 0 }, { scale: 1.5, duration: 1 })
        .from(".p3word", { scale: 10, y: -500, duration: 1 });
    },

    move3() {
      this.visible3 = false;
      this.visible4 = true;
      this.$nextTick(() => {
        this.move3_1();
      });
    },

    move3_1() {
      gsap.to(
        ".p4pic", {
        yoyo: true,
        x: 3,
        y: 3,
        repeat: -1,
        duration: 0.1,
      });

      gsap.to(
        ".p2shake", {
        yoyo: true,
        x: 8,
        y: 8,
        repeat: -1,
        duration: 0.07,
      });
    },

    move4() {
      const t = gsap.timeline({
        onComplete: () => {
          this.visible4 = false;
          this.move4_2();
        }
      });
      t.to(".p4", { scale: 0, opacity: 0 });
    },

    move4_2() {
      const t = gsap.timeline();
      t.from(".p5", { scale: 0 })
        .from(".p5pic2", { scale: 10, opacity: 0, y: -1000, x: -700, duration: 0.5 })
        .from(".p5pic3", { scale: 10, opacity: 0, y: 1000, x: 700, duration: 1 })
    },

    move5() {
      const t = gsap.timeline({
        onComplete: () => {
          this.visible5 = false;
          this.visible6 = true;
          this.$nextTick(() => {
            this.move5_2();
          });
        }
      });
      t.to(".p5", { y: -1000, scale: 0, opacity: 0 });
    },
    move5_2() {
      const t = gsap.timeline();
      t.from(".p6pic", { y: 1000, scale: 0, opacity: 0 })
        .from(".p6word", { y: -1000 })
    },

    move6() {
      const t = gsap.timeline({
        onComplete: () => {
          this.visible6 = false;
          this.visible7 = true;
          this.$nextTick(() => {
            this.move6_2();
          });
        }
      });
      t.to(".p6", { x: -1000, scale: 0, opacity: 0 });
    },
    move6_2() {
      const t = gsap.timeline();
      t.from(".p7pic", { x: 1000, scale: 0, opacity: 0 });
      t.from(".p7pic2", { x: 1000, scale: 0, opacity: 0 }, "<");
      t.from(".p7word", { y: -1000 });
      t.to(".p7pic2", { opacity: 0.2, scale: 1.1, duration: 0.2, yoyo: true, repeat: -1 });
    },

    move7() {
      const t = gsap.timeline({
        onComplete: () => {
          this.visible7 = false;
          this.visible8 = true;
          this.$nextTick(() => {
            this.move7_2();
          });
        }
      });
      t.to(".p7", { x: -1000, scale: 0, opacity: 0 });
    },
    move7_2() {
      const t = gsap.timeline();
      t.from(".p8pic", { x: 1000, scale: 0, opacity: 0 });
      t.from(".p8word1", { scale: 0, opacity: 0 });
      t.from(".p8word2", { y: 1000 });
    },

    move8() {
      const t = gsap.timeline({
        onComplete: () => {
          this.visible8 = false;
          this.$nextTick(() => {
            ScrollTrigger.refresh();
          });
        }
      });
      t.to(".p8", { scale: 0, opacity: 0 });
    }
  }
}
</script>

<style scoped>
.p1,
.p2 {
  overflow-y: hidden;
}

.story7 {
  background-color: #f2eadf;
}

.p1word,
.p2egg,
.p3word,
.p2shake,
.p5pic3,
.p6word,
.p7word,
.p8word2,
.finalegg:hover {
  cursor: pointer;
}

section {
  position: relative;
}

.p1 img,
.p3 img,
.blank img,
.p4 img,
.p5 img,
.p6 img,
.p7 img,
.p8 img,
.p9 img {
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  margin: auto;
}

.p2 img {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
}

.container {
  overscroll-behavior: none;
  width: 200%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
}
</style>
<template>
  <section class="blank" style="height: 20vh;">
    <h1>这是一段空白</h1>
  </section>

  <div class="container">
   <section class="p1 panel"style="height: 80vh;">
    <img src="/超市7/p1.1.png" style="width: 50%;">
    <img src="/超市7/p1.2.png"style="width: 50%;">
   </section>

   <section class="p2 panel"style="height: 80vh;">
    <img src="/超市7/p2.1.png"style="width: 50%;">
    <img src="/超市7/p2.2.png"style="width: 50%;">
   </section>
   </div>
   
  <!-- <section id="sectionPin">
    <div class="pin-wrap">
      <div class="item"><img src="/超市7/p1.1.png" style="height: 100%;"></div>
      <div class="item"><img src="/超市7/p1.2.png"style="height: 100%;"></div>
      <div class="item"><img src="/超市7/p2.1.png"style="height: 100%;"></div>
      <div class="item"><img src="/超市7/p2.2.png" style="height: 100%;"></div>
      <div class="item"><img src="/超市7/p3.1.png" style="height: 100%;"></div>
      <div class="item"><img src="/超市7/p3.2.png" style="height: 100%;"></div>
    </div>
  </section> -->

  <section class="blank" style="height: 20vh;">
    <img src="/超市7/p3.1.png"style="width: 50%;">
    <img src="/超市7/p3.2.png"style="width: 50%;">
  </section>

</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  mounted() {
    this.an()
  },
  methods: {
    an() {
      let sections = gsap.utils.toArray(".panel");
      gsap.to(sections, {
        xPercent: -100 * (sections.length-1),
        ease: "none",
        scrollTrigger: {
          trigger: ".container",
          pin: true,
          scrub: 1,
          // snap: 1 / (sections.length-1),滚动到最近的
          // base vertical scrolling on how wide the container is so it feels more natural.
          end: "+=1000",
        }
      });    
    }
    }
}
</script>

<style scoped>
.container {
  overscroll-behavior: none;
  width: 200%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
}
</style>
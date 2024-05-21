<template>
<!-- <div class="all"> -->
  <transition leave-active-class="animate__animated animate__fadeOutUpBig">
    <div class="p0"  v-show="ifshow" @click="disapear">
      <img class="mainback" src="../assets/首页8/1.jpg"/>
      <div class="move" style="position:absolute">
        <eggrain/>
      </div>
    </div>
    </transition>

  <div class="story" v-show="ifshow2">
    <section class="p1" style="height: 100vh;">
    <img class="onel"src="../assets/首页8/故事1字1.png" style="top:40%;left:20%;z-index:1">
    <div class="b_onel">
      <img src="../assets/首页8/荷包蛋.png"style="width:200px;left:5%;top:10%">
      <img src="../assets/首页8/洋葱人.png"style="width:200px;left:30%;top:20%">
      <img src="../assets/首页8/西红柿.png"style="width:200px;left:10%;bottom:5%">
      <img src="../assets/首页8/梨子.png" style="width:200px;left:70%;bottom:15%">
      <img src="../assets/首页8/黑蛋.png"style="width:200px;left:80%;top:15%">
    </div>
    </section>

  <section class="p2"style="height: 100vh;">
    <img class="twos" src="../assets/首页8/故事1.1.png"style="top:20%;">
  </section>

  <section class="p3"style="height: 100vh;">
    <img class="threel" src="../assets/首页8/故事1字2.png" style="left:-20%;top:-10%;position: relative;z-index: 1;">
    <img class="threes" src="../assets/首页8/故事1.2.png" style="left:40%;bottom: 0%;position:absolute;">
   </section>

   <section class="p4"style="height: 100vh;">
    <img class="p4_1"src="../assets/首页8/p4.1s.png"style="height: 60%;left:50%;bottom:0%;">
    <img class="p4_1egg1"src="../assets/首页8/p4.1_flyegg.png"style="height: 20%;left:10%;top:10%;">
    <img class="p4_1egg"src="../assets/首页8/p4.1_flyegg.png"style="height: 20%;left:50%;top:20%;">
    <img class="p4_1egg2"src="../assets/首页8/p4.1_flyegg.png"style="height: 20%;left:20%;top:60%;">
   </section>

   <section class="p5"style="height: 100vh;">
    <img class="p4_2l"src="../assets/首页8/p4.2l.png"style="height:15%;top: 10%;">
    <img class="p4_2s"src="../assets/首页8/p4.2s.png"style="height:60%;bottom: 5%;">

    <img class="p5downegg"src="../assets/首页8/白蛋.png"style="height:20%;left:7%;bottom: 0%;">
    <img class="p5downegg"src="../assets/首页8/黑蛋.png"style="height:15%;left:30%;bottom: 0%;">
    <img class="p5downegg"src="../assets/首页8/荷包蛋.png"style="height:15%;right:30%;bottom: 1%;">
    <img class="p5downegg"src="../assets/首页8/黑蛋.png"style="height:25%;right:7%;bottom: 0%;">
   </section>

   <div class="container">
   <section class="p6 panel"style="height: 100vh;">
    <img class="p6"src="../assets/首页8/p6.png">
   </section>

   <section class="p7 panel"style="height: 100vh;">
    <img class="p7"src="../assets/首页8/p7.png">
    <img class="next"src="../assets/首页8/荷包蛋.png"style="right: 5%;bottom: 10%;" @click="goto('/menu')">
   </section>
   </div>

  </div>
</template>

<script >
// import animation from "chito/lib/animation";
import eggrain from "../components/eggrain.vue"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      ifshow: true,
      ifshow2:false
    }
  },
  methods: {
    mounted() {
    // 切换页面时滚动条自动滚动到顶部
        window.scrollTo(0,0);
    },
    goto(route) {
      this.$router.push(route);
    },
    disapear(){
      this.ifshow = false;
      this.ifshow2 = true;
      const t = gsap.timeline();
      t.fromTo(".onel", {y:1000,opacity: 0},{
        opacity: 1,  
        y:0,
        duration:2
      });
      t.fromTo(".b_onel img", { opacity: 0 }, {
        opacity: 1,duration:1
      }, );
      t.to(".b_onel img",{
        duration: 10,
        ease: "none",
        repeat: -1,
        rotation: 360,
      });
      ScrollTrigger.create({
        trigger: '.p1',
        start: 'top top',
        end: '+=700',
        scrub: true,
        animation:
          gsap.fromTo('.p1', { scale: 1 }, { scale: 0.5 })
      });
      ScrollTrigger.create({
        trigger: '.p2',
        start: 'top 80%',
        end: '+=1000',
        scrub: true,
        animation:
          gsap.fromTo('.twos', { scale: 0.5 }, { scale: 1.2 })
      })

      gsap.to(".threes", {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
      trigger: ".p3",
      start: "top bottom", 
      end: "bottom top",
      scrub: true
      }, 
      });

      gsap.to(".threel", {
        x:200,
        yPercent: 100, 
        ease: "none",
      scrollTrigger: {
        trigger: ".p3",
        start: "top bottom", 
        end: "bottom top",
        scrub: true
      }, 
      });
      ScrollTrigger.create({
        trigger: '.p4',
        start: 'top top',
        end: '+=500',
        scrub: true,
        animation:
          gsap.timeline()
          .fromTo('.p4_1egg2', {opacity:0.5},{ x: 100, y: 100,opacity:1})
          .fromTo('.p4_1egg', {opacity:0.5},{ x: 200, y: 200,opacity:1},"<")
          .fromTo('.p4_1egg1', {opacity:0.5},{ x: 400, y: 400,opacity:1 },"<")
      });

      ScrollTrigger.create({
        trigger: '.p5',
        start: 'top top',
        pin: true,
        end: '+=2000',
        scrub: true,
        animation:
          gsap.timeline()
          .fromTo('.p4_2l', {opacity:0},{opacity:1})
          .fromTo('.p5downegg', {y:500,opacity:0},{y: -500,opacity:1})
      });
      let sections = gsap.utils.toArray(".panel");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".container",
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          // base vertical scrolling on how wide the container is so it feels more natural.
          end: "+=2000",
        }
      });    

      gsap.to(".next",{
        opacity: 0,
        duration:1,
        repeat: -1,
        yoyo:true,
      });

    }
   },
  components: {
    eggrain
   }
}
</script>

<style scoped>
.p0{
  height: 100%;
  width: 100%;
}
.mainback{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  /* max-width: 100%; */
  background-color:#f2eadf;
}
section{
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #f2eadf;
}
.story img{
  position: absolute;
  /* left:20%; */
  /* background-color: #f2eadf; */
}
.container {
  overscroll-behavior: none;
  width: 200%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
}
</style>

<template>
  <div class="about" @click="handleClick">
    <transition name="fade-from-big">
      <img v-if="clickCount > 0 && stage === 0" src="../assets/story4/对话1-1.png" alt="文字1" class="dialog-image">
    </transition>
    <transition name="fade">
      <img v-if="clickCount > 1 && stage === 0" src="../assets/story4/对话1-2.png" alt="对话1-1" class="dialog-image">
    </transition>
    <transition name="fadefromsmall">
      <img v-if="clickCount > 2 && stage === 0" src="../assets/story4/对话1-3.png" alt="对话1-1" class="dialog-image">
    </transition>
    <transition name="fade">
      <img v-if="clickCount > 2 && stage === 0" src="../assets/story4/对话1mouth.png" alt="对话1-1" class="dialog-image speak1">
    </transition>
    
      <img v-if="newImageVisible && newClickCount > 0 && stage === 1" src="../assets/story4/对话2-1.png" alt="对话2-1" class="dialog-image dialog2bg">
    
      <img v-if="newImageVisible && newClickCount > 0 && stage === 1" src="../assets/story4/对话2蛋.png" alt="对话2蛋" class="dialog-image dialog2egg">
    
    <transition name="fade-in-up">
      <img v-if="stage === 2 && newClickCount > 1" src="../assets/story4/对话3-1.png" alt="对话3-1" class="dialog-image">
    </transition>
    <transition name="fade-in-up">
      <img v-if="stage === 2 && newClickCount > 2" src="../assets/story4/对话3文字1.png" alt="对话3文字1" class="dialog-image">
    </transition>
    <transition name="fade">
      <img v-if="stage === 2 && newClickCount > 2" src="../assets/story4/对话3泪.png" alt="对话3泪" class="dialog-image">
    </transition>

    <img v-if="stage === 2 && newClickCount > 2" src="../assets/story4/对话3嘴.png" alt="对话3嘴" class="dialog-image speak2">

    <transition name="fade">
      <img v-if="stage === 2 && newClickCount > 3" src="../assets/story4/对话3文字2.png" alt="对话3文字2" class="dialog-image">
    </transition>
    

    <transition name="fade">
      <img v-if="stage === 3 && newClickCount > 4" src="../assets/story4/对话4-1.png" alt="对话4-1" class="dialog-image">
    </transition>
    <transition name="fade-from-small2">
      <img v-if="stage === 3 && newClickCount > 5" src="../assets/story4/对话4-2.png" alt="对话4-2" class="dialog-image">
    </transition>
    
    <img v-if="stage === 3 && newClickCount > 5" src="../assets/story4/对话4嘴.png" alt="对话4嘴" class="dialog-image speak3">
  

    <transition name="fade">
      <img v-if="stage === 4 && newClickCount > 6" src="../assets/story4/对话5.png" alt="对话5" class="dialog-image">
    </transition>

    <transition name="fade-from-rightdown">
      <img v-if="stage === 4 && newClickCount > 7" src="../assets/story4/对话5车.png" alt="对话5车" class="dialog-image car ">
    </transition>

    <transition name="fade">
      <img v-if="stage === 5 && newClickCount > 8" src="../assets/story4/对话6.png" alt="对话6" class="dialog-image">
    </transition>
    <transition name="fade">
      <img v-if="stage === 5 && newClickCount > 9" src="../assets/story4/对话6蛋.png" alt="对话6蛋" class="dialog-image car">
    </transition>
    <transition name="fade-from-small2">
      <img v-if="stage === 5 && newClickCount > 10" src="../assets/story4/对话6山.png" alt="对话6山" class="dialog-image">
    </transition>
    <transition name="fade">
      <img v-if="stage === 5 && newClickCount > 10" src="../assets/story4/对话6文字.png" alt="对话6文字" class="dialog-image">
    </transition>

    <transition name="fade">
      <img v-if="stage === 6 && newClickCount > 11" src="../assets/story4/对话7.png" alt="对话7" class="dialog-image">
    </transition>
    <transition name="fademouth1">
      <img v-if="stage === 6 && newClickCount > 12" src="../assets/story4/对话7嘴1.png" alt="对话7嘴1" class="dialog-image">
    </transition>
    <transition name="fademouth2">
      <img v-if="stage === 6 && newClickCount > 12" src="../assets/story4/对话7嘴2.png" alt="对话7嘴2" class="dialog-image">
    </transition>
    <transition name="fademouth3">
      <img v-if="stage === 6 && newClickCount > 12" src="../assets/story4/对话7嘴3.png" alt="对话7嘴3" class="dialog-image">
    </transition>
    <transition name="fade">
      <img v-if="stage === 6 && newClickCount > 13" src="../assets/story4/对话7文字.png" alt="对话7文字" class="dialog-image">
    </transition>

    <transition name="fade">
      <img v-if="stage === 7 && newClickCount > 14" src="../assets/story4/对话8-1.png" alt="对话8-1" class="dialog-image">
    </transition>
    <transition name="fade-from-left">
      <img v-if="stage === 7 && newClickCount > 15" src="../assets/story4/对话8-2.png" alt="对话8-2" class="dialog-image">
    </transition>
    <transition name="fadefromsmall">
      <img v-if="stage === 7 && newClickCount > 16" src="../assets/story4/对话8-3.png" alt="对话8-3" class="dialog-image">
    </transition>
    <transition name="fade-from-right">
      <img v-if="stage === 7 && newClickCount > 17" src="../assets/story4/对话8-4.png" alt="对话8-4" class="dialog-image">
    </transition>

    <transition name="fade">
      <img v-if="stage === 8 && newClickCount > 18" src="../assets/story4/对话9.png" alt="对话9" class="dialog-image">
    </transition>
    <transition name="fade">
      <img v-if="stage === 8 && newClickCount > 19" src="../assets/story4/对话9-2.png" alt="对话9-2" class="dialog-image">
    </transition>
    
    <transition name="fade">
      <img v-if="stage === 9 && newClickCount > 20" src="../assets/story4/对话10-1.png" alt="对话10-1" class="dialog-image">
    </transition>
    <transition name="fade-in-down">
      <img v-if="stage === 9 && newClickCount > 21" src="../assets/story4/对话10-2.png" alt="对话10-2" class="dialog-image">
    </transition>
    <transition name="fade-in-up">
      <img v-if="stage === 9 && newClickCount > 22" src="../assets/story4/对话10-3.png" alt="对话10-3" class="dialog-image">
    </transition>

    <transition name="fade">
      <img v-if="stage === 10 && newClickCount > 23" src="../assets/story4/对话11-1.png" alt="对话11-1" class="dialog-image">
    </transition>
    <transition name="fade-in-down">
      <img v-if="stage === 10 && newClickCount > 24" src="../assets/story4/对话11-2.png" alt="对话11-2" class="dialog-image">
    </transition>
    <transition name="fade-in-up">
      <img v-if="stage === 10 && newClickCount > 25" src="../assets/story4/对话11-3.png" alt="对话11-3" class="dialog-image">
    </transition>

    <transition name="fade">
      <img v-if="stage === 11 && newClickCount > 26" src="../assets/story4/对话12bg.png" alt="对话12bg" class="dialog-image">
    </transition>
    <transition name="fade-from-left">
      <img v-if="stage === 11 && newClickCount > 27" src="../assets/story4/对话12左手.png" alt="对话12左手" class="dialog-image">
    </transition>
    <transition name="fade">
      <img v-if="stage === 11 && newClickCount > 28" src="../assets/story4/对话12左蛋.png" alt="对话12左蛋" class="dialog-image">
    </transition>
    <transition name="fade-from-right">
      <img v-if="stage === 11 && newClickCount > 27" src="../assets/story4/对话12右手.png" alt="对话12右手" class="dialog-image">
    </transition>
    <transition name="fade">
      <img v-if="stage === 11 && newClickCount > 28" src="../assets/story4/对话12右蛋.png" alt="对话12右蛋" class="dialog-image">
    </transition>

    <transition name="fade">
      <img v-if="stage === 12 && newClickCount > 29" src="../assets/story4/对话13bg.png" alt="对话13bg" class="dialog-image">
    </transition>
    <transition name="jump">
      <img v-if="stage === 12 && newClickCount > 29" src="../assets/story4/对话13蛋1.png" alt="对话13蛋1" class="dialog-image">
    </transition>
    <transition name="jump2">
      <img v-if="stage === 12 && newClickCount > 29" src="../assets/story4/对话13蛋2.png" alt="对话13蛋2" class="dialog-image">
    </transition>

    <transition name="fade">
      <img v-if="stage === 13 && newClickCount > 30" src="../assets/story4/对话14bg.png" alt="对话14bg" class="dialog-image">
    </transition>
    <transition name="fade">
      <img v-if="stage === 13 && newClickCount > 31" src="../assets/story4/对话14蛋.png" alt="对话14蛋" class="dialog-image">
    </transition>
    <transition name="fade1">
      <img v-if="stage === 13 && newClickCount > 32" src="../assets/story4/对话14风景1.png" alt="对话14风景1" class="dialog-image">
    </transition>
    <transition name="fade2">
      <img v-if="stage === 13 && newClickCount > 32" src="../assets/story4/对话14风景2.png" alt="对话14风景2" class="dialog-image">
    </transition>
    <transition name="fade3">
      <img v-if="stage === 13 && newClickCount > 32" src="../assets/story4/对话14风景3.png" alt="对话14风景3" class="dialog-image">
    </transition>
    <transition name="fade">
      <img v-if="stage === 13 && newClickCount > 32" src="../assets/story4/对话14星星.png" alt="对话14星星" class="dialog-image shine">
    </transition>
    <transition name="fade">
      <img v-if="stage === 13 && newClickCount > 33" src="../assets/story4/对话14文字.png" alt="对话14文字" class="dialog-image">
    </transition>


    <transition name="fade">
      <img v-if="stage === 14 && newClickCount > 34" src="../assets/story4/对话15.png" alt="对话15" class="dialog-image">
    </transition>
    <transition name="fade">
      <img v-if="stage === 14 && newClickCount > 35" src="../assets/story4/对话15蛋1.png" alt="对话15蛋1" class="dialog-image">
    </transition>
    <transition name="fade">
      <img v-if="stage === 14 && newClickCount > 36" src="../assets/story4/对话15蛋2.png" alt="对话15蛋2" class="dialog-image">
    </transition>

    <transition name="fade">
      <img v-if="stage === 15 && newClickCount > 37" src="../assets/story4/对话16.png" alt="对话16" class="dialog-image">
    </transition>
    <transition name="fade">
      <img v-if="stage === 15 && newClickCount > 37" src="../assets/story4/对话16嘴.png" alt="对话16嘴" class="dialog-image speak4">
    </transition>
    <transition name="fadefromsmall">
      <img v-if="stage === 15 && newClickCount > 37" src="../assets/story4/对话16文字.png" alt="对话16文字" class="dialog-image">
    </transition>

    <transition name="fade-rotate">
      <button v-if="showEggButton" class="action-button" @click="showNewImage"></button>
    </transition>

    <transition name="fade-rotate">
  <button v-if="showBackEggButton" class="action-back-button" @click="showNewImage"></button>
 </transition> 
  </div>
</template>

<script>
export default {
  name: 'Story2',
  data() {
    return {
      clickCount: 0,
      newClickCount: 0,
      newImageVisible: false,
      showEggButton: false,
      showBackEggButton:false,
      showMusic1: false,
      stage: 0
    };
  },
  methods: {
    handleClick() {
      if (this.stage === 0 && this.clickCount < 4) {
        this.clickCount++;
      }if (this.stage === 0 && this.clickCount === 4) {
        this.showEggButton = true;
        this.clickCount++;
      }
    },
    handleAnimationEnd(event) {
      if (event.animationName === 'slideLeftAndRotate') {
        event.target.style.display = 'none';
      }
      if (event.animationName === 'bounce-left-to-right') {
        event.target.style.display = 'none';
      }
    },
    showButton() {
      this.showEggButton = true;
    },
    showNewImage() {
      if (this.stage === 0) {
        this.stage = 1;
        this.newImageVisible = true;
        this.newClickCount = 1;
      } else if (this.stage === 1 && this.newClickCount < 1) {
        this.newClickCount++;
      } else if (this.stage === 1 && this.newClickCount === 1) {
        this.stage = 2;
        this.newClickCount++;
        this.newImageVisible = true;
      } else if (this.stage === 2 && this.newClickCount < 4) {
        this.newClickCount++;
      } else if (this.stage === 2 && this.newClickCount === 4) {
        this.stage = 3;
        this.newClickCount++;
      } else if (this.stage === 3 && this.newClickCount < 6) {
        this.newClickCount++;
      }else if (this.stage === 3 && this.newClickCount === 6) {
        this.stage = 4;
        this.newClickCount ++; 
      } else if (this.stage === 4 && this.newClickCount < 8) {
        this.newClickCount++;
      }
      else if (this.stage === 4 && this.newClickCount === 8) {
        this.stage = 5;
        this.newClickCount++;
      }else if (this.stage === 5 && this.newClickCount < 11) {
        this.newClickCount++;
      }
      else if (this.stage === 5 && this.newClickCount === 11) {
        this.stage = 6;
        this.newClickCount++;
      }else if (this.stage === 6 && this.newClickCount < 14) {
        this.newClickCount++;
      }
      else if (this.stage === 6 && this.newClickCount === 14) {
        this.stage = 7;
        this.newClickCount++;
      }else if (this.stage === 7 && this.newClickCount < 18) {
        this.newClickCount++;
      }else if (this.stage === 7 && this.newClickCount === 18) {
        this.stage = 8;
        this.newClickCount++;
      }else if (this.stage === 8 && this.newClickCount < 20) {
        this.newClickCount++;
      }else if (this.stage === 8 && this.newClickCount === 20) {
        this.stage = 9;
        this.newClickCount++;
      }else if (this.stage === 9 && this.newClickCount < 23) {
        this.newClickCount++;
      }else if (this.stage === 9 && this.newClickCount === 23) {
        this.stage = 10;
        this.newClickCount++;
      }else if (this.stage === 10 && this.newClickCount < 26) {
        this.newClickCount++;
      }else if (this.stage === 10 && this.newClickCount === 26) {
        this.stage = 11;
        this.newClickCount++;
      }else if (this.stage === 11 && this.newClickCount < 29) {
        this.newClickCount++;
      }else if (this.stage === 11 && this.newClickCount === 29) {
        this.stage = 12;
        this.newClickCount++;
      }else if (this.stage === 12 && this.newClickCount < 30) {
        this.newClickCount++;
      }else if (this.stage === 12 && this.newClickCount === 30) {
        this.stage = 13;
        this.newClickCount++;
      }else if (this.stage === 13 && this.newClickCount < 34) {
        this.newClickCount++;
      }else if (this.stage === 13 && this.newClickCount === 34) {
        this.stage = 14;
        this.newClickCount++;
      }else if (this.stage === 14 && this.newClickCount < 37) {
        this.newClickCount++;
      }else if (this.stage === 14 && this.newClickCount === 37) {
        this.stage = 15;
        this.newClickCount++;
      }else if (this.stage === 15 && this.newClickCount <38) {
        this.newClickCount++;
      }else if (this.stage === 15 && this.newClickCount === 38) {
        this.showEggButton = false;
        this.showBackEggButton = true;
        this.newClickCount++;
      }
      else if (this.stage === 15 && this.newClickCount === 39) {
        this.$router.push('/menu');
      }

    }
  }
};
</script>

<style scoped>
.about {
  background-color: rgb(239, 232, 224);
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  cursor:url("../assets/story4/flowercursor.png"),auto;
}

.dialog-image,
.egg-image {
  position: absolute;
  max-width: 100%;
  height: auto;
}
.dialog-image {
  top: 5%;
  left: 8%;
  max-width: 80%;
  
}
.egg-image {
  top: 50%;
  left: 50%;
}

.dialog2bg{
  animation: bigger 2s 0s infinite;
}
@keyframes bigger {
  0% {
    scale: 1;
  }
  50% {
    scale: 1.1;
  }
  100% {
    scale: 1;
  }
}
.dialog2egg{
  animation: smaller 2s 0s infinite;
}
@keyframes smaller {
  0% {
    scale: 0.9;
  }
  50% {
    scale: 0.7;
  }
  100% {
    scale: 0.9;
  }
}

.speak1  {
  animation: speak1 0.25s 0s 2 ;
}
@keyframes speak1 {
  0% {
    transform-origin: 61% 62%; 
    transform:  scale(0.8);
  }
  100%{
    transform-origin: 61% 62%; 
    transform: scale(1.2);
  }
}
.speak2 {
  animation: speak2 0.25s 0s 3 ;
}
@keyframes speak2 {
  0% {
    transform-origin: 40% 60%; 
    transform:  scale(0.8);
  }
  100%{
    transform-origin: 40% 60%; 
    transform: scale(1.2);
  }
}
.speak3 {
  z-index: 10;
  animation: fadeIn 2s forwards, speak3 0.25s 1s 4;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes speak3 {
  0% {
    opacity: 1;
    transform-origin: 67% 70%; 
    transform:  scale(1);
  }
  50%{
    opacity: 1;
    transform-origin: 67% 70%; 
    transform: scale(1.2);
  }
  100%{
    opacity: 1;
    transform-origin: 67% 70%; 
    transform: scale(1);
  }
}
.speak4 {
  animation: speak4 0.25s 0s 3 ;
}
@keyframes speak4 {
  0% {
    transform-origin: 10% 80%; 
    transform:  scale(0.9);
  }
  100%{
    transform-origin: 10% 80%; 
    transform: scale(1.1);
  }
}

.car{
  animation: Jump 0.5s infinite ;
}
@keyframes Jump {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2%); 
  }
  100%{
    transform: translateY(0);
  }
}

.shine{
  animation: shine 1s infinite
}
@keyframes shine {
  0% {
    opacity: 1;
    scale: 1;
  }
  50% {
    opacity: 0.3;
    scale: 1.05;
  }
  100% {
    opacity: 1;
    scale: 1;
  }
}


.fade-enter-active {
  animation: fade 1s ease-out forwards;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


.fade1-enter-active {
  animation: fade1 0.5s ease-out forwards;
}
@keyframes fade1 {
  0% {
    opacity: 0;
    transform:scale(0);
    transform-origin: 10% 30%; 
  }
  100% {
    opacity: 1;
    transform:scale(1);
    transform-origin: 10% 30%; 
  }
}


.fade2-enter-active {
  animation: fade2 1s ease-out forwards;
}
@keyframes fade2 {
  0% {
    opacity: 0;
    transform:scale(0);
    transform-origin: 50% 30%; 
  }
  50% {
    opacity: 0;
    transform:scale(0);
    transform-origin: 50% 30%; 
  }
  100% {
    opacity: 1;
    transform:scale(1);
    transform-origin: 50% 30%; 
  }
}


.fade3-enter-active {
  animation: fade3 1.5s ease-out forwards;
}
@keyframes fade3 {
  0% {
    opacity: 0;
    transform:scale(0);
    transform-origin: 90% 30%; 
  }
  75% {
    opacity: 0;
    transform:scale(0);
    transform-origin: 90% 30%; 
  }
  100% {
    opacity: 1;
    transform:scale(1);
    transform-origin: 90% 30%; 
  }
}

.fademouth1-enter-active {
  animation: fademouth1 1s ease-out forwards;
}
@keyframes fademouth1 {
  0% {
    opacity: 0;
    transform:scale(0);
    transform-origin: 10% 75%; 
  }
  75% {
    opacity: 1;
    transform:scale(1.2);
    transform-origin: 10% 75%; 
  }
  100% {
    opacity: 1;
    transform:scale(1);
    transform-origin: 10% 75%; 
  }
}

.fademouth2-enter-active {
  animation: fademouth2 1s ease-out forwards;
}
@keyframes fademouth2 {
  0% {
    opacity: 0;
    transform:scale(0);
    transform-origin: 68% 70%; 
  }
  75% {
    opacity: 1;
    transform:scale(1.2);
    transform-origin: 68% 70%; 
  }
  100% {
    opacity: 1;
    transform:scale(1);
    transform-origin: 68% 70%; 
  }
}

.fademouth3-enter-active {
  animation: fademouth3 1s ease-out forwards;
}
@keyframes fademouth3 {
  0% {
    opacity: 0;
    transform:scale(0);
    transform-origin: 93% 70%; 
  }
  75% {
    opacity: 1;
    transform:scale(1.2);
    transform-origin:93% 70%; 
  }
  100% {
    opacity: 1;
    transform:scale(1);
    transform-origin: 93% 70%; 
  }
}


.jump-enter-active{
  animation: Jump 0.5s ease-out forwards ;
}
.jump2-enter-active{
  animation: Jump2 1s ease-out forwards ;
}
@keyframes Jump2 {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(0); 
  }
  75% {
    transform: translateY(-2%); 
  }
  100%{
    transform: translateY(0);
  }
}

.fade-from-big-enter-active {
  animation: fadeFromBig 1s ease-out forwards;
}
@keyframes fadeFromBig {
  0% {
    opacity: 0;
    scale: 2;
  }
  100% {
    opacity: 1;
    scale: 1;
  }
}


.fade-rotate-enter-active {
  animation: fade-rotate 1.5s linear forwards;
}
@keyframes fade-rotate {
  0% {
    scale: 0.2;
    transform:rotate(0deg);
    opacity: 0;
  }
  25% {
    scale: 0.5;
    transform:rotate(60deg);
    opacity: 1;
  }
  50%{
    scale: 0.8;
    transform:rotate(0deg);
    opacity: 1;
  }
  75%{
    scale: 1;
    transform:rotate(-60deg);
    opacity: 1;
  }
  100% {
    scale: 1;
    transform:rotate(0deg);
    opacity: 1;
  }
}

.fade-from-small2-enter-active {
  animation: fadeFromSmall2 1s ease-out forwards;
}
@keyframes fadeFromSmall2 {
  0% {
    transform:scale(0.8);
    transform-origin: 90% 100%; 
  }
  100% {
    opacity: 1;
    transform:scale(1);
    transform-origin: 90% 100%; 
  }
}

.fade-from-rightdown-enter-active {
  animation: fade-from-rightdown 1s ease-out forwards;
}
@keyframes fade-from-rightdown {
  0% {
    opacity: 0;
    transform: translateY(100%) translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%) translateX(0%);

  }
}

.fade-from-left-enter-active {
  animation: fade-from-left 1.5s ease-out forwards;
}
@keyframes fade-from-left {
  0% {
    opacity: 0;
    transform: translateX(-50%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);

  }
}
.fade-from-right-enter-active {
  animation: fade-from-right 1.5s ease-out forwards;
}
@keyframes fade-from-right {
  0% {
    opacity: 0;
    transform: translateX(50%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);

  }
}

.fade-in-up-enter-active {
  animation: fadeInUp 1s ease-out forwards;
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(200%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fadefromsmall-enter-active {
  animation: fadefromsmall 1s ease-out forwards;
}
@keyframes fadefromsmall {
  0% {
    scale: 0.1;
    opacity: 0;
  }
  70% {
    scale: 1.1;
    opacity: 1;
  }
  100% {
    scale: 1;
    opacity: 1;
  }
}

.fade-in-down-enter-active {
  animation: fadeInDown 1s ;
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}


.action-button {
  position: absolute;
  bottom: 90px;
  right: 90px;
  width: 120px;
  height: 120px;
  background: url('../assets/story4/eggbutton.png') no-repeat center center;
  background-size: contain;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease; 
}

.action-button:hover {
  position: absolute;
  bottom: 90px;
  right: 90px;
  width: 120px;
  height: 120px;
  background: url('../assets/story4/eggbutton_tear.png') no-repeat center center;
  background-size: contain;
  transform: scale(1.5); 
  cursor:url("../assets/story4/flowercursor.png"),auto;
}


.action-back-button {
  position: absolute;
  bottom: 210px;
  right: 90px;
  width: 130px;
  height: 130px;
  background: url('../assets/story4/eggbackbutton.png') no-repeat center center;
  background-size: contain;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease; 
}

.action-back-button:hover {
  transform: scale(1.5); 
  cursor:url("../assets/story4/flowercursor.png"),auto;
}

</style>

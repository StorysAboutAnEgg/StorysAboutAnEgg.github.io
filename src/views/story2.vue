<template>
  <div class="about" @click="handleClick">
    <transition name="fade-in-up">
      <img v-if="clickCount > 0 && stage === 0" src="../assets/story2/文字1.png" alt="文字1" class="text-image">
    </transition>
    <transition name="fade-in-up">
      <img v-if="clickCount > 1 && stage === 0" src="../assets/story2/对话1-1.png" alt="对话1-1" class="dialog-image">
    </transition>
    <transition name="fade">
      <img v-if="clickCount > 2 && stage === 0" src="../assets/story2/对话1-2.png" alt="对话1-2" class="dialog-image">
    </transition>
    <transition name="fade">
      <img v-if="clickCount > 3 && stage === 0" src="../assets/story2/对话1-3.png" alt="对话1-3" class="dialog-image">
    </transition>
    <transition name="slide-left" @after-enter="showButton">
      <img v-if="clickCount === 5 && stage === 0" ref="egg" @animationend="handleAnimationEnd" src="../assets/story2/egg.png" alt="egg" class="egg-image">
    </transition>
    <transition name="fade">
      <img v-if="newImageVisible && newClickCount > 0 && stage === 1" src="../assets/story2/对话2-1.png" alt="对话2-1" class="dialog2-image">
    </transition>
    <transition name="fadefromsmall">
      <img v-if="newImageVisible && newClickCount > 1 && stage === 1" src="../assets/story2/对话2-2.png" alt="对话2-2" class="dialog2-image">
    </transition>
    <transition name="fade-in-up">
      <img v-if="stage === 3 && newClickCount > 2" src="../assets/story2/文字3.png" alt="文字3" class="text-image">
    </transition>
    <transition name="fade-in-up">
      <img v-if="stage === 3 && newClickCount > 3" src="../assets/story2/对话3-1.png" alt="对话3-1" class="dialog-image">
    </transition>
    <transition name="fade">
      <img v-if="stage === 3 && newClickCount > 4" src="../assets/story2/对话3-2.png" alt="对话3-2" class="dialog-image">
    </transition>
    <transition name="fade">
      <img v-if="stage === 3 && newClickCount > 5" src="../assets/story2/对话3-3.png" alt="对话3-3" class="dialog-image">
    </transition>
    <transition name="fade">
      <img v-if="stage === 4 && newClickCount > 6" src="../assets/story2/对话4-1.png" alt="对话4-1" class="dialog2-image">
    </transition>
    <transition name="fadefromsmall">
      <img v-if="stage === 4 && newClickCount > 7" src="../assets/story2/对话4-2.png" alt="对话4-2" class="dialog2-image">
    </transition>
    <transition name="bounce-left-to-right" @after-enter="handleBouncingEnd">
      <img v-if="showMusic1" src="../assets/story2/music1.png" alt="music1" class="bouncing-music-image">
    </transition>
    <transition name="fade-in-up">
      <img v-if="stage === 5 && newClickCount>9" src="../assets/story2/文字5.png" alt="文字5" class="text-image">
    </transition>
    <transition name="fade-in-up">
      <img v-if="stage === 5 && newClickCount >10" src="../assets/story2/对话5-1.png" alt="对话5-1" class="dialog-image">
    </transition>
    <transition name="fade">
      <img v-if="stage === 5 && newClickCount >11" src="../assets/story2/对话5-2.png" alt="对话5-2" class="dialog-image">
    </transition>
    <transition name="fade">
      <img v-if="stage === 5 && newClickCount >12" src="../assets/story2/对话5-3.png" alt="对话5-3" class="dialog-image">
    </transition>
    <transition name="fade">
      <img v-if="stage === 6 && newClickCount > 13" src="../assets/story2/对话6-1.png" alt="对话6-1" class="dialog2-image">
    </transition>
    <transition name="fade">
      <img v-if="stage === 6 && newClickCount > 14" src="../assets/story2/对话6-2.png" alt="对话6-2" class="dialog2-image">
    </transition>
    <transition name="fade-in-jumping">
      <img v-if="stage === 6 && newClickCount > 14" src="../assets/story2/music2.png" alt="music2" class="music2-image">
    </transition>
    <transition name="fade-in-up">
      <img v-if="stage === 7 && newClickCount > 15" src="../assets/story2/文字7.png" alt="文字7" class="text-image">
    </transition>
    <transition name="fade">
      <img v-if="stage === 7 && newClickCount > 16" src="../assets/story2/对话7-1.png" alt="对话7-1" class="dialog-image">
    </transition>
    <transition name="fade">
      <img v-if="stage === 7 && newClickCount > 17" src="../assets/story2/对话7-2.png" alt="对话7-2" class="dialog-image">
    </transition>
    <transition name="fade-in-jumping2">
      <img v-if="stage === 7 && newClickCount > 17" src="../assets/story2/music3.png" alt="music3" class="music3-image">
    </transition>
    <transition name="fade-in-up">
      <img v-if="stage === 8 && newClickCount > 18" src="../assets/story2/对话8-1.png" alt="对话8-1" class="dialog2-image">
    </transition>
    <transition name="fade">
      <img v-if="stage === 8 && newClickCount > 19" src="../assets/story2/对话8-2.png" alt="对话8-2" class="dialog2-image">
    </transition>
    
    <img v-if="stage === 8 && newClickCount > 19" src="../assets/story2/对话8mouth.png" alt="对话8-2" class="dialog2-image speak">
    
    <transition name="fade">
      <img v-if="stage === 8 && newClickCount > 20" src="../assets/story2/对话8-3.png" alt="对话8-3" class="dialog2-image">
    </transition>
    <transition name="fade-in-up">
      <img v-if="stage === 9 && newClickCount > 21" src="../assets/story2/对话9-1.png" alt="对话9-1" class="dialog2-image">
    </transition>
    <transition name="fade">
      <img v-if="stage === 9 && newClickCount > 22" src="../assets/story2/对话9-2-1.png" alt="对话9-2-1" class="dialog2-image">
    </transition>
  <transition name="fade-in-down">
    <img v-if="stage === 9 && newClickCount > 22" src="../assets/story2/对话9sweat.png" alt="sweat" class="dialog2-image">
  </transition>
  <transition name="fade">
      <img v-if="stage === 9 && newClickCount > 23" src="../assets/story2/对话9-3.png" alt="对话9-3" class="dialog2-image">
  </transition>
  <transition name="fade-in-up">
      <img v-if="stage === 10 && newClickCount > 24" src="../assets/story2/对话10-1.png" alt="对话10-1" class="dialog2-image">
  </transition>
  <img v-if="stage === 10 && newClickCount > 25" src="../assets/story2/dot1.png" alt="dot1" class="dialog2-image dot1">
  <img v-if="stage === 10 && newClickCount > 25" src="../assets/story2/dot2.png" alt="dot2" class="dialog2-image dot2">
  <img v-if="stage === 10 && newClickCount > 25" src="../assets/story2/dot3.png" alt="dot3" class="dialog2-image dot3">
  <img v-if="stage === 10 && newClickCount > 25" src="../assets/story2/dot4.png" alt="dot4" class="dialog2-image dot4">
  <img v-if="stage === 10 && newClickCount > 25" src="../assets/story2/dot5.png" alt="dot5" class="dialog2-image dot5">
  <img v-if="stage === 10 && newClickCount > 25" src="../assets/story2/dot6.png" alt="dot6" class="dialog2-image dot6">
  
  <transition name="fade-in-up">
      <img v-if="stage === 11 && newClickCount > 26" src="../assets/story2/对话11.png" alt="对话11" class="dialog2-image">
  </transition>
  <transition name="fade-in-down">
      <img v-if="stage === 11 && newClickCount > 27" src="../assets/story2/文字11.png" alt="文字11" class="dialog2-image">
  </transition>
  <transition name="fade-in-up">
      <img v-if="stage === 12 && newClickCount > 28" src="../assets/story2/对话12.png" alt="对话12" class="dialog2-image">
  </transition>
  <transition name="fade">
      <img v-if="stage === 12 && newClickCount > 29" src="../assets/story2/文字12.png" alt="文字12" class="dialog2-image">
  </transition>
  <transition name="fadefromsmall">
      <img v-if="stage === 13 && newClickCount > 30" src="../assets/story2/文字13.png" alt="文字13" class="dialog2-image">
  </transition>
  <transition name="fade2">
      <img v-if="stage === 13 && newClickCount > 30" src="../assets/story2/手13.png" alt="手13" class="dialog2-image">
  </transition>
  <transition name="fade-in-up">
      <img v-if="stage === 14 && newClickCount > 31" src="../assets/story2/手14.png" alt="手14" class="dialog2-image">
  </transition>
  <transition name="fade">
      <img v-if="stage === 14 && newClickCount > 32" src="../assets/story2/双蛋14.png" alt="双蛋14" class="dialog2-image">
  </transition>
  <transition name="fade-in-up">
      <img v-if="stage === 14 && newClickCount > 33" src="../assets/story2/文字14.png" alt="文字14" class="dialog2-image">
  </transition>

  <button v-if="showEggButton" class="action-button" @click="showNewImage"></button>
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
      showMusic1: false,
      stage: 0
    };
  },
  methods: {
    handleClick() {
      if (this.stage === 0 && this.clickCount < 5) {
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
    handleBouncingEnd() {
      this.showEggButton = true;
    },
    showButton() {
      this.showEggButton = true;
    },
    showNewImage() {
      if (this.stage === 0) {
        this.stage = 1;
        this.newImageVisible = true;
        this.newClickCount = 1;
      } else if (this.stage === 1 && this.newClickCount < 2) {
        this.newClickCount++;
      } else if (this.stage === 1 && this.newClickCount === 2) {
        this.stage = 3;
        this.newClickCount++;
        this.newImageVisible = true;
      } else if (this.stage === 3 && this.newClickCount < 6) {
        this.newClickCount++;
      } else if (this.stage === 3 && this.newClickCount === 6) {
        this.stage = 4;
        this.newClickCount++;
      } else if (this.stage === 4 && this.newClickCount < 8) {
        this.newClickCount++;
      } else if (this.stage === 4 && this.newClickCount === 8) {
        this.showMusic1 = true;
        this.newClickCount++;
      }else if (this.stage === 4 && this.newClickCount === 9) {
        this.showMusic1=false;
        this.stage = 5;
        this.newClickCount ++; 
      } else if (this.stage === 5 && this.newClickCount < 13) {
        this.newClickCount++;
      }
      else if (this.stage === 5 && this.newClickCount === 13) {
        this.stage = 6;
        this.newClickCount++;
      }else if (this.stage === 6 && this.newClickCount < 15) {
        this.newClickCount++;
      }
      else if (this.stage === 6 && this.newClickCount === 15) {
        this.stage = 7;
        this.newClickCount++;
      }else if (this.stage === 7 && this.newClickCount < 18) {
        this.newClickCount++;
      }
      else if (this.stage === 7 && this.newClickCount === 18) {
        this.stage = 8;
        this.newClickCount++;
      }else if (this.stage === 8 && this.newClickCount < 21) {
        this.newClickCount++;
      }else if (this.stage === 8 && this.newClickCount === 21) {
        this.stage = 9;
        this.newClickCount++;
      }else if (this.stage === 9 && this.newClickCount < 24) {
        this.newClickCount++;
      }else if (this.stage === 9 && this.newClickCount === 24) {
        this.stage = 10;
        this.newClickCount++;
      }else if (this.stage === 10 && this.newClickCount < 26) {
        this.newClickCount++;
      }else if (this.stage === 10 && this.newClickCount === 26) {
        this.stage = 11;
        this.newClickCount++;
      }else if (this.stage === 11 && this.newClickCount < 28) {
        this.newClickCount++;
      }else if (this.stage === 11 && this.newClickCount === 28) {
        this.stage = 12;
        this.newClickCount++;
      }else if (this.stage === 12 && this.newClickCount < 30) {
        this.newClickCount++;
      }else if (this.stage === 12 && this.newClickCount === 30) {
        this.stage = 13;
        this.newClickCount++;
      }else if (this.stage === 13 && this.newClickCount < 31) {
        this.newClickCount++;
      }else if (this.stage === 13 && this.newClickCount === 31) {
        this.stage = 14;
        this.newClickCount++;
      }else if (this.stage === 14 && this.newClickCount < 34) {
        this.newClickCount++;
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
  cursor:url("../assets/egg2cursor.png"),auto;
}

.text-image,
.dialog-image,
.dialog2-image,
.egg-image {
  position: absolute;
  max-width: 100%;
  height: auto;
}

.text-image {
  top: 0%;
  left: 15%;
  width: 65%;
}

.dialog-image {
  top: 25%;
  left: 20%;
  max-width: 80%;
}

.dialog2-image {
  top: 5%;
  left: 8%;
  max-width: 80%;
}

.egg-image {
  top: 50%;
  left: 50%;
}

.bouncing-music-image{
  top: 80%;
}

.music2-image{
  position: relative;
  max-width: 80%;
  left:-6%;
  transform: translateY(4%);
}

.music3-image{
  position: relative;
  max-width: 80%;
  left:-3%;
  transform: translateY(34%);
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

.fade-in-jumping-enter-active {
  animation: fadeInJumping 2s linear forwards;
}

@keyframes fadeInJumping {
  0% {
    opacity: 0;
    transform: translateY(4%);
  }
  25% {
    opacity: 1;
    transform: translateY(8%);
  }
  50% {
    opacity: 1;
    transform: translateY(4%);
  }
  75% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 1;
    transform: translateY(4%);
  }
}

.fade-in-jumping2-enter-active {
  animation: fadeInJumping2 2s linear forwards;
}

@keyframes fadeInJumping2 {
  0% {
    opacity: 0;
    scale:1;
    transform: translateY(34%);
  }
  25% {
    opacity: 1;
    scale:0.9;
    transform: translateY(38%);
  }
  50% {
    opacity: 1;
    scale:1;
    transform: translateY(34%);
  }
  75% {
    opacity: 1;
    scale:0.9;
    transform: translateY(30%);
  }
  100% {
    opacity: 1;
    scale:1;
    transform: translateY(34%);
  }
}

.fade2-enter-active {
  animation: fade2 1s ease-out forwards;
}

@keyframes fade2 {
  0% {
    opacity: 0;
    scale: 0.8;
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

.fadefromsmall-enter-active {
  animation: fadefromsmall 0.5s ease-out forwards;
}

@keyframes fadefromsmall {
  0% {
    scale: 0.1;
    opacity: 0;
  }
  70% {
    scale: 1.2;
    opacity: 1;
  }
  100% {
    scale: 1;
    opacity: 1;
  }
}

.slide-left-enter-active {
  animation: slideLeftAndRotate 4s linear forwards;
}

@keyframes slideLeftAndRotate {
  0% {
    transform: translateX(-100vw) rotate(0deg);
    opacity: 0;
  }
  50% {
    transform: translateX(0vw) rotate(720deg);
    opacity: 1;
  }
  100% {
    transform: translateX(100vw) rotate(1440deg);
    opacity: 0;
  }
}

@keyframes bounceLeftToRight {
  0% {
    opacity: 0;
    transform: translateX(-100vw) translateY(40px);
  }
  25% {
    opacity: 1;
    transform: translateX(-50vw) translateY(140px);
  }
  50% {
    opacity: 1;
    transform: translateX(0vw) translateY(40px);
  }
  75% {
    opacity: 1;
    transform: translateX(50vw) translateY(140px);
  }
  100% {
    opacity: 1;
    transform: translateX(100vw) translateY(40px);
  }
}

.bounce-left-to-right-enter-active {
  animation: bounceLeftToRight 3s linear forwards;
}

.fade-in-down-enter-active {
  animation: fadeInDown 1.5s ;
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

.speak {
  animation: Speak 0.25s 0s 4;
}

@keyframes Speak {
  0% {
    transform-origin: 70% 60%; 
    transform:  scale(0.9);
  }
  100%{
    transform-origin: 70% 60%; 
    transform: scale(1.1);
  }
}

.dot1{
  animation: Jump 0.5s 0s 1;
}
.dot2{
  animation: Jump 0.5s 0.5s 1;
}
.dot3{
  animation: Jump 0.5s 1s 1;
}
.dot4{
  animation: Jump 0.5s 1.5s 1;
}
.dot5{
  animation: Jump 0.5s 2s 1;
}
.dot6{
  animation: Jump 0.5s 2.5s 1;
}

@keyframes Jump {
  0% {
    transform: translateY(0);
  }
  0% {
    transform: translateY(-5%); 
  }
  100%{
    transform: translateY(0);
  }
}

.action-button {
  position: absolute;
  bottom: 90px;
  right: 90px;
  width: 120px;
  height: 120px;
  background: url('../assets/story2/eggbutton.png') no-repeat center center;
  background-size: contain;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease; 
}

.action-button:hover {
  transform: scale(1.5); 
  cursor:url("../assets/egg2cursor.png"),auto;
}

.action-button:focus {
  outline: none;
}
</style>

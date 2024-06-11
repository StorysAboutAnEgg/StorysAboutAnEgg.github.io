<template>
  <div class="main-container">
    <div class="image-container" :class="{ 'visible': scrolled, 'hidden': scrolled1 }" @click="toggleAnimation">
      <div class="center">
        <transition-group name="fade" tag="div" class="center">
          <img v-if="showImage1" src="/src/assets/story1/page1/碗.png" class="image-layer large-image fade-in" style="z-index: 1;" key="1">
          <img v-if="showImage2" src="/src/assets/story1/page1/左手.png" class="image-layer large-image fade-in" style="z-index: 2;" key="2">
          <img v-if="showImage3" src="/src/assets/story1/page1/右手.png" class="image-layer large-image fade-in" style="z-index: 3;" key="3">
          <img v-if="showImage4" src="/src/assets/story1/page1/蛋清.png" class="image-layer large-image fade-in" style="z-index: 4;" key="4">
        </transition-group>
        <transition name="exclamation">
          <img v-if="showExclamation" src="/src/assets/story1/page1/不要啊.png" class="image-layer large-image exclamation-in" style="z-index: 5;">
        </transition>
      </div>
    </div>
    <div class="image-container2" :class="{ 'visible': scrolled1, 'hidden': scrolled2 }">
      <transition-group name="fade" tag="div">
        <img  src="/src/assets/story1/page2/蛋.png" class="image-layer large-image fade-in" style="z-index: 1;" key="1">
        <img  src="/src/assets/story1/page2/表情.png" class="image-layer large-image sad-face" style="z-index: 2;" key="2">
        <img  src="/src/assets/story1/page2/我的蛋白.png" class="image-layer large-image my-protein" style="z-index: 3;" key="3">
      </transition-group>
    </div>
    <div class="image-container3" :class="{ 'visible': scrolled2,'hidden': scrolled3 }">
      <img  src="/src/assets/story1/page3/碗.png" class="image-layer" style="z-index: 1;" key="1">
      <img  src="/src/assets/story1/page3/白砂糖袋子.png" class="image-layer pour-sugar" style="z-index: 2;" key="2">
      <img  src="/src/assets/story1/page3/白砂糖.png" class="image-layer fly-in" style="z-index: 3;" key="3">
      <img  src="/src/assets/story1/page3/对话框.png" class="image-layer dialog-box" style="z-index: 4;" key="4">
    </div>
    <div class="image-container4" :class="{ 'visible': scrolled3,'hidden': scrolled4 }">
      <img  src="/src/assets/story1/page4/打招呼.png" class="image-layer" style="z-index: 1;" key="1">
    </div>
    <div class="image-container5" :class="{ 'visible': scrolled4,'hidden': scrolled5 }">
      <img  src="/src/assets/story1/page5/还没哭.png" class="image-layer" style="z-index: 1;" key="1">
      <img  src="/src/assets/story1/page5/哭.png" class="image-layer cry" style="z-index: 2;" key="2">
      <img  src="/src/assets/story1/page5/对话框.png" class="image-layer dialog-box" style="z-index: 3;" key="3">
    </div>
    <div class="image-container6" :class="{ 'visible': scrolled5,'hidden': scrolled6 }">
      <img  src="/src/assets/story1/page6/碗.png" class="image-layer" style="z-index: 1;" key="1">
      <img  src="/src/assets/story1/page6/叹气.png" class="image-layer sign" style="z-index: 2;" key="2">
    </div>
    <div class="image-container7" :class="{ 'visible': scrolled6,'hidden': scrolled7 }">
      <img  src="/src/assets/story1/page7/蛋1.png" class="image-layer" style="z-index: 1;" key="1">
      <img  src="/src/assets/story1/page7/嘿蛋黄.png" class="image-layer appear" style="z-index: 2;" key="2">
      <img  src="/src/assets/story1/page7/注意.png" class="image-layer bounce-in" style="z-index: 5;" key="5">
      <img  src="/src/assets/story1/page7/别哭了.png" class="image-layer appear3" style="z-index: 4;" key="4">
      <img  src="/src/assets/story1/page7/蛋2.png" class="image-layer appear2" style="z-index: 3;" key="3">
    </div>
    <div class="image-container8" :class="{ 'visible': scrolled7,'hidden': scrolled8 }">
      <img  src="/src/assets/story1/page8/蛋.png" class="image-layer" style="z-index: 1;" key="1">
      <img  src="/src/assets/story1/page8/舌头.png" class="image-layer tongue" style="z-index: 2;" key="2">
      <img  src="/src/assets/story1/page8/刺溜.png" class="image-layer appear" style="z-index: 3;" key="3">
    </div>
    <div class="image-container9" :class="{ 'visible': scrolled8,'hidden': scrolled9 }">
      <img  src="/src/assets/story1/page9/蛋.png" class="image-layer" style="z-index: 1;" key="1">
      <img  src="/src/assets/story1/page9/蛋对话框.png" class="image-layer dialog-box2" style="z-index: 2;" key="2">
      <img  src="/src/assets/story1/page9/白砂糖嘴1.png" class="image-layer speak" style="z-index: 3;" key="3">
      <img  src="/src/assets/story1/page9/白砂糖嘴2.png" class="image-layer " style="z-index: 3;" key="3">
      <img  src="/src/assets/story1/page9/白砂糖对话框.png" class="image-layer dialog-box3" style="z-index: 4;" key="4">
      <img  src="/src/assets/story1/page9/白砂糖嘴.png" class="image-layer speak2" style="z-index: 5;" key="5">
    </div>
    <div class="image-container10" :class="{ 'visible': scrolled9,'hidden': scrolled10 }">
      <img  src="/src/assets/story1/page10/碗.png" class="image-layer" style="z-index: 1;" key="1">
      <img  src="/src/assets/story1/page10/所以不要再难过了.png" class="image-layer roll-out" style="z-index: 2;" key="2">
    </div>
    <div class="image-container11" :class="{ 'visible': scrolled10,'hidden': scrolled11 }">
      <img  src="/src/assets/story1/page11/碗.png" class="image-layer" style="z-index: 1;" key="1">
      <img  src="/src/assets/story1/page11/表情1.png" class="image-layer emoticon" style="z-index: 2;" key="2">
      <img  src="/src/assets/story1/page11/表情2.png" class="image-layer emoticon2" style="z-index: 3;" key="3">
      <img  src="/src/assets/story1/page11/表情3.png" class="image-layer emoticon3" style="z-index: 4;" key="4">
    </div>
    <div class="image-container12" :class="{ 'visible': scrolled11,'hidden': scrolled12 }">
      <img  src="/src/assets/story1/page12/不开心.png" class="image-layer" style="z-index: 1;" key="1">
      <img  src="/src/assets/story1/page12/蛋白.png" class="image-layer roll-out2" style="z-index: 2;" key="2">
      <img  src="/src/assets/story1/page12/碗.png" class="image-layer appear" style="z-index: 3;" key="3">
      <img  src="/src/assets/story1/page12/是蛋白.png" class="image-layer dialog-box2" style="z-index: 4;" key="4">
    </div>
    <div class="image-container13" :class="{ 'visible': scrolled12,'hidden': scrolled13 }">
      <img  src="/src/assets/story1/page13/碗.png" class="image-layer" style="z-index: 1;" key="1">
      <img  src="/src/assets/story1/page13/蓬松.png" class="image-layer somke" style="z-index: 2;" key="2">
    </div>
    <div class="image-container14" :class="{ 'visible': scrolled13,'hidden': scrolled14 }">
      <img  src="/src/assets/story1/page14/碗.png" class="image-layer" style="z-index: 1;" key="1">
      <img  src="/src/assets/story1/page14/表情1.png" class="image-layer slide-in" style="z-index: 2;" key="2">
      <img  src="/src/assets/story1/page14/表情2.png" class="image-layer slide-in2" style="z-index: 3;" key="3">
    </div>
    <div class="image-container15" :class="{ 'visible': scrolled14,'hidden': scrolled15 }">
      <img  src="/src/assets/story1/page15/碗1.png" class="image-layer shine" style="z-index: 2;" key="2">
      <img  src="/src/assets/story1/page15/碗2.png" class="image-layer " style="z-index: 1;" key="1">
      <img  src="/src/assets/story1/page15/蒸汽.png" class="image-layer somke" style="z-index: 3;" key="3">
      <img  src="/src/assets/story1/page15/我膨胀了.png" class="image-layer dialog-box" style="z-index: 4;" key="4">
    </div>
    <div @click="goto('/menu')" class="image-container16" :class="{ 'visible': scrolled15,'hidden': scrolled16 }">
      <img  src="/src/assets/story1/page16/碗.png" class="image-layer" style="z-index: 1;" key="1">
      <img  src="/src/assets/story1/page16/对话1.png" class="image-layer dialog-box2" style="z-index: 2;" key="2">
      <img  src="/src/assets/story1/page16/对话2.png" class="image-layer dialog-box3" style="z-index: 3;" key="3">
      <img @click="goto('/menu')" src="/src/assets/story1/back.png" class="back" >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showImage1: false,
      showImage2: false,
      showImage3: false,
      showImage4: false,
      showExclamation: false,
      scrolled: false,
      scrolled1: false,
      scrolled2: false,
      scrolled3: false,
      scrolled4: false,
      scrolled5: false,
      scrolled6: false,
      scrolled7: false,
      scrolled8: false,
      scrolled9: false,
      scrolled10: false,
      scrolled11: false,
      scrolled12: false,
      scrolled13: false,
      scrolled14: false,
      scrolled15: false,
    };
  },
  mounted() {
    this.startAnimationSequence();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    goto(route) {
      this.$router.push(route);
    },
    startAnimationSequence() {
      setTimeout(() => {
        this.showImage1 = true;
      }, 500);
      setTimeout(() => {
        this.showImage2 = true;
      }, 1000);
      setTimeout(() => {
        this.showImage3 = true;
      }, 1500);
      setTimeout(() => {
        this.showImage4 = true;
      }, 2000);
    },
    toggleAnimation() {
      this.showExclamation = !this.showExclamation;
      console.log('showExclamation:', this.showExclamation); // Debug output
    },
    handleScroll() {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      console.log('Scroll position:', scrollPosition); // Debug output
      if (scrollPosition >= 100 && scrollPosition < 200) { // 设置一个阈值
        this.scrolled1 = true;
        this.scrolled2 = false;
      } else if (scrollPosition >= 200 && scrollPosition <300) {
        this.scrolled2 = true;
        this.scrolled3 = false;
      } else if (scrollPosition >= 300 && scrollPosition <400) {
        this.scrolled3 =true;
        this.scrolled4 =false;
      }else if (scrollPosition >= 400 && scrollPosition <500) {
        this.scrolled4 =true;
        this.scrolled5 =false;
      }else if (scrollPosition >= 500 && scrollPosition <600) {
        this.scrolled5 =true;
        this.scrolled6 =false;
      }else if (scrollPosition >= 600 && scrollPosition <700) {
        this.scrolled6 =true;
        this.scrolled7 =false;
      }else if (scrollPosition >= 700 && scrollPosition <800) {
        this.scrolled7 =true;
        this.scrolled8 =false;
      }else if (scrollPosition >= 800 && scrollPosition <900) {
        this.scrolled8 =true;
        this.scrolled9 =false;
      }else if (scrollPosition >= 900 && scrollPosition <1000) {
        this.scrolled9 =true;
        this.scrolled10 =false;
      }else if (scrollPosition >= 1000 && scrollPosition <1100) {
        this.scrolled10 =true;
        this.scrolled11 =false;
      }else if (scrollPosition >= 1100 && scrollPosition <1200) {
        this.scrolled11 =true;
        this.scrolled12 =false;
      }else if (scrollPosition >= 1200 && scrollPosition <1300) {
        this.scrolled12 =true;
        this.scrolled13 =false;
      }else if (scrollPosition >= 1300 && scrollPosition <1400) {
        this.scrolled13 =true;
        this.scrolled14 =false;
      }else if (scrollPosition >= 1400 && scrollPosition <1500) {
        this.scrolled14 =true;
        this.scrolled15 =false;
      }else if (scrollPosition >= 1500 && scrollPosition <1600) {
        this.scrolled15 =true;
        this.scrolled16 =false;
      }
      else{
        this.scrolled=true;
        this.scrolled1=false;
      }
      console.log('scrolled:', this.scrolled); // Debug output
      console.log('scrolled15:', this.scrolled3); // Debug output
    }
  }
};
</script>

<style scoped>

.back{
  position: absolute; 
  top: 30%; left: 50%; 
  transform:scale(0.3);
}

.back:hover{
  transform: scale(0.5);
  opacity: 0.5;
}
.main-container {
  display: flex;
  transition: transform 0.5s;
  height: 420%;
}


.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 50%; /* Adjust width to accommodate two large images side by side */
  transition: transform 0.5s;
}

image-container.visible{
  display: none;
}

.image-container.hidden {
  display: none;
}



.image-container2.visible {
  display: flex;
}

.image-container2.hidden {
  transform: translate(-150%, -50%) scale(0.5); /* 将其移到屏幕左侧并缩小 */
  opacity: 0; /* 将透明度设为0，使其逐渐消失 */
  transition: opacity 1s, transform 1s; /* 控制 opacity 和 transform 的过渡效果 */
}


.image-container3,
.image-container4,
.image-container2,
.image-container5,
.image-container6,
.image-container7,
.image-container8,
.image-container9,
.image-container10,
.image-container11,
.image-container12,
.image-container13,
.image-container14,
.image-container15,
.image-container16 {
  display: none;
  position: fixed; /* Fixed position to keep it in the center of the screen */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center the container */
  height: 100vh;
  width: 50%; /* Adjust width to accommodate two large images side by side */
  transition: display 0.5s;
}

.image-container3.visible,
.image-container4.visible,
.image-container5.visible,
.image-container6.visible,
.image-container7.visible,
.image-container8.visible,
.image-container9.visible,
.image-container10.visible,
.image-container11.visible,
.image-container12.visible,
.image-container13.visible,
.image-container14.visible,
.image-container15.visible,
.image-container16.visible {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.image-container3.hidden {
  opacity: 0; /* 隐藏时透明度为0 */
  transform: translate(-50%, -50%) scale(1.7); /* 将其逐渐放大至消失 */
  transition: opacity 1s, transform 1s; /* 控制 opacity 和 transform 的过渡效果 */
}

.image-container4.hidden {
  opacity: 0; /* 隐藏时透明度为0 */
  transform: translate(-50%, -50%) scale(0); /* 将其逐渐放大至消失 */
  transition: opacity 1s, transform 1s; /* 控制 opacity 和 transform 的过渡效果 */
}

.image-container5.hidden {
  opacity: 0; /* 隐藏时透明度为0 */
  transform: translate(-50%, -50%) rotateY(180deg); /* 将其逐渐翻转至消失 */
  transition: opacity 1s, transform 1s; /* 控制 opacity 和 transform 的过渡效果 */
}

.image-container6.hidden {
  opacity: 0; /* 隐藏时透明度为0 */
  transform: translate(-50%, -50%) scaleY(0); /* 将其逐渐挤压至消失 */
  transition: opacity 1s, transform 1s; /* 控制 opacity 和 transform 的过渡效果 */
}

.image-container7.hidden {
  opacity: 0; /* 隐藏时透明度为0 */
  transform: translate(-50%, -50%) scale(2); /* 将其逐渐放大至消失 */
  filter: blur(10px); /* 添加模糊效果 */
  transition: opacity 1s, transform 1s, filter 1s; /* 控制 opacity, transform 和 filter 的过渡效果 */
}

.image-container8.hidden {
  opacity: 0; /* 隐藏时透明度为0 */
  transform: translate(-50%, -50%) scale(0); /* 将其逐渐缩小至消失 */
  transition: opacity 1s, transform 1s; /* 控制 opacity 和 transform 的过渡效果 */
}

.image-container9.hidden {
  opacity: 0; /* 初始时透明度为0 */
  transform: scale(0); /* 将其逐渐缩小至消失 */
  filter: blur(20px); /* 模糊 */
  transition: opacity 1s, transform 1s, filter 1s; /* 控制 opacity、transform 和 filter 的过渡效果 */
}

.image-container11.hidden {
  opacity: 0; /* 隐藏时透明度为0 */
  transform: translate(-50%, -50%) scale(1.7); /* 将其逐渐放大至消失 */
  transition: opacity 1s, transform 1s; /* 控制 opacity 和 transform 的过渡效果 */
}

.image-container10.hidden {
  opacity: 0; /* 隐藏时透明度为0 */
  transform: translate(-50%, -50%) rotate(360deg) scale(0); /* 将其逐渐旋转缩小至消失 */
  transition: opacity 1s, transform 1s; /* 控制 opacity 和 transform 的过渡效果 */
}
.image-container12.hidden {
  opacity: 0;
  transform: scale(0) rotate(360deg); /* 使用碎片消失效果 */
  transition: transform 1s, opacity 1s; /* 添加过渡效果 */
}
.image-container13.hidden {
  opacity: 0; /* 隐藏时透明度为0 */
  transform: translate(-50%, -50%) rotateX(180deg); /* 将其逐渐翻转至消失 */
  transition: opacity 1s, transform 1s; /* 控制 opacity 和 transform 的过渡效果 */
}
.image-container14.hidden {
  opacity: 0; /* 隐藏时透明度为0 */
  transform: translate(-50%, -50%) scaleY(0); /* 将其逐渐挤压至消失 */
  transition: opacity 1s, transform 1s; /* 控制 opacity 和 transform 的过渡效果 */
}

.image-container15.hidden {
  opacity: 0; /* 隐藏时透明度为0 */
  transform: translate(-50%, -50%) scale(2); /* 将其逐渐放大至消失 */
  filter: blur(10px); /* 添加模糊效果 */
  transition: opacity 1s, transform 1s, filter 1s; /* 控制 opacity, transform 和 filter 的过渡效果 */
}

.shine{
  animation: blinkOut 1s forwards;
}

@keyframes blinkOut {
  0%, 20%, 40%, 60%, 80%, 100% {
    opacity: 1;
  }
  10%, 30%, 50%, 70%, 90% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}

.large-image {
  /* Add styles to enlarge the images */
  transform: scale(1.5); /* Enlarge the images to 1.5 times their original size */
}

.image-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}

.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter {
  opacity: 0;
}

.exclamation-enter-active {
  animation: bounce 0.5s;
}

@keyframes bounce {
  0% {
    transform: translateY(-50px);
  }
  50% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-50px);
  }
}

/* Fade-in animation for image-container1 */
.fade-in {
  opacity: 0;
  animation: fadeIn 2s forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Sad face animation */
.sad-face {
  opacity: 0;
  animation: sadFaceIn 2s forwards;
}

@keyframes sadFaceIn {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  50% {
    transform: translateY(10px);
    opacity: 0.5;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* My Protein animation */
.my-protein {
  opacity: 0;
  animation: myProteinIn 2s forwards;
}

@keyframes myProteinIn {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Exclamation animation */
.exclamation-in {
  opacity: 0;
  animation: exclamationIn 0.5s forwards;
}

@keyframes exclamationIn {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Pouring sugar animation */
.pour-sugar {
  animation: pourSugar 2s forwards;
}

@keyframes pourSugar {
  0% {
    transform: translateY(-50px) rotate(-30deg);
    opacity: 0;
  }
  50% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
}

/* Flying-in animation */
.fly-in {
  opacity: 0;
  animation: flyIn 2s forwards ; /* 指定动画名称、持续时间和填充模式 */
}

@keyframes flyIn {
  0% {
    opacity: 1; /* 在动画开始时，元素透明度为0 */
    transform: translate(-10%, -10%); /* 在动画开始时，元素从左上方飞入 */
  }
  100% {
    opacity: 1; /* 在动画结束时，元素透明度为1，即完全可见 */
    transform: translate(0, 0); /* 在动画结束时，元素回到原始位置 */
  }
}


/* Dialog box animation */
.dialog-box {
  opacity: 0;
  animation: showDialog 1s forwards 1.5s; /* Delay to sync with pouring sugar animation */
}



@keyframes showDialog {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animation styles for cry image */
.cry {
  animation: fadeInOut 2s forwards;
}

/* Keyframes for fade in and out */
@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.sign {
  animation: Sign 2s forwards;
}

/* Keyframes for fade in and out */
@keyframes Sign {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform:  scale(1);
  }
}
.appear {
  animation: appearAnimation 2s forwards;
}

.appear2 {
  opacity: 0;
  animation: appearAnimation 2s forwards 2s;
}

.appear3 {
  opacity: 0;
  animation: appearAnimation 2s forwards 2s;
}

/* Keyframes for the appear animation */
@keyframes appearAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.bounce-in {
  opacity: 1;
  animation: bounceIn 2s forwards ;
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3) translateY(-100px);
  }
  50% {
    opacity: 1;
    transform: scale(1.05) translateY(0);
  }
  70% {
    transform: scale(0.95) translateY(-10px);
  }
  100% {
    transform: scale(1) translateY(0);
  }
}


.tongue {
  animation: tongue-animation 0.4s infinite;
  transform-origin: right center;
}

@keyframes tongue-animation {
  0% {
    transform: rotate(1deg) ;
  }
100% {
    transform: rotate(-1deg) ;
}
}

.speak {
  animation: Speak 0.25s 0s 4;
}

.speak2 {
  animation: Speak2 0.25s 1s 4;
}
@keyframes Speak {
  0% {
    transform:  scale(0.9);
  }
  100%{
    transform: scale(1.1);
  }
}

@keyframes Speak2 {
  0% {
    transform: scaleY(0.3) translateY(10px) /* 初始大小 */
  }
  100% {
    transform: scaleY(1); /* 最终大小 */
  }
}
.dialog-box2{
  opacity: 0;
  animation: showDialog 1s forwards ; /* Delay to sync with pouring sugar animation */
}

.dialog-box3{
  opacity: 0;
  animation: showDialog2 1s forwards 1s; /* Delay to sync with pouring sugar animation */
}
@keyframes showDialog2 {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.roll-out {
  opacity: 1;
  animation: RollOut 1.5s forwards;
}

@keyframes RollOut {
  0% {
    clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%);
  }
  100% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
}
.emoticon {
  opacity: 0;
  animation: bounceIn2 0.5s forwards;
}
.emoticon2 {
  opacity: 0;
  animation: bounceIn2 0.5s forwards 0.5s;
}
.emoticon3 {
  opacity: 0;
  animation: bounceIn2 0.5s forwards 1s;
}

@keyframes bounceIn2 {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.roll-out2 {
  opacity: 0;
  animation: slideIn 1s forwards;
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(-20%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.somke {
  animation: bounceAnimation 1s forwards;
}

@keyframes bounceAnimation {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

.slide-in {
  opacity: 1;
  transform: translateY(0);
  animation: slideInAnimation 1s forwards;
}

@keyframes slideInAnimation {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 1;
    transform: translateY(10%) translateX(-8%)
  }
}

.slide-in2 {
  opacity: 1;
  transform: translateY(0);
  animation: slideInAnimation2 1s forwards;
}

@keyframes slideInAnimation2 {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 1;
    transform: translateY(10%) translateX(-6.5%)
  }
}

</style>
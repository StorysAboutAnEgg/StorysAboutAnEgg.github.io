<template>
  <div class="page">
    <div v-if="isCurrentPage[0]" style="display:flex;justify-content: center;">
      <img src="@/assets/story6/1-蛋.png" alt="" style="position:absolute;top: 40vh;left:35vw;width:35vw"
        class="animate__animated " :class="{
          'animate__fadeIn': fromLeftIn[0],
          'animate__rotateOutUpLeft': fromLeftOut[0],
        }">
      <img src="@/assets/story6/1-字.png" alt="" style="position:absolute;top: 6vh;left:35vw;width:35vw"
        class="animate__animated" :class="{
          'animate__fadeIn': fromLeftIn[0],
          'animate__rotateOutUpLeft': fromLeftOut[0],
        }">
      <img src="@/assets/story6/p1.png" alt="" class="pageId">
    </div>
    <div v-if="isCurrentPage[1]">
      <img src="@/assets/story6/2.png" alt="" class="main-img animate__animated" :class="{
        'animate__bounceInLeft': fromLeftIn[1],
        'animate__rotateInDownRight': fromRightIn[1],
        'animate__hinge': fromLeftOut[1],
        'animate__bounceOutRight': fromRightOut[1],
      }">
      <img src="@/assets/story6/2-是哦.png" alt="" style="position:absolute; width:10vw;right:28vw;top:30vh;"
        v-if="animateShow[currentPage] > 0" class="animate__animated animate__flipInX">
      <img src="@/assets/story6/p2.png" alt="" class="pageId">
    </div>
    <div v-if="isCurrentPage[2]">
      <img src="@/assets/story6/3.png" alt="" class="main-img animate__animated" :class="{
        'animate__fadeInLeftBig': fromLeftIn[2],
        'animate__jackInTheBox': fromRightIn[2],
        'animate__fadeOutLeftBig': fromLeftOut[2],
        'animate__fadeOutRightBig': fromRightOut[2],
      }">
      <img src="@/assets/story6/p3.png" alt="" class="pageId">
      <img src="@/assets/story6/3-惊讶.png" alt="" style="position:absolute; width:3vw;right:44vw;top:45vh;"
        v-if="animateShow[currentPage] > 0" class="animate__animated animate__flipInX">
    </div>
    <div v-if="isCurrentPage[3]">
      <img src="@/assets/story6/4.png" alt="" class="main-img animate__animated" :class="{
        'animate__zoomInLeft': fromLeftIn[3],
        'animate__zoomInRight': fromRightIn[3],
        'animate__zoomOutLeft': fromLeftOut[3],
        'animate__zoomOutRight': fromRightOut[3],
      }">
      <img src="@/assets/story6/p4.png" alt="" class="pageId">
    </div>
    <div v-if="isCurrentPage[4]">
      <img src="@/assets/story6/5.png" alt="" class="main-img animate__animated" :class="{
        'animate__rollIn': fromLeftIn[4],
        'animate__bounceInRight': fromRightIn[4],
        'animate__bounceOutLeft': fromLeftOut[4],
        'animate__rollOut': fromRightOut[4],
      }">
      <img src="@/assets/story6/5-泪.png" alt="" style="position:absolute; width:12vw;left:32.5vw;top:47vh;z-index:1;"
        v-if="animateShow[currentPage] > 0" class="animate__animated animate__bounceIn"
        :class="{ 'sticker6-2': animateShow[currentPage] > 1 }">
      <img src="@/assets/story6/5-呜呜.png" alt="" style="position:absolute; width:12vw;left:28vw;top:35vh;z-index:1;"
        v-if="animateShow[currentPage] > 1" class="animate__animated animate__bounceIn">
      <img src="@/assets/story6/5-着急.png" alt="" style="position:absolute; width:7vw;right:44vw;top:38vh;z-index:1;"
        v-if="animateShow[currentPage] > 2" class="animate__animated animate__bounceIn"
        :class="{ 'sticker6-1': animateShow[currentPage] > 3 }">
      <img src="@/assets/story6/5-字.png" alt="" style="position:absolute; width:35vw;right:25vw;top:20vh;z-index:1;"
        v-if="animateShow[currentPage] > 3" class="animate__animated animate__zoomInDown">

      <img src="@/assets/story6/p5.png" alt="" class="pageId">

    </div>
    <div v-if="isCurrentPage[5]">
      <img src="@/assets/story6/6.png" alt="" class="main-img animate__animated" :class="{
        'animate__bounceInLeft': fromLeftIn[5],
        'animate__bounceInRight': fromRightIn[5],
        'animate__flipOutX': fromLeftOut[5],
        'animate__hinge': fromRightOut[5],
      }">
      <img src="@/assets/story6/7-嘴.png" alt="" v-if="animateShow[currentPage] > 0"
        style="position: absolute; height: 6vh; left: 38vw; bottom:22vh; z-index:5;" :class="{
          'animate__flipOutX': fromLeftOut[5],
          'animate__hinge': fromRightOut[5],
          'speak': animateShow[currentPage] > 0,
        }">

      <img src="@/assets/story6/6-line1.png" alt="" v-if="animateShow[currentPage] > 0"
        style="position: absolute; width: 40vw; left: 30vw; top:22vh; z-index:5;"
        class="animate__animated animate__fadeIn">
      <img src="@/assets/story6/6-line2.png" alt="" v-if="animateShow[currentPage] > 1"
        style="position: absolute; width: 23vw; left: 46vw; top:32.5vh; z-index:5;"
        class="animate__animated animate__fadeIn">
      <img src="@/assets/story6/6-line3.png" alt="" v-if="animateShow[currentPage] > 2"
        style="position: absolute; width: 20vw; left: 48vw; top:52vh; z-index:5;"
        class="animate__animated animate__fadeIn">
      <img src="@/assets/story6/p6.png" alt="" class="pageId">

    </div>
    <div v-if="isCurrentPage[6]">
      <img src="@/assets/story6/7.png" alt="" class="main-img animate__animated" :class="{
        'animate__jackInTheBox': fromLeftIn[6],
        'animate__flipInX': fromRightIn[6],
        'animate__bounceOutLeft': fromLeftOut[6],
        'animate__bounceOutRight': fromRightOut[6],
      }">
      <img src="@/assets/story6/7-嘴.png" alt="" v-if="animateShow[currentPage] > 0"
        style="position: absolute; height: 6vh; left: 60vw; top:48vh; z-index:5;transform: scaleX(-1)" :class="{
          'animate__flipOutX': fromLeftOut[5],
          'animate__hinge': fromRightOut[5],
          'speak2': animateShow[currentPage] > 0,
        }">
      <img src="@/assets/story6/7-泪.png" alt="" style="position: absolute; width: 4vw; left: 35vw; top:48vh; z-index:5;"
        v-if="animateShow[currentPage] > 1" class="animate__animated animate__pulse">
      <img src="@/assets/story6/p7.png" alt="" class="pageId">
    </div>
    <div v-if="isCurrentPage[7]">
      <img src="@/assets/story6/8.png" alt="" class="main-img animate__animated" :class="{
        'animate__rollIn': fromLeftIn[7],
        'animate__bounceInRight': fromRightIn[7],
        'animate__hinge': fromLeftOut[7],
        'animate__rollOut': fromRightOut[7],
      }">
      <img src="@/assets/story6/8-line1.png" alt=""
        style="position: absolute; width: 36vw; left: 34vw; top:21vh; z-index:5;" v-if="animateShow[currentPage] > 0"
        class="animate__animated animate__fadeIn">
      <img src="@/assets/story6/8-line2.png" alt=""
        style="position: absolute; width: 26vw; left: 45vw; top:44vh; z-index:5;" v-if="animateShow[currentPage] > 1"
        class="animate__animated animate__fadeIn">
      <img src="@/assets/story6/7-嘴.png" alt="" v-if="animateShow[currentPage] > 0"
        style="position: absolute; height: 6vh; left: 36vw; bottom:33vh; z-index:5;" :class="{
          'animate__hinge': fromLeftOut[7],
          'animate__rollOut': fromRightOut[7],
          'speak': animateShow[currentPage] > 0,
        }">
      <img src="@/assets/story6/p8.png" alt="" class="pageId">

    </div>
    <div v-if="isCurrentPage[8]">
      <img src="@/assets/story6/9.png" alt="" class="main-img animate__animated" :class="{
        'animate__bounceInLeft': fromLeftIn[8],
        'animate__jackInTheBox': fromRightIn[8],
        'animate__bounceOutLeft': fromLeftOut[8],
        'animate__bounceOutRight': fromRightOut[8],
      }">
      <img src="@/assets/story6/9-惊.png" alt="" style="position:absolute; width:7vw;right:54vw;top:48vh;z-index:1;"
        v-if="animateShow[currentPage] > 0" class="animate__animated animate__bounceIn"
        :class="{ 'sticker9': animateShow[currentPage] > 0, 'animate__animated animate__bounceIn': animateShow[currentPage] > 0 }">
      <img src="@/assets/story6/p9.png" alt="" class="pageId">

    </div>
    <div v-if="isCurrentPage[9]">
      <img src="@/assets/story6/10.png" alt="" class="main-img animate__animated" :class="{
        'animate__rotateInDownLeft': fromLeftIn[9],
        'animate__rotateInDownRight': fromRightIn[9],
        'animate__rotateOutDownRight': fromLeftOut[9],
        'animate__rotateOutDownLeft': fromRightOut[9],
      }">
      <img src="@/assets/story6/p10.png" alt="" class="pageId2">
    </div>
    <div v-if="isCurrentPage[10]">
      <img src="@/assets/story6/11.png" alt="" class="main-img animate__animated" :class="{
        'animate__lightSpeedInLeft': fromLeftIn[10],
        'animate__lightSpeedInRight': fromRightIn[10],
        'animate__lightSpeedOutLeft': fromLeftOut[10],
        'animate__lightSpeedOutRight': fromRightOut[10],
      }">
      <img src="@/assets/story6/p11.png" alt="" class="pageId2">
    </div>
    <div v-if="isCurrentPage[11]">
      <img src="@/assets/story6/12.png" alt="" class="main-img animate__animated" :class="{
        'animate__fadeInTopLeft': fromLeftIn[11],
        'animate__bounceInRight': fromRightIn[11],
        'animate__fadeOutTopLeft': fromLeftOut[11],
        'animate__bounceOutRight': fromRightOut[11],
      }">
      <img src="@/assets/story6/p12.png" alt="" class="pageId2">
    </div>
    <div v-if="isCurrentPage[12]">
      <img src="@/assets/story6/13.png" alt="" class="main-img animate__animated" :class="{
        'animate__fadeInBottomLeft': fromLeftIn[12],
        'animate__fadeInBottomRight': fromRightIn[12],
        'animate__fadeOutBottomLeft': fromLeftOut[12],
        'animate__fadeOutBottomRight': fromRightOut[12],
      }">
      <img src="@/assets/story6/13-word.png" alt=""
        style="position: absolute; width: 20vw; left: 36vw; top:21vh; z-index:5;" v-if="animateShow[currentPage] > 0"
        class="animate__animated animate__fadeIn">
      <img src="@/assets/story6/13-word2.png" alt=""
        style="position: absolute; width: 14vw; left: 32vw; bottom:14.5vh; z-index:5;" v-if="animateShow[currentPage] > 1"
        class="animate__animated animate__fadeIn">

      <img src="@/assets/story6/p13.png" alt="" class="pageId2">
    </div>
    <div v-if="isCurrentPage[13]">
      <img src="@/assets/story6/14.png" alt="" class="main-img animate__animated" :class="{
        'animate__flip': fromLeftIn[13],
        'animate__fadeInTopRight': fromRightIn[13],
        'animate__flipOutY': fromLeftOut[13],
        'animate__fadeOutTopRight': fromRightOut[13],
      }">
      <img src="@/assets/story6/p14.png" alt="" class="pageId2">
    </div>
    <div v-if="isCurrentPage[14]">
      <img src="@/assets/story6/15.png" alt="" class="main-img animate__animated" :class="{
        'animate__bounceInLeft': fromLeftIn[14],
        'animate__flip': fromRightIn[14],
        'animate__bounceOutLeft': fromLeftOut[14],
        'animate__animate__flipOutY': fromRightOut[14],
      }">
      <img src="@/assets/story6/p15.png" alt="" class="pageId2">
    </div>
    <div v-if="isCurrentPage[15]" style="display:flex;justify-content: center;">
      <img src="@/assets/story6/16-onion.png" alt="" style="position:absolute;top: 30vh;left:35vw;width:25vw;z-index:2"
        class="animate__animated animate__fadeIn"
        :class="{ 'animate__animated animate__fadeIn': !ifGotoMenu, 'animate__animated animate__rollOut': ifGotoMenu, }">
      <img src="@/assets/story6/16-字上.png" alt="" style="position:absolute;top: 6vh;left:35vw;width:30vw;z-index:2"
        :class="{ 'animate__animated animate__bounceInUp': !ifGotoMenu, 'animate__animated animate__rollOut': ifGotoMenu, }">
      <img src="@/assets/story6/16-字下.png" alt="" style="position:absolute;top: 70vh;left:35vw;width:30vw;z-index:2"
        :class="{ 'animate__animated animate__fadeInDown': !ifGotoMenu, 'animate__animated animate__rollOut': ifGotoMenu, }">
      <img src="@/assets/story6/16-光.png" alt=""
        style="position:absolute;top: 16vh;width:40vw;left: 46vw; transform: translateX(-50%);z-index:1;"
        v-if="animateShow[currentPage] > 1"
        :class="{ 'lighting': animateShow[currentPage] > 1 && !ifGotoMenu, 'animate__animated animate__rollOut': ifGotoMenu, }">
      <img src="@/assets/story6/乱入的zy.png" alt="" @click="gotoMenu" style="opacity: 0;position: absolute;width: 8vw;right: 6vw; bottom: 6vh; z-index: 5;" v-if="animateShow[currentPage] > 0"
        :class="{ 'imgZY':!ifGotoMenu,'animate__animated animate__rollOut': ifGotoMenu, }">
      <img src="@/assets/story6/乱入的zy-字.png" alt="" class="imgZYWord" v-if="animateShow[currentPage] > 4"
        :class="{ 'animate__animated animate__fadeInDown': !ifGotoMenu, 'animate__animated animate__rollOut': ifGotoMenu, }">
      <img src="@/assets/story6/乱入arrow.png" alt="" class="imgZYArrow"
        :class="{ 'animate__animated animate__swing': animateShow[currentPage] > 1 && !ifGotoMenu, 'jump': animateShow[currentPage] > 3 && !ifGotoMenu, 'animate__animated animate__rollOut': ifGotoMenu, }"
        v-if="animateShow[currentPage] > 2">
    </div>

  </div>

  <div class="navigation">
    <img src="../assets/story6/左.png" alt="" class="prev-btn" @click="prevPage" v-if="showLeftArrow">
    <img src="../assets/story6/右.png" alt="" class="next-btn" @click="nextPage" v-if="showRightArrow">
  </div>
</template>


<script>
import "/node_modules/animate.css"

export default {
  name: "story6",
  data() {
    return {
      currentPage: 0,
      isCurrentPage: [true, ...new Array(15).fill(false)],
      fromLeftIn: new Array(16).fill(false),
      fromRightIn: new Array(16).fill(false),
      fromLeftOut: new Array(16).fill(false),
      fromRightOut: new Array(16).fill(false),
      animateCount: [0, 1, 1, 0, 4, 4, 2, 3, 1, 0, 0, 0, 2, 0, 0, 5],//用于展示动画属性
      animateShow: new Array(16).fill(0),
      showLeftArrow: false,
      showRightArrow: true,
      ifGotoMenu: false,
    }
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeydown);
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  },
  methods: {
    gotoMenu() {
      this.ifGotoMenu = true;
      setTimeout(() => {
        this.$router.push('/menu');
      }, 1000);
    },
    showAni(c) {
      for (let i = 0; i < this.animateCount[c]; i++) {
        setTimeout(() => {
          this.animateShow[c] += 1;
          console.log('animateShow:' + (i + 1));
        }, 50 + i * 500);
      }
    },
    prevPage() {
      if (this.currentPage > 0) {
        this.animateShow[this.currentPage] = 0;//把上一页动画效果置零
        this.fromRightOut[this.currentPage] = true;//改成从右边出
        setTimeout(() => {
          this.fromRightOut[this.currentPage] = false;
          this.isCurrentPage[this.currentPage] = false;//这一页停止渲染
          this.currentPage -= 1;
          this.fromLeftIn[this.currentPage] = true;
          this.isCurrentPage[this.currentPage] = true; // 翻页，开始渲染上一页
          this.showLeftArrow = this.currentPage > 0; // 需要判断能不能向左
          this.showRightArrow = true; // 向左的逻辑之后，一定可以向右
          setTimeout(() => {
            this.fromLeftIn[this.currentPage] = false;
            this.showAni(this.currentPage);
          }, 650); // 0.6 秒延迟
        }, 450); // 0.4 秒延迟
      }
      console.log(this.currentPage);
    },
    nextPage() {
      if (this.currentPage < 15) {
        this.animateShow[this.currentPage] = 0;
        this.fromLeftOut[this.currentPage] = true;//改成从左边出
        setTimeout(() => {
          this.fromLeftOut[this.currentPage] = false;
          this.isCurrentPage[this.currentPage] = false;//这一页停止渲染
          this.currentPage += 1;
          this.fromRightIn[this.currentPage] = true;
          this.isCurrentPage[this.currentPage] = true; // 翻页，开始渲染上一页
          this.showRightArrow = this.currentPage < 15;
          this.showLeftArrow = true;
          setTimeout(() => {
            this.fromRightIn[this.currentPage] = false;
            this.showAni(this.currentPage);
          }, 650); // 0.5 秒延迟
        }, 450); // 0.5 秒延迟
      }
      console.log(this.currentPage);
    },
    handleKeydown(event) {
      if (event.key === 'ArrowLeft') {
        this.prevPage();
      } else if (event.key === 'ArrowRight') {
        this.nextPage();
      }
    }
  },

};
</script>

<style scoped>
.page {
  /*页容器 */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* 设置容器高度 */
  position: relative;
  /*相对定位，这是为了标题可以浮动在蛋上面 */
}

.pageId {
  position: absolute;
  width: 2.5vw;
  bottom: 6vh;
  left: 47.5vw;
  z-index: 2;
}

.pageId2 {
  position: absolute;
  width: 4.5vw;
  bottom: 6vh;
  left: 47.5vw;
  z-index: 2;
}

.main-img {
  width: 50vw;
}

.navigation {
  position: absolute;
  top: 42vh;
  width: 100%;
}

.prev-btn {
  position: absolute;
  left: 3vw;
  opacity: 0;
  z-index: 5;
}

.next-btn {
  position: absolute;
  right: 3vw;
  opacity: 0;
  z-index: 5;
}

.navigation img {
  opacity: 0.7;
  width: 10vw;
  transition: opacity 0.5s ease, width 0.5s ease;
  cursor: pointer;
  /*鼠标放上去会变成小手*/
  animation: breath 2s infinite linear;
  /*呼吸效果 */
}

.navigation img:hover {
  opacity: 1;
  width: 10.5vw;
  animation: none;
  transition: opacity 0.5s ease, width 0.5s ease;
  /* 添加 0.5 秒的过渡效果 */
}

@keyframes Sticker6-1 {

  0%,
  100% {
    width: 7vw;
    /* 开始时不透明 */
    transform: rotate(0deg);
  }

  50% {
    width: 8vw;
    /* 中间变为半透明 */
    transform: rotate(-3deg);
  }
}

.sticker6-1 {
  animation: Sticker6-1 1.5s 0s infinite;
}

@keyframes Sticker6-2 {

  0%,
  100% {
    width: 12vw;
    /* 开始时不透明 */
  }

  50% {
    width: 12.5vw;
    /* 中间变为半透明 */
    transform: rotate(1deg);
  }
}

.sticker6-2 {
  animation: Sticker6-2 2s 0s infinite;
}

@keyframes Sticker9 {

  0%,
  100% {
    width: 8vw;
  }

  50% {
    width: 8.5vw;
    transform: rotate(1deg);
  }
}

.sticker9 {
  animation: Sticker9 1.5s 0s infinite;
}

@keyframes breath {

  0%,
  100% {
    opacity: 0.7;
    /* 开始时不透明 */
  }

  50% {
    opacity: 0.2;
    /* 中间变为半透明 */
  }
}

@keyframes breath2 {

  0%,
  100% {
    opacity: 0.2;
    /* 开始时不透明 */
  }

  50% {
    opacity: 1;
    /* 中间变为半透明 */
  }
}

.speak {
  animation: Speak 0.3s 0s 4;
}

@keyframes Speak {
  0% {
    transform: scaleY(0.3) translateY(10px) translateX(-1px)
      /* 初始大小 */
  }

  100% {
    transform: scaleY(1) translateX(1px);
    /* 最终大小 */
  }
}

.speak2 {
  animation: Speak2 0.3s 0s 3;
}

@keyframes Speak2 {
  0% {
    transform: scaleY(0.3) translateY(10px) translateX(0px) scaleX(-1)
      /* 初始大小 */
  }

  100% {
    transform: scaleY(1) translateX(-2px) scaleX(-1);
    /* 最终大小 */
  }
}

@keyframes ChangeSize {

  0%,
  100% {
    width: 40vw;
  }

  50% {
    width: 41vw;
  }
}

.lighting {
  animation: breath2 2s 0s infinite, ChangeSize 1s 0s infinite;
  opacity: 0;
}

.imgZY {
  animation: breath2 2s 1s infinite;
}

.imgZYArrow {
  position: absolute;
  z-index: 1;
  bottom: 12vh;
  width: 12vw;
  right: 10vw;
}

.imgZYWord {
  position: absolute;
  bottom: 12vh;
  width: 10vw;
  right: 18vw;
}

@keyframes Jump {

  0%,
  100% {
    transform: rotate(-15deg) scale(1);
  }

  50% {
    transform: rotate(0deg) scale(1.05);
  }
}

.jump {
  animation: Jump 1.5s 0s infinite;
}</style>
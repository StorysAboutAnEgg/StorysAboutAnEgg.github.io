<template>
  <BackgroundChanger>
    <div class="page">
      <img src="../assets/story3/开场蛋.png" alt="" class="animate__animated animate__bounceInUp" style="width:30vw;">
      <img src="../assets/story3/开场白.png" alt="" class="floating animate__animated animate__bounceInDown"
        style="width:30vw;">
    </div>
    <div class="page">
      <img src="../assets/story3/1.png" alt="" class="image1 imageType">
    </div>
    <div class="page">
      <img src="../assets/story3/2.png" alt="" class="image2 imageType">
    </div>
    <div class="page">
      <img src="../assets/story3/3-鸡妈.png" alt="" id="page3Hen" class="image3Hen">
      <img src="../assets/story3/3-蛋宝宝.png" alt="" id="page3Egg" class="image3Egg">
    </div>
    <div class="page">
      <img src="../assets/story3/4.png" alt="" class="image4 imageType">
    </div>
    <div class="page">
      <img src="../assets/story3/5.png" alt="" class="image5 imageType">
    </div>
    <div class="page">
      <img src="../assets/story3/6.png" alt="" class="image6 imageType">
    </div>
    <div class="page">
      <img src="../assets/story3/7.png" alt="" class="image7 imageType">
      <img src="../assets/story3/7-对呀.png" alt="" class="img7word" id="floating7word">
      <img src="../assets/story3/7-汗.png" alt="" id="floating7sweat">
    </div>
    <div class="page">
      <img src="../assets/story3/8.png" alt="" class="animate__animated image8 imageType">
    </div>
    <div class="page" ref="pageElement">
      <img src="../assets/story3/9.png" alt="" class="image9 imageType1 hidden">
      <img src="../assets/story3/9-汗左.png" alt="" id="floating9left" z-index:1 class="image9-left hidden">
      <img src="../assets/story3/9-汗右.png" alt="" id="floating9right" z-index:1 class="image9-right hidden">
    </div>
    <div class="page">
      <img src="../assets/story3/10.png" alt="" class="image10 imageType">
      <img src="../assets/story3/10-怒气左.png" alt="" id="floating10left" class="angry10left">
      <img src="../assets/story3/10-怒气右.png" alt="" id="floating10right" class="angry10right">
      <img src="../assets/story3/10-怒气身.png" alt="" id="floating10body" class="angry10body">
    </div>
    <div class="page" ref="page11">
      <!-- <img src="../assets/story3/11.png" alt="" class="image11 imageType"> -->
      <img src="../assets/story3/11-左.png" alt="" class="image11-left animate__animated animate__shakeY"
        style="position: absolute;left:10vw;top:0vh;width:30vw;z-index:1" v-if="page11[2]">
      <img src="../assets/story3/11-左.png" alt="" class="image11-left animate__animated animate__rubberBand"
        style="position: absolute;right:10vw;top:60vh;width:25vw;opacity: 0.6;z-index:1" v-if="page11[0]">
      <img src="../assets/story3/11-左.png" alt="" class="image11-left animate__animated animate__shakeX"
        style="position: absolute;right:30vw;top:-5vh;width:20vw;opacity: 0.9;z-index:1" v-if="page11[0]">

      <img src="../assets/story3/11-中.png" alt="" class="image11" style="position: absolute; left:20vw; width:50vw"
        v-if="page11[1]" :class="{ 'animate__animated animate__fadeIn': page11[1] }">

      <img src="../assets/story3/11-右.png" alt="" class="image11-right"
        style="position: absolute; right:10vw;bottom:15vh;right:70vw;width:25vw" v-if="page11[2]"
        :class="{ 'animate__animated animate__wobble': page11[2] }">
      <img src="../assets/story3/11-右.png" alt="" class="image11-right"
        style="position: absolute;opacity: 0.9;bottom:60vh; right:15vw; width:40vw" v-if="page11[0]"
        :class="{ 'animate__animated animate__shakeY': page11[0] }">
      <img src="../assets/story3/11-字.png" alt=""
      style="position: absolute;top:12vh; right:30vw; width:40vw;z-index:1" v-if="page11[4]"
        :class="{ 'animate__animated animate__fadeInDown': page11[0] }">
    </div>
    <div class="page" ref="page12">
      <img src="../assets/story3/12.png" alt="" class="image12 imageType">
      <img src="../assets/story3/12-light.png" alt="" id="" class="light">
      <img src="../assets/story3/12-star.png" alt="" id="" class="star">
      <img src="../assets/story3/12-字.png" alt="" class="animate__animated animate__fadeInDown"
      style="position: absolute;top:27vh" v-if="isPage12InView">
    </div>
    <div class="page">
      <img src="../assets/story3/13.png" alt="" class="image13 imageType">
    </div>
    <div class="page">
      <img src="../assets/story3/14.png" alt="" class="image14 imageType">
    </div>
    <div class="page">
      <img src="../assets/story3/15.png" alt="" class="image15 imageType">
    </div>
    <div class="page">
      <img src="../assets/story3/16.png" alt="" class="image16 imageType">
    </div>
    <div class="page" ref="lastPage">
      <img src="../assets/story3/17-字.png" alt="" id="" class="imageType" z-index:1>
      <img src="../assets/story3/17.png" class="imageType" alt="">
      <img src="../assets/story3/空格图标.png" alt="" class="space">
      <img src="../assets/story3/17-提示.png" alt="" v-if="showRouterTip"
        style="position: absolute;width: 20vw;bottom:13vh;right:20vw" class="animate__animated animate__fadeInDown">
    </div>
  </BackgroundChanger>
</template>

<script>
import "/node_modules/animate.css"
import BackgroundChanger from '../components/BackgroundChanger.vue'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "story3",
  components: {
    BackgroundChanger,
  },
  data() {
    return {
      isIntersecting: false, // 用于追踪元素9是否进入视口
      animationState: 0, // 0: 未触发, 1: 已经触发进入动画
      showRouterTip: false,
      isPage11InView: false, // 表示page11是否进入视口
      page11: [false, false, false, false,false],
      isPage12InView:false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.imageTroll();
      this.sparkling();
      ScrollTrigger.refresh();
    }, 500);
    this.setupIntersectionObserver();
    this.angry();
    this.setupScrollTriggers11();
    window.addEventListener('keydown', this.handleSpacePress);
    window.addEventListener('scroll', this.handleScrollToBottom);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleSpacePress);
    window.removeEventListener('scroll', this.handleScrollToBottom);
  },
  methods: {
    imageTroll() {
      // const t = gsap.timeline();
      ScrollTrigger.create({
        trigger: '.image1',
        start: 'top 100%',
        end: 'top 20%',
        // markers: true,
        scrub: true,
        animation:
          gsap.fromTo('.image1', { scale: 0.8 }, { scale: 1.4 })
      })
      ScrollTrigger.create({
        trigger: '.image1',
        start: 'bottom 70%',
        end: 'bottom 20%',
        scrub: true,
        animation:
          gsap.fromTo('.image1', { scale: 1.4 }, { scale: 0.8 })
      })
      ScrollTrigger.create({
        trigger: '.image2',
        start: 'top 100%',
        end: 'top 20%',
        scrub: true,
        animation:
          gsap.fromTo('.image2', { scale: 0.8 }, { scale: 1.4 })
      })
      ScrollTrigger.create({
        trigger: '.image2',
        start: 'bottom 60%',
        end: 'bottom 10%',
        scrub: true,
        animation:
          gsap.fromTo('.image2', { scale: 1.4 }, { scale: 0.8 })
      })
      ScrollTrigger.create({
        trigger: '.image3Hen',
        start: 'top 70%',
        scrub: true,
        animation:
          gsap.fromTo('.image3Hen', { scale: 1, x: 0 }, { scale: 1.3, x: 200 })
      });
      ScrollTrigger.create({
        trigger: '.image3Egg',
        start: 'top 100%',
        scrub: true,
        animation:
          gsap.fromTo('.image3Egg', { scale: 1 }, { scale: 1.8 })
      });
      ScrollTrigger.create({
        trigger: '.image4',
        start: 'top 100%',
        end: 'top 20%',
        scrub: true,
        animation:
          gsap.fromTo('.image4', { scale: 0.8 }, { scale: 1.4 })
      })
      ScrollTrigger.create({
        trigger: '.image4',
        start: 'bottom 70%',
        end: 'bottom 20%',
        scrub: true,
        animation:
          gsap.fromTo('.image4', { scale: 1.4 }, { scale: 0.8 })
      })
      ScrollTrigger.create({
        trigger: '.image5',
        start: 'top 100%',
        end: 'top 20%',
        scrub: true,
        animation:
          gsap.fromTo('.image5', { scale: 0.8 }, { scale: 1.4 })
      })
      ScrollTrigger.create({
        trigger: '.image5',
        start: 'bottom 70%',
        end: 'bottom 20%',
        scrub: true,
        animation:
          gsap.fromTo('.image5', { scale: 1.4 }, { scale: 0.8 })
      })
      ScrollTrigger.create({
        trigger: '.image6',
        start: 'top 100%',
        end: 'top 20%',
        scrub: true,
        animation:
          gsap.fromTo('.image6', { scale: 0.8 }, { scale: 1.4 })
      })
      ScrollTrigger.create({
        trigger: '.image6',
        start: 'bottom 70%',
        end: 'bottom 20%',
        scrub: true,
        animation:
          gsap.fromTo('.image6', { scale: 1.4 }, { scale: 0.8 })
      })
      ScrollTrigger.create({
        trigger: '.image7',
        start: 'top 100%',
        end: 'top 20%',
        scrub: true,
        animation:
          gsap.fromTo('.image7', { scale: 0.8 }, { scale: 1.4 })
      })
      ScrollTrigger.create({
        trigger: '.image7',
        start: 'bottom 70%',
        end: 'bottom 20%',
        scrub: true,
        animation:
          gsap.fromTo('.image7', { scale: 1.4 }, { scale: 1 })
      })
      ScrollTrigger.create({
        trigger: '.img7word',
        start: 'top 100%',
        end: 'top 20%',
        scrub: true,
        animation:
          gsap.fromTo('.img7word', { scale: 0.8 }, { scale: 1.4 })
      })
      ScrollTrigger.create({
        trigger: '.img7word',
        start: 'bottom 70%',
        end: 'bottom 20%',
        scrub: true,
        animation:
          gsap.fromTo('.img7word', { scale: 1.2 }, { scale: 1 })
      })
      ScrollTrigger.create({
        trigger: '.image8',
        start: 'top 100%',
        end: 'top 20%',
        scrub: true,
        animation:
          gsap.fromTo('.image8', { scale: 0.8 }, { scale: 1.4 })
      })
      ScrollTrigger.create({
        trigger: '.image8',
        start: 'bottom 70%',
        end: 'bottom 20%',
        scrub: true,
        animation:
          gsap.fromTo('.image8', { scale: 1.4 }, { scale: 0.8 })
      })
      ScrollTrigger.create({
        trigger: '.image10',
        start: 'top 100%',
        end: 'top 20%',
        scrub: true,
        animation:
          gsap.fromTo('.image10', { scale: 0.8 }, { scale: 1.3 })
      })
      ScrollTrigger.create({
        trigger: '.image10',
        start: 'bottom 70%',
        end: 'bottom 20%',
        scrub: true,
        animation:
          gsap.fromTo('.image10', { scale: 1.3 }, { scale: 0.8 })
      })
      // ScrollTrigger.create({
      //   trigger: '.image11-left',
      //   start: 'top 100%',
      //   end: 'top 20%',
      //   scrub: true,
      //   animation:
      //     gsap.fromTo('.image11-left', { scale: 0.8 }, { scale: 1.4 })
      // })
      // ScrollTrigger.create({
      //   trigger: '.image11-left',
      //   start: 'bottom 70%',
      //   end: 'bottom 20%',
      //   scrub: true,
      //   animation:
      //     gsap.fromTo('.image11-left', { scale: 1.4 }, { scale: 0.8 })
      // })
      // ScrollTrigger.create({
      //   trigger: '.image11',
      //   start: 'top 100%',
      //   end: 'top 20%',
      //   scrub: true,
      //   animation:
      //     gsap.fromTo('.image11', { scale: 1.0 }, { scale: 2.5 })
      // })
      // ScrollTrigger.create({
      //   trigger: '.image11',
      //   start: 'bottom 70%',
      //   end: 'bottom 20%',
      //   scrub: true,
      //   animation:
      //     gsap.fromTo('.image11', { scale: 2.5 }, { scale: 1.0 })
      // })
      ScrollTrigger.create({
        trigger: '.image12',
        start: 'top 100%',
        end: 'top 20%',
        scrub: true,
        animation:
          gsap.fromTo('.image12', { scale: 0.8 }, { scale: 1.4 })
      })
      ScrollTrigger.create({
        trigger: '.image12',
        start: 'bottom 70%',
        end: 'bottom 20%',
        scrub: true,
        animation:
          gsap.fromTo('.image12', { scale: 1.4 }, { scale: 0.8 })
      })
      ScrollTrigger.create({
        trigger: '.image13',
        start: 'top 100%',
        end: 'top 20%',
        scrub: true,
        animation:
          gsap.fromTo('.image13', { scale: 0.8 }, { scale: 1.4 })
      })
      ScrollTrigger.create({
        trigger: '.image13',
        start: 'bottom 70%',
        end: 'bottom 20%',
        scrub: true,
        animation:
          gsap.fromTo('.image13', { scale: 1.4 }, { scale: 0.8 })
      })
      ScrollTrigger.create({
        trigger: '.image14',
        start: 'top 100%',
        end: 'top 20%',
        scrub: true,
        animation:
          gsap.fromTo('.image14', { scale: 0.8 }, { scale: 1.4 })
      })
      ScrollTrigger.create({
        trigger: '.image14',
        start: 'bottom 70%',
        end: 'bottom 20%',
        scrub: true,
        animation:
          gsap.fromTo('.image14', { scale: 1.4 }, { scale: 0.8 })
      })
      ScrollTrigger.create({
        trigger: '.image15',
        start: 'top 100%',
        end: 'top 20%',
        scrub: true,
        animation:
          gsap.fromTo('.image15', { scale: 0.8 }, { scale: 1.4 })
      })
      ScrollTrigger.create({
        trigger: '.image15',
        start: 'bottom 70%',
        end: 'bottom 20%',
        scrub: true,
        animation:
          gsap.fromTo('.image15', { scale: 1.4 }, { scale: 0.8 })
      })
      ScrollTrigger.create({
        trigger: '.image16',
        start: 'top 100%',
        end: 'top 20%',
        scrub: true,
        animation:
          gsap.fromTo('.image16', { scale: 0.8 }, { scale: 1.4 })
      })
      ScrollTrigger.create({
        trigger: '.image16',
        start: 'bottom 70%',
        end: 'bottom 20%',
        scrub: true,
        animation:
          gsap.fromTo('.image16', { scale: 1.4 }, { scale: 0.8 })
      })
    },
    sparkling() {
      gsap.to(".star", {
        duration: 1.2,
        scale: "1",
        repeat: -1,
        yoyo: true,
        opacity: "0.3"
      });
      gsap.to(".space", {
        duration: 0.8,
        scale: "1",
        repeat: -1,
        yoyo: true,
        opacity: "0.1"
      });
      gsap.to(".light", {
        duration: 3.5,
        scale: 1.1,
        repeat: -1,
        yoyo: true,
        rotate: 3,
        opacity: "0.6"
      });
    },
    setupIntersectionObserver() {
      const observerOptions = {
        rootMargin: "0px",
        threshold: 0.5, // 当元素顶部到达视口的50%时触发
      };
      const callback = (entries, observer) => {
        entries.forEach((entry) => {
          const parentContainer = entry.target;
          const imageElement = parentContainer.querySelector(".image9");
          const imageElement1 = parentContainer.querySelector(".image9-left");
          const imageElement2 = parentContainer.querySelector(".image9-right");

          if (entry.isIntersecting && this.animationState === 0) {
            this.animationState = 1;
            if (imageElement) {
              imageElement.classList.add("animate__animated", "animate__fadeInLeft");
              imageElement.classList.remove("hidden");
              imageElement1.classList.remove("hidden");
              imageElement2.classList.remove("hidden");
              setTimeout(() => {
                imageElement.classList.add("hidden"); // 动画结束后隐藏
                imageElement1.classList.add("hidden");
                imageElement2.classList.add("hidden");
                imageElement.classList.remove("animate__animated", "animate__fadeInLeft"); // 移除动画类，准备下一次动画
              }, 3000); // 根据动画持续时间调整
            }
          }
          else if (!entry.isIntersecting && this.animationState === 1) {
            // 离开视口动画
            this.animationState = 0;
            if (imageElement) {
              imageElement.classList.add("animate__animated", "animate__fadeOutRight"); // 或其他适合的离开动画类名
              imageElement1.classList.add("hidden");
              imageElement2.classList.add("hidden");
              setTimeout(() => {
                imageElement.classList.add("hidden"); // 动画结束后隐藏
                imageElement.classList.remove("animate__animated", "animate__fadeOutRight"); // 移除动画类，准备下一次动画
              }, 300); // 根据动画持续时间调整
            }
          }
        });
      };

      const observer9in = new IntersectionObserver(callback, observerOptions);
      observer9in.observe(this.$refs.pageElement); // 确保ref正确指向目标元素
    },
    angry() {
      gsap.to(".angry10left", {
        duration: 0.5,
        scale: 1.2,
        repeat: -1,
        yoyo: true,
        rotate: -3,
      });
      gsap.to(".angry10right", {
        duration: 0.5,
        scale: 1.2,
        repeat: -1,
        yoyo: true,
        rotate: 3,
      });
      gsap.to(".angry10body", {
        duration: 0.2,
        scale: 1.2,
        repeat: -1,
        yoyo: true,
        rotate: -2,
      });
    },
    setupScrollTriggers11() {
      const page11 = this.$refs.page11;
      const page12 = this.$refs.page12; 
      ScrollTrigger.create({
        trigger: page11,
        start: "top 40%", // 进入视口的起始位置
        onEnter: () => {
          this.isPage11InView = true;
          console.log("true1");
          setTimeout(() => {
            this.page11[0] = true;
            setTimeout(() => {
              this.page11[2] = true;
              setTimeout(() => {
                this.page11[3] = true;
                setTimeout(() => {
                  this.page11[1] = true;
                  setTimeout(() => {
                    this.page11[4]=true;
                  }, 100);
                }, 200);
              }, 300);
            }, 300);
          }, 200);

          // 这里可以添加触发进入视口后的动画或其他逻辑
        },
        onLeave: () => {
          this.isPage11InView = false;
          this.page11 = [false, false, false, false];
          // 这里可以添加离开视口后的逻辑
        },
        onEnterBack: () => {
          this.isPage11InView = true;
          setTimeout(() => {
            this.page11[0] = true;
            setTimeout(() => {
              this.page11[2] = true;
              setTimeout(() => {
                this.page11[3] = true;
                setTimeout(() => {
                  this.page11[1] = true;
                  setTimeout(() => {
                    this.page11[4]=true;
                  }, 100);
                }, 200);
              }, 300);
            }, 300);
          }, 200);
          // 这里可以添加重新进入视口后的逻辑
        },
        onLeaveBack: () => {
          this.isPage11InView = false;
        }
      });
      ScrollTrigger.create({
        trigger: page12,
        start: "top 20%", // 进入视口的起始位置
        onEnter: () => {
          setTimeout(() => {
            this.isPage12InView = true;
          }, 100);
          
        },
      });
      ScrollTrigger.create({
        trigger: page12,
        start: "start 20%", // 进入视口的起始位置
        onEnter: () => {
          setTimeout(() => {
            this.isPage12InView = true;
          }, 100);
        },
      });
    },
    handleScrollToBottom() {
      if (window.scrollY > this.lastScrollY) {
        // 向下滚动
        if ((window.scrollY + window.innerHeight) >= (document.documentElement.scrollHeight - 100)) {
          setTimeout(() => {
            this.showRouterTip = true
          }, 600)
        }
      } else {
        // 向上滚动
        this.showRouterTip = false
      }
      this.lastScrollY = window.scrollY
    },
    jumpToHome() {
      this.$router.push('/menu');
    },
    handleSpacePress(event) {
      if (event.code === 'Space') {
        gsap.to(this.$refs.lastPage, {
          duration: 2, // 动画持续时间，可以根据需要调整
          opacity: 0,
          onComplete: () => {
            this.jumpToHome(); // 跳转到 /menu 路由
          }
        });
      }
    },
  }

};
</script>

<style scoped>
.animate__animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

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

.imageType {
  width: 32vw;
}

.imageType1 {
  width: 40vw;
}

#page3Hen {
  position: absolute;
  top: 5vh;
  left: 15vw;
}

#page3Egg {
  position: absolute;
  bottom: 30vh;
  right: 10vw;
  width: 10vw;
}

.floating {
  position: absolute;
  /* 设置绝对定位 */
  top: 5vh;
  /* 距离容器顶部 10px */
  /* left: 5vw; */
  /* 距离容器左侧 10px */
  max-width: 100%;
  max-height: 100%;
  z-index: 1;
  /* 确保浮动图片在主图片之上 */
}

.hidden {
  opacity: 0;
}

#floating7word {
  position: absolute;
  top: 48vh;
  right: 33vw;
  width: 8vw;
  z-index: 1;
}

#floating7sweat {
  position: absolute;
  top: 59vh;
  left: 49vw;
  width: 3vw;
  z-index: 1;
}

#floating9left {
  position: absolute;
  top: 55vh;
  left: 36vw;
  width: 4vw;
  z-index: 1;
}

#floating9right {
  position: absolute;
  top: 55vh;
  left: 56vw;
  width: 3vw;
  z-index: 1;
}

#floating10left {
  position: absolute;
  top: 42vh;
  left: 31vw;
  width: 2vw;
  z-index: 1;
}

#floating10right {
  position: absolute;
  top: 42vh;
  left: 40vw;
  width: 3vw;
  z-index: 1;
}

#floating10body {
  position: absolute;
  top: 49vh;
  left: 37vw;
  width: 3vw;
  z-index: 1;
}

.star {
  position: absolute;
  top: 25vh;
  left: 33vw;
  width: 26vw;
  z-index: 2;
}

.light {
  position: absolute;
  top: 35vh;
  left: 34vw;
  width: 26vw;
  z-index: 1;
}

.space {
  position: absolute;
  top: 80vh;
  left: 80vw;
  width: 5vw;
  z-index: 1;
}
</style>



<template>
  <div class="container">
    <!-- g-img1 -->
    <section class="g-img1">
      <img src="@/assets/story5/1_4.png" class="image" />
    </section>
    
    <!-- g-img2 -->
    <section class="g-img2">
      <img src="@/assets/story5/1_2.png" class="image" style="position: absolute; top: 10%; left: 34%; transform:scale(1.8);"/>
    </section>
    
    <!-- g-img3 -->
    <section class="g-img3" ref="gImg3">
      <div class="button-container" v-show="showButton">
        <img @mouseover="showImage(1)" @mouseleave="hideImage()" src="../assets/story5/f1.png" class="hover-effect" />
        <img @mouseover="showImage(2)" @mouseleave="hideImage()" src="../assets/story5/f2.png" class="hover-effect" />
        <img @mouseover="showImage(3)" @mouseleave="hideImage()" src="../assets/story5/f3.png" class="hover-effect" />
        <img @mouseover="showImage(4)" @mouseleave="hideImage()" src="../assets/story5/f4.png" class="hover-effect" />
      </div>
      <div>
        <div v-if="showingImage === 1" class="image-stack">
          <img src="../assets/story5/2_1.png" class="image Appear1" style="z-index: 1;"/>
          <img src="../assets/story5/2_2.png" class="image Appear2" style="z-index: 2;"/>
          <img src="../assets/story5/2_3.png" class="image Appear3" style="z-index: 3; opacity: 0;"/>
        </div>
        <div v-if="showingImage === 2" class="image-stack">
          <img src="../assets/story5/2_4.png" class="image"/>
          <img src="../assets/story5/2_5.png" class="image roll-out"/>
          <img src="../assets/story5/2_6.png" class="image Appear4"/>
          <img src="../assets/story5/2_7.png" class="image dialog"/>
        </div>
        <div v-if="showingImage === 3" class="image-stack">
          <img src="../assets/story5/3_1.png" class="image"/>
          <img src="../assets/story5/3_2.png" class="image Appear5"/>
          <img src="../assets/story5/3_3.png" class="image Appear5"/>
        </div>
        <div v-if="showingImage === 4" class="image-stack">
          <img src="../assets/story5/3_4.png" class="image expand3"/>
          <img src="../assets/story5/3_5.png" class="image run"/>
          <img src="../assets/story5/3_6.png" class="image expand"/>
          <img src="../assets/story5/3_7.png" class="image expand2"/>
        </div>
      </div>
    </section>
    
    <!-- g-img4 -->
    <section class="g-img4">
      <div class="image-stack">
        <img src="../assets/story5/4_1.png" class="image"/>
        <img src="../assets/story5/4_2.png" class="image "/>
        <img src="../assets/story5/4_3.png" class="image "/>
        <img src="../assets/story5/4_4.png" class="image "/>
      </div>
    </section>
    
    <!-- g-img5 -->
    <section class="g-img5">
      <div class="image-stack">
        <img src="../assets/story5/5_1.png" class="image"  />
        <img src="../assets/story5/5_2.png" class="image"  />
      </div>
    </section>
    
    <!-- g-img6 -->
    <section class="g-img6">
      <div class="image-stack">
        <img src="../assets/story5/6_1.png" class="image"  />
        <img src="../assets/story5/6_2.png" class="image"  />
      </div>
    </section>
    
    <!-- g-img7 -->
    <section class="g-img7">
      <div class="image-stack">
        <img src="../assets/story5/6_3.png" class="image"  />
      </div>
    </section>
    
    <!-- g-img8 -->
    <section class="g-img8">
      <div class="image-stack">
        <img src="../assets/story5/7_1.png" class="image"  />
        <img src="../assets/story5/7_2.png" class="image"  />
        <img src="../assets/story5/7_3.png" class="image"  />
        <img @click="goto('/menu')" src="../assets/story5/7_4.png" class="image back" />
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showingImage: null,
      showButton: false,
      flag:0
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    goto(route) {
      this.$router.push(route);
    },
    showImage(imageNumber) {
      this.showingImage = imageNumber;
      console.log(this.showingImage); // 打印showingImage的值
    },
    hideImage() {
      this.showingImage = null;
    },
    handleScroll() {
      const gImg3 = this.$refs.gImg3;
      if (gImg3) {
        const rect = gImg3.getBoundingClientRect();
        this.showButton = rect.top <= window.innerHeight - 10 && rect.bottom >= 0;
        console.log(window.innerHeight);
        console.log(rect);
      }
      this.updateButtonContainerPosition();
      this.updateImagePosition();
    },
    updateButtonContainerPosition() {
      const gImg4 = document.querySelector('.g-img4');
      if (gImg4) {
        const rect = gImg4.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        console.log(rect.top - windowHeight);
        if (rect.top < windowHeight - 13) {
          const buttonContainer = document.querySelector('.button-container');
          // 滚动百分比，0到1之间
          let progress = (windowHeight - rect.top) / windowHeight;
          progress = Math.min(Math.max(progress, 0), 1);
          // 更新transform和opacity
          const translateX = progress * 1500; 
          buttonContainer.style.transform = `translateX(${translateX}%)`;
          // buttonContainer.style.opacity = opacity;
        }
      }
    },
    updateImagePosition() {
      
      const gImg4 = document.querySelector('.g-img4');
      if (gImg4) {
        const rect = gImg4.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const images = gImg4.querySelectorAll('.image');
        // 滚动百分比，0到1之间
        let progress = (windowHeight - rect.top) / windowHeight;
        progress = Math.min(Math.max(progress, 0), 1);
        const translateX = progress * 150; // 最大右移150%
        const opacity = progress; // 最大透明度为1
        images.forEach((image, index) => {
          // 更新transform和opacity
          const translateX = progress * 150; // 最大右移150%
          const opacity = progress; // 最大透明度为1
          image.style.transform = `translateX(${translateX}%)`;
          image.style.opacity = opacity;
          if(index==2&&progress<0.84){
            image.style.opacity=0;
            image.style.transform = `translateY(${translateX}%)`;
          }
          if(index==3&&progress<=0.84){
            image.style.opacity=0;
            image.style.transform = `translateY(${translateX-5}%)`;
          }
          if(index==1 && progress>0.84&&progress<0.85){
            console.log('t',translateX);
            image.style.transform = `translateX(${translateX}%)`;
            image.classList.add('speak');
          }else if(index==1){
            image.classList.remove('speak');
            image.style.opacity = opacity;
          }
        });
      }

      const gImg5 = document.querySelector('.g-img5');
      if (gImg5) {
        const rect = gImg5.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const images = gImg5.querySelectorAll('.image');

        // 滚动百分比，0到1之间
        let progress = (windowHeight - rect.top) / windowHeight;
        progress = Math.min(Math.max(progress, 0), 1);
        const opacity = progress; // 最大透明度为1
        const angle = progress *360; // 最大右移150%
        images.forEach((image, index) => {
          if(index==1){
            image.style.opacity = opacity;
            image.style.transform = `rotateY(${angle}deg) scale(${progress*2})`;
          }
          else{
            image.style.opacity = opacity;
            image.style.transform = `rotateY(${angle}deg)`;
          }
        });
      }

      const gImg6 = document.querySelector('.g-img6');
      if (gImg6) {
        const rect = gImg6.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const images = gImg6.querySelectorAll('.image');

        // 滚动百分比，0到1之间
        let progress = (windowHeight - rect.top) / windowHeight;
        progress = Math.min(Math.max(progress, 0), 1);
        const opacity1 = 1 - progress; // 逐渐减小的透明度
        const opacity2 = progress; // 逐渐增加的透明度
        const scale = progress *2; // 放大为两倍
        images.forEach((image, index) => {
          // 根据索引设置不同的透明度
          if (index === 0) {
            if(progress<=0.75){
              image.style.opacity=1;
            }
            else{
              image.style.opacity = opacity1;
            }
          } else {
            if(progress>=0.75){
              image.style.opacity = opacity2;
            }
            else{
              image.style.opacity=0;
            }
          }
          image.style.transform = `scale(${scale})`;
        });
      }

      const gImg7 = document.querySelector('.g-img7');
      if (gImg7) {
        const rect = gImg7.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const images = gImg7.querySelectorAll('.image');

        // 滚动百分比，0到1之间
        let progress = (windowHeight - rect.top) / windowHeight;
        progress = Math.min(Math.max(progress, 0), 1);
        const opacity = progress; // 最大透明度为1
        const angle = progress *360; // 最大右移150%
        images.forEach(image => {
          // 更新opacity
          image.style.opacity = opacity;
          image.style.transform = `rotate(${angle}deg)`;
        });
      }

      const gImg8 = document.querySelector('.g-img8');
  if (gImg8) {
    const rect = gImg8.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const images = gImg8.querySelectorAll('.image');

    // 滚动百分比，0到1之间
    let progress = (windowHeight - rect.top) / windowHeight;
    progress = Math.min(Math.max(progress, 0), 1);
    const opacity = progress; // 最大透明度为1
    const rotation = progress * 360; // 最大旋转360度
    images.forEach((image, index) => {
      // 使用奇偶数来使得不同的图片有不同的旋转方向
      const rotateDirection = index % 2 === 0 ? -1 : 1;
      // 更新opacity和transform
      image.style.opacity = opacity;
      image.style.transform = `rotate(${rotateDirection * rotation}deg)   perspective(1000px)`;
    });
  }
    }
  }
};
</script>
<style scoped>
section {
  height: 100vh;
  color: #fff;
  line-height: 100vh;
  text-align: center;
  font-size: 20vh;
}

.container{
  cursor: url(../assets/story5/cursor.png),auto;
}


.g-img8 .image{
  perspective: 800px;
}

.g-img4 .image {
  position: flex; /* 确保 transform 生效 */
  transform: translateX(-150%); /* 初始状态在屏幕左边 */
  left: -55%;
  opacity: 0; /* 初始状态不可见 */
  transition: transform 0.5s, opacity 0.5s;
}

.g-img2 {
  background-image: url('../assets/story5/1_1.png');
  display: flex;
  position: relative;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  background-attachment: fixed;
  background-size: 60%;
  background-position: 55%;
  background-repeat: no-repeat;
}

.g-img1 {
  background-image: url('../assets/story5/1_3.png'), url('../assets/story5/1_5.png');
  background-attachment: fixed, fixed;
  background-size: 50%, 50%;
  background-position: center center, center 60%;

}

.button1 {
  background-image: url('../assets//story5/f1.png');
}

.image {
  justify-content: center;
  max-width: 80%; /* 限制图片的最大宽度 */
  max-height: 80%; /* 限制图片的最大高度 */
}

.button-container {
  position: fixed;
  bottom: 5%;
  display: flex;
  max-width: 5%;
  max-height: 30%;
  left: 37%;
  gap: 10px;
  transform: translateX(0);
  opacity: 1;
  transition: transform 0.2s, opacity 0.2s;
}

.button-container img {
  transform: scale(0.7);
  transition: transform 0.5s, filter 0.5s, opacity 0.5s;
  perspective: 1000px;
  opacity: 0.5;
}

.button-container img.hover-effect:hover {
  transform: scale(1) rotateY(180deg); /* Flip on Y-axis */
  opacity: 1; /* Slight opacity change */
  cursor: none;
}

.back:hover {
  cursor: url(../assets/story5/slogan.png),auto;
}
.button-container button {
  margin: 1px;
}

.image-stack {
  display: flex;
  justify-content: center;
}

.image-stack .image {
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
}

@keyframes appear {
  from {
    transform: translateX(-100%);
  }
  to {}

}

@keyframes appear2 {
  from {
    transform: translateX(100%);
  }
  to {}

}

.Appear1 {
  animation: appear 2s forwards;
}

.Appear2 {
  animation: appear2 2s forwards;
}

@keyframes zoom {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1) translateX(-3%) translateY(-3%);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* 使用动画 */
.Appear3 {
  animation: zoom 2s infinite 2s;
}

@keyframes zoom2 {
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.Appear5 {
  animation: zoom2 2s forwards;
}

@keyframes RollOut {
  0% {
    clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%);
  }
  100% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
}

.roll-out {
  opacity: 1;
  animation: RollOut 1.5s forwards;
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

.dialog {
  animation: showDialog 1.5s forwards;
}

@keyframes appear4 {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: translateX(-5%);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.Appear4 {
  animation: appear4 1.5s forwards;
}

@keyframes Run {
  from {
    transform: translateX(-50%) translateY(-27%) scale(0.5);
  }
  to {
    transform: translateX(0) translateY(0);
  }
}

.run {
  animation: Run 2s forwards;
}

@keyframes expandUp {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: bottom;
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
    transform-origin: bottom;
  }
}

.expand {
  animation: expandUp 1s forwards;
}

.expand3 {
  animation: expandUp 0.5s forwards;
}

@keyframes expandLeft {
  0% {
    transform: scaleX(0);
    transform-origin: right;
  }
  100% {
    transform: scaleX(1);
    transform-origin: right;
  }
}

.expand2 {
  animation: expandLeft 1s ease-in-out ;
}

.speak {
  animation: Speak 0.25s 0s 4;
}

@keyframes Speak {
  0% {
    transform:  translateX(126.6871%) scale(0.9);
  }
  100%{
    transform: translateX(126.6871%) scale(1.1);
  }
}


</style>

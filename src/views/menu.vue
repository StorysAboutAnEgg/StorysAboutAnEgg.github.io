  <template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&display=swap" rel="stylesheet">
    
    <div class="body">
      <div class="backg">
        <!-- <img src="../assets/首页8/1.jpg"> -->
      </div>

      <div class="shell">
        <div class="box">
          <div class="images">
            <img src="/首页8/黑蛋.png" />
          </div>
          <div class="content" @click="goto('/story1')">
            <h2>ZeenChin</h2>
            <p>The style in the painting integrates temptation, fantasy and strangeness
            </p>
          </div>
        </div>

        <div class="box">
          <div class="images">
            <img src="../assets/story2/封面.png" >
          </div>
          <div class="content" @click="goto('/story2')">
            <img src="../assets/story2/封面遮罩.png" alt="">
          </div>
        </div>

        <div class="box">
          <div class="images">
            <img src="../assets/story3/封面蛋.png" style="scale: 1.2;">
          </div>
          <div class="content" @click="goto('/story3')">
            <img src="../assets/story3/封面遮罩.png" alt="" style="scale: 1.1;">
          </div>
        </div>

        <div class="box">
          <div class="images">
            <img src="../assets/story4/封面.png" >
          </div>
          <div class="content" @click="goto('/story4')">
            <img src="../assets/story4/封面遮罩.png" alt="">
          </div>
        </div>

        <div class="box">
          <div class="images">
            <img src="/首页8/白蛋.png">
          </div>
          <div class="content" @click="goto('/story5')">
            <h2>ZeenChin</h2>
            <p>The style in the painting integrates temptation, fantasy and strangeness
            </p>
          </div>
        </div>

        <div class="box">
          <div class="images">
            <img src="../assets/story6/封面软蛋.png" >
          </div>
          <div class="content" @click="goto('/story6')">
            <img src="../assets/story6/封面遮罩洋葱.png" alt="">
          </div>
        </div>

        <div class="box">
          <div class="images">
            <img src="../assets/story7/口号.png">
          </div>
          <div class="content" @click="goto('/story7')">
            <p>我社死了
              ! ! !
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  methods: {
    goto(route) {
      this.$router.push(route);
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f2eadf;
}

.backg {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  background: url("../assets/首页8/1.jpg");
  /* background-repeat: no-repeat; */
  background-size: cover;
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
}


.shell {
  position: relative;
  /* min-width: 1000px; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* 设置3d变化 */
  transform-style: preserve-3d;
  /* 添加透视效果 */
  perspective: 900px;
}

.shell .box {
  background-color: #f5e7d3bd;
  position: relative;
  width: 250px;
  height: 300px;
  transition: 0.3s;
  overflow: hidden;
  margin: 30px;
  transform: rotateY(0deg);
  transition-delay: .1s;
  border-radius: 30px;
  /* border: #e7d3b796 5px solid; */

}

/* 当鼠标所有卡片的父元素点shell上时，
        所有卡片像Y轴翻转20度 */
.shell:hover .box {
  transform: rotateY(20deg);
}

/* 当鼠标悬浮在当前卡片上时，当前卡片的翻转角度为0，
        并放大一点二五倍，加个阴影 */
.shell .box:hover {
  transform: rotateY(0deg) scale(1.25);
  box-shadow: 0 25px 40px rgba(0, 0, 0, 0.7);
  z-index: 1;
}

/* 当鼠标悬浮在卡片上时，
        当前卡片后面的所有卡片全部都反向翻转负20度 */
.shell .box:hover~.box {
  transform: rotateY(-20deg);
}

.shell .box .images img {
  width: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  margin: auto;
  display: inline-block;
  text-align: center;

}

.shell .box .content {
  position: absolute;
  background-color: #ead4b8cb;
  opacity: 0;
  transform: scale(0);
  transition: all .4s ease-in-out;
  top: 0;
  width: 90%;
  height: 100%;
  z-index: 999;
  padding: 15px;
  text-align: center;
}

.shell .box .content p {
  font-family: "Ma Shan Zheng", cursive;
  font-weight: 400;
  font-style: normal;
  color: #a14e25;

  opacity: 0;
  transition: all .4s ease-in-out .4s;
  font-size: 50px;
  transform: translateY(100px);
  /* background-color: rgba(255, 255, 255, 0.7); */
}

.shell .box:hover .content p {
  opacity: 1;
  /* transform: translateY(100px); */
}

.shell .box .content img {
  opacity: 0;
  transition: all .4s ease-in-out .4s;
  transform: translateY(100px);
  /* background-color: rgba(255, 255, 255, 0.7); */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 100%;
}

.shell .box:hover .content img {
  opacity: 1;
  transform: translate(-50%, -50%);
  /* transform: translateY(100px); */
}

.shell .box:hover .content {
  opacity: 1;
  transform: scale(1);
}
</style>

  <template>
    <div style="height: 100vh">
      <h1>这是主页</h1>
      <img @click="goto('/story1')"alt="story1"src="/首页8/黑蛋.png" />
      <img @click="goto('/story2')"alt="story2"src="/首页8/白蛋.png" />
      <img @click="goto('/story3')"alt="story3"src="/首页8/荷包蛋.png" />
      <img @click="goto('/story4')"alt="story4"src="/首页8/黑蛋.png" />
      <img @click="goto('/story5')"alt="story5"src="/首页8/白蛋.png" />
      <img @click="goto('/story6')"alt="story6"src="/首页8/荷包蛋.png" />
      <img @click="goto('/story7')"alt="story7"src="/首页8/黑蛋.png" />    
    </div>
  </template>

  <script >
   export default{
    methods: {
      goto(route) {
        this.$router.push(route);
       }
     }
  }
  </script>
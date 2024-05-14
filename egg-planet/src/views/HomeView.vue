<script >
 export default{
  methods: {
    goto(route) {
      this.$router.push(route);
     }
   }
}
</script>

<template>
  <div >
    <h1>这是主页</h1>
    <img @click="goto('/story1')"alt="story1"src="/public/黑蛋.png" />
    <img @click="goto('/story2')"alt="story2"src="/public/白蛋.png" />
    <img @click="goto('/story3')"alt="story3"src="/public/荷包蛋.png" />
    <img @click="goto('/story4')"alt="story4"src="/public/黑蛋.png" />
    <img @click="goto('/story5')"alt="story5"src="/public/白蛋.png" />
    <img @click="goto('/story6')"alt="story6"src="/public/荷包蛋.png" />
    <img @click="goto('/story7')"alt="story7"src="/public/黑蛋.png" />    
  </div>
</template>

<template>
    <div :style="{ 'animation-duration': Math.random() * 6 + 2 + 's','left':Math.random()*1000+'px'}" class="iconSty3" v-for="n in 5" key="n"></div>
    <div :style="{ 'animation-duration': Math.random() * 7 + 2 + 's','left':Math.random()*1000+'px'}" class="iconSty" v-for="n in 5" key="n"></div>
    <div :style="{ 'animation-duration': Math.random() * 6 + 2 + 's','left':Math.random()*1000+'px'}" class="iconSty2" v-for="n in 5" key="n"></div>
</template>

<style scoped>
.iconSty{
    position:fixed;
    top:0;
    width:150px;
    height:120px;
    background: url('../assets/荷包蛋.png')no-repeat;
    background-size:cover; 
    animation:move infinite linear;
}
.iconSty2{
    position:fixed;
    top:0;
    width:150px;
    height:150px;
    background: url('../assets/白蛋.png')no-repeat;
    background-size:cover; 
    animation:move infinite linear; 
}
.iconSty3{
    position:fixed;
    top:0;
    width:100px;
    height:100px;
    background: url('../assets/黑蛋.png')no-repeat;
    background-size:cover; 
    animation:move infinite linear;
}
@keyframes move {
    0%{
        transform: translateY(0)rotate(0deg);
    }
    100%{
        transform: translateY(100vh)rotate(90deg);
    }
}
</style>
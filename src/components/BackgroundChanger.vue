<template>
	<div :style="style">
		<slot></slot>
	</div>
</template>
  
<script>
export default {
	name: "BackgroundChanger",
	data() {
		return {
			style: {},
			opacity: 0,
		};
	},
	mounted() {
		window.addEventListener("scroll", this.windowScroll); // 监听页面滚动
	},
	methods: {
		windowScroll() {
			let scrollTop =
				window.pageYOffset ||
				document.documentElement.scrollTop ||
				document.body.scrollTop;
			this.opacity = Math.abs(Math.round(scrollTop)) / 250;
			this.style = {
				background: `rgba(242,234,223,${this.opacity})`,
			};
		},
	},
	beforeDestroy() {
		window.removeEventListener("scroll", this.windowScroll); // 销毁滚动事件
	},
};
</script>
## ‼️ 框架更新通知
注：将自己的框架格式调整至和仓库一致，或者直接删除5月14号克隆的仓库，将自己的fork更新，然后重新克隆项目，再次启动项目时就不需要cd到原先的egg-planet文件夹下，可以直接用vscode打开StoryAboutAnEgg.github.io文件夹。ctrl+\`打开终端，直接运行
```
npm install
npm run dev
```
即可。

## 协作流程
1. 用自己的账户fork StoryAboutAnEgg.github.io仓库，然后跳转到自己账户下的StoryAboutAnEgg.github.io拷贝，复制ssh地址或https地址，在自己希望克隆仓库的本地地址右键打开git bash here。
2. 输入以下命令：
```
git clone 'https://github.com/xxxx/xxxxx.github.io.git'
用你复制的内容替换''里的东西，引号不保留
```
克隆成功后就可以开始写自己的分工部分了。
3. 写完之后，如果希望提交，就在StoryAboutAnEgg.github.io里打开git bash here，一定要在文件夹里打开，否则找不到本地仓库的地址。输入以下命令将变化全部添加到本地仓库:
```
git add .
git commit -m "提交信息，自己修改"
```
然后推到远程的自己账户下的仓库拷贝：
```
git push
```
4. 最后一步就是contribute，点pull request，将自己的修改推给原始仓库，等待合并
> -- zy



## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).
## Project Setup
npm install
npm run dev
npm run build


# 遇到的问题

## 1. electron react项目中无法加载本地图片
A: 使用import方式导入，`import image from '@renderer/assets/img.png'`
 `<img src={image}/>` 使用即可

## 2. 设置滚动条样式没效果，overflow-y 也无效果
A: 没有设置页面高度
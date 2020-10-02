<template>
<div>
  <div class="topnav">
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
  <div class="banner">
    <h1>ele-design</h1>
    <h2>基于vue3的组件库</h2>
    <p class="action">
      <a href="#">Github</a>
      <a href="#">开始</a>
    </p>
  </div>
</div>
</template>

<style lang="scss">
.topnav {
  background: pink;
  display: flex;
  padding: 16px;

  >.logo {
    max-height: 6em;
    margin-right: auto;
  }

  >.menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    >li {
      margin: 0 1em;
    }
  }
}
</style>

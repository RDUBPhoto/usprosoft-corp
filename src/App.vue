<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
export default {

components: {
  Navigation,
  }
}
</script>

<style lang="scss">
@import './assets/scss/styles.scss';
html, body {
  font-family: 'Playfair Display', serif;
  margin: 0;
  padding: 0;
}
  .navigation {
    width: 100%;
    text-align: center;
    background-color: #fff;
    padding: 16px;
    ul {
      height: 65px;
      margin: 0;
      padding: 0;
      li {
        list-style: none;
        padding: 0 32px;
        font-weight: 600;
        font-size: 18px;
        a {
          position: relative;
          color: #000;
          text-decoration: none;
          &:hover {
            color: #000;
            cursor: pointer;
          }
          &:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: $red;
            visibility: hidden;
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            -webkit-transition: all 0.3s ease-in-out 0s;
            transition: all 0.3s ease-in-out 0s;
          }
          &:hover:before {
            visibility: visible;
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
          }
          &.active:after {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: $red;
          }
        }
      }
    }
  }
</style>

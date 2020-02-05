<template>
  <div class="container">
    <section class="navigation d-flex justify-content-between align-items-center">
        <div>
          <router-link to="/">
            <img class="mr-5" src="../assets/logo.svg" height="85px;">
          </router-link>
        </div>
        <div class="d-flex align-items-center">
          <ul class="d-flex justify-content-center mr-3">
            <!-- <li class="d-flex align-items-center">
              <router-link to="/capabilities">Capabilities</router-link>
            </li>
            <li class="d-flex align-items-center">
              <router-link to="/work">Work</router-link>
            </li>
            <li class="d-flex align-items-center">
              <router-link to="/about">About</router-link>
            </li>
            <li class="d-flex align-items-center">
              <router-link to="/team">Team</router-link>
            </li> -->
          </ul>
          <button class="btn btn-outline-primary">Contact Us</button>
        </div>
      </section>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/styles.scss';
  .navigation {
    top: 18px;
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
        font-size: 18px;
        padding: 16px;
        a {
          position: relative;
          color: #333;
          text-decoration: none;
          &:hover {
            color: #333;
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

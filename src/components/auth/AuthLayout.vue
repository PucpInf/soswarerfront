<template>
  <div class="auth-layout">
    <div class="nav d-lg-none"></div>

    <div class="main row">
      <div class="auth-content col-12" style="">
        <router-view></router-view>
      </div>

      <div class=" col-12 ">
        <img src="../../img/bigbiglogo.png" style="" >
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'AuthLayout'
}
</script>

<style lang="scss">
  .auth-layout {
    height: 100vh;
    margin: 0;
    .nav {
      display: flex;
      align-items: center;
      justify-content: center;
      height: $top-mobile-nav-height;
      background-color: $top-nav-bg;
      .i-vuestic {
        height: $auth-mobile-nav-ivuestic-h;
        width: 100%;
      }
    }
    .main {
      margin: 0;
      height: 100%;
      .auth-content {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
      }
      .auth-wallpaper {
        background-color: $top-nav-bg;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        .i-vuestic {
          z-index: 2;
          height: $auth-wallpaper-ivuestic-h;
          width: 100%;
        }
        .oblique {
          position: absolute;
          background-color: $auth-wallpaper-oblique-line;
          left: calc(50% - 27%/2);
          transform: rotate(15deg);
          width: 27%;
          height: 115%;
        }
      }
    }

    @include media-breakpoint-down(md) {
      .main {
        height: $auth-mobile-main-h;
        .auth-content {
          align-items: flex-start;
          padding-top: $auth-content-padding-t;
        }
      }
    }
  }
</style>

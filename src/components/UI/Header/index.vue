<template>
  <header
    :class="{
      'landing-layout-header': true,
    }"
  >
    <div class="header-wrapper">
      <div class="logo-wrapper">
        로고임
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',


}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.landing-layout-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px;
  box-sizing: border-box;
  background: gold;
  z-index: 3;
  box-shadow: 0 1px 0 0 rgba(0,0,0,.1);

  .header-wrapper {
    // @include applyMaxWidth();

    .logo-wrapper {
      height: 40px;

      img {
        height: 100%;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 767px) {
    // @include applyDeviceWidth();

    padding: 12px 20px;

    .header-wrapper {
      width: 100%;
      max-width: 100%;

      .logo-wrapper {
        height: 30px;
      }
    }
  }
}

</style>
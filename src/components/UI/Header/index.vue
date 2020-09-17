<template>
  <header
    :class="{
      'landing-layout-header': true,
    }"
  >
    <div class="header-wrapper">
      <div class="logo-wrapper">
        <a href="#" @click="$router.push('/')">대학가즈아 🏫</a>
      </div>
      

      <div class="menu-wrapper">
        <button @click="$router.push('calendar')">
          <span> 수시캘린더 </span>
        </button>
        <button @click="$router.push('university')">
          <span> 수도권대학 </span>
        </button>
        <button @click="$router.push('board')">
          <span> 정보공유 </span>
        </button>
      </div>

      <div class="side-wrapper">
        <button @click="$router.push('signup')">
          <span> 회원가입 </span>
        </button>
        <button @click="$router.push('login')">
          <span> 로그인 </span>
        </button>
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
  box-sizing: border-box;
  z-index: 3;
  padding: 14px 14px;
  height: 56px;
  transition: top .3s ease-in-out;
  border-bottom: 1px solid #e7e7e7;
  background: #fff;

  .header-wrapper {
    // @include applyMaxWidth();
    display: flex;
    height: 100%;
    align-items: center;
    position: relative;

    .logo-wrapper {
      margin-left: 6px;

      a {
        color: #343a40;
        font-size: 20px;
        font-weight: bold;
        letter-spacing: -1.2px;
      }
    }

    .menu-wrapper {
      flex: 1;

      display: flex;
      align-items: center;

      box-sizing: border-box;

      padding: 0 20px;

      button {
        display: block;
        height: 100%;
        box-sizing: border-box;
        border: none;
        background: none;
        outline: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;

        span {
          display: flex;
          align-items: center;
          font-size: 15px;
          font-weight: 500;
          color: #ff4949;

          padding: 0 16px;
          color: #6f7174;
          line-height: 1;

          &:hover {
            color: #ff4949;
          }
        }
      }
    }

    .side-wrapper {
      width: auto;

      display: flex;
      justify-content: flex-end;
      align-items: center;

      button {
        display: block;
        height: 100%;
        box-sizing: border-box;
        padding: 0 12px;
        border: none;
        background: none;
        outline: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;

        span {
          display: flex;
          align-items: center;
          font-size: 15px;
          font-weight: 600;
          color: #ff4949;
        }
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
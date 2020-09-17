<template>
  <div class="signup-container">
    <div class="signup-form">
      <div class="logo-wrapper">
        <h2>대학가즈아</h2>
        이메일로 간편 로그인
      </div>

      <div class="form-wrapper">
        <Input type="email" label="이메일(아이디)" />
        <Input type="password" label="비밀번호" />
        
        <div class="button-wrapper">
          <a href="#">로그인</a>
        </div>
        <p> 계정이 없으면 간단 <a href="/signup"> 회원가입 </a> </p>
      </div>

    </div>
  </div>
</template>

<script>
import Input from '@/components/UI/Input'
export default {
  name: 'Login',
  components: { Input }


}
</script>

<style lang="scss" scoped>

.signup-container {
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 8rem;


  .signup-form {
    width: 450px;
    border: 1px solid #dee2e6;
    border-radius: 5px;
    height: 400px;
    text-align: center;
    

    .logo-wrapper {
      padding: 20px;
      margin-top: 30px;
      background: #ffe3e3;
      font-size: 14px;

      h2 {
        margin: 0;
        letter-spacing: -1.5px;
      }
    }

    .form-wrapper {
      padding: 20px;
      text-align: center;

      p {
        font-size: 12px;
        margin: 0;
      }

      a {
        color: #ff4949;
      }

      .button-wrapper {
        margin-bottom: 5px;
        width: 280px;
        height: 40px;
        border-radius: 4px;
        background: #ff4949;

        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        a {
          color: white;
          font-size: 14px;
          line-height: 40px;
        }

      }
    }
  }

}
</style>
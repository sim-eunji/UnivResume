<template>
  <div class="resume-container">
    <div class="template">
      <h1>🏫 건국대학교 <span class="subtitle">학생부종합전형</span> </h1>
      <UILabel>
        <template v-slot:content>
          <a href="#" target="blank"> 입학처 🏢</a>
        </template>
      </UILabel>

      <UILabel>
        <template v-slot:content>
          <a href="#"> 참고자료 📋 </a>
        </template>
      </UILabel>

      <ResumeQuestion />
      <ResumeQuestion />
      <ResumeQuestion />
        
      <div class="button-container">
        <UIButton large primary> 임시저장 </UIButton>
      </div>

      <div style="display: flex;">
        <UICard title="건국대학교" 
                label="9월 <strong style='color: #c92a2a'>24일</strong>"
                imageUrl="https://lh3.googleusercontent.com/proxy/KX_yROwwi_KynIBeVOPWGr__mlKxYtT2zobv_LIcCmBUVvm_VJFMU9l_tcrmmKrVfM4hiwmWP-YPov6VSmcFO0wue92AzY5m2SFy1BqQSuicbZaCoQWZJ9lpDPXuyGqBN1O1Exw9QuG4UoEcbFsEbA">
          <template v-slot:content>
            <p style="margin:0; font-size:14px;">안녕하세요 이게 잘 나올까요? </p>
          </template>
        </UICard>
        <UICard title="음~" />
      </div>

      <div>
        <UILabel>
          <template v-slot:content>
            D-<strong>7</strong>
          </template>
        </UILabel>

        <UILabel>
          <template v-slot:content>
            9월 <strong>24</strong>일부터
          </template>
        </UILabel>
      </div>

    </div>    
  </div>
</template>

<script>
import ResumeQuestion from '@/components/Resume/ResumeQuestion.vue'
import UIButton from '@/components/UI/Button';
import UICard from '@/components/UI/Card';
import UILabel from '@/components/UI/Label';

export default {
  name: 'Resume',
  components:  { ResumeQuestion, UIButton, UICard, UILabel }

}
</script>

<style lang="scss">
.resume-container {
    display: flex;
    align-items: center;
    justify-content: center;

    .template {
      background: white;
      margin-top: 80px;
      margin-bottom: 80px;
      width: 800px;
      border-radius: 5px;
      padding: 2rem;
      border: 1px solid #dee2e6;

      h1 .subtitle {
        font-size: 25px;
      }

      .button-container {    
        text-align: right;
        margin-top: 20px;
      }
    }
  }
</style>
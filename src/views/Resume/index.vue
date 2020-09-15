<template>
  <div class="resume-container">
    <div class="template">
      <h1>🏫 건국대학교 <span class="subtitle">학생부종합전형</span> </h1>
      <ResumeQuestion />

      <ResumeQuestion />

      <ResumeQuestion />
    </div>
    <UIButton> 버튼 임 </UIButton>
  </div>
</template>

<script>
import ResumeQuestion from '@/components/Resume/ResumeQuestion.vue'
import UIButton from '@/components/UI/Button';

export default {
  name: 'Resume',
  components:  { ResumeQuestion, UIButton }

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
  }
}

</style>
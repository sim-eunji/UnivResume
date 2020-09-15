<template>
  <div class="resume-container">
    <div class="template">
      <h1>🏫 건국대학교 <span class="subtitle">학생부종합전형</span> </h1>
      <ResumeQuestion />

      <ResumeQuestion />

      <ResumeQuestion />
    </div>
  </div>
</template>

<script>
import ResumeQuestion from '@/components/Resume/ResumeQuestion.vue'
export default {
  name: 'Resume',
  components:  { ResumeQuestion }

}
</script>

<style lang="scss">
.resume-container {
  display: flex;
  align-items: center;
  justify-content: center;

  .template {
    background: #f8f9fa;
    margin-top: 50px;
    width: 800px;
    border-radius: 20px;
    padding: 2rem;

    h1 .subtitle {
      font-size: 25px;
    }
  }
}

</style>
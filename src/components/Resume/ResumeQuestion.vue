<template>
  <div class="question-container">
    <div class="title">
      <h3> 1. 고교 기간 또는 고교 졸업 후 학업에 기울인 노력과 학습경험을 구체적으로 기술해주시기 바랍니다</h3>
    </div>

    <div class="answer">
      <Textbox rows="10" cols="108" />
    </div>
  </div>
</template>

<script>
import Textbox from '@/components/UI/Textbox';

export default {
  name: 'ResumeQuestion',
  components: { Textbox }
}
</script>

<style lang="scss" scoped>

.question-container {
  height: 300px;
  padding: .5rem 0;

  h3 {
    margin-bottom: 5px;
  }
}

</style>
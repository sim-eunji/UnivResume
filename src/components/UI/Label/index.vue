<template>
  <div class="label-container">
    <!-- Content -->
    <div class="content">
      <slot name="content"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Label'
}
</script>

<style lang="scss" scoped>
.label-container {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  border: 1px solid #ced4da;

  background-color: white;

  border-radius: 9999px;

  padding: 4px 8px;

  .content {
    font-size: 12px;
  }
}

</style>
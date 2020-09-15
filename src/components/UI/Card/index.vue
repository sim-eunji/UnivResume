<template>
  <div class="card-container">

    <div class="wrapper">
      
        <!-- Cover -->
        <div class="card-image">
        </div>

        <!-- Content -->
        <div class="card-content">
          <h4>광운대학교</h4>
          <slot name="content"> </slot>
        </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'UICard',
  props: {
    imageUrl: {
      type: String, 
      default: ''
    },

  }

}
</script>

<style lang="scss" scoped>
.card-container {
  width: 30%;
  margin-right: 10px;

  .wrapper {
    display: flex;
    flex-direction: column;
    border: 1px solid #dee2e6;
    border-radius: 5px;

    .card-image {
      height: 150px;
      width: 100%;
      background-color: gray;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }

    .card-content {
      padding: 10px;
      flex: 1;
    }
  }
}
</style>
<template>
  <div class="card-container">
    <div class="wrapper">
      
        <!-- Cover -->
        <div class="card-image">
          <img v-if="imageUrl" :src="imageUrl" />
        </div>

        <!-- Content -->
        <div class="card-content">
          <h4> {{ title }} </h4>
          <slot name="content"> </slot>
        </div>
</div>
  </div>
</template>

<script>

export default {
  name: 'Card',
  props: {
    imageUrl: {
      type: String, 
      default: ''
    },
    title: String
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
    cursor: pointer;

    .card-image {
      height: 150px;
      width: 100%;
      background-color: gray;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;

      img {
        height: 150px;
        width: 100%;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
    }

    .card-image:hover {
      background: black;
      opacity: 0.8;
    }

    .card-content {
      padding: 10px;
      flex: 1;
    }
  }
}
</style>
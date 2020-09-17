<template>
  <div class="main-container">
    <div class="banner-wrapper">
      <h1> 대학 수시 정보 모아보기  </h1>
    </div>

    <div class="univ-wrapper">
      <div class="card-list">
        
        <UICard v-for="data in universityList" :key="data.id" :title="data.university_name" 
                label="9월 <strong style='color: #c92a2a'>24일</strong>"
                imageUrl="">
            <template v-slot:content>
              <p style="margin:0; font-size:14px;">{{ data.end_date }} </p>
            </template>
        </UICard>
      
      </div>
    </div>
  </div>
</template>

<script>
import { university } from '@/api/university.js'
import UICard from '@/components/UI/Card'

export default {
  name: 'Main',
  components: { UICard },
  data() {
    return {
      universityList: []
    }
  },

  async created() {
    console.log('??')
    this.getList()
  },

  methods: {
    async getList() {
      const response = await university.list()
      console.log(response)
      this.universityList = response.data
    }
  }

}
</script>

<style lang="scss">
.main-container {

  .banner-wrapper {
    margin-top: 30px;
    background-color: #ffec99;
    height: 360px;
    width: 100%;;

    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      color: #d9480f;
    }
  }

  .univ-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    
    .card-list {
      display: flex;
      flex-wrap: wrap;
      width: 1000px;
      align-items: center;
      justify-content: center;
    }
  }
}

</style>
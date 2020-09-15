<template>
  <div class="main-container">
    <div class="banner-wrapper">
      <h1> 대학 수시 정보 모아보기  </h1>
    </div>

    <div class="univ-wrapper">
      <div class="card-list">
        
        <UICard title="고려대학교" 
                label="9월 <strong style='color: #c92a2a'>24일</strong>"
                imageUrl="https://korean.visitseoul.net/comm/getImage?srvcId=MEDIA&parentSn=1861&fileTy=MEDIA&fileNo=1&thumbTy=L">
            <template v-slot:content>
              <p style="margin:0; font-size:14px;">안녕하세요 이게 잘 나올까요? </p>
            </template>
        </UICard>
        
        <UICard title="경희대학교" 
                label="9월 <strong style='color: #c92a2a'>25일</strong>"
                imageUrl="https://t1.daumcdn.net/cfile/blog/14258C3E4F8D6F341A">
            <template v-slot:content>
              <p style="margin:0; font-size:14px;">안녕하세요 이게 잘 나올까요? </p>
            </template>
        </UICard>

        <UICard title="건국대학교" 
                label="9월 <strong style='color: #c92a2a'>24일</strong>"
                imageUrl="https://lh3.googleusercontent.com/proxy/zhtyl-yOSeJ-YUD6VQH0Hm1fUXApb1bAmsqlkJb8AdZPhkYeyaz76EKkmbc-mLOQua8_ns4Ds6CT3wEqhLkVoHXFKGTgV-lRr3m6bq4aIpcnVymUetZXGmKiLuIovrGR9yReB4ezLsON8u3a49l4J3og4kmNITxlomoSyXpt_miRoeK7froKf-GKF7JdxI5Nc64CuN3ihQrf7r8kVgfF__BvzJs67ygGZlFU98dhoRT8oJ0QA2hp45YDmycXqVP-yMrro08AKa2kN0iub0jgKOrsdTQFCUZfa5OCO2Yt2Q9wnlAiV6eu">
            <template v-slot:content>
              <p style="margin:0; font-size:14px;">안녕하세요 이게 잘 나올까요? </p>
            </template>
        </UICard>

        <UICard title="숙명여자대학교" 
                label="9월 <strong style='color: #c92a2a'>24일</strong>"
                imageUrl="https://post-phinf.pstatic.net/MjAyMDAyMTBfMjU4/MDAxNTgxMzIzNjM2OTc0.aJ3ClREJ29XTNapD1hIOND9hw_P1kZA6Mau56VJ65pUg.tjzYdVvRfJ7T_ADzCpkCh2zs3zLRrsZ1Tcj4o7gHamgg.JPEG/gg.jpg?type=w1200">
            <template v-slot:content>
              <p style="margin:0; font-size:14px;">안녕하세요 이게 잘 나올까요? </p>
            </template>
        </UICard>


      </div>
    </div>
  </div>
</template>

<script>
import UICard from '@/components/UI/Card'

export default {
  name: 'Main',
  components: { UICard }

}
</script>

<style lang="scss">
.main-container {

  .banner-wrapper {
    background-color: #ffec99;
    height: 400px;
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
      width: 1000px;
      display: flex;
    }
  }
}

</style>
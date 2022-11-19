<template>
  <div>
    <app-nav />
    <div>
      <!-- 토픽바 -->
      <div class="categoryList">
        <div>카테고리1</div>
        <div>카테고리2</div>
        <div>카테고리3</div>
        <div>카테고리4</div>
        <div>카테고리5</div>
        <div>카테고리6</div>
      </div>
      <!-- 게시판 리스트  -->
      <div></div>
    </div>
    <app-footer />
  </div>
</template>

<script>
import commonNav from '@/components/commonNav.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    'app-nav': commonNav,
    'app-footer': Footer
  }
}
</script>

<style scoped>
.categoryList {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>

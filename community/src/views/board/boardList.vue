<template>
  <div>
    <app-nav />
    <div>
      <!-- 토픽바 -->
      <div class="categoryList mt-5">
        <div class="category ml-2">카테고리1</div>
        <div class="category ml-2">카테고리2</div>
        <div class="category ml-2">카테고리3</div>
        <div class="category ml-2">카테고리4</div>
        <div class="category ml-2">카테고리5</div>
        <div class="category ml-2">카테고리6</div>
        <hr />
      </div>
      <!-- 게시판 리스트  -->
      <div class="boardContainer">
        <!-- for문으로 게시글 수만큼 카드 반복???? -->
        <app-board />
      </div>
    </div>
    <app-footer />
  </div>
</template>

<script>
import commonNav from '@/components/commonNav.vue'
import Footer from '@/components/Footer.vue'
import boardCard from '@/components/boardCard.vue'
export default {
  components: {
    'app-nav': commonNav,
    'app-footer': Footer,
    'app-board': boardCard
  }
}
</script>

<style scoped>
.categoryList {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
.category {
  margin-left: 10px;
  margin-right: 10px;
}
.boardContainer {
  width: 100%;
  height: 100%;
  background-color: aliceblue;
}
</style>

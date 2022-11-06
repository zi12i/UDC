<template>
  <div>
    <app-nav />
    <b-row>
      <!-- 왼쪽 상자 -->
      <b-col cols="8">
        <!-- 검색창 -->
        <div class="mt-5 ml-2 mr-2">
          <v-text-field label="검색어를 입력하세요" single-line solo></v-text-field>
        </div>
        <!-- 베스트 -->
        <div>토픽베스트</div>
        <!-- 기본 다른 게시판들 -->
        <div>
          <div>카테고리 1</div>
          <div>카테고리 2</div>
          <div>카테고리 3</div>
          <div>카테고리 4</div>
        </div>
      </b-col>
      <!-- 오른쪽 상자 -->
      <b-col cols="4">
        <div class="mt-5 mr-2 ml-2 popularPost">실시간 인기글</div>
      </b-col>
    </b-row>
    <app-footer />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeComponent',
  components: {
    'app-nav': Nav,
    'app-footer': Footer
  }
}
</script>
<style scoped>
.popularPost {
  width: 90%;
  height: 400px;
  background-color: antiquewhite;
}
</style>

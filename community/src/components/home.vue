<template>
  <div>
    <app-nav />
    <b-row>
      <!-- 왼쪽 상자 -->
      <b-col cols="1"> </b-col>
      <b-col cols="7">
        <!-- 검색창 -->
        <div class="mt-5 ml-5 mr-2">
          <div>
            <div class="searchBar">
              <button>
                <b-icon icon="exclamation-circle-fill" variant="success"></b-icon>
              </button>
            </div>
            <div></div>
          </div>
        </div>
        <!-- 베스트 -->
        <div class="bestTopics">토픽베스트</div>
        <!-- 기본 다른 게시판들 -->
        <b-container>
          <b-row>
            <b-col cols="6" class="category">카테고리 1</b-col>
            <b-col cols="6" class="category">카테고리 2</b-col>
          </b-row>
          <b-row>
            <b-col cols="6" class="category">카테고리 3</b-col>
            <b-col cols="6" class="category">카테고리 4</b-col>
          </b-row>
        </b-container>
      </b-col>
      <!-- 오른쪽 상자 -->
      <b-col cols="3">
        <div class="mt-5 ml-2 popularPost">실시간 인기글</div>
      </b-col>
      <b-col cols="1"> </b-col>
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
.searchBar {
  width: 100%;
  border: solid;
  height: 55px;
  border-radius: 30px;
  margin-bottom: 10px;
}
.bestTopics {
  width: 100%;
  padding: 10px;
  height: 400px;
  background-color: antiquewhite;
}
.category {
  width: 100%;
  padding: 10px;
  height: 300px;
  background-color: antiquewhite;
}
</style>

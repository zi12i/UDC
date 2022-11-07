<template>
  <div>
    <app-nav />
    <b-row>
      <!-- 왼쪽 상자 -->
      <b-col cols="8">
        <!-- 검색창 -->
        <div class="mt-5 ml-5 mr-2">
          <div>
            <b-input-group>
              <b-input-group-prepend>
                <button class="">Button</button>
              </b-input-group-prepend>

              <input type="text" class="searchBar" />
            </b-input-group>
          </div>
        </div>
        <!-- 베스트 -->
        <div class="bestTopics">토픽베스트</div>
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
        <div class="mt-5 mr-5 ml-2 popularPost">실시간 인기글</div>
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
.searchBar {
  width: 80%;
  border: solid;
  height: 55px;
  border-radius: 30px;
}
.bestTopics {
  width: 80%;
  background-color: antiquewhite;
}
</style>

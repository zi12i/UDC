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
            <b-input-group>
              <v-text-field
                :append-icon="marker ? 'mdi-magnify' : 'mdi-magnify'"
                solo
                rounded
                label="검색하실 내용을 입력해 주세요!"
                type="text"
                @click:append="sendMessage"
                @click:prepend="changeIcon"
              ></v-text-field>
            </b-input-group>
          </div>
        </div>
        <!-- 베스트 -->
        <div class="bestTopics">토픽베스트</div>
        <!-- 기본 다른 게시판들 -->
        <div>
          <b-row>
            <b-col cols="6" class="category">카테고리 1</b-col>
            <b-col cols="6" class="category">카테고리 2</b-col>
          </b-row>
          <b-row>
            <b-col cols="6" class="category">카테고리 3</b-col>
            <b-col cols="6" class="category">카테고리 4</b-col>
          </b-row>
        </div>
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
  },
  toggleMarker() {
    this.marker = !this.marker
  },
  sendMessage() {
    this.clearMessage()
  },
  clearMessage() {
    this.message = ''
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
.category {
  width: 90%;
  background-color: antiquewhite;
}
</style>

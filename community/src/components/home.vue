<template>
  <div>
    <app-nav />
    <b-row>
      <!-- 왼쪽 상자 -->
      <b-col cols="1"> </b-col>
      <b-col cols="7">
        <!-- 검색창 -->
        <div class="mt-5 mr-2">
          <div>
            <div class="searchBar">
              <button class="searchIcon"><b-icon-search></b-icon-search></button>
              <div>
                <input type="text" class="searchInput" placeholder="검색하실 내용을 입력하세요!" />
              </div>
            </div>
          </div>
        </div>
        <!-- 베스트 -->
        <div class="bestTopics mt-5">
          <div class="row justify-content-between mb-2">
            <span class="ml-3 mt-2 topicHeader"><b-icon-clipboard></b-icon-clipboard>토픽베스트</span>
            <button class="mr-3 mt-2">더보기 ></button>
          </div>
          <hr />
          <div>
            <div><p>토픽명 글 제목 좋아요 수 댓글 수 표시 예정</p></div>
          </div>
        </div>
        <!-- 기본 다른 게시판들 -->
        <b-container>
          <b-row>
            <b-col cols="6" class="category">
              <div class="row justify-content-between mb-2">
                <span class="ml-3 mt-2 topicHeader"><b-icon-clipboard></b-icon-clipboard>카테고리 1</span>
                <button class="mr-3 mt-2">더보기 ></button>
              </div>
              <hr />
              <div>
                <div><p>토픽명 글 제목 좋아요 수 댓글 수 표시 예정</p></div>
              </div>
            </b-col>
            <b-col cols="6" class="category">
              <div class="row justify-content-between mb-2">
                <span class="ml-3 mt-2 topicHeader"><b-icon-clipboard></b-icon-clipboard>카테고리 2</span>
                <button class="mr-3 mt-2">더보기 ></button>
              </div>
              <hr />
              <div>
                <div><p>토픽명 글 제목 좋아요 수 댓글 수 표시 예정</p></div>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="6" class="category">
              <div class="row justify-content-between mb-2">
                <span class="ml-3 mt-2 topicHeader"><b-icon-clipboard></b-icon-clipboard>카테고리 3</span>
                <button class="mr-3 mt-2">더보기 ></button>
              </div>
              <hr />
              <div>
                <div><p>토픽명 글 제목 좋아요 수 댓글 수 표시 예정</p></div>
              </div>
            </b-col>
            <b-col cols="6" class="category">
              <div class="row justify-content-between mb-2">
                <span class="ml-3 mt-2 topicHeader"><b-icon-clipboard></b-icon-clipboard>카테고리 4</span>
                <button class="mr-3 mt-2">더보기 ></button>
              </div>
              <hr />
              <div>
                <div><p>토픽명 글 제목 좋아요 수 댓글 수 표시 예정</p></div>
              </div>
            </b-col>
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
  background-color: RGB(248, 249, 250);
}
.searchBar {
  width: 100%;
  border: solid 2px;
  height: 55px;
  border-radius: 30px;
  margin-bottom: 10px;
  display: flex;
}
.searchIcon {
  width: 50px;
  margin-left: 5px;
}
.searchInput {
  width: 600px;
  height: 100%;
}
.searchInput:focus {
  outline: none;
}
.topicHeader {
  font-weight: bold;
  font-size: 20px;
}
.bestTopics {
  width: 100%;
  padding: 10px;
  height: 400px;
  /* background-color: antiquewhite; */
}
.category {
  width: 100%;
  padding: 10px;
  height: 300px;
  /* background-color: antiquewhite; */
}
</style>

<template>
  <div class="cardContainer">
    <div class="card">
      <span class="category">카테고리</span>
      <span class="heading">글제목</span>
      <p class="content">글 내용</p>
      <p class="nickname">닉네임?</p>
      <span>조회 추천 기타등등</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.cardContainer {
  width: 100%;
  height: 150px;
  background-color: antiquewhite;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
  width: 1000px;
  height: 150px;
  padding-top: 10px;
  background-color: azure;
}
.category {
  font-size: 9px;
  text-align: left;
  margin-left: 10px;
}
.heading {
  font-weight: bold;
  text-align: left;
  margin-left: 10px;
}
.content {
  text-align: left;
  margin-left: 10px;
}
.nickname {
  text-align: left;
  margin-left: 10px;
}
</style>

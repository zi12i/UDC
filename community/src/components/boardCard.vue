<template>
  <div class="cardContainer">
    <div class="card">
      <h3>글제목</h3>
      <p>글 내용</p>
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
  padding-top: 30px;
  background-color: azure;
}
</style>

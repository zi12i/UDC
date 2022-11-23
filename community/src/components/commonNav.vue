<template>
  <div>
    <nav class="navbar">
      <b-row class="justify-content-center">
        <b-col cols="1"><img src="../assets/UDClogo.png" class="navLogo" /></b-col>
        <b-col cols="5"></b-col>
        <b-col cols="4" class="signinContainer">
          <div class="barOrganizer">
            <div class="searchBar">
              <button class="searchIcon"><b-icon-search></b-icon-search></button>
              <div>
                <input type="text" class="searchInput" placeholder="검색하실 내용을 입력하세요!" />
              </div>
            </div>
          </div>
          <button class="signinBtn" @click="signin">로그인</button></b-col
        >
      </b-row>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    signin() {
      this.$router.push('/auth/signin')
    }
  }
}
</script>

<style scoped>
.navbar {
  border-bottom: solid 1px grey;
  padding: 20px;
}
.navLogo {
  align-items: center;
  height: 40px;
}
.signinContainer {
  display: flex;
  justify-content: flex-end;
}
.barOrganizer {
  margin-right: 20px;
}
.signinBtn {
  background-color: red;
  border-radius: 3px;
  color: white;
  width: 80px;
  height: 40px;
}
.searchBar {
  width: 100%;
  border: solid 1px #bbb;
  height: 40px;
  border-radius: 30px;
  margin-bottom: 10px;
  display: flex;
}
.searchIcon {
  width: 50px;
  margin-left: 10px;
}
.searchInput {
  width: 230px;
  height: 100%;
}
.searchInput:focus {
  outline: none;
}
::placeholder {
  color: #bbb;
  margin-top: 2px;
}
</style>

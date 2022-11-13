<template>
  <div>
    <nav class="navbar">
      <b-row class="justify-content-center">
        <b-col cols="1">유디씨 로고</b-col>
        <b-col cols="5">Ultimate Developers' Community</b-col>
        <b-col cols="2"></b-col>
        <b-col cols="2" class="signinContainer"><button class="signinBtn">로그인</button></b-col>
      </b-row>
    </nav>
    <!-- <b-navbar toggleable="sm" type="light" variant="light">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand>여기에페이지로고</b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-text>Ultimate Developers' Community</b-nav-text>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar> -->
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.navbar {
  border-bottom: solid 1px grey;
  padding: 20px;
}
.navLogo {
  align-items: center;
}
.signinContainer {
  display: flex;
  justify-content: flex-end;
}
.signinBtn {
  background-color: red;
  border-radius: 5px;
  color: white;
  width: 80px;
  height: 50px;
}
</style>

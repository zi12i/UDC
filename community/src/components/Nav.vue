<template>
  <div>
    <nav class="navbar">
      <b-row class="justify-content-center">
        <b-col cols="1"><img src="../assets/UDClogo.png" class="navLogo" /></b-col>
        <b-col cols="5">Ultimate Developers' Community</b-col>
        <b-col cols="2"></b-col>
        <b-col cols="2" class="signinContainer"><button class="signinBtn" @click="signin">로그인</button></b-col>
      </b-row>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    signin() {
      this.$router.push('/signin')
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
.signinBtn {
  background-color: red;
  border-radius: 3px;
  color: white;
  width: 80px;
  height: 40px;
}
</style>

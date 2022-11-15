<template>
  <div>
    <div class="authContainer">
      <div class="authCard">
        <div class="logoContainer">
          <!-- 여기는 로고 -->
        </div>
        <div>
          <input type="text" placeholder="인증메일을 받으실 이메일 주소를 입력하세요" />
          <button class="signinBtn">인증메일 보내기</button>
        </div>
        <div class="buttonContainer">
          <div class="buttonOrganizer">
            <!-- 회원가입, 아디비번 찾기 버튼 -->
            <router-link to="/" class="auth">메인으로 돌아가기</router-link> |
            <router-link to="/signin" class="auth">뒤로 가기</router-link> |
            <router-link to="/find" class="auth">ID / PW 찾기</router-link>
          </div>
        </div>
        <footer>
          <span>COPYRIGHT COMPANY ALL RIGHTS RESERVED.</span>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.authContainer {
  display: flex;
  justify-content: center;
}
.authCard {
  height: 100%;
  min-height: 800px;
  width: 600px;
  border-left: solid 1px;
  border-right: solid 1px;
}
.logoContainer {
  height: 200px;
}
input {
  width: 400px;
  height: 50px;
  border: solid 1px black;
  border-radius: 3px;
  background-color: white;
  margin-bottom: 5px;
  padding-left: 20px;
}
input:focus {
  outline: none;
}
.signinBtn {
  width: 400px;
  height: 50px;
  margin-top: 10px;
  background-color: orange;
  border-radius: 3px;
  color: white;
  font-size: 20px;
}
.buttonContainer {
  display: flex;
  justify-content: center;
}
.buttonOrganizer {
  margin-top: 50px;
  width: 400px;
  display: flex;
  justify-content: space-between;
}
.auth {
  text-decoration: none;
  color: black;
}
footer {
  margin-top: 30px;
  height: 50px;
}
</style>

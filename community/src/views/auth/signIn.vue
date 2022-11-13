<template>
  <div>
    <div class="authContainer">
      <div class="authCard">
        <div class="logoContainer">
          <!-- 여기는 로고 -->
        </div>
        <div>
          <input type="text" placeholder="아이디를 입력하세요" />
          <input type="password" placeholder="비밀번호를 입력하세요" />
          <button class="signinBtn">로그인</button>
          <span class="checkboxContainer">
            <label class="checkboxLabel"><input type="checkbox" class="checkBox" />로그인상태 유지하기</label>
          </span>
        </div>
        <div class="buttonContainer">
          <div class="buttonOrganizer">
            <!-- 회원가입, 아디비번 찾기 버튼 -->
            <router-link to="/" class="auth">메인으로 돌아가기</router-link> |
            <router-link to="/signup" class="auth">회원가입</router-link> |
            <router-link to="/find" class="auth">ID / PW 찾기</router-link>
          </div>
        </div>
        <div>
          <app-footer />
        </div>
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
  background-color: #eee;
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
.signinBtn {
  width: 400px;
  height: 50px;
  margin-top: 10px;
  background-color: navy;
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
.authBtn {
  height: 50px;
  width: 180px;
  border-radius: 3px;
  background-color: white;
  color: navy;
}
.checkboxContainer {
  width: 400px;
  display: inline-block;
  /* position: absolute; */
  /* justify-content: center; */
}
.checkboxLabel {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.checkBox {
  height: 20px;
  margin-top: 5px;
  padding: 0;
  width: 20px;
}
.auth {
  text-decoration: none;
  color: #888;
}
</style>

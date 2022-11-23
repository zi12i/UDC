<template>
  <div class="join">
    <!-- v-show로 인증 메일 보내기 전 페이지 -->
    <div v-show="!emailSent">
      <b-card no-body class="join-box">
        <form @submit.prevent="handleSubmit(sendEmail)">
          <b-card-body style="text-align: center">
            <b-card-sub-title class="mt-3 mb-2">
              <span class="status">인증메일 전송 </span>
              > 이메일 인증 > 추가 정보 입력
            </b-card-sub-title>
            <b-card-title style="margin: 20px">
              인증 과정에서 사용하실<br />
              이메일 주소를 입력해 주세요.
            </b-card-title>
            <b-card-text>
              <div class="emailInput">
                <b-input-group append="@" class="mr-2">
                  <b-form-input v-model="emailId" placeholder="이메일 아이디"></b-form-input>
                </b-input-group>
                <b-form-select v-model="emailProvider" :options="options"></b-form-select>
              </div>
            </b-card-text>
          </b-card-body>

          <b-list-group flush>
            <b-list-group-item>
              <b-button class="Ingle" block @click="duplicationCheck">인증메일 보내기</b-button>
            </b-list-group-item>
            <b-list-group-item>
              - 입력하신 이메일로 인증코드가 전송됩니다.<br />
              - 이메일은 추후 계정 찾기에 이용됩니다.
            </b-list-group-item>
          </b-list-group>
        </form>
        <b-card-body>
          <a href="/auth/login" class="card-link">로그인창으로 돌아가기</a>
        </b-card-body>

        <b-card-footer style="text-align: center">COPYRIGHT COMPANY ALL RIGHTS RESERVED.</b-card-footer>
        <!-- <b-card-img src="https://placekitten.com/480/210" alt="Image" bottom></b-card-img> -->
      </b-card>
    </div>
    <!-- v-show로 인증메일 보낸 후 인증코드 입력할 페이지 -->
    <div v-show="emailSent">
      <b-card no-body class="join-box">
        <form @submit.prevent="handleSubmit(authCode)">
          <b-card-body style="text-align: center">
            <b-card-sub-title class="mt-3 mb-2">
              인증메일 전송 >
              <span class="status"> 이메일 인증 </span>
              > 추가 정보 입력
            </b-card-sub-title>
            <b-card-title style="margin: 20px">이메일로 발송된 인증코드를<br />입력해 주세요.</b-card-title>
            <b-card-text>
              <!-- 백 서버 연결 후 이메일 제대로 담기게 기능 구현 예정 -->
              <b-input v-model="tempEmail" disabled></b-input>
              <b-input v-model="inputCode" class="mt-3 mb-3" maxlength="6" placeholder="인증코드 입력"></b-input>
              <b-button block class="Ingle" @click="authCode">인증 확인</b-button>
            </b-card-text>
          </b-card-body>
        </form>
        <b-list-group flush>
          <!-- <b-list-group-item>
              
            </b-list-group-item> -->
          <b-list-group-item>
            <div>
              <button id="show-btn" class="modalBtn" @click="$bvModal.show('emailModal')">
                인증메일을 받지 못하셨나요?
              </button>
              <b-modal id="emailModal" hide-footer>
                <template #modal-title>인증메일을 받지 못하셨나요?</template>
                <div class="d-block text-center">
                  <b-button block @click="resend">이메일 재전송하기</b-button>
                </div>
                <b-button class="mt-3" block @click="newEmail">다른 이메일로 전송하기</b-button>
              </b-modal>
            </div>
          </b-list-group-item>
          <!-- <b-list-group-item>Vestibulum at eros</b-list-group-item> -->
        </b-list-group>

        <b-card-body>
          <a href="/auth/login" class="card-link">로그인창으로 돌아가기</a>
        </b-card-body>

        <b-card-footer style="text-align: center">COPYRIGHT COMPANY ALL RIGHTS RESERVED.</b-card-footer>
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      emailId: '',
      emailProvider: null,
      tempEmail: '',
      inputCode: '',
      emailSent: false,
      options: [
        { value: null, text: '이메일을 선택해 주세요' },
        { value: 'gmail', text: 'gmail.com' },
        { value: 'naver', text: 'naver.com' },
        { value: 'daum', text: 'daum.net' },
        { value: 'hanmail', text: 'hanmail.net' },
        { value: 'kakao', text: 'kakao.com' }
      ]
    }
  },
  methods: {
    authCode() {
      const email =
        this.emailProvider === 'daum' || this.emailProvider === 'hanmail'
          ? `${this.emailId}@${this.emailProvider}.net`
          : `${this.emailId}@${this.emailProvider}.com`
      const user = JSON.parse(localStorage.getItem('auth'))
      console.log('유저 : ', user)
      axios
        .post(process.env.VUE_APP_URL + '/mail/process-code', {
          email: email,
          code: this.inputCode,
          hash: user.hash
        })
        .then(response => {
          console.log('auth success : ', response)
          alert('이메일 인증에 성공하셨습니다. 회원가입 페이지로 넘어갑니다.')
          localStorage.setItem('email', user.email)
          localStorage.removeItem('auth')
          this.$router.push('/auth/join/info')
        })
        .catch(error => {
          console.log('auth fail : ', error)
          alert('인증에 실패하셨습니다. 입력하신 인증코드를 다시 확인해 주세요!')
        })
    },
    sendEmail() {
      const email =
        this.emailProvider === 'daum' || this.emailProvider === 'hanmail'
          ? `${this.emailId}@${this.emailProvider}.net`
          : `${this.emailId}@${this.emailProvider}.com`
      this.tempEmail = email
      alert(`"${email}"로 이메일을 발송합니다.`)
      axios
        .get(process.env.VUE_APP_URL + `/mail/send-email/${email}`)
        .then(response => {
          console.log('email sent : ', response)
          if (localStorage.getItem('auth')) {
            localStorage.removeItem('auth')
          }
          console.log(response.data)
          this.emailSent = true
          localStorage.setItem('auth', JSON.stringify(response.data.user))
        })
        .catch(error => {
          console.log('email fail : ', error)
        })
    },
    resend() {
      this.sendEmail()
      this.$bvModal.hide('emailModal')
    },
    newEmail() {
      this.emailSent = false
      this.$bvModal.hide('emailModal')
    },
    async duplicationCheck() {
      const email =
        this.emailProvider === 'daum' || this.emailProvider === 'hanmail'
          ? `${this.emailId}@${this.emailProvider}.net`
          : `${this.emailId}@${this.emailProvider}.com`
      this.tempEmail = email
      console.log('duplication check : ', email)
      await axios
        .get(process.env.VUE_APP_URL + '/auth/check-email/' + email)
        .then(async res => {
          const code = res.status
          console.log('check code : ', code)
          if (code == 200) {
            this.sendEmail()
          } else {
            alert('이미 사용중인 이메일 입니다.')
          }
        })
        .catch(err => {
          alert('이미 사용중인 이메일 입니다. 다른 이메일을 지정해 주세요!')
          console.log(err)
        })
    }
  }
}
</script>

<style>
.Ingle {
  background-color: #5a38d4;
  font-weight: bold;
  transition: 0.5s;
}
.Ingle:hover {
  background-color: #432a9f;
}
.join-box {
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 550px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: #fff;
  box-sizing: border-box;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  z-index: 1;
}
.join-box h2 {
  padding: 0;
  color: #5a38d4;
  text-align: center;
}
.join {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #f0f2f3;
}
.emailInput {
  display: flex;
}
.status {
  font-weight: bolder;
  color: black;
}
.modalBtn {
  border: none;
  color: grey;
  background-color: white;
}
</style>

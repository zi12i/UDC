<template>
  <div>
    <app-nav />
    <div>
      <!-- 왼쪽 상자 -->
      <div>
        <!-- 검색창 -->
        <div></div>
        <!-- 베스트 -->
        <div></div>
        <!-- 기본 다른 게시판들 -->
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
      <!-- 오른쪽 상자 -->
      <div></div>
    </div>
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
<style lang="scss" scoped></style>

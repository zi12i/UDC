<template>
  <div>
    <app-nav />
    <h1>Component Test</h1>
    여기는 body 영역
    <app-footer />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'ComponentIndex',
  components: {
    'app-nav': Nav,
    'app-footer': Footer
  }
}
</script>

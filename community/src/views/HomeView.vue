<template>
  <div class="home">
    <homeComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import homeComponent from '@/components/home.vue'

export default {
  name: 'HomeView',
  components: {
    homeComponent
  }
}
</script>

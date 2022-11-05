<template>
  <div class="home">
    <componentIndex />
  </div>
</template>

<script>
// @ is an alias to /src
import ComponentIndex from '@/components/index.vue'

export default {
  name: 'HomeView',
  components: {
    ComponentIndex
  }
}
</script>

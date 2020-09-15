<template>
  <div>
    <Header />
    <router-view> </router-view>
  </div>
</template>

<script>
import Header from '@/components/UI/Header'

export default {
  name: 'Layout',
  components: { Header }
}
</script>
<template>
    <login :isLogin="true"></login>
</template>

<script>
  import Login from '@/components/LoginReg'

  export default {
    components: {
      'login': Login
    }
  }
</script>
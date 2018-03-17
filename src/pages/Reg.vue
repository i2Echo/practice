<template>
    <reg :isLogin="false"></reg>
</template>

<script>
  import Reg from '@/components/LoginReg'

  export default {
    components: {
      'reg': Reg
    }
  }
</script>
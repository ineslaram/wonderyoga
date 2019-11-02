<template>
  <div>
    <LoginForm />
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {
    LoginForm: () => import("@/components/users/LoginForm")
  }
}
</script>

<style lang="scss" scoped>
</style>
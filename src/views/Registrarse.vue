<template>
  <div>
    <LoginForm @registerSucess="snackbar= true" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false
    };
  },
  components: {
    LoginForm: () => import("@/components/users/RegisterForm")
  }
};
</script>

<style lang="scss" scoped>
</style>
<template>
  <div>
    <RegisterForm />
  </div>
</template>

<script>
export default {
  name: 'Registrarse',
  components: {
    RegisterForm: () => import("@/components/users/RegisterForm")
  }
}
</script>

<style lang="scss" scoped>
</style>
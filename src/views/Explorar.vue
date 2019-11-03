<template>
  <div>
    <CardMeetups></CardMeetups>
  </div>
</template>

<script>
export default {
  name: "Explorar",
  components: {
    CardMeetups: () => import("@/components/meetups/CardMeetups")
  }
}
</script>




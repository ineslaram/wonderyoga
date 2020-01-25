<template>
  <div>
    <MeetupDetail :id="id"/>
  </div>
</template>

<script>
  export default {
    name: 'Meetup',
    components: {
      MeetupDetail: () => import('@/components/meetups/MeetupDetail') 
    }
  }
</script>

<style lang="scss" scoped>

</style>
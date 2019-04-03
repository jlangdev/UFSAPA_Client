<template>
  <section>
      <div class="columns is-mobile is-centered">
    <div class="column is-half">
    <MemberCard></MemberCard>
    </div>
  </div>
  </section>

</template>

<script>
// @ is an alias to /src
import MemberCard from '@/components/MemberCard.vue'

export default {
  name: 'events',
  components: {
    MemberCard
  }
}
</script>

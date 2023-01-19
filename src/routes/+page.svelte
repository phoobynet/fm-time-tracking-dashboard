<script>
  import UserCard from '$lib/components/UserCard.svelte'
  import TimeCard from '$lib/components/TimeCard.svelte'
</script>

<div class="container">
  <UserCard/>
  <TimeCard workType={'work'} hours={36} hoursLastWeek={37}/>
</div>

<style lang="scss">
  .container {
    width: 100%;
    padding: 2rem 1rem;
    display: grid;
    justify-content: center;
    grid-gap: 1rem;
  }
</style>

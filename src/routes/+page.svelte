<script>
  import UserCard from '$lib/components/UserCard.svelte'
  import TimeCard from '$lib/components/TimeCard.svelte'
</script>

<div class="container">
  <UserCard/>
  <TimeCard workType={'work'} hours={32} hoursLastWeek={36}/>
  <TimeCard workType={'play'} hours={10} hoursLastWeek={36}/>
  <TimeCard workType={'study'} hours={4} hoursLastWeek={7}/>
  <TimeCard workType={'exercise'} hours={4} hoursLastWeek={5}/>
  <TimeCard workType={'social'} hours={5} hoursLastWeek={10}/>
  <TimeCard workType={'self-care'} hours={2} hoursLastWeek={2}/>
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

<script lang="ts">
  import UserCard from '$lib/components/UserCard.svelte'
  import TimeCard from '$lib/components/TimeCard.svelte'
  import type { TimeCardData } from '../lib/types/TimeCardData'

  const timeCards: TimeCardData[] = [
    {
      workType: 'work',
      hours: 32,
      hoursLastWeek: 36
    },
    {
      workType: 'play',
      hours: 10,
      hoursLastWeek: 36
    },
    {
      workType: 'study',
      hours: 4,
      hoursLastWeek: 7
    },
    {
      workType: 'exercise',
      hours: 4,
      hoursLastWeek: 5
    },
    {
      workType: 'social',
      hours: 5,
      hoursLastWeek: 10
    },
    {
      workType: 'self-care',
      hours: 2,
      hoursLastWeek: 1
    }
  ]
</script>

<div class="container">
  <div class="user-card">
    <UserCard/>
  </div>

  {#each timeCards as { workType, hours, hoursLastWeek }}
    <div class="time-card">
      <TimeCard workType={workType} hours={hours} hoursLastWeek={hoursLastWeek}/>
    </div>
  {/each}
</div>

<style lang="scss">
  .container {
    width: 100%;
    padding: 2rem 1rem;
    display: grid;
    justify-content: center;
    grid-gap: 1rem;

    @media screen and (min-width: 1440px) {
      grid-template-columns: repeat(4, auto);
      grid-template-rows: repeat(2, auto);

      .user-card {
        grid-row: 1/2;
        grid-column: 1;
      }
    }
  }
</style>

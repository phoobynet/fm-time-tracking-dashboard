<script lang="ts">
  type WorkType = 'exercise' | 'play' | 'self-care' | 'social' | 'study' | 'work'

  export let workType: WorkType

  export let hours: number

  export let hoursLastWeek: number

</script>

<div class="time-card" data-work-type={workType}>
  <div>Time Card</div>
</div>

<style lang="scss">
  .time-card {
    height: 160px;
    width: var(--card-w);
    background-repeat: no-repeat;


    &[data-work-type='work'] {
      background-image: url('/images/icon-work.svg');
    }
  }
</style>

<script lang="ts">
  import type { WorkType } from '$lib/types/WorkType'

  export let workType: WorkType

  export let hours: number

  export let hoursLastWeek: number

</script>

<div class="time-card" data-work-type={workType}>
  <div class="values">
    <div class="content">
      <div class="work-type">{workType}</div>
      <div class="ellipsis"><img src="/images/icon-ellipsis.svg" alt=""/></div>
      <div class="hours">{hours}hrs</div>
      <div class="hours-last-week">Last week - {hoursLastWeek}hrs</div>
    </div>
  </div>
</div>

<style lang="scss">
  .time-card {
    display: flex;
    flex-direction: column;
    place-content: end;
    height: 160px;
    width: var(--card-w);
    background-repeat: no-repeat;
    border-radius: var(--border-radius);
    overflow: hidden;

    &[data-work-type] {
      background-position: right 10px top -10px;
    }


    &[data-work-type='work'] {
      background-image: url('/images/icon-work.svg');
      background-color: var(--color-orange);
    }

    &[data-work-type='play'] {
      background-image: url('/images/icon-play.svg');
      background-color: var(--color-powder-blue);
    }

    &[data-work-type='study'] {
      background-image: url('/images/icon-study.svg');
      background-color: var(--color-light-red);
    }

    &[data-work-type='exercise'] {
      background-image: url('/images/icon-exercise.svg');
      background-color: var(--color-light-green);
    }

    &[data-work-type='social'] {
      background-image: url('/images/icon-social.svg');
      background-color: var(--color-dark-purple);
    }

    &[data-work-type='self-care'] {
      background-image: url('/images/icon-self-care.svg');
      background-color: var(--color-light-yellow);
    }

    .values {
      display: grid;
      place-content: center;
      height: 120px;
      background-color: var(--color-dark-blue);
      border-top-right-radius: var(--border-radius);
      border-top-left-radius: var(--border-radius);
      &:hover {
        cursor: pointer;
        background-color: #33397A;
        transition: 0.3s all;
      }

      .content {
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-template-rows: repeat(2, auto);
        width: 300px;

        .work-type {
          text-transform: capitalize;
          font-size: 18px;
        }

        .ellipsis {
          align-self: center;
          justify-self: end;

        }

        .hours {
          font-size: 32px;
          align-self: end;
          justify-self: start;
          margin: 0;
        }

        .hours-last-week {
          font-size: 15px;
          color: var(--color-lilac);
          align-self: center;
          justify-self: end;
        }
      }
    }
  }
</style>

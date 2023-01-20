<script lang="ts">
	import UserCard from '@/components/UserCard.svelte'
	import TimeCard from '@/components/TimeCard.svelte'
	import type { TimeCardData } from '@/types/TimeCardData'

	const timeCards: TimeCardData[] = [
		{
			workType: 'work',
			hours: 32,
			hoursLastWeek: 36
		},
		{
			workType: 'play',
			hours: 10,
			hoursLastWeek: 8
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
			hoursLastWeek: 2
		}
	]
</script>

<div class="container">
	<div class="content">
		<div class="user-card">
			<UserCard />
		</div>

		{#each timeCards as { workType, hours, hoursLastWeek }}
			<div class="time-card">
				<TimeCard {workType} {hours} {hoursLastWeek} />
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.container {
		height: 100vh;
		display: grid;
		justify-content: center;

		@media (min-width: 1440px) {
			place-content: center;
		}

		.content {
			display: grid;
			grid-gap: 1.5rem;
			grid-template-rows: 203px repeat(6, 160px);
			grid-auto-columns: var(--user-card-w);
			padding: 5rem 1rem;

			@media (min-width: 1440px) {
				grid-gap: 2rem;
				grid-template-columns: var(--user-card-w) repeat(3, var(--time-card-w));
				grid-template-rows: repeat(2, auto);

				.user-card {
					grid-row: span 2;
					grid-column: 1;
				}
			}
		}
	}
</style>

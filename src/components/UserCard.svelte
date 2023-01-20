<div class="user-card">
	<header>
		<div class="avatar-container">
			<img src="/images/image-jeremy.png" alt="Jeremy Robson" />
		</div>
		<div class="user-description">
			<div class="caption">Report for</div>
			<div class="name">Jeremy Robson</div>
		</div>
	</header>
	<nav>
		<ul>
			<li>Daily</li>
			<li class="selected">Weekly</li>
			<li>Monthly</li>
		</ul>
	</nav>
</div>

<style lang="scss">
	.user-card {
		min-height: var(--user-card-h);
		min-width: var(--user-card-w);
		background-color: var(--color-dark-blue);
		border-radius: var(--border-radius);
		overflow: hidden;

		header {
			display: grid;
			grid-template-columns: repeat(2, auto);
			align-items: center;
			min-height: 133px;
			background-color: var(--color-blueish-purple);
			border-bottom-right-radius: var(--border-radius);
			border-bottom-left-radius: var(--border-radius);

			.avatar-container {
				justify-self: center;
				padding-left: 0.5rem;

				img {
					border: 2px solid var(--color-white);
					border-radius: 3rem;
					width: 70px;
					height: 70px;
				}
			}

			.user-description {
				.caption {
					font-size: 15px;
					margin-top: 5px;
					color: var(--color-lilac);
				}

				.name {
					font-weight: var(--fw-light);
					font-size: 24px;
				}
			}
		}

		nav {
			font-size: 18px;
			color: var(--color-purple);

			ul {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				align-items: center;
				list-style: none;
				padding: 0.3rem 0 0 0;

				li {
					place-self: center;
					&:hover {
						cursor: pointer;
						color: var(--color-white);
					}

					&.selected {
						color: var(--color-white);
					}
				}
			}
		}

		@media (min-width: 1440px) {
			header {
				min-height: 354px;
				grid-template-columns: 1fr;
				grid-template-rows: 7rem auto;
				align-items: start;
				justify-content: start;
				padding: 2.1rem 2rem;

				.avatar-container {
					justify-self: start;
					padding: 0;

					img {
						border: 2px solid var(--color-white);
						border-radius: 3rem;
						width: 85px;
						height: 85px;
					}
				}

				.user-description {
					padding-left: 0.2rem;
					padding-top: 0.3rem;
					.caption {
						padding-bottom: 0.2rem;
					}

					.name {
						max-width: 6ch;
						font-size: 40px;
						line-height: 47px;
					}
				}
			}

			nav {
				ul {
					min-height: 8.1rem;
					grid-template-columns: unset;
					grid-template-rows: repeat(3, 1fr);
					justify-content: space-between;
					padding: 0.4rem 0 0 2.1rem;

					li {
						place-self: start;
					}
				}
			}
		}
	}
</style>

<div class="user-card">
  <header>
    <div class="header-content">
      <div class="avatar-container">
        <img src="/images/image-jeremy.png" alt="Jeremy Robson"/>
      </div>
      <div class="user-description">
        <div class="caption">Report for</div>
        <div class="name">Jeremy Robson</div>
      </div>
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
    height: 203px;
    background-color: var(--color-dark-blue);
    border-radius: 0.5rem;
    overflow: hidden;

    header {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 133px;
      background-color: var(--color-dark-purple);
      border-bottom-right-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;

      .header-content {
        width: 80%;
        display: flex;
        gap: 1rem;
        justify-content: start;
        align-items: center;

        .avatar-container {
          img {
            width: 64px;
            height: 64px;
          }
        }

        .user-description {
          .caption {
            font-size: 15px;
          }

          .name {
            font-weight: var(--fw-light);
            font-size: 24px;
          }
        }
      }
    }
    nav {
      font-size: 18px;
      color: var(--color-purple);

      ul {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        list-style: none;
        padding: 0;

        li.selected {
          color: var(--color-white);
        }
      }
    }
  }
</style>

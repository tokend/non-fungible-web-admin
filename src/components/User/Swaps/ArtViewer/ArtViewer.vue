<template>
  <div>
    <section class="art-details__section">
      <h1 class="art-details__heading"> {{ art.name }} ({{ art.code }})</h1>
      <p class="art-details__short-description">{{ art.shortDescription }}</p>

      <div class="art-details__art-splash-wrp">
        <img class="art-details__art-splash-img md-image"
             :src="splashUrl"
             :alt="art.name">
      </div>
    </section>

    <section class="art-details__section">
      <h3 class="art-details__section-heading">Art direction</h3>
      <p class="art-details__long-description"
         v-html="art.direction">
      </p>
    </section>

    <section class="art-details__section">
      <h3 class="art-details__section-heading">Art description</h3>
      <p class="art-details__long-description"
         v-html="art.description">
      </p>
    </section>

  </div>
</template>

<script>
  import config from '../../../../config'

  export default {
    name: 'art-details',
    props: ['art'],
    components: {},
    computed: {
      splashUrl () {
        return `${config.STORAGE_SERVER}/${this.art.photo.key}`
      }
    }
  }
</script>

<style lang="scss">
  @import '../../../../assets/scss/colors';

  $ratio_16: 100%;
  $ratio_9: $ratio_16 * (9/16);

  .art-details {
    max-width: 1000px;
    margin: 0 auto;
  }

  .art-details__art-splash-wrp {
    position: relative;
    width: 100%;
    margin-top: 2.4rem;
  }

  .art-details__art-splash-img {
    width: 100%;
    object-fit: cover;
  }

  .art-details__heading {
    font-size: 2rem;
    line-height: 1.5;
    margin: 0 0 0.8rem;
    vertical-align: middle;
    color: $color-text;
    opacity: 1;
  }

  .art-details__short-description {
    font-size: 1.6rem;
    color: $color-text-secondary;
    line-height: 1.5;
  }

  .art-details__section {
    margin: 4.8rem 0;
    &:first-of-type {
      margin-top: 0;
    }
  }

  $row-section-item-margin: 2.4rem;
  .art-details__row-section {
    display: flex;
    flex-wrap: wrap;
    width: calc(100% + $row-section-item-margin);
    margin: 0 -$row-section-item-margin;

  }

  .art-details__row-section-item {
    flex: 1;
    margin: $row-section-item-margin;
    min-width: 28rem;
  }

  .art-details__section-heading {
    margin-bottom: 1rem;
    color: $color-text;
  }

  .art-details__long-description {
    font-size: 1.6rem;
    line-height: 1.5;
    color: $color-text;
  }

  .art-details__map-wrp {
    position: relative;
    padding-bottom: 100% * (9/16);
    height: 0;
    background-color: silver;

    & > .art-details__map {
      position: absolute;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
</style>

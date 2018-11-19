<template>
  <div class="request-manager">
    <h2>Bid request # {{ id }}</h2>
    <template v-if="asset && request">
      <div class="app__block">
        <section class="request-manager__request-viewer-wrp">
          <h3 class="request-manager__heading">Request details</h3>
          <request-viewer :request="request"/>
        </section>

        <section class="request-manager__art-viewer-wrp">
          <h3 class="request-manager__heading">Art details</h3>
          <art-viewer :art="asset"/>
        </section>

        <section class="request-manager__reviewer-wrp">
          <h3 class="request-manager__heading">Review request</h3>
          <reviewer :request="request"/>
        </section>

      </div>
    </template>
    <template v-else>
      Loading...
    </template>
  </div>
</template>
<script>
  import api from '@/api'

  import RequestViewer from './RequestViewer/RequestViewer'
  import ArtViewer from './ArtViewer/ArtViewer'
  import Reviewer from './RequestReviewer/RequestReviewer'

  export default {
    props: ['id'],
    components: {
      RequestViewer,
      ArtViewer,
      Reviewer
    },
    data: _ => ({
      request: null,
      asset: null
    }),
    created () {
      this.getRequest()
    },
    methods: {
      async getRequest () {
        const request = await api.requests.get(this.id)
        this.request = {
          ...request,
          ...request.atomicSwapBidCreation,
          ...request.atomicSwapBidCreation.details
        }
        const asset = await api.assets.getByBalanceId(this.request.baseBalance)
        this.asset = (await api.assets.get(asset.data.code)).data
      }
    }
  }
</script>


<style lang="scss" scoped>
  .request-manager__heading {
    margin-bottom: 2rem;
  }

  .request-manager__request-viewer-wrp,
  .request-manager__art-viewer-wrp {
    margin-bottom: 5rem;
  }
</style>

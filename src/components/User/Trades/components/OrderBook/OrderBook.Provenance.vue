<template>
  <div class="order-book-provenance">
    <div class="app__block">
      <h2>Provenance</h2>
      <template v-if="list && list.length">
        <table class="order-book-provenance__table">
          <tr>
            <th class="order-book-provenance__table-cell
                      order-book-provenance__table-cell--head">
              Date
            </th>
            <th class="order-book-provenance__table-cell
                      order-book-provenance__table-cell--head">
              Event
            </th>
            <th class="order-book-provenance__table-cell
                      order-book-provenance__table-cell--head">
              Seller
            </th>
          </tr>
          <template v-for="item in reversedList">
            <tr :key="`order-book-provenance-${item.ledgerCloseTime}`">
              <td>
                <date-formatter :date="item.ledgerCloseTime" format="DD MMM YYYY [at] HH:mm:ss"/>
              </td>
              <td>
                <template v-if="item.typeI === OPERATION_TYPE_CREATE">
                  <span>
                    Created by:
                    <email-getter :address="getAccountFrom(item)"/>
                  </span>
                </template>
                <template v-else>
                  <span>
                    Bought by:
                    <email-getter :address="getOperationInformation(item).seller"/>
                  </span>
                </template>
              </td>
              <td>
                <template v-if="item.typeI === OPERATION_TYPE_CREATE">
                  <span>–</span>
                </template>
                <template v-else>
                  <span>
                    <email-getter :address="getOperationInformation(item).buyer"/>
                  </span>
                </template>
              </td>
            </tr>
          </template>
        </table>
      </template>
    </div>
  </div>
</template>

<script>
import { DateFormatter } from '@comcom/formatters'
import { EmailGetter } from '@comcom/getters'

const OPERATION_TYPE_CREATE = 3

export default {
  props: ['list', 'asset'],

  components: {
    DateFormatter,
    EmailGetter
  },

  data () {
    return {
      OPERATION_TYPE_CREATE
    }
  },

  computed: {
    reversedList () {
      return this.list.reverse()
    }
  },

  methods: {
    getOperationInformation (record) {
      return {
        seller: this.getAccountFrom(record),
        buyer: this.getAccountTo(record)
      }
    },
    getAccountFrom (record) {
      return record.sourceAccount
    },
    getAccountTo (record) {
      return ((record.participants || [])
        .find(p => p.accountId !== this.getAccountFrom(record)) || {})
        .accountId
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../../../../assets/scss/colors";

  $side-padding: 0.5rem;

  .order-book-provenance__table {
    width: 100%;
    font-size: 1.6rem;
    border-collapse: collapse;

    & > tr > th {
      font-size: 1.2rem;
    }

    & > tr > th,
    & > tr > td {
      text-align: right;
      padding: 0.5rem $side-padding;

      &:first-child {
        text-align: left;
      }
    }

    & > tr:hover {
      background-color: rgba(0, 0, 0, 0.08);
      cursor: pointer;
    }

    & > tr:focus {
      outline: .1rem dashed black;
      outline-offset: -.1rem;
    }
  }
</style>

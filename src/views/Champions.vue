<template>
  <div>
    <section v-if="errored">
      <p>{{ errors }}</p>
    </section>
    <section v-else>
      <div v-if="loading" class="animated fadeIn">
        <app-loading-spinner />
      </div>
      <div v-else>

        <section class="hero">
          <div class="hero-body">
            <div class="container">
                <h1 class="title is-1 has-text-left is-white">{{ page_title }}</h1>
                <h2 class="subtitle has-text-left is-white">2005 - 2015</h2>
            </div>
          </div>
        </section>

        <table class="table is-narrow is-hoverable is-fullwidth">
          <tbody>
            <tr class="table-header">
              <th>Year</th>
              <th>Driver</th>
              <th>Constructor</th>
              <th>Points</th>
              <th>Wins</th>
            </tr>
            <tr
              v-for="result of results"
              v-bind:key="result.id"
              @click.stop.prevent="goToSeason(result.season)"
              v-bind:season="result.season"> <!-- pass in the season for next view to render correct year-->
              <td>{{ result.season }}</td>
              <td>
                {{ result.DriverStandings[0].Driver.givenName }}
                {{ result.DriverStandings[0].Driver.familyName }}
              </td>
              <td>{{ result.DriverStandings[0].Constructors[0].name }}</td>
              <td>{{ result.DriverStandings[0].points }}</td>
              <td>{{ result.DriverStandings[0].wins }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
<script>
import axios from 'axios'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import router from '@/router'
import EventBus from '@/eventBus.js'

export default {
  name: 'Champions',
  components: {
    appLoadingSpinner: LoadingSpinner
  },
  data() {
    return {
      page_title: 'Champions',
      results: [],
      errors: [],
      errored: false,
      loading: true,
    }
  },
  mounted() {
    this.getChampions()
  },
  methods: {
    getChampions() {
      // GET request to get championships 2005-2015
      const apiUrl = 'http://ergast.com/api/f1'
      const config = axios.create({
        method: 'get',
        baseURL: apiUrl,
        timeout: 3000,
        headers: {
          'Access-Control-Request-Headers': '*'
        }
      })
      axios.get(apiUrl + '/driverStandings/1.json?limit=11&offset=55', config)
        .then(response => {
          const MRData = response.data
          // setup empty arrays for each key that I will later populate in the for loops
          const standingsTable = []
          const standingsLists = []
          const seasons = []

          for (let key in MRData) {
            const standingsTables = MRData[key]

            for (let key in standingsTables) {
              const standingsLists = standingsTables[key]

              for (let key in standingsLists) {
                const seasons = standingsLists[key]
                this.results = seasons
              }
            }
          }
        })
        .catch(error => {
          let errorsNote = error
          this.errors.push(errorsNote)
        })
        .finally(() => {
          this.loading = false
        })
    },
    goToSeason(season) {
      // race season is passed as a parameter on function invocation
      EventBus.$emit('GO_TO_SEASON', season)
      return this.$router.push({ name: 'AllWinners', params: { season: season } })
    }
  }
}
</script>
<style lang="sass" scoped>
// with the scoped property any sass written here will affect this component only.
.table
  th
    bakground-color: #FF5E5B
</style>

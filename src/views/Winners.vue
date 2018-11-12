<template>
  <div>

    <section v-if="errored">
      <p>{{ errors }}</p>
    </section>
    <section v-else>
      <div v-if="loading">
        <app-loading-spinner />
      </div>
      <div v-else>
        <hgroup>
          <h1 class="title is-1 has-text-left">{{ page_title }}</h1>
          <h2 class="subtitle has-text-left">Driver Standings</h2>
        </hgroup>
        <table class="table is-narrow is-hoverable is-fullwidth">
          <tbody>
            <tr>
              <th>Year</th>
              <th><abbr title="Position">Pos</abbr></th>
              <th>Driver</th>
              <th>Constructor</th>
              <th>Points</th>
              <th>Wins</th>
            </tr>
            <tr
              v-for="result of results"
              v-bind:key="result.id">
              <td> {{ result.season }} </td>
              <td>
                {{ result.DriverStandings[0].position }}
              </td>
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

export default {
  name: 'Winners',
  components: {
    appLoadingSpinner: LoadingSpinner
  },
  data() {
    return {
      page_title: 'Winners',
      results: [],
      errors: [],
      errored: false,
      loading: true
    }
  },
  created() {
    this.filteredDriverStandings()
    this.getDriverStandings()
  },
  methods: {
    noCors() {
      const noCors = 'https://cors-anywhere.herokuapp.com/'
      return noCors
    },
    getDriverStandings() {
      const driverStandings =
        'http://ergast.com/api/f1/driverStandings/1.json?limit=60&offset=50'
      axios
        .get(this.noCors() + driverStandings)
        .then(response => {
          const MRData = response.data
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
    filteredDriverStandings(results) {
      console.log('filteredDriverStandings', results)

    },
    getAllResults() {
      const allF1Results = 'http://ergast.com/api/f1/results/1.json?limit=200'
      axios
        .get(this.noCors() + allF1Results)
        .then(response => {
          console.group('RaceTable:')
          const RaceTable = response.data
          const races = []
          const seasons = []

          for (let key in RaceTable) {
            const races = RaceTable[key]
            console.log('races', races)

            for (let key in races) {
              const seasons = races[key]
              console.log('seasons', seasons)

              for (let key in seasons) {
                const event = seasons[key]
                console.log('event', event)
              }
            }
          }

          this.results = seasons
          console.groupEnd()
        })
        .catch(error => {
          let errorsNote = error
          this.errors.push(errorsNote)
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
<style lang="sass">

.table
  width: 100%
  @media screen and (min-width: 768px)
    background-color: rgba(255, 255, 255, 0.5)

  .table-header
    background-color: #001021
    color: #FFFFFF
    font-size: 1em

  td
    border-color: rgba(255, 255, 255, 0.1)
</style>

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
                <h2 class="subtitle has-text-left is-white">for: {{ results[0].season }}</h2>
            </div>
          </div>
        </section>

        <table class="table is-narrow is-hoverable is-fullwidth">
          <tbody>
            <tr class="table-header">
              <th>Pos</th>
              <th>Driver</th>
              <th>Circuit</th>
              <th>Constructor</th>
              <th>Points</th>
              <th>Time</th>
            </tr>
            <tr
              v-for="result of results"
              v-bind:key="result.id">
              <td>{{ result.Results[0].position }}</td>
               <td>
                {{ result.Results[0].Driver.givenName }}
                {{ result.Results[0].Driver.familyName }}
              </td>
              <td>{{ result.raceName }}</td>
              <td>{{ result.Results[0].Constructor.name }}</td>
              <td>{{ result.Results[0].points }}</td>
              <td>{{ result.Results[0].Time.time }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
<script>
import axios from 'axios'
import router from '@/router'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

export default {
  name: 'AllWinners',
  components: {
    appLoadingSpinner: LoadingSpinner
  },
  data() {
    return {
      page_title: 'All Winners',
      results: [],
      errors: [],
      errored: false,
      loading: true
    }
  },
  mounted() {
    this.getAllWinners()
  },
  methods: {
    fixCors() {
      // not to be used in production setting.
      const corsAnyWhere = 'https://cors-anywhere.herokuapp.com/'
      return corsAnyWhere
    },
    getAllWinners() {
      let season = '2016'
      // prop passed to ajax request via template literal, season = 2005 || 2006 || 2007 to 2015
      const allWinners = `http://ergast.com/api/f1/${season}/results/1.json`
      axios
        .get(this.fixCors() + allWinners)
        .then(response => {
          const MRData = response.data
          const raceTable = []
          const races = []

          for (let key in MRData) {
            const raceTable = MRData[key]

            for (let key in raceTable) {
              const races = raceTable[key]

              for (let key in races) {
                const seasons = races[key]
                this.results = seasons
              }
            }
          }
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

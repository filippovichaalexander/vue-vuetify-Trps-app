<template>
  <v-app>
    <v-main>
      <div class="wrapper">
        <h1 class="pt-5 text-center">Trips types</h1>
        <ListItems :trips="trips"/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import ListItems from "./components/ListItems.vue";

export default {
  name: 'App',
    data() {
      return {
        trips: [
          {
            name: '"Town of Cheese and Wine"',
            stars: 5,
            type: "Historical",
            vehicle: "By bus",
            date: "28 of March",
            totalHours: "9 hours",
            afterElement: true
          },
          {
            name: 'Trip to national park "Yalla"',
            stars: 5,
            type: "Sightseeng",
            vehicle: "By bus",
            date: "25 of March",
            totalHours: "6 hours",
            afterElement: true 
          },
          {
            name: '"Of castles and Knights"',
            stars: 5,
            type: "Historical",
            vehicle: "By bus",
            date: "29 of March",
            totalHours: "6 hours",
            afterElement: true
          },
          {
            name: "Trip to the night beach",
            stars: 4,
            type: "Historical",
            vehicle: "By bus",
            date: "29 of March",
            totalHours: "6 hours",
            guestsAmount: "to 49",
            afterElement: false
          },
        ],
      };
    },
    // mounted() {

    // },
  components: {
    ListItems
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background: rgb(217,217,221);
  background: linear-gradient(180deg, rgba(217,217,221,1) 0%, rgba(217,217,221,0.23042720506171221) 47%, rgba(184,189,190,0.8522759445575105) 100%);
  -webkit-animation-name: content;
  animation-name: content;
  -webkit-animation-direction: normal;
          animation-direction: normal;
  -webkit-animation-duration: 1s;
          animation-duration: 1s;
  -webkit-animation-timing-function: ease-in-out;
          animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;

}
 
@keyframes content {
    from {
      opacity: 0;
      /* transform: translateY(5%); */
    }
    to {
      opacity: 1;
      /* transform: translateY(0%); */
    }
  }

</style>
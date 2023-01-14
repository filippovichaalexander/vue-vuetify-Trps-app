<template>
  <v-container>
    <v-row>
      <v-col cols="12"  
      v-for="(item, index) in trips" :key="index">
          <v-row>
            <v-col cols="12">
              <h2 class="ma-0 item__title">{{ item.name }}</h2>
            </v-col>
          </v-row>
          <v-row class="d-flex justify-space-between mb-3 mt-5">
            <v-col cols="12" class="item__content-wrapper d-flex justify-space-between align-center" :class="{ 'item--after-elt': item.afterElement }">
              <p class="ma-0 px-5 py-2 d-flex item__content">{{ item.stars }}</p>
              <v-icon class="ma-0 py-2 d-flex">{{mdiCircleSmall}}</v-icon>
              <p class="ma-0 px-5 py-2 d-flex item__content">{{ item.type }}</p>
              <v-icon class="ma-0 px-5 py-2 d-none d-sm-flex d-md-flex">{{mdiCircleSmall}}</v-icon>
              <p class="ma-0 px-5 py-2 d-none d-sm-flex d-md-flex item__content">{{ item.vehicle }}</p>
              <v-icon class="ma-0 px-5 py-2 d-none d-md-flex d-lg-flex">{{mdiCircleSmall}}</v-icon>
              <p class="ma-0 px-5 py-2 d-none d-md-flex d-lg-flex item__content">{{ item.date }}</p>
              <v-icon class="ma-0 px-5 py-2 d-none d-lg-flex d-xl-flex">{{mdiCircleSmall}}</v-icon>
              <p class="ma-0 px-5 py-2 d-none d-xl-flex d-lg-flex item__content">{{ item.totalHours }}</p>
              <v-icon v-if="item.guestsAmount" class="ma-0 px-5 py-2 d-none d-xl-flex">{{mdiCircleSmall}}</v-icon>
              <p v-if="item.guestsAmount" class="ma-0 px-5 py-2 d-none d-xl-flex item__content">{{ item.guestsAmount }}</p>
            </v-col>
          </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
  import { mdiCircleSmall } from '@mdi/js';
  export default {
    name: "ListItem",
    data: () => {
      return {   
        mdiCircleSmall    //same as mdiCircleSmall: mdiCircleSmall 
      }   
    },
    props: ["trips"],
  };
  </script>
  
  <style lang="scss" scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }



  .item {
    &__title {
    color: #0c120f;
  }
    &__content {
      background-color: #de66ce;
      color: #fff;
      border-radius: 10px;
    }
    &--after-elt {
      position: relative;
      &:after {
        content: '';
        width: 100%;
        height: 1px;
        position: absolute;
        left: 0;
        bottom: -20px;
        background-color: #6d5c6b;
      }
    }
  }
  
  </style>
  
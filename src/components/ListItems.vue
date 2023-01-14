<template>
  <v-container>
    <v-row>
        <v-col cols="12">
            <ListItem 
            :trips="trips" 
            />
        </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
  import ListItem from "./ListItem.vue";
  export default {
    name: "ListItems",
    components: {
        ListItem,
    },
    props: ["trips"]
};
  </script>
  
  <style scoped>
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
  </style>
  
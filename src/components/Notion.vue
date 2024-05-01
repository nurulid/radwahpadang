<template>
  <div>
    <h1>Data from API:</h1>
    <ul>
      <li v-for="item in data" :key="item.id">
        <img :src="item.Image[0].url" alt="" width="200">
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.fetchDataFromAPI();
  },
  methods: {
    fetchDataFromAPI() {
      const apiUrl = 'https://notion-api.splitbee.io/v1/table/7286d14c38f94b26b3807b8d97810839'; // Replace with your API endpoint URL

      axios.get(apiUrl)
        .then((response) => {
          this.data = response.data;
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    },
  },
};
</script>

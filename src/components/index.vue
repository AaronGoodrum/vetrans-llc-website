<template>
  <div class="indexPage">
    <h1>{{ msg }}</h1>
    <img class="img rounded" src="../assets/mission.png" alt="mission flag">
    <h2>We Support Our Troops</h2>
    <h4>Blessed are the peacemakers, for they will be called sons of God. (Matthew 5:9)</h4>

    <div class="btn-group btn-group-md mt-4" role="group" aria-label="Callout buttons">
      <a type="button" class="btn btn-primary" href="tel:2538334688">Call Now</a>
      <a type="button" class="btn btn-light" href="mailto:arron.webbuild@gmail.com?Subject=Vetrans%20Logistics">Send Email</a>
    </div>
  </div>

</template>

<script>
export default {
  name: 'INDEX',
  data () {
    return {
      msg: 'Call us to get your freight moved or your trucks covered.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

</style>

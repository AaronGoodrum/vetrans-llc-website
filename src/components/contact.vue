<template>
  <div class="contactPage">
    <h1>{{ msg }}</h1>

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
      msg: 'Contact Page'
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

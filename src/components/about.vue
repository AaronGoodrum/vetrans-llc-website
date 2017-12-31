<template>
  <div class="aboutPage">
    <!-- about-->
    <div id="about">
      <h1 class="display-4 text-center my-5 text-muted">{{ msg }}</h1>

      <div class="container col-md-8 col-lg-8">
        <img src="../assets/vetrans-truck01.png" class="center img-fluid rounded" alt="Responsive image">
        <p class="container mt-4">
          <span class="red">VET</span><span class="blue">RANS</span> LLC is a full service truckload brokerage with customers and carriers across the US.</p>
        <p>We have been in business since 2006. We are EDI-capable and work in the propriety systems of many of our shippers.</p>
        <p><span class="red">VET</span><span class="blue">RANS</span> LLC will find reliable trucks for your loads. We work when you work. We pay our carrier partners quickly and fairly.</p>
        <p class="mb-4"><span class="red">VET</span><span class="blue">RANS</span> Logistics Services, Inc is a flatbed trucking company operating in the Western US since 2011. We have semi and maxi equipment. Our drivers are honorably-discharged veterans.
        </p>
      </div>
    </div>
    <!-- End about-->
  </div>
</template>

<script>
export default {
  name: 'INDEX',
  data () {
    return {
      msg: 'About Page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.aboutPage{
  background-color: #e6f3ff91;
}
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
a {
  color: #42b983;
}
</style>

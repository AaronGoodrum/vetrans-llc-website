<template>
  <div class="aboutPage">
    <!-- about-->
      <h1 class="display-4 text-center my-5 text-muted">{{ msg }}</h1>
      <div class="container">
        <img src="../assets/vetrans-truck01.png" class="center img-fluid rounded" alt="Responsive image">
        <p class="container mt-6">
         <span class="red">VET</span><span class="blue">RANS</span> LLC is a full service truckload brokerage with customers and carriers across the US.
        </p>
        <p>
          We have been in business since 2006. We are EDI-capable and work in the propriety systems of many of our shippers.
        </p>
        <p>
          <span class="red">VET</span><span class="blue">RANS</span> LLC will find reliable trucks for your loads. We work when you work. We pay our carrier partners quickly and fairly.
        </p>
        <p class="mb-4">
          <span class="red">VET</span><span class="blue">RANS</span> Logistics Services, Inc is a flatbed trucking company operating in the Western US since 2011. We have semi and maxi equipment. Our drivers are honorably-discharged veterans.
        </p>
      </div>
    <!-- End about-->
    <div class="btn-group btn-group-md mt-4" role="group" aria-label="Callout buttons">
      <a type="button" class="btn btn-primary" href="tel:2538334688">Call Now</a>
      <a type="button" class="btn btn-light" href="mailto:arron.webbuild@gmail.com?Subject=Vetrans%20Logistics">Send Email</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutPage',
  data () {
    return {
      msg: 'About VETRANS'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.aboutPage{
    font-size: 21px;
    text-align: center;

    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
         -o-animation: fadein 2s; /* Opera < 12.1 */
            animation: fadein 2s;
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

h1, h2 {
  font-weight: normal;
  font-size: 50px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
img{
  padding-bottom: 15px;
}
</style>

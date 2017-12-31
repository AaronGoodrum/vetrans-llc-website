<template>
  <div class="servicePage">
   <!--Services-->

    <h1 id="services" class="display-4 text-center my-5 text-muted">{{ msg }}</h1>

    <div class="row">
      <!--image services -->
      <div class="col-md-6 col-lg-6">
        <div class="card mb-4">
          <img class="card-img-top" src="../assets/Brokerage_hiarchy.png" alt="Brokerage">
          <div class="card-body">
            <p class="card-text">Our businesses include two separate entities.
              <ul>
                <li>
                   <span class="red">VET</span><span class="blue">RANS</span> LLC is our non-asset based truck brokerage.
                </li>
                <li>
                <span class="red">VET</span><span class="blue">RANS</span> Logistics Services, Inc is our asset based trucking company.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-6">
        <div class="card mb-4">
          <img class="card-img-top" src="../assets/correct_solution_apr.png" alt="solution">
          <div class="card-body">
            <p class="card-text">Our supply solution of business needs.
              <ul>
                <li>
                <span class="red">VET</span><span class="blue">RANS</span> drives across your supply chain by effectively.
              </li>
              <li>
                <span class="red">VET</span><span class="blue">RANS</span> understands that we must add value to activties of our customers.
              </li>
            </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--End image services -->

    <div class="row">
      <div class="col-lg order-lg-1">
        <h3 class="mb-4">Shippers</h3>
        <p><span class="red">VET</span><span class="blue">RANS</span> identifies the correct transportation solution for your specific business needs.</p>
        <p> We partner with safe, reliable carriers. We are candid about pricing and do not take freight speculatively. </p>
        <p> When we say we have a load covered, we have a truck that will cover it. <span class="red">VET</span><span class="blue">RANS</span> welcomes the opportunity to profitably participate in fulfilling your transportation needs.</p>
      </div>
      <div class="col-lg order-lg-2">
        <h3 class="mb-4">Transportation Partners:</h3>
        <img class="mb-4 img-fluid rounded" src="../assets/partners.png" />
        <p><span class="red">VET</span><span class="blue">RANS</span> seeks trucking companies of all sizes as business partners.</p>
        <p> We seek regular freight from the same shippers, and we strive to develop regular round trips.</p>
        <p> We make all pickup and delivery appointments. <span class="red">VET</span><span class="blue">RANS</span> promptly pays for work that is properly executed.</p>
        <p> Carrier partners can focus on satisfying our customers and operating equipment safely, not searching for your next load.</p>
      </div>
      <div class="col-lg order-lg-3">
        <h3 class="mb-4">Shipping and Receiving Entities</h3>
        <p><span class="red">VET</span><span class="blue">RANS</span> focuses on driving value to shippers and carrier partners by identifying regular destinations.</p>
        <p> This approach adds significant value to those who load and unload these shipments. <span class="red">VET</span><span class="blue">RANS</span> ensures that quality drivers and equipment are provided for each delivery.</p>
        <p> Quality drivers providing regular deliveries will provide opportunities for increased productivity on the both the shipping and receiving docks.</p>
      </div>
    </div>
    <!-- End Services-->
  </div>
</template>

<script>
export default {
  name: 'INDEX',
  data () {
    return {
      msg: 'Service'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.servicePage{
  margin-top: 100px;
  
    margin-top: 25px;
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

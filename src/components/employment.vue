<template>
  <div class="employmentPage">

    <!-- employment-->
    <h1 id="employment" class="display-4 text-center my-5 text-muted">{{ msg }} </h1>
    
    <div class="container col-md-8 col-lg-8">
      <p><span class="red">VET</span><span class="blue">RANS</span> offers employment to drivers with all backgrounds, not just veterans. We encourage honorably discharged veterans to apply. However, we value diversity. </p> 
    <img src="../assets/safetybc.png" class="center img-fluid rounded" alt="Responsive image">
    <p class="container mt-4">
    <span class="red">VET</span><span class="blue">RANS</span>  Logistics Services, Inc is a flatbed trucking company operating in the Western US 
      since 2011. We operate flatbed equipment both locally and regionally. We operate late model sleepers and well-maintained flatbeds
      (48 and 53 footers), curtain vans (48 footers), and B-Trains. Our equipment is meticulously and professionally maintained, so our
       drivers concentrate on running safely and legally. </p>
    <p><span class="red">VET</span><span class="blue">RANS</span> is an Equal Opportunity Employer and seeks woman, minority, LGBT, and veteran applicants equally.</p>
    <p class="mb-4"><span class="red">VET</span><span class="blue">RANS</span> Logistics Services, Inc is a flatbed trucking company operating in the Western US since 2011. We have semi and maxi equipment. Our drivers are honorably-discharged veterans.
    </p>
    </div>
<p class="container"><span class="red">VET</span><span class="blue">RANS</span>  guarantees all drivers a weekly minimum gross pay amount based upon these responsibilities as follows:</p>
  <div class="row">
<!--local services -->
      <div class="col-md-6 col-lg-6">
        <div class="card mb-4">
          <h2 class="display-4 text-center my-5 text-muted">Local Semi</h2>
          <div class="card-body">
            <p class="card-text">Guaranteed Weekly Minimum - $800.00</p>
              <ul>
                <li>
                   <p>Home every Night , Weekends Off</p>
                </li>
              </ul>
          </div>
        </div>
      </div>
<!-- END local services -->
<!--Regional services -->
      <div class="col-md-6 col-lg-6">
        <div class="card mb-4">
          <h2 class="display-4 text-center my-5 text-muted">Regional Semi</h2>
          <div class="card-body">
            <p class="card-text">Guaranteed Weekly Minimum - $900.00</p>
              <ul>
                <li>
                   <p>2 nights per week , Weekends Off</p>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
<!-- END Regional services -->
<!--Maxi services -->
      <div class="col-md-12 col-lg-12">
        <div class="card mb-4">
          <h2 class="display-4 text-center my-5 text-muted">Maxi Regional Semi</h2>
          <div class="card-body">
            <p class="card-text">Guaranteed Weekly Minimum - $1000.00</p>
              <ul>
                <li>
                   <p>2 nights per week , Weekends Off</p>
                </li>
              </ul>
          </div>
        </div>
      </div>
<!-- END Maxi services -->
<!-- Employment Request -->
  <div class="mt-4 form-group">
    <button class="btn btn-outline-primary mt-4 btn-block" type="button" data-toggle="collapse" data-target="#employmentForm" aria-expanded="false" aria-controls="employmentForm">
        Employment Request
    </button>
    <div class="collapse" id="employmentForm">
      <div class="mt-4 form-group">
        <form>
          
        </form>
      </div>
    </div>
  </div>
<!--END Employment Request -->

</div>
<!-- End employment-->
</template>

<script>
export default {
  name: 'INDEX',
  data () {
    return {
      msg: 'Employment Page'
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
a {
  color: #42b983;
}
</style>

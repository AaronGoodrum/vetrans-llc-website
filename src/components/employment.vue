<template>
  <div class="employmentPage">

    <!-- employment-->
    <h1 id="employment" class="display-4 text-center my-5 text-muted">{{ msg }} </h1>
    
    <div class="container">
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
  <div class="container">
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
  </div>
<!-- Employment Request -->
  <div class="container">
    <button class=" container btn btn-primary mt-4 btn-block" type="button" data-toggle="collapse" data-target="#employmentForm" aria-expanded="false" aria-controls="employmentForm">
        Employment Request
    </button>
    <div class="collapse" id="employmentForm">
      <div>
        <form class="form-group">
<!-- Email -->
          <div class="row">
          <div class="col">
            <label for="emailFormEmploy">Email address</label>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            <input class="form-control" required="required" placeholder="YourEmail@example.com">
          </div>
          </div>
<!-- Name -->
      <div class="row">
        <div class="col">
          <label for="emailFormEmploy">First Name: </label>
          <input type="text" class="form-control" required="required" placeholder="First name">
        </div>
        <div class="col">
          <label for="emailFormEmploy">Last Name: </label>
          <input type="text" class="form-control" required="required" placeholder="Last name">
        </div>
      </div>
<!-- driving experience -->
    <label for="emailFormEmploy">Class A Driving Experience : </label>
      <select class="form-control form-control-lg" v-model="experience">
        <option disabled value="">Please select one</option>
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.text}}
        </option>
      </select>
<!-- Equipmet -->
        <div class="form-check">
          <label for="emailFormEmploy">Equipmet Experience : </label>
          <label class="form-check-label">
            <input class="form-check-input position-static" type="checkbox" id="cbox-flatbed" value="option1" aria-label="Flatbed"> Flatbed
          </label>
                <label class="form-check-label">
            <input class="form-check-input position-static" type="checkbox" id="cbox-curtain" value="option2" aria-label="Curtain"> Curtain
          </label>
                <label class="form-check-label">
            <input class="form-check-input position-static" type="checkbox" id="cbox-Btrain" value="option3" aria-label="B-Train"> B-Train
          </label>
                <label class="form-check-label">
            <input class="form-check-input position-static" type="checkbox" id="cbox-allTypes" value="option4" aria-label="All-Types"> All-Types
          </label>
        </div>
<!-- additional text -->
        <div>
          <label for="emailFormEmployTextarea1">Additional information</label>
          <textarea class="form-control" rows="3"></textarea>
        </div>
<!-- SUBMIT FORM -->
        <button v-on:submit.prevent type="submit" class="btn btn-primary" >Submit</button>
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
      msg: 'Employment with VETRANS',
      experience: 'A',
      options: [
        { text: 'Driving Experience', value: 'A'},
        { text: 'Experienced 6+ Years', value: 'B'},
        { text: 'Experienced 2-5 Years', value: 'C'},
        { text: 'Less then 2 Years', value: 'D'}
      ]
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
.form-group{
border: 1px solid;
padding: 10px 0px;
}
#employmentForm{
  max-width: 100%;
}
</style>

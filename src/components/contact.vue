<template>
  <div class="contactPage">
    <h1>{{ msg }}</h1>

    <div class="btn-group btn-group-md mt-4" role="group" aria-label="Callout buttons">
      <a type="button" class="btn btn-primary" href="tel:2538334688">Call Now</a>
      <a type="button" class="btn btn-light" href="mailto:arron.webbuild@gmail.com?Subject=Vetrans%20Logistics">Send Email</a>
    </div>

<!-- Team-->
  <h2 id="team" class="display-4 text-center my-5 text-muted">VETRANS Team </h2>
  <div class="container">
  <div class="row">

    <div class="col col-sm-6 col-md-4 col-lg-3">
      <div class="card">
        <img class="card-img-top rounded img-fluid" src="../assets/dom-145.jpg" alt="Dom Card image">
        <div class="card-body">
          <p class="card-text">Dominic Santiago</p>
          <p class="card-text">Operations</p>
          <a class="btn btn-primary w-100" href="mailto:dom@go-vetrans.com">Dom@go-vetrans</a>
          <a type="button" class="btn btn-info w-100" href="tel:2538334688">Call Dominic</a>
        </div>
      </div>
    </div>

      <div class="col col-sm-6 col-md-4 col-lg-3">
        <div class="card">
          <img class="card-img-top rounded img-fluid" src="../assets/will-145.jpg" alt="Will Card image">
            <div class="card-body">
              <p class="card-text">Will Reynolds</p>
              <p class="card-text">Driver Operations</p>
              <a class="btn btn-primary w-100" href="mailto:will@go-vetrans.com">Will@go-vetrans</a>
              <a type="button" class="btn btn-info w-100" href="tel:2538334688">Call Will</a>
            </div>
          </div>
        </div>

        <div class="col col-sm-6 col-md-4 col-lg-3">
          <div class="card">
            <img class="card-img-top rounded img-fluid" src="../assets/vince-145.jpg" alt="Card image Vince">
            <div class="card-body">
              <p class="card-text">Vince Santiago</p>
              <p class="card-text">Operations</p>
              <a class="btn btn-primary w-100" href="mailto:vince@go-vetrans.com">Vince@go-vetrans</a>
              <a type="button" class="btn btn-info w-100" href="tel:2538334688">Call Vince</a>
            </div>
          </div>
        </div>

        <div class="col col-sm-6 col-md-4 col-lg-3">
          <div class="card">
            <img class="card-img-top rounded img-fluid" src="../assets/celine-145.jpg" alt="Card image Celine">
            <div class="card-body">
              <p class="card-text">Celine Santiago</p>
              <p class="card-text">Administration</p>
              <a class="btn btn-primary w-100" href="mailto:celine@go-vetrans.com">Celine@go-vetrans</a>
              <a type="button" class="btn btn-info w-100" href="tel:2538334688">Call Celine</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'INDEX',
  data () {
    return {
      msg: 'Contacts'
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

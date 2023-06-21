<template>
  <div>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">Citas</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group me-2">

        </div>

      </div>

    </div>
    <div class="table-responsive" id="reporte">
      <table class="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">N° Documento</th>
            <th scope="col">Nombres</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Ficha</th>

          </tr>
        </thead>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CitasComp'

}
</script>

<style scoped>
.btn1 {
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  height: 7vh;
}
</style>

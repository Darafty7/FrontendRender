<template>
    <!--Reporte generado solo por el profesional psicologo en cuanto a los aprendices que han asisitido a las citas-->
    <div class="col-12 col-md-12 col-xl-12">
      <div class=" d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Reporte</h1>
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
              <th scope="col">Nota</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
  
          </tbody>
        </table>
  
      </div>
  
      <div class="boton">
        <button type="button" class="btn btn-sm btn-outline-secondary">Imprimir</button>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    name: 'ReporteComp'
  }
  </script>
  
  <style scoped>
  @media (max-width: 576.98px) {
    .table-responsive {
      top: 5rem;
    }
  }
  
  @media (max-width: 576.98px) {
    .table {
      top: 5rem;
    }
  }
  
  .btn-group {
    display: inline-block;
  
  }
  
  button {
  
    font-weight: 400;
    line-height: 1.5;
    height: 7vh;
  }
  
  .boton .btn {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    height: 7vh;
  }
  </style>
  
  
  
  
<template>
    <div class="encabezado" form="">
       
    </div>
    <div>
    <h1>Comentarios</h1>
    <div class="container">
      <form @submit="postcomentarios()">
        <div class="mb-4">
          <label for="nombre" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="nombre" placeholder="Nombre" />
        </div>
        <div class="mb-4">
          <label for="Correo Electronico" class="form-label">Correo Electronico</label>
          <input type="text" class="form-control" id="correo" placeholder="Correo Electronico" />
        </div>
        <div class="mb-4">
          <label for="comentario" class="form-label">Comentario</label>
          <textarea class="form-control" v-model="newcomen.comentario">Comentario</textarea>
          <p></p>
          <button type="submit" class="btn btn-primary">
            Enviar Comentario
          </button>
        </div>
        <p></p>
      </form>
      <div class="mb-5">
        <label for="comentarios" class="form-label">Comentario Publicado</label>

        <tr v-for="comentario in comentarios" v-bind:key="comentario.id_Comentarios">
          <td class="form-control" id="comentarios" rows="4">
            {{ comentario.nombre }} {{ comentario.comentario }}
          </td>
        </tr>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
    name: 'ComentariosComp',
    data() {
    return {
      comentarios: [],
      newcomen: { comentario: " " },
    };
  },
  mounted() {
    this.getuser();
  },
  methods:{
    async getuser() {
      await this.axios
        .get("http://localhost:4000/api/comentario")
        .then((response) => {
          this.comentarios = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    postcomentarios() {
      if (!this.newcomen.comentario) {
        this.$swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Por favor, completa todos los campos.",
        });
      } else {
        axios
          .post("http://localhost:4000/api/comentario", this.newcomen)
          .then((response) => {
            console.log(response.data);

            this.$swal.fire({
              position: "top-center",
              icon: "success",
              title: "Comentario creado correctamente.",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            console.error(error);

            this.$swal.fire({
              icon: "error",
              title: "Oops...",
              text: "No se pudo crear el comentario correctamente.",
            });
          });
      }
    }




  }
}
</script>

<style scoped></style>
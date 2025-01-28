<template>
  <v-container>
  <v-row>
  <v-col v-for="curso in cursos" :key="curso.id" cols="12" sm="8" md="6" lg="4">
  <v-card width="400">
  <v-img height="200px" :src="curso.img" contain>
  </v-img>
   
            <v-card-text>
  <div class="font-weight-bold ml-8 mb-2">
                {{curso.nombre}}
  <br>
  <span>Información:</span>
  </div>
   
              <v-timeline align-top dense>
  <v-timeline-item color="purple" small>
  <div>
  <div class="font-weight-normal">
  <span>Costo: </span><strong>${{ curso.costo}}</strong>
  </div>
  <div> <span>Duración: </span>{{ curso.duracion }}</div>
  </div>
  </v-timeline-item>
  <v-timeline-item color="green" small>
  <div>
  <div class="font-weight-normal">
  <span>Cupos: </span> <strong>{{ curso.cupos }}</strong>
  </div>
  <span>Completado: {{ curso.completado ? 'Sí' : 'No' }}</span>
  </div>
  </v-timeline-item>
  <v-timeline-item color="purple" small>
  <div>
  <div class="font-weight-normal">
  <span>Fecha de Registro:</span>
  </div>
  <div>{{ curso.fecha_registro}}</div>
  </div>
  </v-timeline-item>
  <v-timeline-item color="green" small>
  <div>
  <div class="font-weight-normal">
  <span>Descripción:</span>
  </div>
  <div>{{ curso.descripcion}}</div>
  </div>
  </v-timeline-item>
  </v-timeline>
  </v-card-text>
  </v-card>
  </v-col>
  </v-row>
  </v-container>
  </template>

<script>
import { mapState } from "vuex";

export default {
  name: 'HomeComponent',
  props: {
    msg: String
  },
  computed: {
    ...mapState(["cursos"]),
  },
}
</script>

<style lang="scss">

</style>
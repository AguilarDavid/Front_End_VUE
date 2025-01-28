<template>
   <v-container>
    <div class="text-center">
<h1>Administración de Cursos</h1>
<br>
<v-btn color="primary" @click="showForm">agregarCurso</v-btn>
</div>
  <div class="table-container d-md-flex">
   
   
    
        <v-table height="300px" fixed-header class="table ">
          <thead>
            <tr>
              <th class="text-left">Curso</th>
              <th class="text-left">Cupos</th>
              <th class="text-left">Inscritos</th>
              <th class="text-left">Duración</th>
              <th class="text-left">Costo</th>
              <th class="text-left">Terminado</th>
              <th class="text-left">Fecha</th>
              <th class="text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="curso in cursos" :key="curso.id">
              <td>{{ curso.nombre }}</td>
              <td>{{ curso.cupos }}</td>
              <td>{{ curso.inscritos }}</td>
              <td>{{ curso.duracion }}</td>
              <td><span class="common-style">${{ curso.costo }}</span></td>
              <td><span :class="curso.completado ? 'Si' : 'No'">{{ curso.completado ? 'Sí' : 'No' }}</span></td>
              <td><span class="common-style">{{ curso.fecha_registro }}</span></td>
              <td>
                <div class="actions">
                  <i class="fa-solid fa-pencil" style="color: orange" @click="searchCurso(curso.id)"></i>
                  <i class="fa-solid fa-trash" style="color: #f20202;" @click="elminarCurso(curso.id)"></i>
                </div>
              </td>
            </tr>
          </tbody>
        </v-table>
   
      </div>

      <v-alert color="purple" outlined><i class="fa-solid fa-user-group"></i> Cantidad total de alumnos permitidos:
<strong>{{ getTotalCupos }}</strong> alumnos. </v-alert>
<v-alert color="blue" outlined><i class="fa-solid fa-user-check"></i> Cantidad total de alumnos inscritos:
<strong>{{ getAlumnosInscritos }}</strong> </v-alert>
<v-alert color="red" outlined><i class="fa-solid fa-user-plus"></i> Cantidad total de cupos restantes: <strong>{{
        getCuposDisponibles }}</strong> </v-alert>
<v-alert color="pink" outlined><i class="fa-solid fa-ban"></i> Cantidad total de cursos terminados: <strong>{{
        getCursosCompletados }}</strong> </v-alert>
<v-alert color="green" outlined><i class="fa-solid fa-bell"></i> Cantidad total de cursos activos: <strong>{{
        getCursosActivos }}</strong> </v-alert>
<v-alert color="orange" outlined><i class="fa-solid fa-bell fa-shake"></i> Cantidad total de cursos: <strong>{{
        getTotalCursos }}</strong> </v-alert>



    </v-container>
  </template>
   
  <script>
  import { mapState} from 'vuex'
  import { mapGetters } from 'vuex'
   
  export default {
      name: 'AdminComponent',
      computed: {
          ...mapState(['cursos']),
      
      ...mapGetters(['getAlumnosInscritos']),
    ...mapGetters(['getTotalCupos']),
    ...mapGetters(['getCuposDisponibles']),
    ...mapGetters(['getCursosCompletados']),
    ...mapGetters(['getCursosActivos']),
    ...mapGetters(['getTotalCursos']),
      },
      methods: {
        elminarCurso(id) {
          this.$store.dispatch('eliminarCurso', id);
    },
  },
  }
  </script>
   
  <style scoped>

.table-container {
  background: #ede7e7;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
}

.table{

 width: auto;
 border-collapse: collapse;
 border: 1px solid #090202;
}

.table th, .table td {
  border: 1px solid #f0f0f0;
  padding: 8px;

}

.table th {
   text-align: left;
}

.table td {
  text-align: left;
}

.table .actions i {
  cursor: pointer;
  margin-right: 8px;
}

.table .common-style {
  font-weight: bold;
  color: #333;
}

.table .Si {
  color: green;
}

.table .No {
  color: red;
}


  </style>

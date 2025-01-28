<template>
  <v-app>
    <!-- Navbar con menú hamburguesa -->
    <v-app-bar app color="primary" dark>
      <!-- Icono del menú hamburguesa -->
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <!-- Logo y nombre -->
      <v-img
        alt="Logo"
        class="shrink mr-2"
        contain
        src="https://previews.123rf.com/images/captainvector/captainvector1703/captainvector170301312/73848230-diseño-del-logotipo-de-la-universidad.jpg"
        width="40"
      />
      <span class="text-h6 ml-2">Academia Talento IT</span>
      
      <v-spacer></v-spacer>
    </v-app-bar>

    <!-- Menú lateral tipo hamburguesa -->
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
    >
      <v-list>
        <v-list-item-group>
          <v-list-item @click="$router.push('/')">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item @click="$router.push('/admin')">
            <v-list-item-icon>
              <v-icon>mdi-wrench</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Administración</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item @click="$router.push('/cursos')">
            <v-list-item-icon>
              <v-icon>mdi-book</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Cursos</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        <!-- <v-list-item @click="$router.push('/testimonios')">
            <v-list-item-icon>
              <v-icon>mdi-comment</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Testimonios</v-list-item-title>
            </v-list-item-content>
          </v-list-item>  -->
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- Contenido principal -->
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  }
};
</script>

<style scoped>
/* Estilo adicional opcional */
.v-list-item {
  cursor: pointer;
}
</style>

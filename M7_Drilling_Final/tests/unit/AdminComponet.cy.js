import { mount } from '@cypress/vue'
import AdminComponent from '@/components/AdminComponent.vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'

describe('AdminComponent.vue', () => {
  let vuetify
  let store

  beforeEach(() => {
    vuetify = new Vuetify()
    store = new Vuex.Store({
      state: {
        cursos: [
          { id: 1, nombre: 'Curso de Vue', cupos: 30, inscritos: 20, duracion: '3 meses', costo: 100, completado: false, fecha_registro: '06/03/2022' }
        ]
      },
      getters: {
        getTotalCupos: () => 30,
        getAlumnosInscritos: () => 20,
        getCuposDisponibles: () => 10,
        getCursosCompletados: () => 0,
        getCursosActivos: () => 1,
        getTotalCursos: () => 1
      },
      actions: {
        eliminarCurso: cy.spy()
      }
    })
  })

  it('renderiza correctamente los cursos y muestra la tabla', () => {
    mount(AdminComponent, {
      store,
      vuetify
    })
    cy.contains('Administración de Cursos').should('be.visible')
    cy.contains('Curso de Vue').should('be.visible')
    cy.contains('30').should('be.visible')
    cy.contains('20').should('be.visible')
    cy.contains('10').should('be.visible')
  })

  it('debe disparar la acción de eliminar curso al hacer click en el icono de eliminar', () => {
    mount(AdminComponent, {
      store,
      vuetify
    })
    cy.get('.fa-trash').click()
    expect(store.dispatch).to.have.been.calledWith('eliminarCurso', 1)
  })

  it('debe mostrar la cantidad total de alumnos inscritos', () => {
    mount(AdminComponent, {
      store,
      vuetify
    })
    cy.contains('Cantidad total de alumnos inscritos:').should('be.visible')
    cy.contains('20').should('be.visible')
  })
})

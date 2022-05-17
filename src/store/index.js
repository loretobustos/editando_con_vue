import { createStore } from 'vuex'

export default createStore({
    state: {},
    getters: {
        getJuguete: (state) => (id_juguete) => {
            return state.juguetes.find(juguete => juguete.id == id_juguete)
        }
    },
    mutations: {
        ADD_JUGUETE(state, juguete) {
            state.juguetes.push({
                id: juguete.id,
                codigo: juguete.data().codigo,
                nombre: juguete.data().nombre,
                stock: juguete.data().stock,
                precio: juguete.data().precio
            })
        },
        RESET_JUGUETES(state) {
            state.juguetes = []
        }
    },
    actions: {
        fetchJuguetes({ commit }) {
            db.collection('juguete').onSnapshot((snap) => {
                commit('RESET_JUGUETES')
                snap.forEach(doc => {
                    commit('ADD_JUGUETE', doc)
                })
            })



        }
    },
    modules: {}
})
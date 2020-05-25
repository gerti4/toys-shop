import toyService from '../services/toy.service.js';


export default {
    state: {
        toys: [],
        currToy: null,
        filter: {
            name: ''
        }
    },
    mutations: {
        setToys(state, { toys }) {
            state.toys = toys;
        },
        removeToy(state, { id }) {
            var toyIdx = state.toys.findIndex(toy => toy._id === id);
            state.toys.splice(toyIdx, 1);
        },
        setCurrToy(state, { toy }) {
            state.currToy = toy
        },
        editToy(state, { toy }) {            
            var toyIdx = state.toys.findIndex(currToy => currToy._id === toy._id)
            state.toys.splice(toyIdx, 1, toy)
        },
        addToy(state, { toy }) {
            state.toys.unshift(toy);
        },
        setFilter(state, { filter }) {
            state.filter = filter;
        }
    },
    getters: {
        currToy(state) {
            return state.currToy;
        },
        toys(state) {
            var filteredToys = state.toys;
            if (state.filter.name) {
                var regex = new RegExp(`${state.filter.name}`, 'i');
                filteredToys = filteredToys.filter(toy => regex.test(toy.name))
            }
            if(state.filter.sort === 'rank') filteredToys = filteredToys.sort((a,b)=> b.rank-a.rank)
            if(state.filter.sort === 'price') filteredToys = filteredToys.sort((a,b)=> b.price-a.price)
            if(state.filter.sort === 'name') filteredToys = filteredToys.sort((a,b)=> {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            })

            if (state.filter.inStock) filteredToys = filteredToys.filter(toy => toy.inStock)
            if (state.filter.type && state.filter.type !== 'General') filteredToys = filteredToys.filter(toy => toy.type === state.filter.type)
            return filteredToys;
        },
        allToys(state){
            return state.toys
        }    
    },
    actions: {
        loadToys(context) {
            return toyService.query()
                .then(toys => {
                    context.commit({ type: 'setToys', toys })
                })
        },
        removeToy(context, payload) {
            return toyService.remove(payload.id)
                .then(() => {    
                    context.commit({ type: 'removeToy', id: payload.id })
                })

        },
        getToy(context, payload) {
            return toyService.getById(payload.id)
                .then(toy => {
                    context.commit({ type: 'setCurrToy', toy })
                    return toy
                })
        },
        editToy(context, payload) {
            return toyService.edit(payload.toy)
                .then(toy => {
                    context.commit({ type: 'editToy', toy })
                })
        },
        addToy(context, payload) {
            return toyService.add(payload.toy)
                .then(toy => {
                    context.commit({ type: 'addToy', toy })
                    return toy;
                })

        },
        uplaodToyImg(context,payload){            
            return toyService.uploadImg(payload.ev)
                .then(img => img.url)
        }
    }
}
export default {
    data() {
        return {
            searchName: '',
            names: ['Vlad', 'Vova', 'Max', 'Igor']
        }
    },
    computed: {
        filteredNames() {
            return this.names.filter(name => {
                return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
            })
        }
    }
}
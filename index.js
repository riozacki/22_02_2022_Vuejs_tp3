Vue.createApp({
    data() {
        return {
            leNombre: 0,
        };
    },
    methods: {
        increment(number) {
            this.leNombre += number;
        }
    },
    computed: {
        indice() {
            if (this.leNombre == 7) {
                return "Bravo, c'est gagner!";
            } else if (this.leNombre > 7) {
                return 'Tu as dépassé le nbre mystère';
            } else {
                return 'ESSAIE ENCORE';
            }
        }
    },
    watch: {
        leNombre(value) {
            setTimeout(() => {
                this.leNombre = 0;
            }, 5000);
        }
    }

}).mount('#monApp');
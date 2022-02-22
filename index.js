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
            if (value == 7) {
                return "Bravo, c'est gagner!";
            } else if (value > 7) {
                return 'Tu as dépassé le nbre mystère';
            } else {
                return 'ESSAIE ENCORE';
            }
        }
    },
    watch: {
        leNombre(value) {
            if (timer = true) {
                this.leNombre = 0;
            }
        }
    }

}).mount('#monApp');
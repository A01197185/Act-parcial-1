const p5 = Vue.createApp({ 
    data() {
        return{
            nA: false,
            europa: false,
            asia: false,
            oceania: false,
            r1: 'North America',
            r2: 'Europe',
            r3: 'Asia',
            r4: 'Oceania',
            bucl1:[
                { paises:"Canada" },
                { paises:"United States" },
                { paises:'Mexico' },
            ],
            bucl2:[
                { paises:"Germany" },
                { paises:"France" },
                { paises:'Portugal' },
            ],
            bucl3:[
                { paises:"China" },
                { paises:"Korea" },
                { paises:'Japan' },
            ],
            bucl4:[
                { paises:"Australia" },
                { paises:"New Zealand" },
                { paises:'Fiji' },
            ]
        }
    },
    methods: {
        rnA(){
            nA = !nA
        }
    }

});
p5.mount('#p5')

const inputs = Vue.createApp({
    data(){
        return{
        message: ''   
        }
    }
 });
 inputs.mount('#inputs')

const ej6 = Vue.createApp({
    mounted(){
        var today = new Date();
        this.$refs.p.textContent = 'Todays date is ' + today;
    }
}).mount('#ej6')

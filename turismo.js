var p2 = new Vue({ 
    el: '#p5',
    data: {
        nA: false,
        europa: false,
        asia: false,
        oceania: false,
        r1: 'Norte America',
        r2: 'Europa',
        r3: 'Asia',
        r4: 'Oceania',
        bucl1:[
            { paises:"Canada" },
            { paises:"Estados Unidos" },
            { paises:'Mexico' },
        ],
        bucl2:[
            { paises:"Alemania" },
            { paises:"Francia" },
            { paises:'Portugal' },
        ],
        bucl3:[
            { paises:"China" },
            { paises:"Korea" },
            { paises:'Japon' },
        ],
        bucl4:[
            { paises:"Australia" },
            { paises:"Nueva Zelanda" },
            { paises:'Fiji' },
        ]
    }
});
var inputs = new Vue({
    el:'#inputs',
    data:{
        message: ''
    }
 });

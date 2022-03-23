var app = new Vue({ 
    el: '#app',
    data: {
        app: 'pasatiempos'
    }
});
var p2 = new Vue({ 
    el: '#p5',
    data: {
        spoilers: false,
        
        bucl:[
            { hobies:"Video Juegos" },
            { hobies:"Programar" },
            { hobies:'Patinar' },
            { hobies:"Aprender Japones" },
            { hobies:"Robotica" },
        ]
    }
});
var inputs = new Vue({
    el:'#inputs',
    data:{
        message: ''
    }
 });
 var imag = new Vue({
    el: '#imag',
    data:{
        desc: 'Esta es una foto mia',
        alabel: 'foto del dueño de la pagina',
        imag:'https://cdn.discordapp.com/attachments/629532011148607499/931379101833527366/20220113_204305.jpg'
    },
});

const checarTiempo = ( parametro ) => {
    if( parametro < 10 ) {
        parametro = "0" + parametro
    }
    return parametro
}

const MostrarHoraPais = ( hora , maxHora , aumento , disminuirA , disminuirB ) => {
    if( hora > maxHora ){
       return hora + aumento - disminuirA
    }else {
       return hora + aumento - disminuirB
    }
}

const RevisarAmPm = ( hora , aumento  ) => {
    if( hora + aumento >= 12 && hora + aumento <= 23 ){  
        return "<span> P.M. </span>"
    }else {
       return "<span> A.M. </span>"
    }
}



// esta seria la forma de hacerlo con classes

/* class Pais {
    constructor( hora , maxHora , aumentar , disminuir ){
        this.hora = hora;
        this.maxHora = maxHora;
        this.aumentar = aumentar;
        this.disminuir = disminuir;
    }
    get mostrarHora(){
        return this.calcularHora()
    }
    calcularHora(){
        if( this.hora > this.maxHora ){
            this.hora = this.hora + this.aumentar - this.disminuir
        }else{
            this.hora = this.hora + this.aumentar
        }
        return this.hora
    }

} */

const Reloj = () => {
    let dia = new Date()
    let hr = dia.getHours()
    let min = dia.getMinutes()
    let sec = dia.getSeconds()

    let AmPm = RevisarAmPm( hr , 0 )


    hr = MostrarHoraPais( hr , 12 , 0 , 12 , 0 )
    //hr = ( hr > 12 ) ? hr - 12 : hr forma simple

    hr = checarTiempo(hr)
    min = checarTiempo(min)
    sec = checarTiempo(sec)


    let contenedorHora = document.querySelector('.horas').innerHTML = hr
    let contenedorMinutos = document.querySelector('.minutos').innerHTML = min
    let contenedorSegundos = document.querySelector('.segundos').innerHTML = sec
    let contenedorAmPm = document.querySelector('.ampm').innerHTML = AmPm

    const tiempo = setTimeout(() => {
        Reloj()
    }, 1000)
   
}   

Reloj()

const RelojEspaña = () => {
    let dia = new Date()
    let hr = dia.getHours() 
    let min = dia.getMinutes()
    let sec = dia.getSeconds()

    
    let AmPm = RevisarAmPm( hr , 7 )

 
    
    hr = MostrarHoraPais( hr , 17 , 7 , 24 , 12 )
    //hr = ( hr > 17 ) ? hr + 7 - 24 : hr + 7 - 12 forma simple

    

     
   

    hr = checarTiempo(hr)
    min = checarTiempo(min)
    sec = checarTiempo(sec)

    let contenedorHora = document.querySelector('.horas_españa').innerHTML = hr
    let contenedorMinutos = document.querySelector('.minutos_españa').innerHTML = min
    let contenedorSegundos = document.querySelector('.segundos_españa').innerHTML = sec
    let contenedorAmPm = document.querySelector('.ampm_españa').innerHTML = AmPm

    setTimeout(() =>{
        RelojEspaña()
    },1000)

}

RelojEspaña()

const RelojChina = () => {

    let dia = new Date()
    let hr = dia.getHours()
    let min = dia.getMinutes()
    let sec = dia.getSeconds()

    let AmPm = RevisarAmPm( hr , 14 )
    
    hr = MostrarHoraPais( hr , 10 , 14 , 24 , 12 )
    //hr = ( hr > 10 ) ? hr + 14 - 24 : hr + 14 - 12 forma simple


    hr = checarTiempo(hr)
    min = checarTiempo(min)
    sec= checarTiempo(sec)

    let contenedorHora = document.querySelector('.horas_china').innerHTML = hr
    let contenedorMinutos = document.querySelector('.minutos_china').innerHTML = min
    let contenedorSegundos = document.querySelector('.segundos_china').innerHTML = sec
    let contenedorAmPm = document.querySelector('.ampm_china').innerHTML = AmPm

    setTimeout(() => {
        RelojChina()
    }, 1000)


}
RelojChina()

const manejarClick = () => {
    let boton = document.querySelector(".boton")

    const cambiarColor = () => {
        let contenedor = document.querySelector(".contenedor")
        contenedor.classList.toggle('contenedor_color')
        
    }

    boton.addEventListener( 'click' , cambiarColor)
}

manejarClick()


const sketchCurso = () => {
   const canvas = document.querySelector('.canvas')
   canvas.width = 300
   canvas.height = 300
   canvas.style.boxShadow = ' 0 0 3px 0 #000'

    const ctx = canvas.getContext('2d')

    ctx.fillStyle = 'blue'
    ctx.strokeStyle = 'blue'
    // Set line width
    ctx.lineWidth = 10;

    // Wall
    ctx.strokeRect(75, 140, 150, 110);

    // Door
    ctx.fillRect(130, 190, 40, 60);

    // Roof
    ctx.beginPath();
    ctx.moveTo(50, 140);
    ctx.lineTo(150, 60);
    ctx.lineTo(250, 140);
    ctx.closePath();
    ctx.stroke();

}

sketchCurso()
function mReloj() {
    //Declaración del objeto
    momentoActual = new Date()
    //Asignación de las variables            
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    //Validación de las variables
    str_segundo = new String(segundo)
    if (str_segundo.lenght == 1)
        segundo = "0" + segundo

    str_minuto = new String(minuto)
    if (str_minuto.lenght == 1)
        minuto = "0" + minuto

    str_hora = new String(hora)
    if (str_hora.lenght == 1)
        hora = "0" + hora

    horaimprimible = hora + " : " + minuto + " : " + segundo
    document.form_reloj.reloj.value = horaimprimible
    setTimeout("mReloj()", 1000)
}
const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification.requestPermission()
    .then(res => {
        console.log("🚀 ~ notificarBtn.addEventListener ~ res:", res)
    
    })
})

const verNotificacionBtn=document.querySelector('#verNotificacion');
verNotificacionBtn.addEventListener('click',()=>{
    if(Notification.permission==='granted'){
        new Notification('Esta es la notificacion',{
            icon:'img/ccj.png',
            body:'WEnas'
        })
    }
})
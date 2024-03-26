const { createApp, ref } = Vue

createApp({
    data() {
        return {
            /* COLORA DI ROSSO IL TITOLO */
            red: "text-danger",
            /* MOSTRA IL MESSAGGIO A SCHERMO */
            messaggio: 'Prima volta con Vue',
            /* MOSTRA IMMAGINE A SCHERMO */
            immagine: 'https://cdn.smehost.net/sonymusicit-itprod/wp-content/uploads/2016/05/Nitro-Suicidol-Post-Mortem-news.jpg'
        }
  }
}).mount('#app')

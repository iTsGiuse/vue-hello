/* Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data. */

const { createApp, ref } = Vue

createApp({
    data() {
        return {
            messaggio: 'Prima volta con Vue',
            red: "text-danger",
            immagine: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sonymusic.it%2Fnews%2Fnitro-lalbum-suicidol-e-disco-doro%2F&psig=AOvVaw0s5NFaAp4npU7Z7EAHRpUY&ust=1711552662066000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj1mNWckoUDFQAAAAAdAAAAABAE'
        }
  }
}).mount('#app')

/* Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data. */
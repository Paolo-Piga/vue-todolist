const app = Vue.createApp({
    data(){
        return{
            activities: [
                {text: `andare al cinema`, done: false },
                {text: `comprare il latte`, done: false },
            ],
            newActiv: ``,
        
        }
    },
    methods: {
        aggiungi() {
            this.activities.push({ text: this.newActiv, done: flase });
            this.newActiv = ``;
        }
    }
})
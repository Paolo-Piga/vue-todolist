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
            this.activities.push({ text: this.newActiv, done: false });
            this.newActiv = ``;
        },
        rimuovi(index) {
            this.activities.splice(index, 1)
        },
        fatto(index) {
            this.activities[index].done = !this.activities[index].done
        }
    }
}).mount(`#app`);
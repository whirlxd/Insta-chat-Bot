const InstaApi = require('@androz2091/insta.js')
const Ai = require('alexa-bot-api');
const lol = new Ai();
const nubs = new InstaApi.Client();
const Main = require('./index.js')
const Init = new Main();




Init.login('ur user acc' , 'ur pass' , nubs);
nubs.on('connected' , () => {
    console.log("HI! I am ready to act weird cuz lul why not ?")
})
nubs.on('messageCreate', async (noturmessage) => {
Init.manageMessage(noturmessage , lol);
})

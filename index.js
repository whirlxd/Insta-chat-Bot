module.exports = class InstaApi{
async manageMessage(message, bot) {
if(message.content == null && message.content == ''){
  return  message.chat.sendMessage('Hi nubs but ill just del ur message ');
};
return message.chat.sendMessage(await bot.getReply(message.content));
};
async login(username , password , Instance){
 Instance.login(username , password);
}
}
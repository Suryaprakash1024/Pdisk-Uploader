const TelegramBot = require('node-telegram-bot-api');
const https = require('https');
const request = require('request');
const express = require("express");

const token = '1876216085:AAErhJV1_cwtX2vic16baoHvWOZQZ7n2e3w';
const bot = new TelegramBot(token, { polling: true });

const dev = process.env.NODE_ENV !== "production";
const allowWeb = !process.env.DISABLE_WEB;
const PORT = parseInt(process.env.PORT, 10) || 3000;

const server = express();

bot.on('message', msg => {
  //anything
  var hi = "hi";
if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
bot.sendMessage(msg.chat.id,"Hello dear user");
} 
    
var bye = "bye";
if (msg.text.toString().toLowerCase().includes(bye)) {
bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
} 
else
    {
//linkscrapper
   // var password = "up"
//if(msg.text.toString().toLowerCase().indexOf(password) === 0){
   // bot.sendMessage(msg.chat.id,"Send Me DDL");
    //bot.on('message', msg1 => {
        link = msg.text.toString();
        link = link.substring(22,link.dlength);
        //bot.sendMessage(msg.chat.id,link);
        const ModLink=link.split('/');
        var movieTitle = ModLink[4].substring(0,ModLink[4].length - 4);
        //bot.sendMessage(msg.chat.id,link);
        const url = 'http://pdisk.net/api/ndisk_manager/video/create?link_type=link&content_src='+link+'&source=2000&uid=51081852&title='+movieTitle+'&description=Follow_@moviesnew24_for_more_movies';
        //bot.sendMessage(msg.chat.id,url);
        
        //Web Req--
        request(url, { json: true }, (err, res, body) => 
                {
                  if (err) { return console.log(err); }
                    var id = body.data.item_id;
            bot.sendMessage(msg.chat.id,'https://pdisk.net/share-video?videoid='+id);
                  //console.log(body.explanation);
                });
        console.log('https://pdisk.net/share-video?videoid='+id);
        bot.sendMessage(msg.chat.id,'https://pdisk.net/share-video?videoid='+id);
        
      // bot.sendMessage(msg.chat.id,movieTitle + " is Uploading..."); 

}
});

server.listen(PORT, () => {
  console.log(`> Running on http://localhost:${PORT}`);
});

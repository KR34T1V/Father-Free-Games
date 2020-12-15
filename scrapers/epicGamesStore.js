const rp = require('request-promise');
const url = 'https://www.epicgames.com/store/en-US/free-games';
const $ = require('cheerio');
const telegram = require('../bots/telegramBot');

rp(url)
  .then((html)=>{
    $('section [href]', html).each((index, bundle)=>{
      console.log(bundle.attribs)
    })
    // $('a', html).attr('aria-label').each((index, bundle)=>{
    //   let title = bundle.children[0].data
    //   let link = bundle.attribs.href
    //   if (!link.includes('gaming.amazon.com') && !title.includes('Prime Gaming')){
    //     telegram.broadcast(link);
    //   }
    // })
  }).catch((err)=>console.log(err))
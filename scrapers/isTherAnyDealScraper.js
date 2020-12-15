const rp = require('request-promise');
const url = 'https://isthereanydeal.com/';
const $ = require('cheerio');
const telegram = require('../bots/telegramBot');

rp(url)
  .then((html)=>{
    $('.giveaway', html).find('.bundle-title > a').each((index, bundle)=>{
      let title = bundle.children[0].data
      let link = bundle.attribs.href
      if (!link.includes('gaming.amazon.com') && !title.includes('Prime Gaming')){
        telegram.broadcast(link);
        console.log(link);
      }
    })
  }).catch((err)=>console.log(err))
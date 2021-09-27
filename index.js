const request = require('request-promise');
const cheerio = require('cheerio');
let $;
const addr = 'https://en.wikipedia.org/wiki/British_nuclear_tests_at_Maralinga';


function sampleFunc() {
  request(addr, (error, response, html) => {
    if(!error && response.statusCode == 200) {
      $ = cheerio.load(html);
      const col = $('p');
      console.log(col);
    };
    if(error){
      console.log('================ there was an error! ================')
      console.log(error);
    }
  });
}

sampleFunc();





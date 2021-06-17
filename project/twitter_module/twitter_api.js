

const axios = require("axios");
const {TWITTER_TOKEN}=require("../config");

async function query(text) {

    const tweet= await axios.get('https://api.twitter.com/2/tweets/search/recent', {
        headers: {
             Authorization: `Bearer ${TWITTER_TOKEN}`
        } ,
     params: {query:text} 
    });

    return tweet.data;

}

module.exports={query};
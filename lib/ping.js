import fetch from 'node-fetch';
import 'dotenv/config'
          
const response = await fetch('https://api.uptimerobot.com/v2/getMonitors', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'cache-control': 'no-cache',
        'api-key': process.env.KEY,
        'format': 'json',
        'logs': '1'
    },
    body: `api_key=${process.env.KEY}&format=json&logs=1`
}).then(res => res.json())
// console.log(response.monitors[0].status === 2 ? 'Online' : 'Offline');

if (response.monitors[0].status === 2) {
    // message.guild.channels.find("name", "general").setName("Testing"); 
    // <Working on it>
}
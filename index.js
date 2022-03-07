import { Client, Intents } from "discord.js";
import "dotenv/config";
import { pingMonitor } from "./lib/ping.js";
const token = process.env.TOKEN;
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once("ready", async () => {
  console.log("Ready!");
  setInterval(async () => {
    const response = await pingMonitor();
    if (response.monitors[0].status === 2) {
      // change it with the server status channel
      if (
        client.channels.cache.get("926071148872093726").name !==
        "🟢-kekbot-status"
      ) {
        client.channels.cache
          .get("926071148872093726")
          .setName("🟢-kekbot-status");
      }
    } else {
      if (
        client.channels.cache.get("926071148872093726").name !==
        "🔴-kekbot-status"
      ) {
        client.channels.cache
          .get("926071148872093726")
          .setName("🔴-kekbot-status");
      }
    }
  }, 5 * 60 * 1000);
});
client.login(token);

import "dotenv/config";
import fetch from "node-fetch";

export const pingMonitor = async () => {
  return await fetch("https://api.uptimerobot.com/v2/getMonitors", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "cache-control": "no-cache",
      "api-key": process.env.KEY,
      format: "json",
      logs: "1",
    },
    body: `api_key=${process.env.KEY}&format=json&logs=1`,
  }).then((res) => res.json());
};

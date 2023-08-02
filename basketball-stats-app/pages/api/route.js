import puppeteer from "puppeteer";
import Scraper from "../../utils/scraper.js";

export default async function handler(req, res) {
  let scraper = new Scraper();
  let stats = await scraper.getStats();
  // console.log(stats);
  res.status(200).json({ stats });
}

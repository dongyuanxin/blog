const cron = require("node-cron");
const execa = require("execa");
const path = require("path");

cron.schedule("30 23 * * *", () => {
    execa(path.join(__dirname, "cronjob.sh")).stdout.pipe(process.stdout);
});

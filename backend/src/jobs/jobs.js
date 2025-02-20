import cron from "node-cron";

import { serviceExpirationReminderJob } from "./modules/services.jobs.js";

export const scheduleCronJobs = () => {
  //? scheduled tasks to be done at 9 in the morning.
  cron.schedule("0 9 * * *", async () => {
    console.log("Executing scheduled tasks for 9 in the morning.");
    await serviceExpirationReminderJob();
  });
};
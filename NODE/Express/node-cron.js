import cron from 'node-cron'

cron.schedule('* * * * *',()=>{
    console.log('Running this task every minutes', new Date().toLocaleString())
})


// Minute	0 - 59
// Hour	0 - 23
// Day of Month	1 - 31
// Month	1 - 12 (or names)
// Day of Week	0 - 7 (0 or 7 are Sunday)

// 0 0 * * *    : Runs exactly at midnight every day.
// */5 * * * *  : Runs every 5 minutes.
// 0 9 * * 1-5  : Runs at 9:00 AM every Monday through Friday.
// 0 12 1 * *   : Runs at noon on the first day of every month.
// 0 10 * * 1,3 : Runs at 10 am every monday and wednesday.



// advanced 

const task = cron.schedule('0 0 * * *', () => {
  console.log('Daily Backup Started');
}, {
  scheduled: false, // Don't start automatically
  timezone: "America/New_York" // Specify a timezone
});

// Start the job manually
task.start();

// Stop the job later
// task.stop();
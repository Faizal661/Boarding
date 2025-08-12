const today = new Date();

// Get Methods
console.log("getDate():", today.getDate());
console.log("getDay():", today.getDay());
console.log("getFullYear():", today.getFullYear());
console.log("getHours():", today.getHours());
console.log("getMilliseconds():", today.getMilliseconds());
console.log("getMinutes():", today.getMinutes());
console.log("getMonth():", today.getMonth());
console.log("getSeconds():", today.getSeconds());
console.log("getTime():", today.getTime());
console.log("getTimezoneOffset():", today.getTimezoneOffset());

// UTC Get Methods
console.log("getUTCDate():", today.getUTCDate());
console.log("getUTCDay():", today.getUTCDay());
console.log("getUTCFullYear():", today.getUTCFullYear());
console.log("getUTCHours():", today.getUTCHours());
console.log("getUTCMilliseconds():", today.getUTCMilliseconds());
console.log("getUTCMinutes():", today.getUTCMinutes());
console.log("getUTCMonth():", today.getUTCMonth());
console.log("getUTCSeconds():", today.getUTCSeconds());

// Set Methods (These modify the date object, so be careful!)
// Example: Setting the date to the 15th
today.setDate(15);
console.log("setDate(15):", today.toDateString());

// Example: Setting the full year to 2026
today.setFullYear(2026);
console.log("setFullYear(2026):", today.toDateString());

// Formatting Methods
console.log("toDateString():", today.toDateString());
console.log("toISOString():", today.toISOString());
console.log("toJSON():", today.toJSON());
console.log("toLocaleDateString():", today.toLocaleDateString());
console.log("toLocaleString():", today.toLocaleString());
console.log("toLocaleTimeString():", today.toLocaleTimeString());
console.log("toString():", today.toString());
console.log("toTimeString():", today.toTimeString());
console.log("toUTCString():", today.toUTCString());

// Static Methods (called on the Date object, not the instance)
console.log("Date.now():", Date.now());
console.log("Date.parse('15 Aug 2025'):", Date.parse('15 Aug 2025'));
console.log("Date.UTC(2025, 7, 15):", Date.UTC(2025, 7, 15));
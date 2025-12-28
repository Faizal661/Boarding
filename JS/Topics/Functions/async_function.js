// Functions marked with async that return a Promise. 
// They allow the use of await to pause execution for asynchronous tasks. 


async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  return response.json();
}

async function fetchWithLimit(urls, limit, retries) {
  const results = new Array(urls.length);
  let currentIndex = 0;

  async function fetchWithRetry(url, attempts) {
    for (let i = 0; i <= attempts; i++) {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return await res.json();
      } catch (err) {
        if (i === attempts) return `Failed after ${attempts + 1} attempts: ${err.message}`;
      }
    }
  }

  async function worker() {
    while (currentIndex < urls.length) {
      const idx = currentIndex++;
      const url = urls[idx];
      results[idx] = await fetchWithRetry(url, retries);
    }
  }

  const workers = Array.from({ length: limit }, () => worker());  
  await Promise.all(workers);

  return results;
}

const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/404", // invalid
];

fetchWithLimit(urls, 2, 2).then(console.log);

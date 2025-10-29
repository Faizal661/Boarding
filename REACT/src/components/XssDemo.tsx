import { useEffect, useState } from "react";

const fetchingData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'Malicious User <img src=x onerror=alert("XSS_Confirmed_via_Image!");>',
        review: "Great service! Would recommend.",
      });
    }, 2000);
  });
};

const XssDemo = () => {
  const [data, setData] = useState({
    name: "Loading...",
    review: "Loading...",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const fetchedData = (await fetchingData()) as {
          name: string;
          review: string;
        };
        setData(fetchedData);
        setLoading(false);
      } catch {
        alert("error while fetching data...");
        setLoading(false);
      }
    };
    fetch();
  }, []);

  if (loading) {
    return <h2>Fetching data... </h2>;
  }

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h1 style={{ fontWeight: "bolder", marginBottom: "20px" }}>
        XSS Demonstration in React
      </h1>

      <h2>1. SAFE Rendering (Standard React Behavior)</h2>
      <div
        style={{
          border: "2px solid green",
          padding: "15px",
          backgroundColor: "#eff",
          marginBottom: "20px",
        }}
      >
        <p>
          Reviewer Name (Safe):
          <span>{data.name}</span>
        </p>
        <p>Review Content: {data.review}</p>
      </div>

      <hr />

      <h2>2. VULNERABLE Rendering (Using dangerouslySetInnerHTML)</h2>
      <div
        style={{
          border: "2px solid red",
          padding: "15px",
          backgroundColor: "#fee",
          marginTop: "20px",
        }}
      >
        <p>
          Reviewer Name (Vulnerable):
          <span dangerouslySetInnerHTML={{ __html: data.name }} />
        </p>
        <p>Review Content: {data.review}</p>
      </div>
    </div>
  );
};

export default XssDemo;

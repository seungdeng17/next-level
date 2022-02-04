export default function test() {
  const handleGET = async () => {
    const res = await fetch(
      "http://localhost:5000/api/get?name=get&number=100"
    );
    const json = await res.json();
    console.log(json);
  };

  const handlePOST = async () => {
    const res = await fetch("http://localhost:5000/api/post", {
      method: "POST",
      body: JSON.stringify({ name: "this is this", number: 100 }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await res.json();
    console.log(json);
  };

  const handlePUT = async () => {
    const res = await fetch("http://localhost:5000/api/put", {
      method: "PUT",
      body: JSON.stringify({ name: "put", number: 100 }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await res.json();
    console.log(json);
  };

  const handleGETWithHeader = async () => {
    const res = await fetch(
      "http://localhost:5000/api/header/get?name=get&number=100",
      {
        headers: {
          "Access-Control-Request-Private-Network": "true",
        },
      }
    );
    const json = await res.json();
    console.log(json);
  };

  const handlePOSTWithHeader = async () => {
    const res = await fetch("http://localhost:5000/api/header/post", {
      method: "POST",
      body: JSON.stringify({ name: "post", number: 100 }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Private-Network": "true",
      },
    });
    const json = await res.json();
    console.log(json);
  };

  const handlePUTWithHeader = async () => {
    const res = await fetch("http://localhost:5000/api/header/put", {
      method: "PUT",
      body: JSON.stringify({ name: "put", number: 100 }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Private-Network": "true",
      },
    });
    const json = await res.json();
    console.log(json);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "10%",
        height: 300,
        justifyContent: "space-around",
        margin: "0 auto",
      }}
    >
      <button onClick={handleGET}>GET</button>
      <button onClick={handlePOST}>POST</button>
      <button onClick={handlePUT}>PUT</button>

      <button onClick={handleGETWithHeader}>GET with header</button>
      <button onClick={handlePOSTWithHeader}>POST with header</button>
      <button onClick={handlePUTWithHeader}>PUT with header</button>
    </div>
  );
}

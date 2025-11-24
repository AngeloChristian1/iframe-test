export default function DemoTest() {
  const demoUrl = process.env.NEXT_PUBLIC_DEMO_URL;

  return (
    <html>
      <body style={{ fontFamily: 'Arial', padding: '20px' }}>
        <h2>Demo Environment – Clickjacking Protection Test</h2>
        <p><strong>URL:</strong> {demoUrl}</p>

        <p style={{ maxWidth: '600px', lineHeight: '1.6' }}>
      <strong>Expected behaviour:</strong><br />
      Demo currently has <strong>clickjacking protection DISABLED</strong>.  
      This means the page <strong>should load normally</strong> inside an iframe.
      <br /><br />
      ✔ If the login page appears inside the iframe, this is expected for now.<br />
      ✘ If it does NOT load or is blocked, protection is active when it should NOT be.
    </p>

    <iframe
      src={demoUrl}
      width="1000"
      height="800"
      style={{ border: "2px solid red", marginTop: "20px" }}
    ></iframe>
  </body>
</html>
  );
}

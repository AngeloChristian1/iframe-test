export default function StagingTest() {
  const stagingUrl = process.env.NEXT_PUBLIC_STAGING_URL;

  return (
<html>
  <body style={{ fontFamily: 'Arial', padding: '20px' }}>
    <h2>Staging Environment – Clickjacking Protection Test</h2>
    <p><strong>URL:</strong> {stagingUrl}</p>

    <p style={{ maxWidth: '600px', lineHeight: '1.6' }}>
      <strong>Expected behaviour:</strong><br />
      Staging currently has <strong>clickjacking protection ENABLED</strong>.  
      This means the page <strong>should be blocked</strong> when loaded inside an iframe.
      <br /><br />
      ✔ If the page is blocked or shows an error, protection is working as expected.<br />
      ✘ If it loads normally inside the iframe, protection is not active when it should be.
    </p>

    <iframe
      src={stagingUrl}
      width="1000"
      height="800"
      style={{ border: "2px solid red", marginTop: "20px" }}
    ></iframe>
  </body>
</html>

  );
}

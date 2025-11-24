import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-gray-800 shadow-xl rounded-xl p-8 border border-gray-700">
        <h1 className="text-2xl font-bold text-white mb-4">
          Clickjacking Test Dashboard
        </h1>

        <p className="text-gray-300 mb-6 leading-relaxed">
          This dashboard helps verify whether the <strong>Health Connect</strong> platform
          correctly blocks iframe embedding (protecting against clickjacking attacks).
          Use the links below to load the login page in an iframe.
          <br /><br />
          <span className="text-gray-200 font-medium">
            • If the iframe is blocked → the environment is <span className="text-green-400 font-semibold">secure</span>.
            <br />
            • If the iframe loads → the environment is <span className="text-red-400 font-semibold">not protected</span>.
          </span>
        </p>

        {/* Links Section */}
        <div className="space-y-4">
           <a
            href="/dev-test"
            className="block w-full bg-gray-700 hover:bg-gray-600 text-white text-center py-3 rounded-lg font-medium transition"
          >
            Test Dev Environment (https://equilibrium.health-connect.com)
          </a>
          <a
            href="/staging-test"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-medium transition"
          >
            Test Staging (https://demo-organisation.staging.health-connect.com)
          </a>

          <a
            href="/demo-test"
            className="block w-full bg-gray-700 hover:bg-gray-600 text-white text-center py-3 rounded-lg font-medium transition"
          >
            Test Demo (https://demo.health-connect.com)
          </a>
        </div>

        {/* Explanation Section */}
        <div className="mt-8 border-t border-gray-700 pt-6">
          <h2 className="text-lg font-semibold text-white mb-2">
            How to interpret results:
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>
              If the login page <strong className="text-green-400">does not load</strong>,
              clickjacking protection is working.
            </li>

            <li>
              If the login page <strong className="text-red-400">loads normally</strong>,
              protection is missing or disabled.
            </li>

            <li>
              Protection relies on HTTP headers:
              <code className="bg-gray-700 px-1 py-0.5 rounded ml-1 text-sm text-gray-200">
                X-Frame-Options
              </code>
              or
              <code className="bg-gray-700 px-1 py-0.5 rounded ml-1 text-sm text-gray-200">
                Content-Security-Policy: frame-ancestors
              </code>.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

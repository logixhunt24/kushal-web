import SEO from "../components/SEO";

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy | KushalApp"
        description="Learn how KushalApp collects, uses, and safeguards your personal data and privacy milestones."
      />

      <section
        className="relative overflow-hidden py-6 sm:py-6 select-none px-4 sm:px-6 lg:px-4 border-y-2 border-x-0 sm:border-2 border-neutral-200/80 rounded-none sm:rounded-[32px] my-0 sm:my-8 max-w-[1000px] mx-auto shadow-sm"
        style={{
          backgroundColor: "#fcfbfe",
          fontFamily: "var(--kushal-font)",
        }}
      >
        {/* Ambient Light Mode Gradients */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute top-12 left-1/4 w-[550px] h-[350px] rounded-full blur-[130px] opacity-40"
            style={{
              background: "radial-gradient(circle, rgba(147, 51, 234, 0.08) 0%, transparent 80%)",
            }}
          />
          <div
            className="absolute bottom-20 right-1/4 w-[450px] h-[300px] rounded-full blur-[110px] opacity-30"
            style={{
              background: "radial-gradient(circle, rgba(168, 85, 247, 0.06) 0%, transparent 85%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[850px]">
          {/* Header Block */}
          <div className="text-center pb-12 border-b border-neutral-200">
            <h2
              className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6"
              style={{
                fontFamily: "var(--kushal-font)",
                color: "var(--kushal-heading)",
              }}
            >
              <span
                className="block mt-1 transform -rotate-1 hover:rotate-1 transition-transform duration-300 select-none"
                style={{
                  color: "var(--kushal-base)",
                  fontFamily: "var(--kushal-script-font)",
                }}
              >
                Privacy Policy
              </span>
            </h2>
            <p
              className="text-sm font-semibold tracking-wide text-neutral-500"
              style={{ fontFamily: "var(--kushal-secondary-font)" }}
            >
              Last Updated: <span className="text-purple-600">19th February 2026</span>
            </p>
          </div>

          {/* Content Block */}
          <div
            className="pt-12 space-y-10 text-neutral-600 leading-relaxed text-[15px]"
            style={{ fontFamily: "var(--kushal-secondary-font)" }}
          >
            {/* 1. Introduction */}
            <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-neutral-200/60 bg-white/60 backdrop-blur-[2px]">
              <h5 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="text-purple-600 font-mono text-sm">1.</span> Introduction
              </h5>
              <p>
                Welcome to KushalApp. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, 
                disclose, and safeguard your information when you use the KushalApp website and mobile application.
              </p>
              <p>
                By accessing or using our platform, you agree to the terms outlined in this Privacy Policy.
              </p>
            </div>

            {/* 2. Information We Collect */}
            <div className="space-y-4 p-5 sm:p-6 rounded-2xl border border-neutral-200/60 bg-white/60 backdrop-blur-[2px]">
              <h5 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="text-purple-600 font-mono text-sm">2.</span> Information We Collect
              </h5>

              <div className="pl-0 sm:pl-4 space-y-3 mt-2">
                <h6 className="text-[15px] font-bold text-neutral-800 flex items-center gap-2">
                  <span className="text-purple-500 font-mono text-xs">2.1.</span> Information You Provide
                </h6>
                <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                  <li>Full name, email address, and phone number</li>
                  <li>Residential or service location details</li>
                  <li>Profile information and booking details</li>
                  <li>Payment details (processed securely via trusted payment partners)</li>
                  <li>Service provider business details, certifications, and identity verification documents</li>
                </ul>
              </div>

              <div className="pl-0 sm:pl-4 space-y-3 mt-6">
                <h6 className="text-[15px] font-bold text-neutral-800 flex items-center gap-2">
                  <span className="text-purple-500 font-mono text-xs">2.2.</span> Automatically Collected Information
                </h6>
                <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                  <li>Device type, operating system, and browser type</li>
                  <li>IP address and approximate location data</li>
                  <li>App usage statistics and interaction data</li>
                  <li>Cookies and tracking technologies</li>
                </ul>
              </div>
            </div>

            {/* 3. How We Use Information */}
            <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-neutral-200/60 bg-white/60 backdrop-blur-[2px]">
              <h5 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="text-purple-600 font-mono text-sm">3.</span> How We Use Your Information
              </h5>
              <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                <li>To connect users with verified service professionals</li>
                <li>To manage bookings, scheduling, and service fulfillment</li>
                <li>To process payments, refunds, and transactions securely</li>
                <li>To verify service providers and maintain platform trust</li>
                <li>To improve our services and user experience</li>
                <li>To send booking confirmations, updates, and support responses</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            {/* 4. Data Sharing */}
            <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-neutral-200/60 bg-white/60 backdrop-blur-[2px]">
              <h5 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="text-purple-600 font-mono text-sm">4.</span> Sharing of Information
              </h5>
              <p>
                KushalApp does not sell your personal data. We may share information only in the following situations:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                <li>Between users and service providers to complete bookings</li>
                <li>With secure third-party payment gateways</li>
                <li>With trusted service partners assisting in operations</li>
                <li>When required by law or government authorities</li>
              </ul>
            </div>

            {/* 5. Data Security */}
            <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-neutral-200/60 bg-white/60 backdrop-blur-[2px]">
              <h5 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="text-purple-600 font-mono text-sm">5.</span> Data Security
              </h5>
              <p>
                We implement appropriate technical and organizational security measures 
                to protect your personal data against unauthorized access, alteration, 
                disclosure, or destruction.
              </p>
            </div>

            {/* 6. User Rights */}
            <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-neutral-200/60 bg-white/60 backdrop-blur-[2px]">
              <h5 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="text-purple-600 font-mono text-sm">6.</span> Your Rights
              </h5>
              <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                <li>You may access and update your personal information at any time.</li>
                <li>You may request deletion of your account and associated data.</li>
                <li>You may opt out of promotional emails and notifications.</li>
              </ul>
            </div>

            {/* 7. Cookies */}
            <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-neutral-200/60 bg-white/60 backdrop-blur-[2px]">
              <h5 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="text-purple-600 font-mono text-sm">7.</span> Cookies & Tracking
              </h5>
              <p>
                KushalApp uses cookies and similar technologies to enhance user experience, 
                analyze traffic, and improve platform performance.
              </p>
            </div>

            {/* 8. Children's Privacy */}
            <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-neutral-200/60 bg-white/60 backdrop-blur-[2px]">
              <h5 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="text-purple-600 font-mono text-sm">8.</span> Children's Privacy
              </h5>
              <p>
                Our services are not intended for individuals under the age of 18. 
                We do not knowingly collect personal information from children.
              </p>
            </div>

            {/* 9. Changes to Policy */}
            <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-neutral-200/60 bg-white/60 backdrop-blur-[2px]">
              <h5 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="text-purple-600 font-mono text-sm">9.</span> Changes to This Privacy Policy
              </h5>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be 
                posted on this page with a revised update date.
              </p>
            </div>

            {/* 10. Contact Us */}
            <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-neutral-200/60 bg-white/60 backdrop-blur-[2px]">
              <h5 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="text-purple-600 font-mono text-sm">10.</span> Contact Us
              </h5>
              <p>
                If you have any questions about this Privacy Policy, please contact us at 
                <a 
                  href="mailto:support@kushalapp.com" 
                  className="text-purple-600 hover:text-purple-500 transition-colors font-semibold underline underline-offset-4"
                >
                  support@kushalapp.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
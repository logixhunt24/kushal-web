// src/pages/RefundPolicy.jsx
import ConditionalWrapper from "../components/layout/ConditionalWrapper";
import SEO from "../components/SEO";

export default function RefundPolicy() {
  return (
    <ConditionalWrapper>
      <SEO
        title="Refund & Cancellation Policy | KushalApp"
        description="Understand the terms, timelines, and guidelines regarding booking cancellations and refund requests on KushalApp."
      />

      <section
        className="relative overflow-hidden py-16 sm:py-24 select-none px-4 sm:px-6 lg:px-8 border-y-2 border-x-0 sm:border-2 border-neutral-200/80 rounded-none sm:rounded-[32px] my-0 sm:my-8 max-w-[1000px] mx-auto shadow-sm"
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
                Refund Policy
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
            {/* 1. Overview */}
            <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-neutral-200/60 bg-white/60 backdrop-blur-[2px]">
              <h5 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="text-purple-600 font-mono text-sm">1.</span> Overview
              </h5>
              <p>
                This Refund & Cancellation Policy outlines the terms under which users may cancel bookings and request refunds on KushalApp. 
                By using our platform, you agree to this policy.
              </p>
            </div>

            {/* 2. Cancellation by Users */}
            <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-neutral-200/60 bg-white/60 backdrop-blur-[2px]">
              <h5 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="text-purple-600 font-mono text-sm">2.</span> Cancellation by Users
              </h5>
              <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                <li>Users may cancel a booking before the service provider confirms the request without any charges.</li>
                <li>If cancelled after confirmation but before service commencement, cancellation charges may apply depending on the service category.</li>
                <li>Cancellation during or after service delivery may not be eligible for a refund.</li>
              </ul>
            </div>

            {/* 3. Cancellation by Service Providers */}
            <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-neutral-200/60 bg-white/60 backdrop-blur-[2px]">
              <h5 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="text-purple-600 font-mono text-sm">3.</span> Cancellation by Service Providers
              </h5>
              <p>
                If a service provider cancels a confirmed booking, users will receive a full refund of the amount paid for that booking.
              </p>
            </div>

            {/* 4. Refund Eligibility */}
            <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-neutral-200/60 bg-white/60 backdrop-blur-[2px]">
              <h5 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="text-purple-600 font-mono text-sm">4.</span> Refund Eligibility
              </h5>
              <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                <li>Service not delivered as agreed.</li>
                <li>Provider fails to arrive at scheduled time.</li>
                <li>Duplicate payment or technical billing error.</li>
                <li>Verified complaints after investigation by KushalApp support team.</li>
              </ul>
            </div>

            {/* 5. Non-Refundable Cases */}
            <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-neutral-200/60 bg-white/60 backdrop-blur-[2px]">
              <h5 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="text-purple-600 font-mono text-sm">5.</span> Non-Refundable Cases
              </h5>
              <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                <li>Change of mind after service completion.</li>
                <li>Incorrect booking details provided by the user.</li>
                <li>Failure to be present at the service location.</li>
                <li>Partial dissatisfaction without valid proof.</li>
              </ul>
            </div>

            {/* 6. Refund Process */}
            <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-neutral-200/60 bg-white/60 backdrop-blur-[2px]">
              <h5 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="text-purple-600 font-mono text-sm">6.</span> Refund Process
              </h5>
              <p>
                Approved refunds will be processed through the original payment method used at the time of booking.
              </p>
              <p>
                Refunds may take 5–10 business days to reflect in your account, depending on your bank or payment provider.
              </p>
            </div>

            {/* 7. Platform Fees */}
            <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-neutral-200/60 bg-white/60 backdrop-blur-[2px]">
              <h5 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="text-purple-600 font-mono text-sm">7.</span> Platform Fees
              </h5>
              <p>
                Any applicable platform service fee may be non-refundable unless the cancellation is due to provider fault or a technical issue on KushalApp.
              </p>
            </div>

            {/* 8. Dispute Resolution */}
            <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-neutral-200/60 bg-white/60 backdrop-blur-[2px]">
              <h5 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="text-purple-600 font-mono text-sm">8.</span> Dispute Resolution
              </h5>
              <p>
                In case of disputes between users and service providers, KushalApp will review the matter fairly and may request supporting 
                evidence from both parties before making a final decision.
              </p>
            </div>

            {/* 9. Changes to This Policy */}
            <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-neutral-200/60 bg-white/60 backdrop-blur-[2px]">
              <h5 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="text-purple-600 font-mono text-sm">9.</span> Changes to This Policy
              </h5>
              <p>
                KushalApp reserves the right to modify this Refund & Cancellation Policy at any time. Updates will be posted on this page with a revised date.
              </p>
            </div>

            {/* 10. Contact Us */}
            <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-neutral-200/60 bg-white/60 backdrop-blur-[2px]">
              <h5 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="text-purple-600 font-mono text-sm">10.</span> Contact Us
              </h5>
              <p>
                If you have questions about refunds or cancellations, please contact us at{" "}
                <a
                  href="mailto:support@kushalapp.com"
                  className="text-purple-600 hover:text-purple-500 transition-colors font-semibold underline underline-offset-4"
                >
                  support@kushalapp.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ConditionalWrapper>
  );
}
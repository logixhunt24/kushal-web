// src/pages/Terms.jsx
import ConditionalWrapper from "../components/layout/ConditionalWrapper";
import SEO from "../components/SEO";

export default function Terms() {
  return (
    <ConditionalWrapper>
      <SEO
        title="Terms & Conditions | KushalApp"
        description="Review the formal terms, operational guidelines, and legal agreements governing the use of KushalApp."
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
                Terms & Conditions
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
            {/* 1. Acceptance of Terms */}
            <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-neutral-200/60 bg-white/60 backdrop-blur-[2px]">
              <h5 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="text-purple-600 font-mono text-sm">1.</span> Acceptance of Terms
              </h5>
              <p>
                Welcome to KushalApp. By accessing or using our website and mobile application, you agree to be bound by these Terms & Conditions. 
                If you do not agree with any part of these terms, please do not use our services.
              </p>
            </div>

            {/* 2. About KushalApp */}
            <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-neutral-200/60 bg-white/60 backdrop-blur-[2px]">
              <h5 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="text-purple-600 font-mono text-sm">2.</span> About KushalApp
              </h5>
              <p>
                KushalApp is a service marketplace platform that connects customers with independent service professionals across various categories 
                including home services, beauty & wellness, repair services, delivery solutions, and digital services.
              </p>
              <p>
                KushalApp acts as an intermediary platform and is not the direct provider of listed services.
              </p>
            </div>

            {/* 3. User Accounts */}
            <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-neutral-200/60 bg-white/60 backdrop-blur-[2px]">
              <h5 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="text-purple-600 font-mono text-sm">3.</span> User Accounts
              </h5>
              <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                <li>You must provide accurate and complete information when creating an account.</li>
                <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
                <li>You agree to notify us immediately of any unauthorized use of your account.</li>
              </ul>
            </div>

            {/* 4. Service Provider Responsibilities */}
            <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-neutral-200/60 bg-white/60 backdrop-blur-[2px]">
              <h5 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="text-purple-600 font-mono text-sm">4.</span> Service Provider Responsibilities
              </h5>
              <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                <li>Service providers must submit accurate business and identity information.</li>
                <li>Providers are solely responsible for the quality and delivery of their services.</li>
                <li>Providers must comply with all applicable local laws and regulations.</li>
                <li>KushalApp reserves the right to suspend or remove providers violating platform rules.</li>
              </ul>
            </div>

            {/* 5. Bookings and Payments */}
            <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-neutral-200/60 bg-white/60 backdrop-blur-[2px]">
              <h5 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="text-purple-600 font-mono text-sm">5.</span> Bookings and Payments
              </h5>
              <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                <li>All bookings are subject to availability and provider confirmation.</li>
                <li>Payments are processed securely via third-party payment gateways.</li>
                <li>Pricing is determined by service providers and displayed transparently on the platform.</li>
                <li>KushalApp may charge a platform service fee where applicable.</li>
              </ul>
            </div>

            {/* 6. Cancellations & Refunds */}
            <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-neutral-200/60 bg-white/60 backdrop-blur-[2px]">
              <h5 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="text-purple-600 font-mono text-sm">6.</span> Cancellations & Refunds
              </h5>
              <p>
                Cancellation and refund policies may vary depending on the service category and provider. Users are encouraged to review cancellation 
                policies before confirming bookings.
              </p>
              <p>
                Refunds, if applicable, will be processed according to the stated policy and payment method used.
              </p>
            </div>

            {/* 7. Prohibited Activities */}
            <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-neutral-200/60 bg-white/60 backdrop-blur-[2px]">
              <h5 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="text-purple-600 font-mono text-sm">7.</span> Prohibited Activities
              </h5>
              <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                <li>Providing false information or impersonating others.</li>
                <li>Attempting to bypass platform payments.</li>
                <li>Posting harmful, abusive, or illegal content.</li>
                <li>Interfering with platform security or functionality.</li>
              </ul>
            </div>

            {/* 8. Ratings & Reviews */}
            <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-neutral-200/60 bg-white/60 backdrop-blur-[2px]">
              <h5 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="text-purple-600 font-mono text-sm">8.</span> Ratings & Reviews
              </h5>
              <p>
                Users may leave reviews based on genuine service experiences. KushalApp reserves the right to remove reviews that violate our guidelines.
              </p>
            </div>

            {/* 9. Limitation of Liability */}
            <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-neutral-200/60 bg-white/60 backdrop-blur-[2px]">
              <h5 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="text-purple-600 font-mono text-sm">9.</span> Limitation of Liability
              </h5>
              <p>
                KushalApp acts as a platform connecting users and service providers. We are not liable for the acts, errors, omissions, or quality of 
                services provided by independent professionals.
              </p>
              <p>
                Users agree that KushalApp’s liability, if any, shall be limited to the amount paid for the specific service in question.
              </p>
            </div>

            {/* 10. Account Termination */}
            <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-neutral-200/60 bg-white/60 backdrop-blur-[2px]">
              <h5 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="text-purple-600 font-mono text-sm">10.</span> Account Termination
              </h5>
              <p>
                KushalApp reserves the right to suspend or terminate accounts that violate these Terms & Conditions or engage in fraudulent or harmful activities.
              </p>
            </div>

            {/* 11. Changes to Terms */}
            <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-neutral-200/60 bg-white/60 backdrop-blur-[2px]">
              <h5 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="text-purple-600 font-mono text-sm">11.</span> Changes to Terms
              </h5>
              <p>
                We may update these Terms & Conditions from time to time. Continued use of the platform after updates constitutes acceptance of the revised terms.
              </p>
            </div>

            {/* 12. Governing Law */}
            <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-neutral-200/60 bg-white/60 backdrop-blur-[2px]">
              <h5 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="text-purple-600 font-mono text-sm">12.</span> Governing Law
              </h5>
              <p>
                These Terms shall be governed by and interpreted in accordance with the laws of India.
              </p>
            </div>

            {/* 13. Contact Us */}
            <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-neutral-200/60 bg-white/60 backdrop-blur-[2px]">
              <h5 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="text-purple-600 font-mono text-sm">13.</span> Contact Us
              </h5>
              <p>
                If you have any questions regarding these Terms & Conditions, please contact us at{" "}
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
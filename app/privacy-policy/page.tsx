import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Privacy Policy | Study2Passport",
  description: "StudyTo Passport Privacy Policy. Learn how we collect, use, and protect your personal information when using our education consultancy services.",
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      {/* Hero Header */}
      <section className="bg-slate-950 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="uppercase tracking-[3px] text-orange-400 text-sm font-medium mb-3">LEGAL</div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-[-1.5px] leading-none">Privacy Policy</h1>
          <div className="mt-6 text-lg text-slate-300 space-y-1">
            <p><span className="font-medium text-white">Effective Date:</span> November 7, 2025</p>
            <p><span className="font-medium text-white">Institution Name:</span> StudyTo Passport</p>
            <p><span className="font-medium text-white">Location:</span> Dhaka, Bangladesh</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <div className="prose-custom">
          {/* 1. Introduction */}
          <h2>1. Introduction</h2>
          <p>
            StudyTo Passport (“we,” “our,” or “us”) values the privacy of our students, clients, and website visitors. 
            This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you 
            engage with our education consultancy services, visit our website, or contact us through social media or other platforms.
          </p>
          <p>By using our services, you agree to the terms of this Privacy Policy.</p>

          {/* 2. Information We Collect */}
          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>

          <h3>a. Personal Information</h3>
          <ul>
            <li>Full name</li>
            <li>Date of birth</li>
            <li>Contact details (email, phone number, address)</li>
            <li>Passport information (if required for visa processing)</li>
            <li>Academic and professional background</li>
            <li>Application details for universities, scholarships, or visa processes</li>
          </ul>

          <h3>b. Non-Personal Information</h3>
          <ul>
            <li>Browser type, device information, and IP address</li>
            <li>Cookies and usage data for improving our website experience</li>
          </ul>

          {/* 3. How We Use Your Information */}
          <h2>3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and manage education consultancy services</li>
            <li>Assist with university admissions, scholarships, and visa applications</li>
            <li>Communicate updates, offers, and important information</li>
            <li>Respond to inquiries and provide support</li>
            <li>Comply with legal or regulatory requirements</li>
            <li>Improve our website and service experience</li>
          </ul>

          {/* 4. Sharing and Disclosure of Information */}
          <h2>4. Sharing and Disclosure of Information</h2>
          <p>We may share your information, only when necessary and with your consent, with:</p>
          <ul>
            <li>Partner universities, colleges, and educational institutions</li>
            <li>Embassies or visa processing centers</li>
            <li>Authorized agents or sub-consultants working with StudyTo Passport</li>
            <li>Government authorities when required by law</li>
          </ul>
          <p>We do not sell, rent, or trade your personal data to third parties for marketing purposes.</p>

          {/* 5. Data Security */}
          <h2>5. Data Security</h2>
          <p>
            We take reasonable administrative, technical, and physical safeguards to protect your information against 
            unauthorized access, alteration, or disclosure. However, no method of transmission over the Internet or 
            electronic storage is completely secure.
          </p>

          {/* 6. Data Retention */}
          <h2>6. Data Retention</h2>
          <p>
            We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy 
            or as required by law. After this period, information will be securely deleted.
          </p>

          {/* 7. Your Rights */}
          <h2>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction or deletion of your information</li>
            <li>Withdraw consent for data processing (where applicable)</li>
          </ul>
          <p>
            To exercise these rights, contact us at <a href="mailto:info.studytopassport@gmail.com">info.studytopassport@gmail.com</a>.
          </p>

          {/* 8. Cookies Policy */}
          <h2>8. Cookies Policy</h2>
          <p>
            Our website may use cookies to enhance your experience. You can choose to disable cookies in your browser 
            settings, but some site features may not function properly as a result.
          </p>

          {/* 9. Third-Party Links */}
          <h2>9. Third-Party Links</h2>
          <p>
            Our website or social media pages may contain links to external websites. StudyTo Passport is not responsible 
            for the privacy practices or content of those third-party sites.
          </p>

          {/* 10. Updates to This Policy */}
          <h2>10. Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on our website with the 
            updated effective date.
          </p>

          {/* 11. Contact Us */}
          <h2>11. Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
          <div className="not-prose mt-4 p-6 bg-white border border-slate-200 rounded-2xl">
            <div className="font-semibold text-xl tracking-tight mb-3">StudyTo Passport</div>
            <div className="text-slate-600 mb-4">Dhaka, Bangladesh</div>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-slate-500">Email: </span>
                <a href="mailto:info.studytopassport@gmail.com" className="text-orange-600 hover:underline font-medium">
                  info.studytopassport@gmail.com
                </a>
              </div>
              <div>
                <span className="text-slate-500">Phone: </span>
                <a href="tel:+8801741713399" className="text-orange-600 hover:underline font-medium">
                  +8801741713399
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-12 pt-8 border-t text-sm">
          <Link href="/" className="text-orange-600 hover:underline">← Back to home</Link>
        </div>
      </div>
    </div>
  );
}

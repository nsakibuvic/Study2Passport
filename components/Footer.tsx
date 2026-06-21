import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 flex-shrink-0 rounded-full overflow-hidden ring-2 ring-amber-400 bg-zinc-600 shadow-sm">
                <img
                  src="/logo.png"
                  alt="Study2Passport"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="font-semibold text-2xl text-white tracking-tight">Study2Passport</span>
            </div>
            <p className="max-w-sm text-sm text-white leading-relaxed">
              Helping ambitious students secure admissions, funding, and visas for Master's, PhD, and undergraduate programs at top universities worldwide.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a 
                href="https://www.facebook.com/study2passport/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white hover:text-amber-300 transition-colors"
                aria-label="Visit our Facebook page"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
                <span>Facebook • 15k+ followers</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <div className="font-semibold text-white mb-4 tracking-wide text-sm">EXPLORE</div>
            <div className="flex flex-col gap-y-2.5 text-sm">
              <Link href="/services" className="text-white hover:text-amber-300 transition-colors">Core Services</Link>
              <Link href="/services" className="text-white hover:text-amber-300 transition-colors">How We Help</Link>
              <Link href="/blog" className="text-white hover:text-amber-300 transition-colors">Funded Opportunities Blog</Link>
              <Link href="/contact" className="text-white hover:text-amber-300 transition-colors">Free Consultation</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <div className="font-semibold text-white mb-4 tracking-wide text-sm">GET IN TOUCH</div>
            <div className="space-y-3 text-sm">
              <div>
                <div className="text-white text-xs uppercase tracking-widest mb-0.5">Address</div>
                <p className="text-white leading-relaxed">
                  Floor-3, 4 Sobhanbag Rd, Dhaka 1207 (Mohammadia Super Market), Dhaka, Bangladesh, 1204
                </p>
              </div>
              <div>
                <div className="text-white text-xs uppercase tracking-widest mb-0.5">Contact</div>
                <a href="tel:+8801741713399" className="text-white hover:text-amber-300 transition-colors">01741713399</a>
              </div>
              <div>
                <div className="text-white text-xs uppercase tracking-widest mb-0.5">Email</div>
                <a href="mailto:info@study2passport.com" className="text-white hover:text-amber-300 transition-colors">info@study2passport.com</a>
              </div>
              <div>
                <div className="text-white text-xs uppercase tracking-widest mb-0.5">Follow our journey</div>
                <a 
                  href="https://www.facebook.com/study2passport/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-amber-300 transition-colors underline underline-offset-2"
                >
                  facebook.com/study2passport
                </a>
              </div>
              <div className="pt-1 text-xs text-white">
                Online consultations available worldwide • English &amp; other languages
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-y-4 text-xs text-white">
          <div>© {currentYear} Study2Passport. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-x-6">
            <Link href="/privacy-policy" className="text-white hover:text-amber-300 transition-colors underline-offset-2 hover:underline">Privacy Policy</Link>
            <span>Trusted by students across 100+ countries</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

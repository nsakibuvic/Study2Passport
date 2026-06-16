'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Typewriter from '@/components/Typewriter';

export default function LandingPage() {
  const [showBalloon, setShowBalloon] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          setTimeout(() => {
            setShowBalloon(true);
          }, 3000);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 md:pt-24 md:pb-28">
          <div className="grid md:grid-cols-12 gap-x-10 gap-y-12 items-center">
            {/* Text Content - Left */}
            <div className="md:col-span-7">
              <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-medium tracking-[1.5px] mb-6">
                EST. HELPING STUDENTS WORLDWIDE
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.05] mb-6">
                Your Path To<br />Education At Top Universities With Scholarship
              </h1>

              {/* Typewriter animated div */}
              <div className="mb-8 inline-flex items-center px-4 py-2 rounded-xl bg-white/5 border border-white/15 text-amber-300 text-base md:text-lg font-medium tracking-tight shadow-sm">
                <Typewriter 
                  text="Securing Students with Funding Opportunities at Top Universities" 
                  speed={85} 
                />
              </div>
              
              <p className="max-w-2xl text-xl md:text-2xl text-slate-300 font-light tracking-tight mb-10">
                We help Master's, PhD, and undergraduate students secure admissions, 
                fully-funded scholarships, and visas at top universities in the US, Canada, UK, Australia, and beyond.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-base px-8 py-4 shadow-lg shadow-black/30">
                  Book Your Free Consultation
                </Link>
                <Link href="/blog" className="btn-secondary border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-4">
                  Explore Funded Opportunities
                </Link>
              </div>
              <p className="mt-5 text-sm text-zinc-300">Over 15,000 followers on Facebook</p>
            </div>

            {/* Hero Image - Right */}
            <div className="md:col-span-5">
              <img 
                src="/images/LandingPageImg1.jpg" 
                alt="Study2Passport students achieving their study abroad dreams" 
                className="w-full h-auto max-h-[460px] object-cover rounded-2xl shadow-2xl border border-white/10" 
              />
            </div>
          </div>
        </div>
        
        {/* Subtle trust bar */}
        <div className="border-t border-white/10 py-5 bg-black/20">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-sm text-slate-300">
            <div>1000+ Affiliated Universities</div>
            <div>100+ Countries</div>
            <div>Fully Funded Placements</div>
            <div>Recent: PhD Antwerp + Erasmus Mundus</div>
          </div>
        </div>
      </section>

      {/* STATS / CREDENTIALS */}
      <section className="max-w-7xl mx-auto px-6 py-14 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="stat-pill">
            <div className="text-4xl font-semibold tracking-tighter text-amber-500">1000+</div>
            <div className="text-xs font-medium text-slate-600 mt-1 tracking-wide">AFFILIATED UNIVERSITIES</div>
          </div>
          <div className="stat-pill">
            <div className="text-4xl font-semibold tracking-tighter text-amber-500">100+</div>
            <div className="text-xs font-medium text-slate-600 mt-1 tracking-wide">COUNTRIES WORLDWIDE</div>
          </div>
          <div className="stat-pill">
            <div className="text-4xl font-semibold tracking-tighter text-amber-500">15k+</div>
            <div className="text-xs font-medium text-slate-600 mt-1 tracking-wide">FACEBOOK COMMUNITY</div>
          </div>
          <div className="stat-pill">
            <div className="text-4xl font-semibold tracking-tighter text-amber-500">2</div>
            <div className="text-xs font-medium text-slate-600 mt-1 tracking-wide">RECENT FULLY-FUNDED WINS</div>
          </div>
          <div className="stat-pill col-span-2 md:col-span-1 lg:col-span-1">
            <div className="text-4xl font-semibold tracking-tighter text-amber-500">5+</div>
            <div className="text-xs font-medium text-slate-600 mt-1 tracking-wide">STUDENTS IN INTERVIEW STAGE</div>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section ref={sectionRef} className="bg-[#F7F1DE] border-y border-[#E8D9C0]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <div className="uppercase tracking-[2px] text-xs font-semibold text-amber-600 mb-2">PROVEN RESULTS</div>
              <h2 className="section-title text-[#D51C39] animate-tread relative inline-block">Recent Success Stories<span className={`red-balloon absolute -right-6 top-1/2 -translate-y-1/2 ${showBalloon ? 'visible' : ''}`}></span></h2>
            </div>
            <p className="text-[#1E3A5F] max-w-md">Real students. Real fully-funded offers. Real dreams achieved.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Story 1: PhD Antwerp */}
            <div className="card card-hover border-[#D4C5A3] text-[#112E81]">
              <div className="w-full h-80 md:h-[28rem] mb-4 rounded-xl bg-[#EDE4D0] flex items-center justify-center overflow-hidden">
                <img
                  src="/images/University of AntWerp.jpg"
                  alt="University of Antwerp funded PhD scholarship recipient"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="badge badge-phd mb-4 text-[#112E81]">FUNDED PhD</div>
              <h3 className="font-semibold text-2xl tracking-tight mb-1">PhD in Sociology — University of Antwerp, Belgium</h3>
              <p className="text-sm mb-4">Fully Funded • 2025 Intake</p>
              
              <div className="prose-custom text-[15px] text-[#112E81]">
                <p>Our client secured a fully-funded PhD position in Sociology at one of Europe's leading research universities. The package covers tuition, a competitive monthly stipend, and research support.</p>
              </div>
              
              <div className="mt-6 pt-6 border-t border-[#C9B89A] text-sm">
                <div className="font-medium">Key highlights:</div>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                  <li>Competitive funding secured through strategic application positioning</li>
                  <li>Strong research proposal development support</li>
                  <li>Interview preparation that secured the offer</li>
                </ul>
              </div>
            </div>

            {/* Story 2: Erasmus Mundus */}
            <div className="card card-hover border-[#D4C5A3] text-[#112E81]">
              <div className="w-full h-80 md:h-[28rem] mb-4 rounded-xl bg-[#EDE4D0] flex items-center justify-center overflow-hidden">
                <img
                  src="/images/ErasmusMundus.jpg"
                  alt="Erasmus Mundus Joint Master's in Oceanography scholarship recipient"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="badge badge-masters mb-4 text-[#112E81]">ERASMUS MUNDUS</div>
              <h3 className="font-semibold text-2xl tracking-tight mb-1">Erasmus Mundus Joint Master's in Oceanography</h3>
              <p className="text-sm mb-4">Full Scholarship • Multiple European Universities</p>
              
              <div className="prose-custom text-[15px] text-[#112E81]">
                <p>Our student was awarded the prestigious Erasmus Mundus scholarship for a joint Master's degree in Oceanography — an ultra-competitive program spanning leading marine science institutions across Europe.</p>
              </div>

              <div className="mt-6 pt-6 border-t border-[#C9B89A] text-sm">
                <div className="font-medium">Key highlights:</div>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                  <li>Full tuition + living stipend + travel allowance</li>
                  <li>Multi-country mobility program</li>
                  <li>Application strategy that stood out among thousands of global applicants</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 p-5 bg-[#EDE4D0] border border-[#C9B89A] rounded-2xl flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <div>
              <span className="font-semibold text-[#0A2540]">Currently in progress:</span>{" "}
              <span className="text-[#1E3A5F]">5+ students advancing through final interview rounds</span> for top Master's and PhD programs.
            </div>
            <Link href="/contact" className="text-sm font-semibold text-[#1E3A5F] hover:text-[#0A2540] whitespace-nowrap">Join the next cohort →</Link>
          </div>
        </div>
      </section>

      {/* UNDERGRAD + AFFILIATIONS */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-10">
          <div className="lg:col-span-5">
            <div className="uppercase text-xs tracking-[2px] font-semibold text-amber-500 mb-3">UNDERGRADUATE PATHWAYS</div>
            <h2 className="section-title mb-4">Affordable world-class degrees.<br />1,000+ universities. 100+ countries.</h2>
            <p className="text-slate-600 pr-4">
              We partner with leading universities and colleges in the US, Canada, UK, Australia, and many more destinations. 
              Many of our affiliated institutions offer tuition as low as:
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-2xl bg-emerald-50 text-emerald-700 px-5 py-3 text-sm font-semibold border border-emerald-100">From £12,000 / year (UK &amp; Europe)</div>
              <div className="rounded-2xl bg-emerald-50 text-emerald-700 px-5 py-3 text-sm font-semibold border border-emerald-100">From CA$10,000 / year (Canada)</div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card">
                <div className="font-semibold mb-3">Top Destinations We Serve</div>
                <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-sm text-slate-600">
                  <div>United States</div><div>Canada</div><div>United Kingdom</div>
                  <div>Australia</div><div>Germany</div><div>Netherlands</div>
                  <div>Belgium</div><div>Sweden</div><div>France</div><div>Others</div>
                </div>
              </div>
              <div className="card">
                <div className="font-semibold mb-3">What Undergrad Students Receive</div>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Shortlist from 1000+ verified partner institutions</li>
                  <li>• Affordable programs with high ROI</li>
                  <li>• Full application and document support</li>
                  <li>• Scholarship and funding guidance</li>
                  <li>• Visa application assistance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISA SERVICES HIGHLIGHT */}
      <section className="bg-slate-900 text-white py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="text-orange-400 text-xs tracking-[2px] font-semibold mb-3">VISA EXPERTISE</div>
            <h2 className="text-4xl tracking-tighter font-semibold">We don't just get you in — we get you there.</h2>
            <p className="mt-4 text-lg text-slate-300">Comprehensive visa support for Master's, PhD, and undergraduate students, including complex re-applications after rejection.</p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {[
              { title: "Student Visas", desc: "Full preparation for F-1 (USA), Study Permits (Canada), Tier 4 / Student Route (UK), and more." },
              { title: "Rejected Visa Recovery", desc: "Specialized re-application support. We analyze refusal reasons and rebuild stronger cases — many successes." },
              { title: "Visit & Dependent Visas", desc: "Support for visit visas and family/dependent applications, including routes from USA to Europe and other combinations." },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-7">
                <div className="font-semibold tracking-tight text-xl mb-3">{item.title}</div>
                <p className="text-sm text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE HELP — SHORT */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <div className="uppercase tracking-[2px] text-amber-500 text-xs font-semibold mb-3">OUR APPROACH</div>
          <h2 className="section-title">How Study2Passport works with you</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: "01", title: "Discovery Call", desc: "Free consultation to understand your academic goals, budget, and target countries." },
            { step: "02", title: "University & Funding Match", desc: "We curate options from our 1000+ network. We prioritize fully-funded opportunities and affordable high-quality programs." },
            { step: "03", title: "Application to Arrival", desc: "Complete support: documents, personal statements, interview prep, scholarship applications, and full visa process." },
          ].map((item) => (
            <div key={item.step} className="card">
              <div className="text-amber-500 font-mono text-sm tracking-[3px]">{item.step}</div>
              <div className="font-semibold text-xl mt-4 mb-2 tracking-tight">{item.title}</div>
              <p className="text-slate-600 text-[15px]">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/services" className="btn-secondary">See full services & process →</Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#E05454] text-white">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter">Ready to begin your study abroad journey?</h2>
          <p className="mt-4 text-xl text-orange-100">Join hundreds of successful students. Start with a free consultation today.</p>
          
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="inline-flex rounded-full bg-white text-orange-700 hover:bg-slate-100 px-8 py-3.5 font-semibold text-base transition">Book Free Consultation</Link>
            <Link href="https://www.facebook.com/study2passport/" target="_blank" className="inline-flex rounded-full border border-white/40 hover:bg-white/10 px-8 py-3.5 font-semibold text-base transition">Connect on Facebook (15k+)</Link>
          </div>
          <p className="text-xs text-orange-200 mt-6 tracking-wide">No obligation • Personalized advice • Results-driven</p>
        </div>
      </section>
    </div>
  );
}

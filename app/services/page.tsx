import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Header */}
      <section className="bg-slate-950 text-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="uppercase tracking-[3px] text-orange-400 text-sm font-medium mb-4">WHAT WE OFFER</div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-[-1.5px] leading-none">Core Services &amp;<br />How We Help You Succeed</h1>
          <p className="mt-6 max-w-2xl text-xl text-slate-300">End-to-end support for Master's, PhD, and undergraduate students — from first conversation to your first day on campus.</p>
        </div>
      </section>

      {/* MASTERS & PHD */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20 border-b border-slate-200">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-5/12">
            <div className="sticky top-24">
              <div className="badge badge-phd mb-3">FOR MASTER'S &amp; PhD</div>
              <h2 className="section-title">Admissions, Funding &amp; Visa for Graduate Studies</h2>
              <p className="mt-4 text-slate-600">We specialize in placing students into competitive, often fully-funded graduate programs. Recent wins include a funded Sociology PhD at University of Antwerp and a full Erasmus Mundus scholarship in Oceanography.</p>
              <div className="mt-6">
                <Link href="/contact" className="btn-primary">Start your application journey</Link>
              </div>
            </div>
          </div>

          <div className="lg:w-7/12 grid gap-5">
            {[
              {
                title: "University Admissions",
                points: [
                  "Strategic university shortlisting from our global network",
                  "Program fit assessment based on your research interests or career goals",
                  "High-impact SOPs, research proposals, and CV development",
                  "Professor outreach & recommendation strategies"
                ]
              },
              {
                title: "Funding & Scholarships",
                points: [
                  "Fully-funded PhD and Master's opportunities (stipend + tuition waiver)",
                  "University-specific scholarships, assistantships, and grants",
                  "External scholarships including Erasmus Mundus, DAAD, Fulbright, Chevening and more",
                  "Application strategy that maximizes funding chances"
                ]
              },
              {
                title: "Graduate Visa Support",
                points: [
                  "Complete student visa file preparation",
                  "Interview coaching and mock sessions",
                  "Specialized support for visa re-applications after rejection",
                  "Guidance for dependent visas where applicable"
                ]
              }
            ].map((service, idx) => (
              <div key={idx} className="card">
                <div className="font-semibold text-xl tracking-tight mb-4">{service.title}</div>
                <ul className="space-y-2 text-[15px] text-slate-600">
                  {service.points.map((p, i) => <li key={i}>• {p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNDERGRADUATE */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20 border-b border-slate-200 bg-white">
        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-8">
          <div className="lg:col-span-5">
            <div className="badge badge-undergrad mb-3">UNDERGRADUATE PROGRAMS</div>
            <h2 className="section-title mb-4">Affordable, high-quality bachelor's degrees abroad</h2>
            <p className="text-slate-600">Access 1,000+ carefully vetted partner universities and colleges across 100+ countries. We focus on value — strong academics with manageable costs and good post-study work or career pathways.</p>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-5">
                <div className="text-emerald-800 text-xs uppercase tracking-widest font-semibold mb-1">From</div>
                <div className="text-3xl font-semibold text-emerald-700 tracking-tight">£12,000<span className="text-base align-super font-normal">/yr</span></div>
                <div className="text-sm text-emerald-700/80 mt-0.5">Selected UK &amp; European partners</div>
              </div>
              <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-5">
                <div className="text-emerald-800 text-xs uppercase tracking-widest font-semibold mb-1">From</div>
                <div className="text-3xl font-semibold text-emerald-700 tracking-tight">CA$10,000<span className="text-base align-super font-normal">/yr</span></div>
                <div className="text-sm text-emerald-700/80 mt-0.5">Selected Canadian colleges &amp; unis</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card">
                <div className="font-semibold mb-3">Our Undergraduate Strengths</div>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Business, Engineering, Computer Science, Health Sciences, Social Sciences, Arts</li>
                  <li>• Direct entry + foundation / pathway programs</li>
                  <li>• Co-op and internship-integrated degrees</li>
                  <li>• Strong post-study work visa destinations</li>
                  <li>• Merit and need-based scholarship support</li>
                </ul>
              </div>
              <div className="card">
                <div className="font-semibold mb-3">Popular Destinations for Value</div>
                <div className="text-sm grid grid-cols-2 gap-x-4 gap-y-1 text-slate-600">
                  <div>Canada</div><div>United Kingdom</div>
                  <div>Germany (low tuition)</div><div>Poland &amp; Baltics</div>
                  <div>Australia</div><div>Malaysia branch campuses</div>
                  <div>USA (community colleges → transfer)</div><div>Turkey &amp; Eastern Europe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISA SERVICES — DEDICATED */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="max-w-3xl mb-9">
          <div className="badge badge-visa mb-3">VISA SERVICES</div>
          <h2 className="section-title">Expert visa support — including complex rejections</h2>
          <p className="text-lg text-slate-600 mt-3">A strong university offer is only half the battle. We help you clear the final hurdle.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {[
            { title: "First-Time Student Visas", desc: "Complete documentation packages, financial proof strategy, SOP alignment with visa rules, and interview preparation for US, Canada, UK, Schengen, Australia, and others." },
            { title: "Visa Re-Application After Refusal", desc: "We specialize in turning refusals around. Detailed refusal analysis, new evidence preparation, stronger narratives, and re-submission support. Many students have succeeded on their second (or third) attempt with our guidance." },
            { title: "Visit & Short-Term Visas", desc: "Support for tourist/visitor visas, including travel from the USA to Europe or other cross-continent applications for students and families." },
            { title: "Post-Arrival & Dependent Support", desc: "Guidance for bringing family, extending visas, changing status, and understanding work rights during and after studies." },
          ].map((v, idx) => (
            <div key={idx} className="card">
              <div className="font-semibold text-lg tracking-tight mb-3">{v.title}</div>
              <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DETAILED HOW WE HELP PROCESS */}
      <section className="bg-slate-100 border-t border-b border-slate-200 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[2px] text-xs text-orange-600 font-semibold">STEP-BY-STEP</div>
            <h2 className="section-title mt-2">The Study2Passport Process</h2>
            <p className="section-subtitle mx-auto mt-3">Transparent. Supportive. Results-focused.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { num: "1", title: "Free Discovery Consultation", desc: "30–45 min call. We learn about your academics, goals, budget, preferred countries, and timeline. We give honest feedback on realistic options." },
              { num: "2", title: "Profile Assessment & Strategy", desc: "We review transcripts, test scores, research experience, and draft a personalized roadmap including target programs, funding potential, and visa considerations." },
              { num: "3", title: "Curated Shortlist", desc: "From our 1000+ university affiliations, we deliver a hand-picked list with admission probabilities, tuition + living cost estimates, scholarship chances, and program strengths." },
              { num: "4", title: "Application Excellence", desc: "We guide or fully support document preparation: personal statements, motivation letters, research proposals, CVs, reference coordination, and portal submissions." },
              { num: "5", title: "Funding & Scholarship Push", desc: "We identify and help apply for every relevant funding source. For PhD applicants we emphasize funded positions and TA/RA opportunities." },
              { num: "6", title: "Visa & Pre-Departure", desc: "Visa file preparation, mock interviews, financial documentation review, accommodation guidance, flight planning, and arrival orientation." },
            ].map((step) => (
              <div key={step.num} className="bg-white border border-slate-200 rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="font-mono w-8 h-8 flex items-center justify-center rounded-full bg-orange-600 text-white text-sm font-bold">{step.num}</div>
                  <div className="font-semibold text-lg tracking-tight">{step.title}</div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center text-sm text-slate-500">Average timeline: 3–9 months depending on intake and program level. PhD funding searches may take longer.</div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h3 className="font-semibold text-3xl tracking-tight">Let's map out your best options.</h3>
        <p className="text-slate-600 mt-3 mb-7">Whether you're targeting a fully-funded PhD, an Erasmus Mundus Master's, or an affordable undergraduate degree, we can help.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact" className="btn-primary px-9">Book Free Consultation</Link>
          <Link href="/blog" className="btn-secondary">Read real student stories on our blog</Link>
        </div>
      </section>
    </div>
  );
}

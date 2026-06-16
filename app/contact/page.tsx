"use client";

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'Master\'s',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Submission failed');
      }

      setStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        program: 'Master\'s',
        message: '',
      });
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message || 'An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-14 md:py-16">
          <div className="text-center">
            <div className="text-orange-600 text-xs font-semibold tracking-[2.5px] mb-2">LET'S TALK</div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter">Get Your Free Consultation</h1>
            <p className="mt-4 text-lg text-slate-600 max-w-md mx-auto">
              Tell us about your goals. We'll respond within 24 hours with a clear next step.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-14 md:py-16 grid lg:grid-cols-12 gap-x-10 gap-y-14">
        {/* Form */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="form-label">Full Name *</label>
                <input 
                  type="text" id="name" name="name" required 
                  value={formData.name} onChange={handleChange}
                  className="form-input" placeholder="Ayesha Rahman" 
                />
              </div>
              <div>
                <label htmlFor="email" className="form-label">Email Address *</label>
                <input 
                  type="email" id="email" name="email" required 
                  value={formData.email} onChange={handleChange}
                  className="form-input" placeholder="you@email.com" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phone" className="form-label">Phone / WhatsApp (optional)</label>
                <input 
                  type="tel" id="phone" name="phone" 
                  value={formData.phone} onChange={handleChange}
                  className="form-input" placeholder="+1 (555) 123-4567" 
                />
              </div>
              <div>
                <label htmlFor="program" className="form-label">What are you applying for? *</label>
                <select 
                  id="program" name="program" required 
                  value={formData.program} onChange={handleChange}
                  className="form-input"
                >
                  <option>Master's (MSc / MA / MPhil)</option>
                  <option>PhD / Doctoral</option>
                  <option>Undergraduate / Bachelor's</option>
                  <option>Visa Services Only (Re-application / Student / Visit)</option>
                  <option>Other / Not sure yet</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="form-label">Tell us more about your goals *</label>
              <textarea 
                id="message" name="message" required rows={6}
                value={formData.message} onChange={handleChange}
                className="form-input resize-y min-h-[130px]" 
                placeholder="I'm a final-year student in Environmental Science looking for fully-funded Master's or PhD programs in Europe or Canada. My GPA is 3.7/4.0. I have research experience in marine biology..."
              />
            </div>

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="btn-primary w-full sm:w-auto px-10 py-3.5 text-base disabled:cursor-wait"
            >
              {status === 'loading' ? 'Sending your request...' : 'Submit Request for Free Consultation'}
            </button>

            {status === 'success' && (
              <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-5 text-emerald-800">
                <div className="font-semibold mb-1">Thank you! Your request has been sent.</div>
                <p className="text-sm">We will contact you within 24 hours. In the meantime, feel free to explore our <a href="/blog" className="underline">blog</a> or connect with us on <a href="https://www.facebook.com/study2passport/" target="_blank" className="underline">Facebook</a>.</p>
              </div>
            )}

            {status === 'error' && (
              <div className="rounded-2xl bg-red-50 border border-red-200 p-5 text-red-700 text-sm">
                {errorMsg}
              </div>
            )}
          </form>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-5">
          <div className="card bg-white">
            <div className="font-semibold text-xl mb-6 tracking-tight">Other ways to reach us</div>

            <div className="space-y-7 text-sm">
              <div>
                <div className="font-medium text-slate-900 mb-1">Email</div>
                <a href="mailto:info@study2passport.com" className="text-orange-600 hover:underline">info@study2passport.com</a>
              </div>

              <div>
                <div className="font-medium text-slate-900 mb-1">Facebook Community</div>
                <a 
                  href="https://www.facebook.com/study2passport/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:underline inline-flex items-center gap-1.5"
                >
                  facebook.com/study2passport <span className="text-xs text-slate-500">(15,000+ followers)</span>
                </a>
              </div>

              <div>
                <div className="font-medium text-slate-900 mb-1">Response Time</div>
                <div className="text-slate-600">We typically reply to new inquiries within 24 hours. Many students receive a call or WhatsApp message the same day.</div>
              </div>

              <div>
                <div className="font-medium text-slate-900 mb-1">What happens next?</div>
                <ol className="list-decimal pl-4 space-y-1 text-slate-600">
                  <li>We review your background and goals</li>
                  <li>Schedule a 30-45 minute discovery call (free)</li>
                  <li>Provide an honest assessment + action plan</li>
                </ol>
              </div>
            </div>

            <div className="mt-9 pt-6 border-t text-xs text-slate-500">
              Serving students from Asia, Africa, Middle East, Latin America, and Europe. 
              All conversations are confidential.
            </div>
          </div>

          <div className="mt-5 text-center text-xs text-slate-500">
            Prefer to message us directly? Reach out on Facebook Messenger — many students do.
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Shield, CheckCircle2, ArrowRight } from 'lucide-react';

export const PrivateCommission: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    enclave: 'Port Royal',
    scope: 'Full Estate Architecture & Interiors',
    timeline: '2026',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="commission" className="scroll-mt-20 py-28 sm:py-36 bg-dh-sand border-t border-dh-linen relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="block text-xs uppercase tracking-[0.3em] font-semibold text-dh-amber mb-3 font-body">
            Private Commission &bull; Naples Studio
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-dh-bronze tracking-tight leading-[1.1]">
            Initiate a confidential <br />
            <span className="italic">estate dialogue.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-dh-stone font-normal leading-relaxed font-body max-w-xl">
            Diana Hall Design accepts a strictly limited number of private residential commissions annually to preserve uncompromised principal oversight.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start font-body">
          
          {/* Left: Studio Details & Location */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-white border border-dh-linen rounded-3xl p-8 space-y-6 shadow-sm">
              <span className="text-xs uppercase tracking-widest text-dh-amber font-semibold block">
                Naples Studio Office
              </span>
              
              <div className="space-y-4 text-sm text-dh-stone">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-dh-amber shrink-0 mt-0.5" />
                  <div>
                    <span className="font-serif text-lg text-dh-bronze block">Atelier Headquarters</span>
                    <span>5th Avenue South &bull; Naples, FL 34102</span>
                    <span className="block text-xs text-dh-stone/80 mt-0.5">By Private Appointment Only</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-dh-linen">
                  <Phone className="w-5 h-5 text-dh-amber shrink-0" />
                  <div>
                    <a href="tel:2395925500" className="text-base font-serif text-dh-bronze hover:text-dh-amber transition-colors">
                      (239) 592-5500
                    </a>
                    <span className="block text-xs text-dh-stone/80">Direct Studio Concierge</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-dh-linen">
                  <Mail className="w-5 h-5 text-dh-amber shrink-0" />
                  <div>
                    <a href="mailto:concierge@dianahalldesign.com" className="text-sm font-mono text-dh-bronze hover:text-dh-amber transition-colors">
                      concierge@dianahalldesign.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Confidentiality Reassurance */}
            <div className="p-6 rounded-2xl bg-dh-linen/60 border border-dh-linen flex items-start gap-4">
              <Shield className="w-6 h-6 text-dh-amber shrink-0 mt-1" />
              <div className="text-xs text-dh-stone leading-relaxed">
                <strong className="text-dh-bronze font-semibold block mb-1 font-serif text-sm">
                  Complete Client Non-Disclosure
                </strong>
                We respect the rigorous privacy required by prominent families and estate owners. All site consultations and design schematics are governed by strict confidentiality protocols.
              </div>
            </div>

          </div>

          {/* Right: Commission Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-dh-linen rounded-3xl p-8 sm:p-12 shadow-md">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-dh-linen flex items-center justify-center text-dh-amber mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-dh-bronze">
                  Inquiry Received
                </h3>
                <p className="text-sm text-dh-stone max-w-md mx-auto">
                  Diana Hall’s office will contact you within one business day to coordinate a preliminary confidential consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-dh-stone font-semibold mb-2">
                    Client Name / Representative
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jonathan Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dh-sand border border-dh-linen text-dh-bronze text-sm focus:outline-none focus:border-dh-amber transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-dh-stone font-semibold mb-2">
                      Naples Enclave / Site
                    </label>
                    <select
                      value={formData.enclave}
                      onChange={(e) => setFormData({ ...formData, enclave: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-dh-sand border border-dh-linen text-dh-bronze text-sm focus:outline-none focus:border-dh-amber transition-colors"
                    >
                      <option value="Port Royal">Port Royal</option>
                      <option value="Aqualane Shores">Aqualane Shores</option>
                      <option value="Pelican Bay">Pelican Bay</option>
                      <option value="Old Naples">Old Naples</option>
                      <option value="Captiva / Sanibel">Captiva / Sanibel</option>
                      <option value="Other Coastal FL">Other Coastal Florida</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-dh-stone font-semibold mb-2">
                      Project Horizon
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-dh-sand border border-dh-linen text-dh-bronze text-sm focus:outline-none focus:border-dh-amber transition-colors"
                    >
                      <option value="2026 Immediate">2026 Immediate Initiation</option>
                      <option value="Late 2026">Late 2026 Planning</option>
                      <option value="2027 Horizon">2027 Ground-Up Construction</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-dh-stone font-semibold mb-2">
                    Scope of Engagement
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ground-up oceanfront estate architecture and interior curation"
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dh-sand border border-dh-linen text-dh-bronze text-sm focus:outline-none focus:border-dh-amber transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-dh-stone font-semibold mb-2">
                    Confidential Project Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your architectural aspirations, square footage, or site conditions..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dh-sand border border-dh-linen text-dh-bronze text-sm focus:outline-none focus:border-dh-amber transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-dh-bronze text-dh-sand text-xs font-semibold uppercase tracking-[0.2em] hover:bg-dh-bronze/90 transition-all shadow-md flex items-center justify-center gap-2 group"
                >
                  <span>Submit Confidential Inquiry</span>
                  <ArrowRight className="w-4 h-4 text-dh-amber group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

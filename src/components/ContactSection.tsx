import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    projectType: 'New Custom Estate',
    budget: '$250k – $500k',
    timeline: 'Within 3 Months',
    fullName: '',
    email: '',
    phone: '',
    propertyLocation: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#c5a059', '#e4c88a', '#ffffff']
      });
    } catch {
      // safe fallback
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-luxury-border/40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Studio Information */}
        <div className="lg:col-span-5">
          <span className="text-[11px] font-mono tracking-luxury uppercase text-luxury-gold block mb-2">
            Private Consultation
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white mb-6">
            Initiate Your Spatial Journey
          </h2>
          <p className="text-sm sm:text-base text-luxury-sand/90 font-light leading-relaxed mb-8">
            We welcome inquiries from discerning homeowners, private developers, and architectural partners throughout Naples and coastal Florida. Contact Diana Hall directly or submit your project details below.
          </p>

          <div className="space-y-4 mb-8">
            {/* Direct Phone */}
            <a
              href="tel:2393985423"
              className="flex items-center gap-4 p-4 rounded-2xl glass-panel border border-luxury-border/70 hover:border-luxury-gold transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 border border-luxury-gold/30 flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-luxury-charcoal transition-all">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-luxury-sand/60 block">
                  Studio Direct Line
                </span>
                <span className="font-serif text-xl text-white group-hover:text-luxury-gold transition-colors font-medium">
                  (239) 398-5423
                </span>
              </div>
            </a>

            {/* Direct Email */}
            <a
              href="mailto:dhall@dianahalldesign.com"
              className="flex items-center gap-4 p-4 rounded-2xl glass-panel border border-luxury-border/70 hover:border-luxury-gold transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 border border-luxury-gold/30 flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-luxury-charcoal transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-luxury-sand/60 block">
                  Principal Email (Click to Write)
                </span>
                <span className="font-mono text-sm sm:text-base text-white group-hover:text-luxury-gold transition-colors">
                  dhall@dianahalldesign.com
                </span>
              </div>
            </a>

            {/* Studio Address */}
            <div className="flex items-center gap-4 p-4 rounded-2xl glass-panel border border-luxury-border/70">
              <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 border border-luxury-gold/30 flex items-center justify-center text-luxury-gold">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-luxury-sand/60 block">
                  Design Studio & Showroom
                </span>
                <span className="text-xs sm:text-sm text-luxury-sand font-light block">
                  400 Fifth Avenue South, Suite 201 <br />
                  Naples, Florida 34102
                </span>
              </div>
            </div>

            {/* Studio Hours */}
            <div className="flex items-center gap-4 p-4 rounded-2xl glass-panel border border-luxury-border/70">
              <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 border border-luxury-gold/30 flex items-center justify-center text-luxury-gold">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-luxury-sand/60 block">
                  Private Appointments
                </span>
                <span className="text-xs sm:text-sm text-luxury-sand font-light block">
                  Monday – Friday · 9:00 AM – 5:00 PM EST <br />
                  Evening and weekend walkthroughs by private arrangement.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Consultation Booking Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel-gold p-6 sm:p-10 rounded-3xl border border-luxury-gold/40 shadow-2xl relative">
            {submitted ? (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-luxury-gold/20 border-2 border-luxury-gold text-luxury-gold flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-white font-medium mb-3">
                  Consultation Request Received
                </h3>
                <p className="text-sm text-luxury-sand/90 max-w-md mx-auto leading-relaxed mb-6 font-light">
                  Thank you, {formState.fullName || 'esteemed client'}. Diana Hall and senior architect Elizabeth Manchego will review your project details and contact you within 24 hours.
                </p>
                <div className="p-4 rounded-xl bg-luxury-surface/80 border border-luxury-border/60 max-w-sm mx-auto text-xs font-mono text-luxury-gold">
                  Direct Confirmation Reference: #DHD-{Math.floor(100000 + Math.random() * 900000)}
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs font-mono tracking-widest uppercase text-luxury-sand hover:text-white underline"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl text-white font-medium mb-1">
                    Book a Project Consultation
                  </h3>
                  <p className="text-xs text-luxury-sand/70 font-mono">
                    Please share your architectural vision to curate your private estate consultation.
                  </p>
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-luxury-sand mb-2">
                    Project Typology
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      'New Custom Estate',
                      'Whole-Home Remodel',
                      'Sky Penthouse',
                      'Commercial / Club'
                    ].map(type => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormState({ ...formState, projectType: type })}
                        className={`py-2 px-3 rounded-xl text-xs text-center border transition-all ${
                          formState.projectType === type
                            ? 'bg-luxury-gold text-luxury-charcoal font-semibold border-luxury-gold shadow'
                            : 'bg-luxury-charcoal/60 text-luxury-sand border-luxury-border hover:border-luxury-gold/50'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Investment Scope */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-luxury-sand mb-2">
                      Estimated Design & Furnishing Budget
                    </label>
                    <select
                      value={formState.budget}
                      onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                      className="w-full bg-luxury-charcoal/80 border border-luxury-border rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-luxury-gold"
                    >
                      <option value="$100k – $250k">$100,000 – $250,000</option>
                      <option value="$250k – $500k">$250,000 – $500,000</option>
                      <option value="$500k – $1M">$500,000 – $1,000,000</option>
                      <option value="$1M+">$1,000,000+ (Ultra-Luxury Estate)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-luxury-sand mb-2">
                      Target Timeline
                    </label>
                    <select
                      value={formState.timeline}
                      onChange={(e) => setFormState({ ...formState, timeline: e.target.value })}
                      className="w-full bg-luxury-charcoal/80 border border-luxury-border rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-luxury-gold"
                    >
                      <option value="Immediate">Immediate / Under Construction</option>
                      <option value="Within 3 Months">Within 3 Months</option>
                      <option value="6-12 Months">6 – 12 Months</option>
                      <option value="Planning Phase">Architectural Planning Phase</option>
                    </select>
                  </div>
                </div>

                {/* Name & Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-luxury-sand mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Diana Cotey"
                      value={formState.fullName}
                      onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                      className="w-full bg-luxury-charcoal/80 border border-luxury-border rounded-xl px-4 py-3 text-xs text-white placeholder:text-luxury-warmGray focus:outline-none focus:border-luxury-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-luxury-sand mb-1">
                      Telephone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(239) 000-0000"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full bg-luxury-charcoal/80 border border-luxury-border rounded-xl px-4 py-3 text-xs text-white placeholder:text-luxury-warmGray focus:outline-none focus:border-luxury-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-luxury-sand mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="client@residence.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-luxury-charcoal/80 border border-luxury-border rounded-xl px-4 py-3 text-xs text-white placeholder:text-luxury-warmGray focus:outline-none focus:border-luxury-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-luxury-sand mb-1">
                      Property Address / Community
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Port Royal / Pelican Bay"
                      value={formState.propertyLocation}
                      onChange={(e) => setFormState({ ...formState, propertyLocation: e.target.value })}
                      className="w-full bg-luxury-charcoal/80 border border-luxury-border rounded-xl px-4 py-3 text-xs text-white placeholder:text-luxury-warmGray focus:outline-none focus:border-luxury-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-luxury-sand mb-1">
                    Architectural Vision & Spatial Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your design aspirations, preferred materials, or architect/builder details..."
                    value={formState.notes}
                    onChange={(e) => setFormState({ ...formState, notes: e.target.value })}
                    className="w-full bg-luxury-charcoal/80 border border-luxury-border rounded-xl px-4 py-3 text-xs text-white placeholder:text-luxury-warmGray focus:outline-none focus:border-luxury-gold resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-luxury-gold hover:bg-luxury-goldLight text-luxury-charcoal font-semibold text-xs font-mono uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-2 group"
                >
                  <span>Submit Consultation Request</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-[10px] text-center text-luxury-sand/60 font-mono flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-luxury-gold" />
                  Strictly Confidential · Direct Review by Diana Hall & Elizabeth Manchego
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

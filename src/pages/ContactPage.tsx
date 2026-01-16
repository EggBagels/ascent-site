import { Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react'
import { PageHeader } from '../components/ui/PageHeader'
import { Reveal } from '../components/ui/Reveal'
import { CONTACT_INFO } from '../lib/constants'

export function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Get in Touch"
        description="Ready to start your ascent? Reach out to discuss your project. We respond to all inquiries within 24 hours."
      />

      {/* Contact Section */}
      <section className="relative py-16 md:py-24 px-6 md:px-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Contact Information */}
            <Reveal>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-serif font-medium text-neutral-900 mb-8">
                    Let's Connect
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-ascent-navy/10 rounded-sm flex-shrink-0">
                        <Phone className="w-5 h-5 text-ascent-navy" />
                      </div>
                      <div>
                        <p className="text-sm text-neutral-500 uppercase tracking-wide mb-1">
                          Phone
                        </p>
                        <a
                          href={CONTACT_INFO.phoneHref}
                          className="text-xl text-neutral-900 hover:text-ascent-navy transition-colors"
                        >
                          {CONTACT_INFO.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-ascent-navy/10 rounded-sm flex-shrink-0">
                        <Mail className="w-5 h-5 text-ascent-navy" />
                      </div>
                      <div>
                        <p className="text-sm text-neutral-500 uppercase tracking-wide mb-1">
                          Email
                        </p>
                        <a
                          href={CONTACT_INFO.emailHref}
                          className="text-xl text-neutral-900 hover:text-ascent-navy transition-colors"
                        >
                          {CONTACT_INFO.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-ascent-navy/10 rounded-sm flex-shrink-0">
                        <MapPin className="w-5 h-5 text-ascent-navy" />
                      </div>
                      <div>
                        <p className="text-sm text-neutral-500 uppercase tracking-wide mb-1">
                          Office
                        </p>
                        <p className="text-neutral-700 leading-relaxed">
                          {CONTACT_INFO.address.street}
                          <br />
                          {CONTACT_INFO.address.city}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-ascent-navy/10 rounded-sm flex-shrink-0">
                        <Clock className="w-5 h-5 text-ascent-navy" />
                      </div>
                      <div>
                        <p className="text-sm text-neutral-500 uppercase tracking-wide mb-1">
                          Hours
                        </p>
                        <p className="text-neutral-700">
                          {CONTACT_INFO.hours.weekdays}
                          <br />
                          {CONTACT_INFO.hours.weekends}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* LinkedIn Link */}
                <div className="pt-6 border-t border-neutral-200">
                  <a
                    href={CONTACT_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-neutral-700 hover:text-ascent-navy transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm font-medium">Connect on LinkedIn</span>
                  </a>
                </div>

                {/* Map Placeholder */}
                <div className="mt-8">
                  <div className="aspect-video bg-neutral-200 rounded-sm flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-10 h-10 text-neutral-400 mx-auto mb-2" />
                      <p className="text-neutral-500 text-sm">
                        Map integration<br />coming soon
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right: Contact Form (Dummy) */}
            <Reveal delay={0.2}>
              <div className="bg-white p-8 md:p-10 border border-neutral-200 rounded-sm">
                <h3 className="text-xl font-serif font-medium text-neutral-900 mb-6">
                  Send a Message
                </h3>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-ascent-navy focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-ascent-navy focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="(555) 555-5555"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-ascent-navy focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-ascent-navy focus:border-transparent bg-white"
                    >
                      <option value="">Select a topic</option>
                      <option value="commercial">Commercial Real Estate</option>
                      <option value="investment">Investment Properties</option>
                      <option value="management">Property Management</option>
                      <option value="residential">Residential</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-ascent-navy focus:border-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-ascent-navy text-white px-8 py-4 text-sm font-semibold tracking-wide hover:bg-ascent-navy-light transition-colors duration-300"
                  >
                    Send Message
                  </button>

                  <p className="text-xs text-neutral-500 text-center">
                    Form functionality coming soon. For immediate assistance, please call or email directly.
                  </p>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}

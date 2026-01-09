import { useState, FormEvent } from 'react'
import { Linkedin } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { SectionLabel } from '../ui/SectionLabel'
import { CONTACT_INFO } from '../../lib/constants'

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

export function Contact() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitStatus('submitting')

    const formData = new FormData(e.currentTarget)
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY)
    formData.append('subject', 'New Contact from Ascent Real Estate Website')
    formData.append('from_name', 'Ascent Website')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        e.currentTarget.reset()
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-20 md:py-32 px-6 md:px-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-16 md:mb-20">
            <SectionLabel elevation="Summit" title="Let's Connect" light />
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium text-neutral-900 mb-6">
              Ready to Start Your Ascent?
            </h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Reach out to discuss your project. We respond to all inquiries
              within 24 hours.
            </p>
          </div>
        </Reveal>

        {/* Two-column: Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Information */}
          <Reveal>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif font-medium text-neutral-900 mb-6">
                  Get in Touch
                </h3>

                <div className="space-y-6">
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
            </div>
          </Reveal>

          {/* Right: Contact Form */}
          <Reveal delay={0.2}>
            <div>
              {submitStatus === 'success' ? (
                <div className="p-8 bg-green-50 border border-green-200 rounded-sm text-center">
                  <h3 className="text-xl font-medium text-green-800 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-green-700">
                    Thank you for reaching out. We'll be in touch within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="mt-4 text-green-700 underline hover:text-green-800"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
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
                      required
                      aria-required="true"
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
                      required
                      aria-required="true"
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
                      className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-ascent-navy focus:border-transparent"
                    />
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
                      rows={6}
                      required
                      aria-required="true"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-ascent-navy focus:border-transparent resize-none"
                    />
                  </div>

                  {submitStatus === 'error' && (
                    <p className="text-red-600 text-sm" role="alert">
                      Something went wrong. Please try again or contact us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitStatus === 'submitting'}
                    className="w-full bg-ascent-navy text-white px-8 py-4 text-sm font-semibold tracking-wide hover:bg-ascent-navy-light transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

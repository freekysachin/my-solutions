import React from 'react'
import ContactForm from '../contact-form/ContactForm'
function HeroFirst() {
  return (
    <div
      className="w-full h-[90vh] bg-cover bg-center flex items-center justify-between px-24"
      style={{ backgroundImage: "url('/assets/ContactFormBG.svg ')" }}
    >
      {/* Left Text */}
      <div className="text-white max-w-xl space-y-6">
        <h1 className="text-5xl font-bold leading-tight">
          Consultation,<br />Design, <br /> & Marketing
        </h1>
      </div>

      {/* Right Contact Form */}
      <ContactForm />
    </div>

  )
}

export default HeroFirst

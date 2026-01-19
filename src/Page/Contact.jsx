import React from 'react'
import ContactIntro from '../Components/Contact/ContactIntro'
import ContactForm from '../Components/Contact/ContactForm'
import ContactMap from '../Components/Contact/ContactMap'

const Contact = () => {
  return (
    <div>
     <div className="grid lg:grid-cols-2 min-h-screen">
        <ContactIntro />
        <ContactForm />
        </div>
      <ContactMap />
    </div>
  )
}

export default Contact

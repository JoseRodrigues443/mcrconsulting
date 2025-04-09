
import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Contact Us</h2>
          <p className="text-lg text-mcr-gray max-w-3xl mx-auto">
            Ready to transform your technology strategy? Get in touch with our team to discuss how we can help your business succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6 text-mcr-blue">Send us a message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-mcr-gray mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mcr-teal"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-mcr-gray mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mcr-teal"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-mcr-gray mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mcr-teal"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-mcr-gray mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mcr-teal"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-mcr-blue hover:bg-mcr-blue/90 text-white font-semibold py-3 px-6 rounded-md transition-colors w-full"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-mcr-blue">Contact Information</h3>
              <div className="space-y-6">
                <ContactInfo
                  icon={MapPin}
                  title="Our Location"
                  detail="Lisbon, Portugal"
                />
                <ContactInfo
                  icon={Mail}
                  title="Email Us"
                  detail="info@mcrconsulting.pt"
                />
                <ContactInfo
                  icon={Phone}
                  title="Call Us"
                  detail="+351 XXX XXX XXX"
                />
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-mcr-blue rounded-lg text-white">
              <h3 className="text-xl font-semibold mb-4">Working Hours</h3>
              <p className="mb-2"><span className="font-semibold">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
              <p><span className="font-semibold">Weekends:</span> By appointment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ 
  icon: Icon, 
  title, 
  detail 
}: { 
  icon: React.ElementType; 
  title: string; 
  detail: string 
}) => {
  return (
    <div className="flex items-start">
      <div className="rounded-full bg-mcr-teal/10 w-10 h-10 flex items-center justify-center mr-4">
        <Icon className="h-5 w-5 text-mcr-teal" />
      </div>
      <div>
        <h4 className="font-semibold text-mcr-blue">{title}</h4>
        <p className="text-mcr-gray">{detail}</p>
      </div>
    </div>
  );
};

export default Contact;

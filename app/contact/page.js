"use client";
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">Get In Touch</h1>
          <p className="mt-4 text-slate-600 text-lg">Do you have an idea or a project? Let's get started together.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* कांटेक्ट इन्फो कार्ड्स */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><Mail size={20} /></div>
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase">Email Us</p>
                <p className="text-sm font-medium text-slate-800">hello@matrixbrandaxle.com</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><Phone size={20} /></div>
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase">Call Us</p>
                <p className="text-sm font-medium text-slate-800">+91 98765 43210</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><MapPin size={20} /></div>
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase">Location</p>
                <p className="text-sm font-medium text-slate-800">Tri Nagar, Delhi, India</p>
              </div>
            </div>
          </div>

          {/* फॉर्म कार्ड */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <h2 className="text-xl font-bold mb-6 text-slate-900">Send a Quick Message</h2>
            <form className="grid sm:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase">First Name</label>
                <input type="text" className="w-full mt-2 p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 text-sm" placeholder="John" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase">Last Name</label>
                <input type="text" className="w-full mt-2 p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 text-sm" placeholder="Doe" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Email Address</label>
                <input type="email" className="w-full mt-2 p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 text-sm" placeholder="john@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Message</label>
                <textarea rows="4" className="w-full mt-2 p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 text-sm" placeholder="Tell us about your business goals..."></textarea>
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-md w-full sm:w-auto">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

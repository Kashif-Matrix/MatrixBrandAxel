import React from 'react';
import { Target, Eye, Award, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* हेडर */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">About Matrix Brand Axle</h1>
          <p className="mt-4 text-slate-600 text-lg">हम सिर्फ एक डिजिटल मार्केटिंग एजेंसी नहीं हैं, हम आपके बिज़नेस ग्रोथ पार्टनर्स हैं।</p>
        </div>

        {/* विजन और मिशन */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <div className="p-3 bg-blue-50 inline-block rounded-xl text-blue-600 mb-6"><Target size={28} /></div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed text-sm">हमारा मिशन छोटे और बड़े व्यवसायों को सही डिजिटल स्ट्रेटेजी और इनोवेटिव टूल्स के ज़रिए ऑनलाइन मार्केट में लीडर बनाना है। हम डेटा-ड्रिवेन रिज़ल्ट्स पर विश्वास करते हैं।</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <div className="p-3 bg-indigo-50 inline-block rounded-xl text-indigo-600 mb-6"><Eye size={28} /></div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed text-sm">एक ऐसा ग्लोबल इकोसिस्टम तैयार करना जहाँ हर बिज़नेस अपनी पूरी क्षमता के साथ इंटरनेट का लाभ उठा सके और बिना किसी रुकावट के सही ग्राहकों तक पहुँच सके।</p>
          </div>
        </div>

        {/* हमें क्यों चुनें (Why Choose Us) */}
        <div className="bg-slate-900 text-white p-10 sm:p-16 rounded-[2.5rem]">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Businesses Trust Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="text-blue-400"><CheckCircle size={24} /></div>
              <h3 className="text-xl font-semibold">12+ Years Experience</h3>
              <p className="text-slate-400 text-sm">एक दशक से अधिक का अनुभव और सैकड़ों सफल कैंपेन्स का ट्रैक रिकॉर्ड।</p>
            </div>
            <div className="space-y-3">
              <div className="text-blue-400"><CheckCircle size={24} /></div>
              <h3 className="text-xl font-semibold">Dedicated Experts</h3>
              <p className="text-slate-400 text-sm">SEO, PPC, और SMM के सर्टिफाइड प्रोफेशनल्स की एक मजबूत टीम।</p>
            </div>
            <div className="space-y-3">
              <div className="text-blue-400"><CheckCircle size={24} /></div>
              <h3 className="text-xl font-semibold">Customized Solutions</h3>
              <p className="text-slate-400 text-sm">हर बिज़नेस अलग है, इसलिए हमारी स्ट्रेटेजीज भी आपके हिसाब से कस्टमाइज़ होती हैं।</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

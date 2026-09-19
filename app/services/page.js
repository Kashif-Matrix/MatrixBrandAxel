import React from 'react';
import { Search, BarChart3, Globe, Smartphone, HeartHandshake, ShieldAlert } from 'lucide-react';

export default function ServicesPage() {
  const fullServices = [
    { icon: <Search />, title: "Search Engine Optimization", details: "On-Page SEO, Off-Page Link Building, Technical SEO, Keyword Research और Competitor Analysis के साथ आर्गेनिक ट्रैफिक बढ़ाएं।" },
    { icon: <BarChart3 />, title: "Performance Marketing (PPC)", details: "Google Ads (Search, Display, Shopping), Meta Ads, Lead Generation और ROI-Focused Advertising Campaigns।" },
    { icon: <Globe />, title: "Web Design & Development", details: "Next.js और React आधारित सुपर-फ़ास्ट, SEO-फ्रेंडली, मॉडर्न और फुल्ली रिस्पॉन्सिव बिज़नेस वेबसाइट्स और ई-कॉमर्स स्टोर्स।" },
    { icon: <Smartphone />, title: "App Marketing & ASO", desc: "", details: "Google Play Store और Apple App Store पर ऐप विज़िबिलिटी बढ़ाएं, रिव्यूज मैनेज करें और आर्गेनिक डाउनलोड्स को बूस्ट करें।" },
    { icon: <HeartHandshake />, title: "Social Media Management", details: "ब्रांड अवेयरनेस बढ़ाने के लिए कस्टमाइज्ड कंटेंट क्रिएशन, रील्स/वीडियो स्ट्रेटेजी, सोशल मीडिया हैंडलिंग और एंगेजमेंट।" },
    { icon: <ShieldAlert />, title: "Online Reputation Management", details: "ब्रांड की ऑनलाइन इमेज को सुधारना, नेगेटिव रिव्यूज को काउंटर करना और कॉर्पोरेट्स व सेलिब्रिटीज के लिए ORM स्ट्रेटेजी।" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">Our Core Expertise</h1>
          <p className="mt-4 text-slate-600 text-lg">हम एंड-टू-एंड डिजिटल सॉल्यूशंस प्रदान करते हैं जो आपके ब्रांड को विज़िबिलिटी और सेल्स दोनों दिलाते हैं।</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {fullServices.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition flex gap-6">
              <div className="p-4 bg-blue-50 text-blue-600 rounded-xl h-14 w-14 flex items-center justify-center flex-shrink-0">
                {service.icon}
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed">{service.details}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

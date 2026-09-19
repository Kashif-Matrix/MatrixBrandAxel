import React from 'react';
import { Search, BarChart3, Globe, Smartphone, HeartHandshake, ShieldAlert } from 'lucide-react';

export default function ServicesPage() {
  const fullServices = [
    { icon: <Search />, title: "Search Engine Optimization", details: "E-Commerce SEO, Localized SEO, Video SEO, Google Recovery Services, SEO Reseller Services, Multi Lingual SEO, SEO Copywriting." },
    
    { icon: <BarChart3 />, title: "Performance Marketing (PPC)", details: "GPPC Services, Search Advertising, Re-Marketing, Mobile Advertising, Amazon Ads, PPC Reseller Services, Product Listing Ads, Display Advertising, Lead Based Marketing" },
    
    { icon: <Globe />, title: "Web Design & Development", details: "Custom HTML/CSS/JS/Php Websites, Advanced React/NextJS Websites, Wordpress Websites, E-Commerce, Simple Business Websites." },
    
    { icon: <Smartphone />, title: "App Marketing & ASO", desc: "", details: "Mobile app Marketing, App Store Optimization" },
    
    { icon: <HeartHandshake />, title: "Social Media Marketing", details: "Social Media Optimization, Social Media Advertising" },
    
    { icon: <ShieldAlert />, title: "Online Reputation Management", details: "Enterprise SEO, eCommerce SEO, Localized SEO, Video SEO, Google Recovery Services, SEO Reseller Services, Multi Lingual SEO, SEO Copywriting" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">Our Core Expertise</h1>
          <p className="mt-4 text-slate-600 text-lg">We provide end-to-end digital solutions that boost both your brand visibility and sales.</p>
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

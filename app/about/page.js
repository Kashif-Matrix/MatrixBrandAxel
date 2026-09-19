import React from "react";
import { Target, Eye, Award, CheckCircle } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* हेडर */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            About Matrix Brand Axle
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Best Digital Marketing Agency in Delhi. Get the best marketing
            solutions for your business growth to reach new heights. Matrix
            Brand AxleBrandAxle, being one of the best digital marketing
            agencies in India offers a wide range of marketing services. Be it
            Digital marketing, SEO, PPC, Social media management, or Reputation
            management, we have the best team of experts that design and
            implement strategies that suit your business goals the best.
          </p>
        </div>

        {/* विजन और मिशन */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <div className="p-3 bg-blue-50 inline-block rounded-xl text-blue-600 mb-6">
              <Target size={28} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Our Mission
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              We seek to bridge the gap between customers and providers through
              positive transformation and innovation, resulting in a digital
              business ecosystem rich in opportunities and prosperity.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <div className="p-3 bg-indigo-50 inline-block rounded-xl text-indigo-600 mb-6">
              <Eye size={28} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Our Vision
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              We do not limit ourselves to any specific industry, we deliver
              solutions and results to cater to any or every challenge that we
              might face for the business's unique needs.
            </p>
          </div>
        </div>

        {/* हमें क्यों चुनें (Why Choose Us) */}
        <div className="bg-slate-900 text-white p-10 sm:p-16 rounded-[2.5rem]">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Why Businesses Trust Us
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="text-blue-400">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-semibold">12+ Years Experience</h3>
              <p className="text-slate-400 text-sm">
                Over a decade of experience and a track record of hundreds of successful campaigns.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-blue-400">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-semibold">Creative Approach</h3>
              <p className="text-slate-400 text-sm">
                We implement our business solutions with a creative mindset and set innovative benchmarks in all areas.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-blue-400">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-semibold">Custom Strategy</h3>
              <p className="text-slate-400 text-sm">
                Carefully research and analyze the market needs and your business objectives and choose only the best for you.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-blue-400">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-semibold">Project Delivery</h3>
              <p className="text-slate-400 text-sm">
                No matter what type of campaign idea or work you have, we can bring you results and provide excellent solutions that ensure success.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-blue-400">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-semibold">Dedicated Team</h3>
              <p className="text-slate-400 text-sm">
               Our dedicated digital consultant will be able to jumpstart your digital initiatives and help you build your business.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-blue-400">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-semibold">Best Customer Support</h3>
              <p className="text-slate-400 text-sm">
              Our team is always pleased to assist you with any questions or concerns you may have about our digital services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

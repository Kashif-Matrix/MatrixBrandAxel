"use client";

import React, { useState } from "react";
import {
  Shield,
  Search,
  TrendingUp,
  Users,
  Smartphone,
  Globe,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import animationData from "../public/email-marketing.json";
import { DotLottiePlayer } from "@dotlottie/react-player";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Data Services
  const services = [
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: "SEO (Search Engine Optimization)",
      desc: "E-Commerce SEO, Localized SEO, Video SEO, Google Recovery Services, SEO Reseller Services, Multi Lingual SEO, SEO Copywriting.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-indigo-600" />,
      title: "PPC (Pay Per Click)",
      desc: "GPPC Services, Search Advertising, Re-Marketing, Mobile Advertising, Amazon Ads, PPC Reseller Services, Product Listing Ads, Display Advertising, Lead Based Marketing",
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Social Media Marketing",
      desc: "Social Media Optimization, Social Media Advertising",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-pink-600" />,
      title: "App Marketing & ASO",
      desc: " Mobile app Marketing, App Store Optimization",
    },
    {
      icon: <Shield className="w-8 h-8 text-teal-600" />,
      title: "ORM (Reputation Management)",
      desc: " Enterprise SEO, eCommerce SEO, Localized SEO, Video SEO, Google Recovery Services, SEO Reseller Services, Multi Lingual SEO, SEO Copywriting",
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-600" />,
      title: "Web Design & Development",
      desc: "Custom HTML/CSS/JS/Php Websites, Advanced React/NextJS Websites, Wordpress Websites, E-Commerce, Simple Business Websites.",
    },
  ];

  // Working Process Data
  const processes = [
    {
      step: "01",
      title: "Research",
      desc: "Here we collect all the information and data that might be needed in the decision-making stage to craft a perfect marketing campaign.",
    },
    {
      step: "02",
      title: "Planning",
      desc: "Our team, with the help of appropriate resources, aligns the research with the business goals and objectives to create leads and meet results.",
    },
    {
      step: "03",
      title: "Promotion",
      desc: "Once the campaign is ready, we start promoting the campaign through the right platforms and channels to reach and generate relevant traffic.",
    },
    {
      step: "04",
      title: "Optimize",
      desc: "Based on the analyzes, we further improve the campaign and its analytics for better results with better content strategy and marketing.",
    },
  ];
  // carousle logos
  const logos = [
    { name: "Atlantic Water World", src: "/logos/1.webp" },
    { name: "Star Salon", src: "/logos/2.webp" },
    { name: "Astral Pipes", src: "/logos/3.webp" },
    { name: "MR Sports Science Center", src: "/logos/4.webp" },
    { name: "Bittoo", src: "/logos/5.webp" },
    { name: "Kats", src: "/logos/6.webp" },
    { name: "Safegain", src: "/logos/7.webp" },
    { name: "Köln Faucets", src: "/logos/8.webp" },
    { name: "AH Since 1992", src: "/logos/9.webp" },
    { name: "Fly Fit Sports", src: "/logos/10.webp" },
    { name: "Signature Grand", src: "/logos/11.webp" },
    { name: "Lotus Symbol", src: "/logos/12.webp" },
    { name: "Lotus Symbol", src: "/logos/13.webp" },
    { name: "Lotus Symbol", src: "/logos/14.webp" },
    { name: "Lotus Symbol", src: "/logos/15.webp" },
    { name: "Lotus Symbol", src: "/logos/16.webp" },
    { name: "Lotus Symbol", src: "/logos/17.jpg" },
    { name: "Lotus Symbol", src: "/logos/18.webp" },
  ];
  /* Array of your clients' logos */
  const doubleLogos = [...logos, ...logos];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans scroll-smooth">
      {/* 🌟 (Hero Section) */}
      <section
        id="home"
        className="py-20 lg:py-20 bg-gradient-to-b from-blue-50/50 via-transparent to-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            360° Next-Gen Digital Marketing Agency
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
            We Help You <span className="text-blue-600">To Create Your</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Digital Marketing, SEO, Pay Per Click, Social Media Marketing,
            Reputation Management etc...
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition flex items-center gap-2 shadow-xl shadow-slate-900/10"
            >
              Get Started <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition"
            >
              Our Services
            </a>
          </div>

          {/* 📈 लाइव स्टैट्स काउंटर */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 bg-white p-8 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100">
            <div>
              <p className="text-3xl sm:text-4xl font-black text-slate-900">
                345+
              </p>
              <p className="text-sm font-medium text-slate-500 mt-1">
                Happy Clients
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-black text-slate-900">
                5,000+
              </p>
              <p className="text-sm font-medium text-slate-500 mt-1">
                Projects Delivered
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-black text-slate-900">
                12+
              </p>
              <p className="text-sm font-medium text-slate-500 mt-1">
                Years Experience
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-black text-blue-600">
                4.8★
              </p>
              <p className="text-sm font-medium text-slate-500 mt-1">
                1000+ Reviews
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 (Services Section) */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Services That Guarantee High Productivity
            </h2>
            <p className="mt-4 text-slate-600">
              Award-winning website design & creative digital agency services
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100/80 hover:bg-white hover:shadow-2xl hover:shadow-slate-100 transition-all duration-300 group"
              >
                <div className="p-3 bg-white inline-block rounded-xl shadow-md shadow-slate-100 group-hover:scale-110 transition-transform">
                  {srv.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {srv.title}
                </h3>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  {srv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 💡 (Process Section) */}
      <section id="process" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Our Smart Strategy
            </h2>
            <p className="mt-4 text-slate-600">
              From research to optimization, every step we take is aimed at
              generating profit for your business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((proc, idx) => (
              <div
                key={idx}
                className="relative bg-white p-8 rounded-2xl border border-slate-100 shadow-sm"
              >
                <span className="text-5xl font-black text-blue-100 absolute top-4 right-6">
                  {proc.step}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-4 relative z-10">
                  {proc.title}
                </h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed relative z-10">
                  {proc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* about us  */}
      <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 font-medium px-4 py-1.5 rounded-full text-sm tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Who We Are
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              We Drive Big Results For{" "}
              <span className="text-blue-600"> Growing Brands</span> Online.
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              We are a full-service digital marketing agency that connects
              brands with consumers. Through creative strategies, data-driven
              SEO, powerful social media campaigns, and cutting-edge web
              development, we turn clicks into loyal customers.
            </p>

            {/* Stats / Features Strip */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
                <h3 className="text-3xl font-bold text-blue-600">150%+</h3>
                <p className="text-sm font-medium text-gray-500 mt-1">
                  Average ROI Increase
                </p>
              </div>
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
                <h3 className="text-3xl font-bold text-blue-600">98%</h3>
                <p className="text-sm font-medium text-gray-500 mt-1">
                  Client Retention Rate
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3.5 rounded-xl shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0">
                Discover Our Strategy
              </button>
            </div>
          </div>

          {/* Right Side: Creative GIF Animation */}
          <div className="relative flex justify-center items-center lg:justify-end">
            {/* Subtle background decorative shapes for depth */}
            <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>

            {/* <div className="relative w-full max-w-[500px] aspect-square rounded-2xl bg-white/40 p-4 backdrop-blur-sm border border-white/40 shadow-xl overflow-hidden group"> */}
              {/* <Image
              src="/logos/marketing-animate.gif" // 👈 अपनी GIF फ़ाइल का नाम यहाँ लिखें
              alt="Digital Marketing Agency Illustration"
              fill
              unoptimized // 👈 GIFs को एनिमेटेड रखने के लिए Next.js में यह ज़रूरी है
              className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
            /> */}
              {/* एनीमेशन कंटेनर */}
              <div style={{ width: "500px", height: "500px", margin: "0 auto" }} >
                <DotLottiePlayer autoplay loop src={animationData} />
              </div>
            {/* </div> */}
          </div>
        </div>
      </section>

      {/* carousel logo  */}
      <section className="bg-white py-16 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-800 leading-snug">
            Over{" "}
            <span className="text-blue-600 font-semibold border-b-2 border-blue-600">
              500 Clients
            </span>{" "}
            and{" "}
            <span className="text-blue-600 font-semibold border-b-2 border-blue-600">
              5,000 Projects
            </span>
            <br />
            Across The Globe.
          </h2>
        </div>

        {/* Infinite Carousel Container */}
        <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-white after:to-transparent">
          <div className="animate-marquee gap-8 items-center py-4">
            {doubleLogos.map((logo, index) => (
              <div
                key={index}
                className="flex w-[200px] h-[80px] items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={200}
                  height={75}
                  className="max-h-full max-w-full object-contain filter opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📞  (Contact Section) */}
      <section
        id="contact"
        className="py-20 bg-slate-900 text-white rounded-t-[3rem]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
              Let's Connect
            </span>
            <h2 className="text-3xl sm:text-5xl font-black mt-4 tracking-tight leading-tight">
              {" "}
              Have a project in mind? Let's build it together.
            </h2>
            <p className="mt-6 text-slate-400 text-base leading-relaxed">
              Have a project or a question? We'd love to hear from you.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-800 rounded-xl text-blue-400">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Email us at</p>
                  <p className="text-sm font-semibold">
                    hello@matrixbrandaxle.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-800 rounded-xl text-blue-400">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Email us at</p>
                  <p className="text-sm font-semibold">
                    hello@matrixbrandaxle.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-800 rounded-xl text-blue-400">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Call us at</p>
                  <p className="text-sm font-semibold">1234567890</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-10">
                <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                  India
                </span>
                <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                  Australia
                </span>

                <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                  UAE
                </span>

                <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                  Canada
                </span>

                <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                  UK
                </span>

                <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                  USA
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white text-slate-900 p-8 sm:p-10 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full mt-2 p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 transition"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full mt-2 p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 transition"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase">
                  How can we help?
                </label>
                <textarea
                  rows="4"
                  className="w-full mt-2 p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 transition"
                  placeholder="Describe your project requirements..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

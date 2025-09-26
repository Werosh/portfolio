import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  Github,
  Linkedin,
  Instagram,
  Youtube,
  MessageSquare,
  Mail,
  Phone,
  ExternalLink,
  Loader2,
  ArrowRight,
  MapPin,
  Clock,
  Star,
  Award,
  Users,
} from "lucide-react";

import { TbBrandFiverr } from "react-icons/tb";

const BlackWhiteContact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const services = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Cloud Solutions",
    "DevOps Services",
    "Custom Software Development",
    "API Development",
    "Technical Consulting",
  ];

  const socialLinks = [
    {
      icon: Github,
      link: "https://github.com/Werosh",
      label: "GITHUB",
      description: "CODE REPOSITORY",
    },
    {
      icon: TbBrandFiverr,
      link: "https://www.fiverr.com/werosh_k",
      label: "FIVERR",
      description: "FREELANCE SERVICES",
    },

    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/werosh-kriyanjala-0318b1292/",
      label: "LINKEDIN",
      description: "PROFESSIONAL NETWORK",
    },
    {
      icon: Instagram,
      link: "https://www.instagram.com/werosh_k/",
      label: "INSTAGRAM",
      description: "CREATIVE JOURNEY",
    },
    {
      icon: Youtube,
      link: "https://www.youtube.com/c/KiraGamingSL",
      label: "YOUTUBE",
      description: "VIDEO CONTENT",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "EMAIL",
      value: "weroshprofy@gmail.com",
      link: "mailto:weroshprofy@gmail.com",
    },
    {
      icon: Phone,
      label: "PHONE",
      value: "+94 76 94 96 250",
      link: "tel:+94769496250",
    },
    {
      icon: MessageSquare,
      label: "WHATSAPP",
      value: "QUICK CHAT",
      link: "https://wa.link/8yrqoc",
    },
    {
      icon: MapPin,
      label: "LOCATION",
      value: "SRI LANKA",
    },
  ];

  const floatingElements = [
    {
      icon: Star,
      text: "QUALITY\nCODE",
      position: "top-[20%] right-[5%]",
      delay: "0s",
      rotation: "rotate-12",
    },
    {
      icon: Award,
      text: "BEST\nSERVICE",
      position: "top-[60%] right-[8%]",
      delay: "1s",
      rotation: "-rotate-6",
    },
    {
      icon: Users,
      text: "HAPPY\nCLIENTS",
      position: "top-[40%] left-[5%]",
      delay: "0.5s",
      rotation: "rotate-3",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_7r3b8j4",
        "template_8gliosf",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        "EzReJSUxpdt8P7ZqI"
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      alert("Message sent successfully!");
    } catch (error) {
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact"
      className="relative w-full min-h-screen overflow-hidden bg-black"
    >
      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Fine grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "25px 25px",
        }}
      />

      {/* Geometric shapes */}
      <div className="absolute top-20 right-20 w-24 h-24 border-4 border-white/20 rotate-45 animate-pulse" />
      <div
        className="absolute bottom-32 left-16 w-32 h-32 border-2 border-white/20 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Floating Elements */}
      <div className="hidden lg:block">
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className={`absolute ${element.position} ${element.rotation} transform animate-bounce`}
            style={{
              animationDelay: element.delay,
              animationDuration: "4s",
              animationIterationCount: "infinite",
            }}
          >
            <div className="relative bg-white text-black px-4 py-3 rounded-lg shadow-xl border-2 border-white transform hover:scale-110 transition-transform">
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gray-200 transform rotate-45" />
              <div className="flex items-center gap-2">
                <element.icon size={16} className="flex-shrink-0" />
                <span className="text-xs font-black leading-tight whitespace-pre-line">
                  {element.text}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full min-h-screen px-4 md:px-8 lg:px-16 max-w-7xl mx-auto py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 text-xs md:text-sm font-black rounded-full bg-white text-black border-2 border-white shadow-lg mb-8">
            <div className="w-2 h-2 bg-black rounded-full mr-2 animate-pulse" />
            <span>CONTACT</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight text-white mb-6">
            LET'S
            <span className="block text-black bg-white px-4 py-2 transform -skew-x-12 inline-block shadow-xl ml-4">
              WORK TOGETHER
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white leading-relaxed font-medium">
            Ready to bring your ideas to life? Let's discuss your next project
            and create something{" "}
            <span className="bg-white text-black px-2 py-1 font-black text-sm inline-block transform -skew-x-6">
              EXTRAORDINARY
            </span>
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Contact Form */}
          <div className="space-y-8">
            <div className="bg-white p-8 shadow-2xl border-4 border-white">
              <h2 className="text-2xl md:text-3xl font-black text-black mb-6 tracking-tight">
                SEND MESSAGE
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black text-black mb-2 tracking-wider">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-black font-medium text-black focus:outline-none focus:border-gray-600"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black text-black mb-2 tracking-wider">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-black font-medium text-black focus:outline-none focus:border-gray-600"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black text-black mb-2 tracking-wider">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-black font-medium text-black focus:outline-none focus:border-gray-600"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-black mb-2 tracking-wider">
                    SERVICE REQUIRED
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-black font-medium text-black focus:outline-none focus:border-gray-600"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black text-black mb-2 tracking-wider">
                    PROJECT DETAILS
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-black font-medium text-black focus:outline-none focus:border-gray-600"
                    placeholder="Tell me about your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-black text-white px-8 py-4 font-black text-sm md:text-base tracking-wider transition-all duration-300 hover:bg-gray-800 transform hover:scale-105 active:scale-95 shadow-xl border-2 border-black flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      SENDING MESSAGE...
                    </>
                  ) : (
                    <>
                      SEND MESSAGE
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Side - Contact Info & Socials */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-6 tracking-tight">
                GET IN TOUCH
              </h2>

              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className="bg-white border-4 border-white shadow-xl p-6 transform hover:scale-105 transition-transform"
                >
                  {contact.link ? (
                    <a
                      href={contact.link}
                      target={
                        contact.link.startsWith("http") ? "_blank" : "_self"
                      }
                      rel={
                        contact.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-center gap-4 group"
                    >
                      <div className="bg-black p-3 text-white">
                        <contact.icon size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-black text-sm tracking-wider text-black">
                          {contact.label}
                        </h3>
                        <p className="font-medium text-black group-hover:underline">
                          {contact.value}
                        </p>
                      </div>
                      <ExternalLink
                        size={16}
                        className="text-black group-hover:translate-x-1 transition-transform"
                      />
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="bg-black p-3 text-white">
                        <contact.icon size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-black text-sm tracking-wider text-black">
                          {contact.label}
                        </h3>
                        <p className="font-medium text-black">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Availability Status */}
            <div className="bg-white border-4 border-white shadow-xl p-6">
              <div className="flex items-center gap-4">
                <div className="bg-green-500 p-3 text-white">
                  <Clock size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-sm tracking-wider text-black">
                    AVAILABILITY STATUS
                  </h3>
                  <p className="font-medium text-black">
                    AVAILABLE FOR NEW PROJECTS
                  </p>
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
          {/* Next Section */}
        </div>
        {/* Social Links */}
        <div className="w-full mt-10">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-6 tracking-tight">
            SOCIAL PROFILES
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-white border-4 border-white shadow-xl p-6 rounded-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-black p-3 text-white group-hover:bg-gray-800 transition-colors rounded-lg">
                  <social.icon size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-sm tracking-wider text-black">
                    {social.label}
                  </h3>
                  <p className="font-medium text-black group-hover:underline">
                    {social.description}
                  </p>
                </div>
                <ExternalLink
                  size={16}
                  className="text-black group-hover:translate-x-1 transition-transform"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section - Additional Info */}
        <div className="mt-16 pt-8 border-t-4 border-white">
          <div className="text-center">
            <p className="text-white font-medium text-lg mb-4">
              RESPONSE TIME: WITHIN 24 HOURS
            </p>
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
              {[
                "FAST DELIVERY",
                "QUALITY WORK",
                "24/7 SUPPORT",
                "AFFORDABLE RATES",
              ].map((feature, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-xs md:text-sm font-black text-black bg-white border-2 border-white shadow-lg hover:bg-gray-200 transition-colors transform hover:scale-105"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackWhiteContact;

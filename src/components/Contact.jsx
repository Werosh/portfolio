import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  MessageSquare,
  Send,
  Mail,
  Phone,
  Home,
  ExternalLink,
  Loader2,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const ProfessionalContact = () => {
  const [activeTab, setActiveTab] = useState("social");
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

  const socialLinks = [
    {
      icon: Github,
      link: "https://github.com/Werosh",
      label: "Github",
      gradient: "from-violet-500 to-indigo-500",
      description: "Check out my latest projects and contributions",
    },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/werosh-kriyanjala-0318b1292/",
      label: "LinkedIn",
      gradient: "from-blue-500 to-cyan-500",
      description: "Connect with me professionally",
    },
    {
      icon: Instagram,
      link: "https://www.instagram.com/werosh_k/",
      label: "Instagram",
      gradient: "from-pink-500 to-rose-500",
      description: "Follow my creative journey",
    },
    {
      icon: Youtube,
      link: "https://www.youtube.com/c/KiraGamingSL",
      label: "Youtube",
      gradient: "from-red-500 to-rose-500",
      description: "Watch my latest content and tutorials",
    },
  ];

  const messageLinks = [
    {
      icon: Mail,
      link: "mailto:weroshprofy@gmail.com",
      label: "Email",
      value: "weroshprofy@gmail.com",
      gradient: "from-violet-500 to-indigo-500",
      description: "Best for business inquiries",
    },
    {
      icon: MessageSquare,
      link: "https://wa.link/8yrqoc",
      label: "WhatsApp",
      gradient: "from-green-500 to-emerald-500",
      description: "Quick responses during business hours",
    },
    {
      icon: Send,
      link: "https://t.me/Mr_WKz",
      label: "Telegram",
      gradient: "from-cyan-500 to-blue-500",
      description: "Available for international clients",
    },
    {
      icon: Phone,
      link: "tel:+94769496250",
      label: "Phone",
      value: "+94 76 94 96 250",
      gradient: "from-amber-500 to-orange-500",
      description: "Available during Sri Lanka business hours",
    },
  ];

  return (
    <div
      id="contact"
      className="relative w-full min-h-screen py-20 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-0 rounded-full w-96 h-96 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 rounded-full w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl animate-pulse" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] 
        bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]"
      />

      {/* Content */}
      <div className="container relative z-20 px-6 mx-auto mt-20">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium border rounded-full bg-white/5 border-white/10 backdrop-blur-sm">
            <span className="text-gray-300">Contact</span>
          </div>
          <h2 className="mb-6 text-4xl font-medium md:text-5xl lg:text-6xl">
            Let's Build
            <span className="ml-2 font-bold text-transparent bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text">
              Something Great
            </span>
          </h2>
          <p className="text-lg text-gray-400">
            Available for freelance work and exciting opportunities
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="max-w-4xl mx-auto mb-12 overflow-hidden border rounded-2xl bg-white/[0.02] border-white/10 backdrop-blur-md">
          <div className="p-8">
            <h3 className="mb-6 text-2xl font-medium text-center text-white">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 text-white border rounded-xl bg-white/[0.01] border-white/10 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 text-white border rounded-xl bg-white/[0.01] border-white/10 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 text-white border rounded-xl bg-white/[0.01] border-white/10 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none"
                  placeholder="Your email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">
                  Service Required
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 text-white border rounded-xl bg-white/[0.01] border-white/10 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((service, index) => (
                    <option key={index} value={service} className="bg-gray-900">
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 text-white border rounded-xl bg-white/[0.01] border-white/10 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none"
                  placeholder="Tell me about your project"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center w-full gap-2 px-6 py-3 text-white transition-all duration-300 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Social and Message Links Card */}
        <div className="max-w-4xl mx-auto overflow-hidden border rounded-2xl bg-white/[0.02] border-white/10 backdrop-blur-md">
          {/* Tab Navigation */}
          <div className="flex p-1 space-x-1 border-b border-white/10">
            <button
              onClick={() => setActiveTab("social")}
              className={`flex-1 py-4 text-sm font-medium rounded-xl transition-all duration-300 ${
                activeTab === "social"
                  ? "bg-white/5 text-white"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              Social Profiles
            </button>
            <button
              onClick={() => setActiveTab("message")}
              className={`flex-1 py-4 text-sm font-medium rounded-xl transition-all duration-300 ${
                activeTab === "message"
                  ? "bg-white/5 text-white"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              Message Me
            </button>
          </div>

          {/* Links Content */}
          <div className="p-6">
            <div className="grid gap-4 md:grid-cols-2">
              {(activeTab === "social" ? socialLinks : messageLinks).map(
                (item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col p-6 transition-all duration-300 rounded-xl bg-white/[0.01] hover:bg-white/[0.05]"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${item.gradient} bg-opacity-10 
                      transition-transform duration-300 group-hover:scale-110`}
                      >
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white">
                          {item.label}
                        </h3>
                        {item.value && (
                          <p className="text-sm text-gray-400">{item.value}</p>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300">
                      {item.description}
                    </p>
                    <div className="absolute top-6 right-6">
                      <ExternalLink className="w-4 h-4 text-gray-500 transition-colors group-hover:text-white" />
                    </div>
                  </a>
                )
              )}
            </div>
          </div>

          {/* Location Footer */}
          <div className="flex items-center justify-center gap-2 p-6 border-t border-white/10">
            <Home className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-400">
              Based in Kurunegala, Sri Lanka
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalContact;

import React, { useState } from "react";
import { Github, ExternalLink, Mail, Linkedin } from "lucide-react";
import emailjs from "emailjs-com"; // Import EmailJS

const ModernFooter = () => {
  const [email, setEmail] = useState(""); // State to manage email input
  const [isSubmitting, setIsSubmitting] = useState(false); // State to handle the submission state
  const [successMessage, setSuccessMessage] = useState(""); // Success message after submission

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={18} />,
      label: "GitHub",
      href: "https://github.com/Werosh",
    },
    {
      icon: <Linkedin size={18} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/werosh-kriyanjala-0318b1292/",
    },
    {
      icon: <Mail size={18} />,
      label: "Email",
      href: "mailto:weroshprofy@gmail.com",
    },
  ];

  // Function to handle the subscription form submission
  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Using EmailJS to send email
    emailjs
      .sendForm(
        "service_d6tro1e",
        "template_2o9roif",
        e.target,
        "EzReJSUxpdt8P7ZqI"
      )
      .then(
        (result) => {
          setSuccessMessage("Thank you for subscribing!");
          setEmail(""); // Clear input field
          setIsSubmitting(false); // Reset the button state
        },
        (error) => {
          setSuccessMessage("Subscription failed. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <footer className="relative w-full overflow-hidden bg-black/90">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 blur-3xl 
          animate-pulse bottom-[-150px] left-[-100px]"
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl 
          animate-pulse bottom-[-100px] right-[-100px]"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] 
        bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]"
      />

      <div className="relative z-10 px-6 py-12">
        <div className="container mx-auto">
          {/* Main Footer Content */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text">
                Werosh Kriyanjala
              </h3>
              <p className="text-sm text-gray-400">
                Crafting digital experiences with passion and precision. Based
                in Sri Lanka.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-300">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#projects"
                    className="transition-colors hover:text-white"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="transition-colors hover:text-white"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="transition-colors hover:text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-300">Connect</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="inline-flex items-center gap-2 px-3 py-2 text-sm transition-all border rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm border-white/10 hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                    <span className="text-gray-300">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-300">
                Stay Updated
              </h4>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 text-sm rounded-full bg-white/5 border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-all rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 hover:shadow-lg hover:shadow-violet-500/25 hover:scale-105 ${
                    isSubmitting ? "animate-pulse opacity-50" : ""
                  }`}
                >
                  <ExternalLink size={16} />
                  {isSubmitting ? "Submitting..." : "Subscribe"}
                </button>
              </form>
              {successMessage && (
                <p className="mt-2 text-sm text-green-400">{successMessage}</p>
              )}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col items-center justify-between gap-4 pt-8 mt-12 text-sm border-t md:flex-row border-white/10">
            <p className="text-gray-400">
              © {currentYear} Werosh Kriyanjala. All rights reserved.
            </p>
            <p className="text-gray-400">
              Built with{" "}
              <a
                href="https://reactjs.org/"
                className="text-violet-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>{" "}
              and{" "}
              <a
                href="https://tailwindcss.com/"
                className="text-violet-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tailwind CSS
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;

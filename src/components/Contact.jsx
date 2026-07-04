import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';

const contactDetails = [
  {
    label: 'Email Address',
    value: 'sanjaythomas542@gmail.com',
    href: 'mailto:sanjaythomas542@gmail.com',
    icon: Mail,
    color: 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40',
  },
  {
    label: 'Phone Call',
    value: '+91 8838989619',
    href: 'tel:+918838989619',
    icon: Phone,
    color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40',
  },
  {
    label: 'LinkedIn Profile',
    value: 'Sanjay Thomas',
    href: 'https://www.linkedin.com/in/sanjay-thomas-22833419b/',
    icon: Linkedin,
    color: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40',
  },
  {
    label: 'GitHub Repositories',
    value: 'Thomas09022006',
    href: 'https://github.com/Thomas09022006',
    icon: Github,
    color: 'text-slate-700 dark:text-slate-350 bg-slate-100 dark:bg-slate-800/60',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const validate = () => {
    let err = {};
    if (!formData.name.trim()) err.name = 'Name is required';
    if (!formData.email.trim()) {
      err.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      err.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      err.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      err.message = 'Message should be at least 10 characters';
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 dark:text-slate-455 mt-4 max-w-lg mx-auto">
            Have a question, a project collaboration idea, or looking to hire? Drop a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Contact details links */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4 flex-grow">
              {contactDetails.map((detail, idx) => {
                const Icon = detail.icon;
                return (
                  <motion.a
                    key={idx}
                    href={detail.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 bg-white dark:bg-slate-900/40 p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 glass dark:glass-dark hover:shadow-md transition-all duration-300"
                  >
                    <div className={`p-3 rounded-xl ${detail.color}`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                        {detail.label}
                      </span>
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-205 mt-1 block">
                        {detail.value}
                      </span>
                    </div>
                  </motion.a>
                );
              })}
            </div>
            
            {/* Quick reminder card */}
            <div className="bg-gradient-to-tr from-indigo-600 to-purple-600 p-6 rounded-3xl text-white shadow-xl shadow-indigo-600/10">
              <h4 className="font-extrabold text-lg mb-2">Location</h4>
              <p className="text-sm text-indigo-100 font-medium">Tamil Nadu, India</p>
              <p className="text-xs text-indigo-200 mt-4 leading-relaxed">
                Currently open to Remote opportunities globally and hybrid setups in Tamil Nadu / Bangalore.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900/40 p-6 sm:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 glass dark:glass-dark shadow-sm">
            <AnimatePresence mode="wait">
              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 120, delay: 0.1 }}
                    className="p-4 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-500 mb-6 border border-emerald-500/10"
                  >
                    <CheckCircle size={48} />
                  </motion.div>
                  <h3 className="text-2xl font-extrabold text-slate-850 dark:text-white mb-2">Message Dispatched!</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed mb-8">
                    Thank you for reaching out, Sanjay. I have received your email and will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitStatus(null)}
                    className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-all duration-200"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">Send Me a Message</h3>
                  
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-650 dark:text-slate-350 mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full bg-slate-55/40 dark:bg-slate-850/40 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all duration-200 text-slate-800 dark:text-slate-200 ${
                        errors.name
                          ? 'border-red-500 focus:ring-red-500/20'
                          : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-550 dark:text-red-400 flex items-center gap-1 mt-1.5 font-medium">
                        <AlertCircle size={12} />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-655 dark:text-slate-350 mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full bg-slate-55/40 dark:bg-slate-850/40 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all duration-200 text-slate-800 dark:text-slate-200 ${
                        errors.email
                          ? 'border-red-500 focus:ring-red-500/20'
                          : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-550 dark:text-red-400 flex items-center gap-1 mt-1.5 font-medium">
                        <AlertCircle size={12} />
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-655 dark:text-slate-355 mb-1.5">
                      Brief Message
                    </label>
                    <textarea
                      rows={5}
                      name="message"
                      placeholder="Describe your inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full bg-slate-55/40 dark:bg-slate-850/40 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all duration-200 text-slate-800 dark:text-slate-200 ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-500/20'
                          : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-xs text-red-550 dark:text-red-400 flex items-center gap-1 mt-1.5 font-medium">
                        <AlertCircle size={12} />
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 disabled:bg-indigo-500/60 shadow-lg shadow-indigo-600/10 hover:shadow-indigo-500/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Encrypting & Dispatching...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Transmit Message
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}

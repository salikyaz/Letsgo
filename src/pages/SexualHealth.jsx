

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Heart, Activity, Shield } from 'lucide-react';

const SexualHealth = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const treatments = [
    {
      name: 'ED Treatment (Sildenafil / Tadalafil)',
      description:
        'Clinician-guided options that may help improve erectile function by supporting healthy blood flow.',
      effectiveness: 'Trusted treatment options (prescription required)',
      icon: Activity
    },
    {
      name: 'Performance & Libido Support',
      description:
        'Personalized wellness support focused on energy, confidence, and sexual performance—based on your goals and health history.',
      effectiveness: 'Tailored to your needs',
      icon: Heart
    },
    {
      name: 'Hormone & Health Review',
      description:
        'If appropriate, we review lifestyle + lab markers (like testosterone) to identify factors that can impact libido, mood, and performance.',
      effectiveness: 'Root-cause focused approach',
      icon: Shield
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Private Online Intake',
      description:
        'Complete a quick, confidential form about your goals, symptoms, and medical history.'
    },
    {
      step: 2,
      title: 'Provider Review',
      description:
        'A licensed provider reviews your information and recommends the safest, most suitable options.'
    },
    {
      step: 3,
      title: 'Treatment Delivered',
      description:
        'If eligible, your plan is prescribed and delivered to your door in discreet packaging.'
    },
    {
      step: 4,
      title: 'Ongoing Support',
      description:
        'Follow-ups and adjustments as needed—so you stay on track and get the best results.'
    }
  ];

  const benefits = [
    'Confidential & secure care',
    'Licensed providers',
    'Personalized treatment plans',
    'Discreet packaging',
    'Fast, convenient online process',
    'Ongoing support & follow-ups',
    'Clear, transparent guidance',
    'Cancel anytime'
  ];

  return (
    <div className="min-h-screen mt-16">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Sexual Health, Simplified.
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Private, clinician-guided care for men’s sexual wellness
              </p>
              <p className="text-gray-600 mb-8">
                Whether you’re dealing with performance concerns, low libido, or confidence issues,
                we help you find safe, evidence-based options. Start with a confidential online intake,
                get a personalized plan, and receive treatment discreetly at your door.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="quiz-sexual">
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-medium text-lg">
                    Get started
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=800&fit=crop"
                alt="Sexual health support"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sexual health treatment options
            </h2>
            <p className="text-xl text-gray-600">
              Provider-reviewed solutions personalized to you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => {
              const Icon = treatment.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{treatment.name}</h3>
                  <p className="text-gray-600 mb-4">{treatment.description}</p>
                  <p className="text-sm font-semibold text-blue-600">{treatment.effectiveness}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              ** Prescription required where applicable. If any compounded medications are offered,
              compounded drug products are not FDA-approved. FDA does not evaluate compounded products
              for safety, effectiveness, or quality.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How it works
            </h2>
            <p className="text-xl text-gray-600">
              Start in 4 simple steps—private, quick, and secure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl p-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why choose Lets Go Medicine for sexual health
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <Check className="text-blue-600" size={16} />
                </div>
                <p className="text-lg text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Support Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=800&h=600&fit=crop"
                alt="Wellness support"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Confidence, Performance &
                Total Wellness
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Because sexual health is connected to sleep, stress, fitness, and overall wellbeing
              </p>

              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">
                    Personalized care for common concerns like ED, low libido, and performance anxiety.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">
                    Provider guidance based on your medical history, goals, and safety considerations.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">
                    Lifestyle support: stress management, sleep, fitness, and nutrition—because it all matters.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">
                    Discreet delivery and ongoing follow-up to optimize your plan over time.
                  </span>
                </li>
              </ul>

              <Link to="quiz-sexual">
                <button className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-medium inline-flex items-center group">
                  Start your journey
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to improve your sexual health?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get private, trusted support—on your terms.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SexualHealth;
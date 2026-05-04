import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { hairLossInfo } from '../data/mockData';

const HairLoss = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const treatmentIcons = [Sparkles, Shield, Clock];

  const benefits = [
    'Clinically proven ingredients',
    'Licensed provider consultations',
    'Custom treatment plans',
    'Discrete delivery',
    'Ongoing monitoring',
    'Cancel anytime'
  ];

  return (
    <div className="min-h-screen mt-16">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                {hairLossInfo.hero.title}
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                {hairLossInfo.hero.subtitle}
              </p>
              <p className="text-gray-600 mb-8">
                {hairLossInfo.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="quiz-hair">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-medium text-lg">
                  Get Started
                </button>
                </Link>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-colors font-medium text-lg">
                  Learn more
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=800&fit=crop"
                alt="Hair regrowth treatment"
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
              Proven hair regrowth treatments
            </h2>
            <p className="text-xl text-gray-600">
              FDA-approved medications that work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hairLossInfo.treatments.map((treatment, index) => {
              const Icon = treatmentIcons[index];
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
              Individual results may vary. Prescription required.
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
              Get personalized hair loss treatment in 4 easy steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hairLossInfo.howItWorks.map((step, index) => (
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

      {/* Before & After Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Real results from real people
            </h2>
            <p className="text-xl text-gray-600">
              See what's possible with personalized treatment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1712599982295-1ecff6059a57?w=800&h=600&fit=crop"
                alt="Customer testimonial 1"
                className="w-full h-96 object-cover rounded-xl mb-6"
              />
              <blockquote className="text-gray-700 mb-4">
                "After 6 months of treatment, I've noticed significant hair regrowth. The process was easy and the support has been excellent."
              </blockquote>
              <p className="text-sm text-gray-600">- Michael, 35</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-sm"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1740089846422-06179711fb3c?w=800&h=600&fit=crop"
                alt="Customer testimonial 2"
                className="w-full h-96 object-cover rounded-xl mb-6"
              />
              <blockquote className="text-gray-700 mb-4">
                "I was skeptical at first, but the results speak for themselves. My confidence has improved along with my hairline."
              </blockquote>
              <p className="text-sm text-gray-600">- James, 42</p>
            </motion.div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Individual results may vary. Images are for illustrative purposes.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why choose Lets Go Medicine for hair loss
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3 bg-white rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
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

      {/* Science Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The science behind hair regrowth
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Understanding how our treatments work
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">DHT Blocking</h3>
                  <p className="text-gray-600">Finasteride blocks the hormone DHT, which is the primary cause of male pattern baldness.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Follicle Stimulation</h3>
                  <p className="text-gray-600">Minoxidil increases blood flow to hair follicles, promoting growth and preventing further loss.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Combination Therapy</h3>
                  <p className="text-gray-600">Using both treatments together often provides the best results for long-term hair regrowth.</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1679394270597-e90694d70350?w=800&h=800&fit=crop"
                alt="Hair science"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to regrow your hair?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands who have successfully treated their hair loss with Lets Go Medicine
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="quiz-hair">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-medium text-lg">
                Start treatment
              </button>
              </Link>
              <Link to="/">
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-colors font-medium text-lg">
                  Back to home
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HairLoss;
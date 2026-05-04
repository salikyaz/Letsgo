import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Scale, Activity, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const WeightLoss = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const treatments = [
    {
      name: 'Compounded Semaglutide',
      description: 'GLP-1 medication that helps regulate appetite and blood sugar levels.',
      effectiveness: 'Average 15% weight loss in clinical studies',
      icon: Scale
    },
    {
      name: 'Compounded Tirzepatide',
      description: 'Dual-action medication targeting GIP and GLP-1 receptors for enhanced weight loss.',
      effectiveness: 'Average 20% weight loss in clinical studies',
      icon: Activity
    },
    {
      name: 'Personalized Plans',
      description: 'Custom treatment plans with nutrition guidance, exercise recommendations, and ongoing support.',
      effectiveness: 'Tailored to your specific needs',
      icon: Heart
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'To get started, complete the online form with your personal and medical details, and then pay the initial consultation fee of $299'
    },
    {
      step: 2,
      title: 'Customized Plan',
      description: 'Based on your needs, we develop a personalized treatment plan tailored to your objectives.'
    },
    {
      step: 3,
      title: 'Advanced Treatment',
      description: 'Receive your treatment using the latest medical techniques for effective results.'
    },
    {
      step: 4,
      title: 'Follow-Up and Support',
      description: 'Benefit from ongoing support and follow-up to ensure continued success and optimal health.'
    }
  ];

  const benefits = [
    'FDA-approved ingredients',
    'Board-certified providers',
    'Personalized treatment plans',
    'Nutrition and exercise guidance',
    'Ongoing support and monitoring',
    'Free shipping to your door',
    'Discrete packaging',
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
                How Lets Go Lean Helps You?
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Science-backed solutions for sustainable weight loss
              </p>
              <p className="text-gray-600 mb-8">
              The Lets Go Lean package includes Semaglutide and B12 (with the option to upgrade to Tirzepatide),
               formulated to aid in weight loss, boost metabolism, and enhance energy levels.
                This treatment is perfect for those focused on shedding excess weight while maintaining optimal energy and overall wellness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="quiz-page">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-medium text-lg">
                  Get started
                </button>
                </Link>
                {/* <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-colors font-medium text-lg">
                  Check eligibility
                </button> */}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1622147459102-8a0f3727e4c4?w=800&h=800&fit=crop"
                alt="Weight loss medication"
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
              Effective weight loss treatments
            </h2>
            <p className="text-xl text-gray-600">
              Doctor-trusted medications personalized to your needs
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
              ** Compounded drug products are not FDA-approved. FDA does not evaluate compounded products for safety, effectiveness, or quality. Prescription required.
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
              Start your weight loss journey in 4 simple steps
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
              Why choose Lets Go Medicine  for weight loss
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
                src="https://images.unsplash.com/photo-1467453678174-768ec283a940?w=800&h=600&fit=crop"
                alt="Healthy lifestyle"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Target Weight Loss &
                Boost Your Metabolism
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Get comprehensive support for lasting results
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Lets Go Lean is designed for men looking to achieve sustainable weight loss and improve their overall metabolic health.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Using a combination of Semaglutide (a GLP-1 receptor agonist) and vitamin B12, this treatment controls appetite, regulates blood sugar, and enhances energy.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Semaglutide helps you feel fuller longer, making it easier to manage food intake, while vitamin B12 supports cellular energy production, keeping you active and focused.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">For those needing a more advanced solution, we offer an upgrade to Tirzepatide, a dual-action treatment that provides even stronger weight loss effects.</span>
                </li>
              </ul>
              <Link to="quiz-page" >
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
              Ready to start losing weight?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands who have achieved their weight loss goals with Lets Go Medicine
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="quiz-page" >
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-medium text-lg">
                Get started now
              </button>
              </Link>
              <Link to="/">
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-colors font-medium text-lg">
                  Back to home
                </button>
              </Link>
            </div> */}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WeightLoss;
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Activity, TrendingUp, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { biomarkers } from '../data/mockData';

const Labs = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const labPackages = [
    {
      name: 'Essential Panel',
      price: '$179',
      description: 'Core health markers for baseline wellness',
      markers: '40+ biomarkers',
      icon: Activity
    },
    {
      name: 'Complete Panel',
      price: '$299',
      description: 'Comprehensive health assessment',
      markers: '80+ biomarkers',
      icon: TrendingUp,
      popular: true
    },
    {
      name: 'Advanced Panel',
      price: '$449',
      description: 'Deep dive into your health optimization',
      markers: '130+ biomarkers',
      icon: Shield
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Order your kit',
      description: 'Choose your lab panel and we\'ll ship a test kit to your door with everything you need.'
    },
    {
      step: 2,
      title: 'Visit a lab',
      description: 'Take your kit to any Quest Diagnostics location for a quick blood draw. No appointment needed.'
    },
    {
      step: 3,
      title: 'Get your results',
      description: 'Receive detailed results in the app within 3-5 days with easy-to-understand insights.'
    },
    {
      step: 4,
      title: 'Take action',
      description: 'Get a personalized Action Plan from doctors with recommendations to optimize your health.'
    }
  ];

  const features = [
    {
      title: 'Test 130+ Biomarkers',
      description: 'Get a comprehensive picture of your health across 10 key categories',
      icon: Activity
    },
    {
      title: 'Discover Your Biological Age',
      description: 'Learn how fast your body is aging compared to your chronological age',
      icon: TrendingUp
    },
    {
      title: 'Personalized Action Plan',
      description: 'Doctor-developed recommendations tailored to your specific results',
      icon: Zap
    }
  ];

  const benefits = [
    'At-home test kit delivery',
    'No doctor visit required',
    'Results in 3-5 days',
    'Easy-to-understand insights',
    'Personalized recommendations',
    'Track progress over time',
    'Secure & confidential',
    'HSA/FSA eligible'
  ];

  return (
    <div className="min-h-screen mt-16">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <p className="text-sm text-blue-600 font-semibold mb-4">labs by hims</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Get your labs.<br />
                Go for your optimal.
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Comprehensive lab testing for optimal health
              </p>
              <p className="text-gray-600 mb-8">
                Understand your body at a deeper level with advanced biomarker testing. Get actionable insights and a personalized plan to optimize your health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-medium text-lg">
                  Start my labs
                </button>
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
                src="https://images.unsplash.com/photo-1715442405524-f668a3cb6cb4?w=800&h=800&fit=crop"
                alt="Lab testing"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What you get with Labs
            </h2>
            <p className="text-xl text-gray-600">
              More than just numbers — insights that matter
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <Icon className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lab Packages Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose your lab panel
            </h2>
            <p className="text-xl text-gray-600">
              Find the right level of testing for your health goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {labPackages.map((pkg, index) => {
              const Icon = pkg.icon;
              return (
                <motion.div
                  key={index}
                  className={`bg-white rounded-2xl p-8 shadow-sm border-2 hover:shadow-xl transition-all ${
                    pkg.popular ? 'border-blue-600 relative' : 'border-gray-200'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-4xl font-bold text-blue-600 mb-4">{pkg.price}</p>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <p className="text-sm font-semibold text-gray-900 mb-6">{pkg.markers}</p>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition-colors font-medium">
                    Get started
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Biomarkers Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Test 130+ biomarkers
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive insights across all major health categories
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 shadow-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {biomarkers.map((category, index) => (
                <motion.div
                  key={index}
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <h4 className="font-bold text-gray-900 text-sm pb-2 border-b-2 border-blue-600">
                    {category.category}
                  </h4>
                  <ul className="space-y-2">
                    {category.markers.map((marker, idx) => (
                      <li key={idx} className="text-xs text-gray-600 leading-relaxed">
                        {marker}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Images are for illustrative purposes only. Individual lab results may vary.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
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
              Getting your labs is simple and convenient
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
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="text-blue-300" size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Biological Age Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1740089846422-06179711fb3c?w=800&h=600&fit=crop"
                alt="Biological age"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Unlock your Biological Age
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Discover how fast your body is really aging
              </p>
              <div className="bg-blue-50 rounded-2xl p-8 mb-6">
                <p className="text-sm text-gray-600 mb-2">As of today</p>
                <div className="flex items-end gap-8 mb-4">
                  <div>
                    <p className="text-6xl font-bold text-blue-600">34</p>
                    <p className="text-sm text-gray-600">Chronological age</p>
                  </div>
                  <div className="pb-2">
                    <ArrowRight size={32} className="text-gray-400" />
                  </div>
                  <div>
                    <p className="text-6xl font-bold text-green-600">31</p>
                    <p className="text-sm text-gray-600">Biological age</p>
                  </div>
                </div>
                <p className="text-green-600 font-semibold">
                  3 years younger than your chronological age
                </p>
              </div>
              <p className="text-gray-600 mb-6">
                Your biological age is a more accurate indicator of your overall health than your chronological age. Learn how to optimize it with personalized recommendations.
              </p>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-medium inline-flex items-center group">
                Get the science
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why choose Hims Labs
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
                <p className="text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Find your baseline
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Get a clear picture of your health with a simple lab test
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Identify health risks before they become problems</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Track your progress over time with regular testing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Get doctor-developed recommendations based on your results</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Optimize your health with data-driven insights</span>
                </li>
              </ul>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-medium inline-flex items-center group">
                Explore labs
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1715442405505-e53ddb9f7d26?w=800&h=600&fit=crop"
                alt="Lab insights"
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
              Ready to optimize your health?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start with comprehensive lab testing and get actionable insights to feel your best
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-medium text-lg">
                Start my labs
              </button>
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

export default Labs;

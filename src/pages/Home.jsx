import React from 'react';
import { color, motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollingTicker from '../components/ScrollingTicker';
import ProductCard from '../components/ProductCard';
import { productCategories, trustPoints, biomarkers, weightLossFeatures } from '../data/mockData';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen  bg-black">


      {/* Hero Section */}
      <section className="py-16 pt-40  px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto text-center ">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-[#fff] mb-8 "
            {...fadeInUp}
          >
            Customized care <br /> <span style={{color: "#f9a826" }} > starts here </span> 
          </motion.h1>
        </div>
      </section>

      
       {/* Scrolling Ticker */}
      <div className="mt-8">
        <ScrollingTicker />
      </div>

      {/* Product Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.slice(0, 4).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {productCategories.slice(4).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 4) * 0.1, duration: 0.6 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="text-[#b0732b] hover:text-[#ffffff] font-medium inline-flex items-center group">
              Browse all treatments
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </section>

     

      {/* Weight Loss Section  bg-gradient-to-b  */  }
      <section className="py-16 px-4 sm:px-6 lg:px-8  from-orange-50 to-white bg-[#1b0732] "  >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {/* f9a826 */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#f9a826] mb-4 ">
              Access a range of<br />doctor-trusted weight loss medications
            </h2>
            <div className="flex justify-center gap-4 mt-8">
              <Link to="/weight-loss">
                <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-medium">
                  Get started
                </button>
              </Link>
              <Link to="/weight-loss">
                <button className="border-2 border-stone-500 bg-stone-500  text-white px-8 py-3 rounded-full hover:bg-stone-600 transition-colors font-medium">
                  See if I'm eligible
                </button>
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {weightLossFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {feature.image && (
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover rounded-xl mb-6"
                  />
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <Link to="/weight-loss">
                  <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group">
                    {feature.cta}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-[#f9a826]">
              Compounded drug products are not approved or evaluated for safety, effectiveness, or quality by the FDA. Prescription required.
            </p>
          </div>
        </div>
      </section>

      {/* Labs Section   bg-gradient-to-b */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8  from-blue-50 to-white"
      style={{backgroundColor:"#b98267cc"}}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-white mb-4">labs by</p>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-2">
              Get your labs.
            </h2>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              Go for your optimal.
            </h2>
            <div className="flex justify-center gap-4 mt-8">
              <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-white transition-colors font-medium">
                Start my labs
              </button>
              <button className="border-2 border-[#b98267cc] text-white px-8 py-3 rounded-full  bg-[#b98267cc]  hover:bg-[#a8725bcc] transition-colors font-medium">
                Learn more
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Find your<br />baseline</h3>
              <p className="text-gray-600 mb-6">
                Get a clear picture of your health with a simple lab test.
              </p>
              <img
                src="https://images.unsplash.com/photo-1715442405524-f668a3cb6cb4?w=600&h=400&fit=crop"
                alt="Lab testing"
                className="w-full h-64 object-cover rounded-xl"
              />
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-sm"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Plan your<br />breakthrough</h3>
              <p className="text-gray-600 mb-6">
                Optimize your health with a doctor-developed Action Plan.
              </p>
              <img
                src="https://images.unsplash.com/photo-1740089846422-06179711fb3c?w=600&h=400&fit=crop"
                alt="Action plan"
                className="w-full h-64 object-cover rounded-xl"
              />
            </motion.div>
          </div>

          {* Biomarkers *}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Test 130+ biomarkers</h3>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {biomarkers.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm">{category.category}</h4>
                    <ul className="space-y-1">
                      {category.markers.map((marker, idx) => (
                        <li key={idx} className="text-xs text-gray-600">{marker}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Testosterone Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#000] from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#fff] mb-4">
              Get your edge back with<br />Testosterone by Lets Go Medicine
            </h2>
            <div className="flex justify-center gap-4 mt-8">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium">
                Get started
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors font-medium">
                Do I have low T?
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1631390179406-0bfe17e9f89d?w=600&h=400&fit=crop"
                alt="Testosterone Rx"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Testosterone Rx</h3>
              <p className="text-gray-600 mb-4">to elevate your T</p>
              <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group">
                Learn more
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <img
                src="https://images.unsplash.com/photo-1715442405505-e53ddb9f7d26?w=600&h=400&fit=crop"
                alt="At-home labs"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">At-home labs</h3>
              <p className="text-gray-600 mb-4">to check your T levels</p>
              <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group">
                Start testing
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </motion.div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-white">
              Image is for illustrative purposes only. Individual lab results may vary. Compounded products are not approved nor evaluated for safety, effectiveness, or quality by the FDA.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8  ">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#fff] text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            
            Doctor-trusted solutions,<br /> <span style={{color:"#f9a826"}}>personalized to you</span> 
            {/* b0732b   */}
            </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trustPoints.map((point, index) => (
              <motion.div
                key={point.id}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={point.image}
                  alt={point.title}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{point.title}</h3>
                <p className="text-gray-600 mb-6">{point.description}</p>
                <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group">
                  Get personalized treatment
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Section  bg-gradient-to-b */}
      <section className="py-16 px-4 sm:px-6 lg:px-8    from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1467453678174-768ec283a940?w=600&h=400&fit=crop"
                  alt="Guide to Protein"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Unlock the free Guide to Protein for Weight Loss
                </h3>
                <p className="text-gray-600 mb-6">
                  Written by board-certified doctors to support your journey.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Get the guide
                  </button>
                </form>
                <p className="text-xs text-gray-500 mt-4">
                  By creating an account using email, I agree to the Terms & Conditions, and acknowledge the Privacy Policy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
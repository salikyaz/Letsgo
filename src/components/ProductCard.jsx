import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={product.link}>
      <motion.div
        className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer group"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="aspect-square relative overflow-hidden">
          <motion.img
            src={isHovered ? product.hoverImage : product.defaultImage}
            alt={product.title}
            className="w-full h-full object-cover"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {product.title}
          </h3>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
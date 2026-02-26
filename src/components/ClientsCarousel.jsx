import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, Zap, Scale, Award as AwardIcon } from 'lucide-react';

const ClientsCarousel = () => {
  const clients = [
    { icon: Building2, name: 'Nalanda Medical College', location: 'Patna', service: 'Security & Housekeeping' },
    { icon: Building2, name: 'District Health Society', location: 'Kishanganj, Gopalganj, Kaimur', service: 'Comprehensive Facility Management' },
    { icon: GraduationCap, name: 'Kendriya Vidyalayas', location: 'Across Bihar', service: 'Security & Maintenance' },
    { icon: Zap, name: 'Power Grid Corporation', location: 'Multiple Locations', service: 'Security & Safety Services' },
    { icon: Scale, name: 'Competition Commission of India', location: 'New Delhi', service: 'Corporate Security' },
    { icon: AwardIcon, name: 'Bureau of Indian Standards', location: 'National', service: 'Facility Management' },
    { icon: Building2, name: 'Government Medical Colleges', location: 'Bihar', service: 'Security Solutions' },
    { icon: Building2, name: 'Private Hospitals', location: 'Patna & NCR', service: 'Healthcare Security' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(4);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(3);
      } else {
        setVisibleCount(2);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [clients.length]);

  const visibleClients = [];
  for (let i = 0; i < visibleCount; i++) {
    const index = (currentIndex + i) % clients.length;
    visibleClients.push(clients[index]);
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-primary-800">
            Our Prestigious Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by leading government and private organizations across India
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-royal-600 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="flex justify-center">
            <div className={`grid gap-6 ${
              visibleCount === 4 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' :
              visibleCount === 3 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :
              'grid-cols-1 md:grid-cols-2'
            }`}>
              {visibleClients.map((client, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 hover:border-primary-300 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 h-full"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-50 to-accent-royal-50 text-primary-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <client.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {client.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">📍 {client.location}</p>
                  <p className="text-sm text-gray-400">{client.service}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index >= currentIndex && index < currentIndex + visibleCount
                    ? 'bg-primary-600 w-8'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              <span>Government Organizations</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent-royal-500 rounded-full"></div>
              <span>Private Corporations</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Healthcare Institutions</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsCarousel;

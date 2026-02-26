import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import PageTransition from '@/components/PageTransition';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Sparkles, Building2, Star, Quote, Camera, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/ui/button';
import HeroSlider from '@/components/HeroSlider';

const HomePage = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 50]);
  const y3 = useTransform(scrollY, [0, 300], [0, -30]);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Director, Nalanda Medical College",
      content: "Vision Technocrates has been our trusted security partner for over 5 years. Their professional approach and dedication to safety is commendable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Priya Sharma",
      position: "Manager, District Health Society",
      content: "Excellent facility management services. Their housekeeping and maintenance teams are highly skilled and reliable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Amit Singh",
      position: "CEO, Power Grid Corporation",
      content: "Outstanding security solutions and 24/7 support. Vision Technocrates truly understands the importance of safety in critical infrastructure.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center", alt: "Security Personnel Training", category: "Security" },
    { src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop&crop=center", alt: "Facility Management", category: "Facilities" },
    { src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop&crop=center", alt: "CCTV Surveillance", category: "Technology" },
    { src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center", alt: "Professional Team", category: "Team" },
    { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=center", alt: "Housekeeping Services", category: "Cleaning" },
    { src: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=300&fit=crop&crop=center", alt: "Event Security", category: "Events" }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(testimonialTimer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextGallery = () => {
    setCurrentGalleryIndex((prev) => (prev + 3) % galleryImages.length);
  };

  const prevGallery = () => {
    setCurrentGalleryIndex((prev) => (prev - 3 + galleryImages.length) % galleryImages.length);
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Vision Technocrates Pvt. Ltd. | Professional Security & Facilities Management</title>
        <meta name="description" content="Leading security and facilities management company in Bihar and India. ISO certified with 12+ years of experience in security guard services, facility management, housekeeping, CCTV surveillance, fire safety, and technical maintenance." />
        <meta name="keywords" content="security services, facility management, housekeeping, CCTV surveillance, fire safety, manpower supply, Vision Technocrates, Bihar, India" />
        <meta property="og:title" content="Vision Technocrates Pvt. Ltd. | Professional Security & Facilities Management" />
        <meta property="og:description" content="Your trusted partner for comprehensive security and facilities management solutions since 2012." />
        <meta property="og:image" content="/images/logo.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.vtplbihar.com" />
      </Helmet>

      {/* Hero Section with Slider */}
      <HeroSlider />

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-200 to-accent-royal-200 rounded-2xl blur-2xl opacity-60 animate-pulse" />
                <img
                  className="relative rounded-2xl shadow-2xl w-full"
                  alt="Vision Technocrates Professional Team"
                  src="https://images.unsplash.com/photo-1583279509717-73c5492d06cb?w=600&h=400&fit=crop&crop=center"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-primary-800">
                  About Vision Technocrates
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-royal-600 rounded-full mb-6" />
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in <span className="text-primary-600 font-semibold">2012</span>, Vision Technocrates Pvt. Ltd.
                  has established itself as a premier provider of security and facilities management services across Bihar and India.
                </p>
                <p>
                  We are <span className="text-primary-600 font-semibold">ISO certified</span> and trusted by government
                  institutions, private corporations, and organizations across various sectors.
                </p>
                <p>
                  Our commitment to excellence, professionalism, and innovation has made us the preferred choice for
                  comprehensive security solutions and facility management services.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-primary-50 rounded-xl">
                  <div className="text-2xl font-bold text-primary-600">12+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-accent-royal-50 rounded-xl">
                  <div className="text-2xl font-bold text-accent-royal-600">100+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>

              <Link to="/about">
                <Button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transition-all duration-300">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-primary-800">
              Our Comprehensive Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Integrated security and facilities management solutions tailored to your specific needs
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-royal-600 mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Security Guard Services', description: 'Professional security personnel for complete protection of your premises and assets.' },
              { icon: Building2, title: 'Facility Management', description: 'Comprehensive facility management including maintenance and operations.' },
              { icon: Sparkles, title: 'Housekeeping Services', description: 'Professional cleaning and housekeeping for pristine environments.' },
              { icon: Camera, title: 'CCTV & Surveillance Systems', description: 'Advanced surveillance solutions for 24/7 monitoring and security.' },
              { icon: Users, title: 'Fire Safety Management', description: 'Certified firefighting and comprehensive safety solutions.' },
              { icon: Award, title: 'Technical Maintenance', description: 'Expert technical maintenance and support services.' }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-royal-500 text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary-500/30">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/services">
              <Button size="lg" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 text-lg rounded-full shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by industry leaders and organizations across India
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-royal-600 mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-primary-50 to-accent-royal-50 rounded-2xl p-8 md:p-12 shadow-xl">
              <Quote className="w-12 h-12 text-primary-400 mb-6" />

              <div className="relative overflow-hidden">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  <p className="text-lg md:text-xl text-gray-700 mb-8 italic leading-relaxed">
                    "{testimonials[currentTestimonial].content}"
                  </p>

                  <div className="flex items-center justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</div>
                      <div className="text-sm text-gray-600">{testimonials[currentTestimonial].position}</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="flex justify-center space-x-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-600 hover:bg-white transition-all duration-300 shadow-lg hover:scale-110"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? 'bg-primary-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-600 hover:bg-white transition-all duration-300 shadow-lg hover:scale-110"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-primary-800">
              Our Work in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional security and facility management services delivered with excellence
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-royal-600 mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {galleryImages.slice(currentGalleryIndex, currentGalleryIndex + 3).map((image, index) => (
                <motion.div
                  key={`${currentGalleryIndex}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-sm font-semibold">{image.category}</div>
                    <div className="text-xs">{image.alt}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center space-x-4 mt-8">
              <button
                onClick={prevGallery}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-all duration-300 shadow-lg hover:scale-110"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextGallery}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-all duration-300 shadow-lg hover:scale-110"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
                View More Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-royal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Ready to Secure Your Future?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Contact us today for a free consultation and discover how Vision Technocrates can protect and manage your facilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Request a Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default HomePage;

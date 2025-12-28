'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import teamData from '@/data/team.json';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-50 via-mint-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About <span className="text-gradient">The Learning Lab</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A collaborative team of professionals dedicated to creating exceptional learning experiences and web solutions
          </motion.p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {teamData.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-5/12">
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-200 to-mint-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-500 text-lg">Professional Headshot</span>
                    </div>
                    {/* Replace with actual image */}
                    {/* <Image src={member.image} alt={member.name} fill className="object-cover" /> */}
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-7/12">
                  <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h2>
                    <p className="text-xl text-primary-600 font-medium mb-6">{member.title}</p>

                    {/* Bio - Split paragraphs */}
                    <div className="prose prose-lg text-gray-600 space-y-4 mb-8">
                      {member.bio.split('\n\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href={member.portfolio}
                        className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        View Portfolio
                        <ArrowRight className="ml-2" size={18} />
                      </Link>
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors border border-gray-300"
                      >
                        <Mail className="mr-2" size={18} />
                        Email {member.name}
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors border border-gray-300"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-mint-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl mb-8 text-primary-50">
              Whether you need eLearning development or web design, we're here to help
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Get in Touch
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import projectsData from '@/data/projects.json';

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectsData.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-mint-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-full">
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {project.title}
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white text-gray-700 text-sm font-medium rounded-full border border-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-video bg-gradient-to-br from-primary-200 to-mint-200 rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Project Screenshot</span>
            </div>
            {/* Replace with actual image */}
            {/* <Image src={project.image} alt={project.title} fill className="object-cover" /> */}
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{project.overview}</p>
              </motion.div>

              {/* Key Tasks */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Tasks</h2>
                <ul className="space-y-3">
                  {project.keyTasks.map((task, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-600">{task}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Outcomes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Outcomes & Impact</h2>
                <div className="bg-gradient-to-br from-primary-50 to-mint-50 rounded-xl p-6">
                  <ul className="space-y-3">
                    {project.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={20} />
                        <span className="text-gray-700 font-medium">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl p-6 shadow-lg sticky top-32"
              >
                {/* Tools Used */}
                <h3 className="text-lg font-bold text-gray-900 mb-4">Tools & Technologies</h3>
                <div className="space-y-2 mb-8">
                  {project.tools.map((tool) => (
                    <div
                      key={tool}
                      className="px-3 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg"
                    >
                      {tool}
                    </div>
                  ))}
                </div>

                {/* Category */}
                <h3 className="text-lg font-bold text-gray-900 mb-4">Category</h3>
                <p className="text-gray-600 mb-8">{project.category}</p>

                {/* CTA */}
                <Link
                  href="/contact"
                  className="block w-full px-6 py-3 bg-primary-600 text-white text-center font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Start Your Project
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* More Projects CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Want to See More?
            </h2>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              View All Projects
              <ExternalLink className="ml-2" size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

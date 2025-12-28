'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  owner: string;
}

export default function ProjectCard({ id, title, description, image, tags, owner }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link href={`/portfolio/${id}`} className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
        {/* Image */}
        <div className="relative h-48 bg-gradient-to-br from-primary-100 to-mint-100 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            <span className="text-sm">Project Image</span>
          </div>
          {/* Placeholder for actual image */}
          {/* <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" /> */}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  category: string;
  icon: string;
  skills: string[];
  index: number;
}

export default function SkillCard({ category, icon, skills, index }: SkillCardProps) {
  // Dynamically get the icon component
  const IconComponent = (Icons[icon as keyof typeof Icons] as LucideIcon) || Icons.Star;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
    >
      {/* Icon */}
      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-mint-500 rounded-lg flex items-center justify-center mb-4">
        <IconComponent className="text-white" size={24} />
      </div>

      {/* Category */}
      <h3 className="text-lg font-bold text-gray-900 mb-3">{category}</h3>

      {/* Skills List */}
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="text-sm text-gray-600 flex items-start">
            <span className="text-primary-500 mr-2">•</span>
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

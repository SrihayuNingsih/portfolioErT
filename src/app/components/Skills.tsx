import { motion } from 'motion/react';
import {
  Code2,
  Database,
  Server,
  FileSpreadsheet,
  Globe,
  Scale,
  Calculator,
  Wrench,
} from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming Languages',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        'HTML/CSS (Bootstrap, Tailwind CSS)',
        'JavaScript/TypeScript',
        'React.js & Next.js',
        'PHP & Laravel',
        'Python & Django/Flask',
        'Svelte & SvelteKit',
        'Java & Spring Boot',
        'C# & .NET',
        'C++',
      ],
    },
    {
      icon: Database,
      title: 'Data Analysis',
      color: 'from-purple-500 to-pink-500',
      skills: [
        'Python (Pandas, NumPy)',
        'SQL & NoSQL Databases',
        'Power BI & Tableau',
        'Data Visualization',
        'Statistical Analysis',
        'Machine Learning',
        'Excel Advanced',
      ],
    },
    {
      icon: Server,
      title: 'DevOps & Full Stack',
      color: 'from-green-500 to-emerald-500',
      skills: [
        'Docker & Kubernetes',
        'MongoDB / MySQL / PostgreSQL',
        'CI/CD Pipeline',
        'AWS, Azure, GCP',
        'Git & GitHub',
        'Linux Server Admin',
        'API Development',
        'Microservices',
      ],
    },
    {
      icon: FileSpreadsheet,
      title: 'Microsoft Office',
      color: 'from-orange-500 to-red-500',
      skills: [
        'Microsoft Word',
        'Microsoft Excel',
        'Microsoft PowerPoint',
        'Microsoft Access',
        'Microsoft Outlook',
        'Microsoft Project',
      ],
    },
    {
      icon: Globe,
      title: 'Bahasa Inggris',
      color: 'from-indigo-500 to-blue-500',
      skills: [
        'Business English',
        'Technical Writing',
        'Translation Services',
        'TOEFL/IELTS Certified',
        'Professional Communication',
      ],
    },
    {
      icon: Scale,
      title: 'Ilmu Hukum',
      color: 'from-amber-500 to-yellow-500',
      skills: [
        'Hukum Perdata',
        'Hukum Bisnis',
        'Hukum Properti',
        'Kontrak & Perjanjian',
        'Konsultasi Hukum',
        'Legal Drafting',
      ],
    },
    {
      icon: Calculator,
      title: 'Matematika',
      color: 'from-teal-500 to-cyan-500',
      skills: [
        'Kalkulus & Aljabar',
        'Statistik & Probabilitas',
        'Matematika Diskrit',
        'Matematika Finansial',
        'Optimasi & Algoritma',
      ],
    },
    {
      icon: Wrench,
      title: 'Tools & Frameworks',
      color: 'from-rose-500 to-pink-500',
      skills: [
        'VS Code & IDEs',
        'Figma & Adobe XD',
        'Postman & Insomnia',
        'Jest & Testing Libraries',
        'Webpack & Vite',
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Keahlian & Expertise
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Menguasai berbagai teknologi dan bidang ilmu untuk memberikan solusi
            terbaik
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${category.color} rounded-lg mb-4`}
              >
                <category.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + skillIndex * 0.05,
                    }}
                    className="flex items-center text-slate-300"
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color} mr-3`}
                    ></div>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Skill Level Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Tingkat Keahlian
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'Full Stack Development', level: 95 },
              { name: 'Data Analysis & Visualization', level: 90 },
              { name: 'DevOps & Cloud Computing', level: 88 },
              { name: 'Legal Consultation', level: 85 },
              { name: 'Business English', level: 92 },
              { name: 'Mathematical Analysis', level: 97 },
            ].map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-300">{skill.name}</span>
                  <span className="text-slate-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Award, Briefcase, GraduationCap, Users } from 'lucide-react';
import profileImg from '@/assets/images/about.jpg';

export function About() {
  const stats = [
    { icon: Award, label: 'Tahun Pengalaman', value: '20+' },
    { icon: Briefcase, label: 'Proyek Selesai', value: '500+' },
    { icon: Users, label: 'Klien Puas', value: '200+' },
    { icon: GraduationCap, label: 'Sertifikasi', value: '25+' },
  ];

  return (
    <section id="about" className="py-24 bg-slate-900">
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
              Tentang Saya
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={profileImg}
                alt="Triple X"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl -z-10 blur-xl opacity-50"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">
              Profesional dengan Beragam Keahlian
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Profesional multi-talenta dengan pengalaman lebih dari 20 tahun di
              berbagai bidang teknologi, hukum, dan bisnis. Dengan penguasaan
              mendalam dalam berbagai bahasa pemrograman, framework modern,
              hingga keahlian di bidang hukum, bahasa Inggris dan matematika.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Selain sebagai Full Stack Developer dan Data Analyst, saya juga
              menyediakan layanan konsultasi hukum, desain rumah profesional,
              dan jual beli mobil premium. Kombinasi unik dari keahlian teknis
              dan bisnis memungkinkan saya memberikan solusi komprehensif untuk
              setiap klien.
            </p>
            <div className="pt-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80 transition-shadow"
              >
                Mari Bekerja Sama
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Home, Car, Code, BarChart, Shield, BookOpen } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Services() {
  const services = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Pengembangan aplikasi web dan mobile dengan teknologi terkini. Dari frontend hingga backend, API, dan deployment.',
      features: ['Web Application', 'Mobile App', 'API Development', 'Database Design'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: BarChart,
      title: 'Data Analysis & Visualization',
      description: 'Analisis data mendalam dengan visualisasi yang menarik. Transformasi data menjadi insight bisnis yang actionable.',
      features: ['Business Intelligence', 'Data Mining', 'Predictive Analytics', 'Dashboard Creation'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Shield,
      title: 'Konsultasi Hukum',
      description: 'Layanan konsultasi hukum profesional untuk bisnis dan properti. Drafting kontrak dan perjanjian legal.',
      features: ['Hukum Bisnis', 'Hukum Properti', 'Legal Drafting', 'Contract Review'],
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      icon: Home,
      title: 'Desain Rumah',
      description: 'Jasa desain rumah modern dan minimalis dengan pendekatan profesional. Dari konsep hingga gambar kerja lengkap.',
      features: ['Desain Arsitektur', 'Interior Design', '3D Visualization', 'Gambar Kerja'],
      gradient: 'from-green-500 to-emerald-500',
      image: 'https://images.unsplash.com/photo-1627141234469-24711efb373c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjcxMTQ2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Car,
      title: 'Jual Beli Mobil',
      description: 'Layanan jual beli mobil premium dan berkualitas. Konsultasi pembelian, penjualan, dan trade-in mobil.',
      features: ['Mobil Premium', 'Trade-in Service', 'Konsultasi Pembelian', 'Garansi Kualitas'],
      gradient: 'from-red-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1705747401901-28363172fe7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBzaG93cm9vbXxlbnwxfHx8fDE3NjcxMjk1MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: BookOpen,
      title: 'Training & Mentoring',
      description: 'Program pelatihan programming, data analysis, dan Microsoft Office. Mentoring personal dan corporate training.',
      features: ['Coding Bootcamp', 'Data Science Training', 'Office Mastery', 'One-on-One Mentoring'],
      gradient: 'from-indigo-500 to-blue-500',
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-900">
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
              Layanan Profesional
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Solusi komprehensif untuk semua kebutuhan teknologi dan bisnis Anda
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-slate-600 transition-all"
            >
              {service.image && (
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent"></div>
                </div>
              )}
              <div className="p-6">
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-lg mb-4`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 bg-gradient-to-r ${service.gradient} text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow`}
                >
                  Pelajari Lebih Lanjut
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Siap Memulai Proyek Anda?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Hubungi saya untuk diskusi lebih lanjut tentang bagaimana saya dapat membantu 
            mewujudkan visi dan tujuan bisnis Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              Konsultasi Gratis
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Lihat Portfolio
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

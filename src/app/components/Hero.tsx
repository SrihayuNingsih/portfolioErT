import React from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { MdPersonSearch, MdFileDownload } from 'react-icons/md';

/* ================= CODE LINE ================= */
const CodeLine = ({
  indent = 0,
  children,
}: {
  indent?: number;
  children: React.ReactNode;
}) => (
  <div
    className="flex items-start gap-x-1 px-3 py-[2px] font-mono text-sm sm:text-base leading-relaxed"
    style={{ marginLeft: `${indent * 14}px` }}
  >
    {children}
  </div>
);

/* ================= TYPING VARIANT ================= */
const typingVariants = {
  typing: {
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 1.2, ease: 'steps(7)' },
  },
  hold: {
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 2 },
  },
  deleting: {
    clipPath: 'inset(0 100% 0 0)',
    transition: { duration: 1.2, ease: 'steps(7)' },
  },
  idle: {
    clipPath: 'inset(0 100% 0 0)',
    transition: { duration: 1 },
  },
};

/* ================= HERO ================= */
export function Hero() {
  const controls = useAnimationControls();
  React.useEffect(() => {
    const run = async () => {
      while (true) {
        await controls.start('typing');
        await controls.start('hold');
        await new Promise((r) => setTimeout(r, 2000));
        await controls.start('deleting');
        await new Promise((r) => setTimeout(r, 1000));
        await controls.start('idle');
      }
    };
    run();
  }, [controls]);

  return (
    <section className="bg-[#0d1117] text-white min-h-screen flex justify-center px-3 sm:px-6">
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 space-y-10 sm:space-y-14">
        {/* ================= IDENTITY ================= */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="text-center space-y-3 sm:space-y-4"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
          >
            Hi, I&apos;m <span className="text-pink-500">Triple</span>
            <span className="text-pink-500">X</span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-2xl mx-auto text-gray-300"
          >
            A multidisciplinary professional who blends technology, design, and
            analytical thinking to deliver practical solutions.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-sm text-gray-400"
          >
            Curious learner, problem solver, and detail-oriented professional.
          </motion.p>
        </motion.div>

        {/* ================= SKILL CLUSTERS ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {[
            {
              title: 'Tech',
              items: ['Full Stack Web', 'Data Analysis'],
            },
            {
              title: 'Design',
              items: ['Architectural Home Design'],
            },
            {
              title: 'Analytical',
              items: ['Mathematics'],
            },
            {
              title: 'Professional',
              items: ['English', 'Microsoft Office'],
            },
          ].map((skill) => (
            <div
              key={skill.title}
              className="rounded-xl border border-white/10 p-4
              bg-gradient-to-br from-white/5 to-transparent
              hover:border-pink-500/60 transition transform hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/10"
            >
              <h3 className="font-semibold text-pink-400 mb-2">
                {skill.title}
              </h3>
              <ul className="text-sm text-gray-300 space-y-1">
                {skill.items.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ================= CODE BLOCK ================= */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-xl p-[2px]
          bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400"
        >
          <div className="rounded-xl bg-[#0d1224] overflow-hidden">
            {/* window bar */}
            <div className="px-0 pt-3">
              <div className="flex px-4 gap-2 pb-3">
                <span className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                <span className="w-3 h-3 bg-green-500 rounded-full" />
              </div>

              <div className="h-px bg-gradient-to-r from-yellow-400 via-green-500 to-pink-500" />
            </div>

            {/* code */}
            <div className="p-4">
              <CodeLine>
                <span className="text-pink-500">const</span>{' '}
                <span className="text-violet-400">profile</span>{' '}
                <span className="text-pink-500">=</span>{' '}
                <span className="text-yellow-300">{'{'}</span>
              </CodeLine>

              <CodeLine indent={1}>
                <span className="text-green-400">name</span>:{' '}
                <span className="text-orange-400">
                  &apos;
                  <span className="inline-flex items-center leading-none h-[1em] text-cyan-400 font-extrabold">
                    <motion.span
                      variants={typingVariants}
                      initial="idle"
                      animate={controls}
                      className="inline-block align-middle leading-none overflow-hidden whitespace-nowrap border-r-2 border-yellow-300 pr-1"
                    >
                      E.r TINO
                    </motion.span>
                  </span>
                  &apos;
                </span>
                ,
              </CodeLine>

              <CodeLine indent={1}>
                <span className="text-green-400">roles</span>:{' '}
                <span className="text-white">
                  <span className="text-blue-600">{'['}</span>
                  <span className="text-orange-400">'Developer'</span>,
                  <span className="text-orange-400">'Designer'</span>,
                  <span className="text-orange-400">'Analyst'</span>,
                  <span className="text-orange-400">'Professional'</span>
                  <span className="text-blue-600">{']'}</span>
                </span>
                ,
              </CodeLine>

              <CodeLine indent={1}>
                <span className="text-green-400">available</span>:{' '}
                <span className="text-violet-400">true</span>,
              </CodeLine>

              <CodeLine>
                <span className="text-yellow-300">{'}'}</span>
              </CodeLine>
            </div>
          </div>
        </motion.div>

        {/* ================= CTA ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-row gap-4 justify-center items-center"
        >
          <button
            className="flex items-center gap-2 px-6 py-3 rounded-full w-full sm:w-[260px] md:w-[280px] justify-center
            border border-pink-500 text-pink-400
            hover:bg-pink-500 hover:text-white transition cursor-pointer"
          >
            Contact Me <MdPersonSearch />
          </button>

          <button
            className="flex items-center gap-2 px-6 py-3 rounded-full w-full sm:w-[260px] md:w-[280px] justify-center
            bg-gradient-to-r from-pink-500 to-purple-600
            hover:scale-105 transition cursor-pointer"
          >
            Get Resume <MdFileDownload />
          </button>
        </motion.div>

        <p className="text-center text-sm text-gray-400">
          Available for freelance, remote work, and collaboration.
        </p>

        {/* ================= SOCIAL ================= */}
        <div className="flex justify-center gap-5 sm:gap-6 text-lg sm:text-xl text-pink-500 pb-10">
          <FaGithub className="hover:text-white cursor-pointer hover:-translate-y-0.5 transition-transform" />
          <FaLinkedin className="hover:text-white cursor-pointer hover:-translate-y-0.5 transition-transform" />
          <FaFacebook className="hover:text-white cursor-pointer hover:-translate-y-0.5 transition-transform" />
          <SiLeetcode className="hover:text-white cursor-pointer hover:-translate-y-0.5 transition-transform" />
          <FaTwitter className="hover:text-white cursor-pointer hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </section>
  );
}

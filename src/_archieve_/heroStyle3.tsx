import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { MdPersonSearch, MdFileDownload } from 'react-icons/md';

/* ================= CODE LINE ================= */
const CodeLine = ({
  indent = 0,
  noBorder = false,
  children,
}: {
  indent?: number;
  noBorder?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`
        group
        relative
        flex flex-wrap
        items-start
        gap-x-1
        px-3 md:px-4
        py-[2px]
        max-w-full
        overflow-hidden
        rounded-md
        text-[0.95em]
        cursor-text transition-all duration-200 ease-out
        ${
          !noBorder
            ? 'hover:bg-gradient-to-r hover:from-white/5 hover:to-transparent transition border-l-2 border-transparent group-hover:border-cyan-400 group-hover:pl-3'
            : ''
        }
      `}
      style={{
        marginLeft: `${Math.min(indent * 12, 32)}px`,
      }}
    >
      <span className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-cyan-400/0 group-hover:bg-cyan-400/60 transition-all duration-200" />
      {children}
    </div>
  );
};

/* ================= HERO ================= */
export function Hero() {
  return (
    <section className="bg-[#0d1117] text-white flex flex-col items-center min-h-screen">
      {/* ================= PAGE 1 : CODE CARD ================= */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 6 },
          show: { opacity: 1, y: 0 },
        }}
        className="w-[95%]"
      >
        <div className="flex items-center justify-center px-2 pt-20 pb-8 lg:pt-18 lg:px-6">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="w-full rounded-xl p-[2px]
            bg-gradient-to-br from-pink-500 via-purple-500 via-cyan-400 via-blue-500 to-yellow-400
            shadow-[0_0_40px_rgba(168,85,247,0.35)]"
            >
              <div className="rounded-xl bg-[#0d1224] overflow-hidden">
                {/* window bar */}
                <div
                  className="flex gap-2 px-4 py-3 border-b"
                  style={{
                    borderImage:
                      'linear-gradient(to right, #facc15, #3b82f6, #22d3ee, #a855f7, #ec4899) 1',
                  }}
                >
                  <span className="w-3 h-3 bg-red-500 rounded-full" />
                  <span className="w-3 h-3 bg-orange-400 rounded-full" />
                  <span className="w-3 h-3 bg-green-500 rounded-full" />
                </div>

                {/* code */}
                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.05,
                      },
                    },
                  }}
                  className="p-[2px] font-mono text-sm sm:text-base lg:text-xl leading-relaxed overflow-x-auto"
                >
                  <CodeLine noBorder>
                    <span className="text-pink-500 font-semibold tracking-wide group-hover:text-cyan-300 transition-colors">
                      const
                    </span>{' '}
                    <span className="text-violet-500 font-bold">coder</span>{' '}
                    <span className="text-pink-500">=</span>{' '}
                    <span className="text-orange-400">{'{'}</span>
                  </CodeLine>
                  <CodeLine indent={1}>
                    <span className="text-green-400">name</span>:{' '}
                    <span className="text-fuchsia-500">
                      '
                      <span className="inline-flex items-baseline">
                        <motion.span
                          initial={{ clipPath: 'inset(0 100% 0 0)' }}
                          animate={{
                            clipPath: [
                              'inset(0 100% 0 0)',
                              'inset(0 0% 0 0)',
                              'inset(0 0% 0 0)',
                              'inset(0 100% 0 0)',
                            ],
                          }}
                          transition={{
                            duration: 4,
                            times: [0, 0.25, 0.75, 1],
                            ease: 'easeInOut',
                            repeat: Infinity,
                          }}
                          className="text-yellow-200 font-extrabold inline-block whitespace-nowrap align-bottom leading-none"
                        >
                          E.r TINO
                        </motion.span>
                      </span>
                      '
                    </span>
                    ,
                  </CodeLine>
                  <CodeLine indent={1}>
                    <span className="text-fuchsia-500">skills</span>:{' '}
                    <span className="text-green-400">{'['}</span>
                    <span className="text-fuchsia-500">
                      '
                      <span className="text-orange-400">
                        Full Stack Web Developer
                      </span>
                      '
                    </span>
                    ,
                    <span className="text-fuchsia-500">
                      '<span className="text-orange-400">Data Analyst</span>'
                    </span>
                    ,
                    <span className="text-fuchsia-500">
                      '
                      <span className="text-orange-400">
                        Architectural Home Design
                      </span>
                      '
                    </span>
                    ,
                    <span className="text-fuchsia-500">
                      '<span className="text-orange-400">Microsoft Office</span>
                      '
                    </span>
                    ,
                    <span className="text-fuchsia-500">
                      '<span className="text-orange-400">Mathematics</span>'
                    </span>
                    ,
                    <span className="text-fuchsia-500">
                      '<span className="text-orange-400">English</span>'
                    </span>
                    <span className="text-green-400">{']'}</span>,
                  </CodeLine>
                  <CodeLine indent={1}>
                    <span className="text-yellow-200">hardWorker</span>:{' '}
                    <span className="text-violet-500">true</span>,
                  </CodeLine>
                  <CodeLine indent={1}>
                    <span className="text-yellow-200">quickLearner</span>:{' '}
                    <span className="text-violet-500">true</span>,
                  </CodeLine>
                  <CodeLine indent={1}>
                    <span className="text-yellow-200">problemSolver</span>:{' '}
                    <span className="text-violet-500">true</span>,
                  </CodeLine>
                  <CodeLine indent={1}>
                    <span className="text-lime-400">hireable</span>:{' '}
                    <span className="text-pink-500 group-hover:text-cyan-300 transition-colors">
                      function
                    </span>
                    () <span className="text-orange-400">{'{'}</span>
                  </CodeLine>
                  <CodeLine indent={2}>
                    <span className="text-pink-500 group-hover:text-cyan-300 transition-colors">
                      return{' '}
                    </span>
                    {'  '}
                    <span className="text-lime-400">this.</span>
                    <span className="text-cyan-300">hardWorker</span>{' '}
                    <span className="text-pink-500">&amp;&amp;</span>{' '}
                    <span className="text-lime-400">this.</span>
                    <span className="text-cyan-300">quickLearner</span>{' '}
                    <span className="text-pink-500">&amp;&amp;</span>{' '}
                    <span className="text-lime-400">this.</span>
                    <span className="text-cyan-300">problemSolver</span>;
                  </CodeLine>
                  <CodeLine indent={1}>
                    <span className="text-orange-400">{'}}'}</span>;
                  </CodeLine>
                  <CodeLine>
                    <span className="text-pink-500 group-hover:text-cyan-300 transition-colors">
                      console
                    </span>
                    .<span className="text-green-400">log</span>
                    <span className="text-cyan-300">{'('}</span>
                    <span className="text-fuchsia-500">
                      '<span className="text-orange-400">Status Hireable</span>'
                    </span>
                    , <span className="text-pink-500">coder</span>.
                    <span className="text-yellow-300">hireable</span>()
                    <span className="text-cyan-300">{')'}</span>;
                  </CodeLine>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ================= PAGE 2 : LEFT ================= */}
        <div className="w-full flex justify-center pb-4">
          <div className="max-w-3xl w-full px-6 lg:px-20 space-y-8 item-center">
            <h1 className="text-2xl sm:text-3xl w-full lg:text-5xl font-bold text-center">
              Professional Multitalent
            </h1>
            <div className="flex gap-6 text-2xl text-pink-500 justify-center">
              <FaGithub className="cursor-pointer hover:text-white transition" />
              <FaLinkedin className="cursor-pointer hover:text-white transition" />
              <FaFacebook className="cursor-pointer hover:text-white transition" />
              <SiLeetcode className="cursor-pointer hover:text-white transition" />
              <FaTwitter className="cursor-pointer hover:text-white transition" />
            </div>

            <div className="flex gap-4 flex-wrap justify-center">
              <button className="cursor-pointer flex items-center gap-2 px-6 py-3 rounded-full border-2 border-pink-500 hover:bg-pink-500 transition">
                Contact Me <MdPersonSearch />
              </button>
              <button className="cursor-pointer flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition">
                Get Resume <MdFileDownload />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

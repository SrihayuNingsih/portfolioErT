import React from 'react';
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
        flex flex-wrap
        items-start
        gap-x-1
        px-3 md:px-4
        py-[2px]
        max-w-full
        overflow-hidden
        rounded-md
        ${
          !noBorder
            ? 'hover:bg-white/7 transition border-l-2 border-transparent hover:border-cyan-400'
            : ''
        }
      `}
      style={{
        marginLeft: `${Math.min(indent * 12, 32)}px`,
      }}
    >
      {children}
    </div>
  );
};

/* ================= HERO ================= */
export function Hero() {
  return (
    <section className="bg-[#0d1117] text-white">
      {/* ================= PAGE 1 : CODE CARD ================= */}
      <div className="min-h-screen flex items-center justify-center px-2 pt-20 lg:pt-18 lg:px-6">
        <div className="w-full">
          <div
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
              <div className="p-[2px] font-mono text-xs md:text-sm leading-relaxed overflow-x-auto">
                <CodeLine noBorder>
                  <span className="text-pink-500">const</span>{' '}
                  <span className="text-violet-500">coder</span>{' '}
                  <span className="text-pink-500">=</span>{' '}
                  <span className="text-orange-400">{'{'}</span>
                </CodeLine>
                <CodeLine indent={1}>
                  <span className="text-green-400">name</span>:{' '}
                  <span className="text-fuchsia-500">
                    '
                    <span className="text-yellow-200 font-extrabold">
                      E.r TINO
                    </span>
                    '
                  </span>
                  ,
                </CodeLine>
                <CodeLine indent={1}>
                  <span className="text-fuchsia-500">skills</span>:{' '}
                  <span className="text-green-400">{'['}</span>
                </CodeLine>

                {/* ===== FULL STACK ===== */}
                <CodeLine indent={2}>
                  <span className="text-orange-400">{'{'}</span>
                  <span className="text-cyan-400"> category:</span>
                  <span className="text-fuchsia-500">
                    '<span className="text-lime-400">Full Stack Dev</span>'
                  </span>
                  ,<span className="text-cyan-300">list:</span>
                  <span className="text-green-400">{'['}</span>
                  <span className="text-fuchsia-500">
                    '<span className="text-yellow-400">HTML</span>'
                  </span>
                  ,
                  <span className="text-fuchsia-500">
                    '<span className="text-yellow-400">CSS</span>'
                  </span>
                  ,
                  <span className="text-fuchsia-500">
                    '
                    <span className="text-yellow-400">
                      JavaScript / TypeScript
                    </span>
                    '
                  </span>
                  <span className="text-fuchsia-500">
                    '<span className="text-yellow-400">React/Next.js</span>'
                  </span>
                  ,
                  <span className="text-fuchsia-500">
                    '
                    <span className="text-yellow-400">Docker & Kubernetes</span>
                    '
                  </span>
                  ,
                  <span className="text-fuchsia-500">
                    '<span className="text-yellow-400">AWS/Azure/GCP</span>'
                  </span>
                  <span className="text-green-400">{']'}</span>
                  <span className="text-orange-400">{'}'}</span>
                </CodeLine>

                {/* ===== ARCHITECTURE ===== */}
                <CodeLine indent={2}>
                  <span className="text-orange-400">{'{'}</span>
                  <span className="text-cyan-400"> category:</span>
                  <span className="text-fuchsia-500">
                    '<span className="text-lime-400">Architecture</span>'
                  </span>
                  ,<span className="text-cyan-300">list:</span>
                  <span className="text-green-400">{'['}</span>
                  <span className="text-fuchsia-500">
                    '
                    <span className="text-yellow-400">
                      Architectural Home Design
                    </span>
                    '
                  </span>
                  ,
                  <span className="text-fuchsia-500">
                    '<span className="text-yellow-400">Interior Design</span>'
                  </span>
                  <span className="text-green-400">{']'}</span>
                  <span className="text-orange-400">{'}'}</span>
                </CodeLine>

                {/* ===== MICROSOFT OFFICE ===== */}
                <CodeLine indent={2}>
                  <span className="text-orange-400">{'{'}</span>
                  <span className="text-cyan-400"> category:</span>
                  <span className="text-fuchsia-500">
                    '<span className="text-lime-400">Microsoft Office</span>'
                  </span>
                  ,<span className="text-cyan-300">list:</span>
                  <span className="text-green-400">{'['}</span>
                  <span className="text-fuchsia-500">
                    '<span className="text-yellow-400">Microsoft Word</span>'
                  </span>
                  ,
                  <span className="text-fuchsia-500">
                    '<span className="text-yellow-400">Microsoft Excel</span>'
                  </span>
                  ,
                  <span className="text-fuchsia-500">
                    '
                    <span className="text-yellow-400">
                      Microsoft PowerPoint
                    </span>
                    '
                  </span>
                  ,
                  <span className="text-fuchsia-500">
                    '<span className="text-yellow-400">Microsoft Outlook</span>'
                  </span>
                  <span className="text-green-400">{']'}</span>
                  <span className="text-orange-400">{'}'}</span>
                </CodeLine>

                {/* ===== Mathematical & Computational Skills ===== */}
                <CodeLine indent={2}>
                  <span className="text-orange-400">{'{'}</span>
                  <span className="text-cyan-400"> category:</span>
                  <span className="text-fuchsia-500">
                    '<span className="text-lime-400">Mathematical Skills</span>'
                  </span>
                  ,<span className="text-cyan-300">list:</span>
                  <span className="text-green-400">{'['}</span>
                  <span className="text-yellow-400">
                    'Applied Mathematics for Computing'
                  </span>
                  ,
                  <span className="text-fuchsia-500">
                    '
                    <span className="text-yellow-400">
                      Calculus, Linear Algebra & Discrete Math
                    </span>
                    '
                  </span>
                  ,
                  <span className="text-fuchsia-500">
                    '
                    <span className="text-yellow-400">
                      Optimization Methods & Algorithm Design
                    </span>
                    '
                  </span>
                  <span className="text-green-400">{']'}</span>
                  <span className="text-orange-400">{'}'}</span>
                </CodeLine>

                {/* ===== ENGLISH ===== */}
                <CodeLine indent={2}>
                  <span className="text-orange-400">{'{'}</span>
                  <span className="text-cyan-400"> category:</span>
                  <span className="text-fuchsia-500">
                    '<span className="text-lime-400">English</span>'
                  </span>
                  ,<span className="text-cyan-300">list:</span>
                  <span className="text-green-400">{'['}</span>
                  <span className="text-fuchsia-500">
                    '<span className="text-yellow-400">Technical Writing</span>'
                  </span>
                  ,
                  <span className="text-fuchsia-500">
                    '
                    <span className="text-yellow-400">Translation Service</span>
                    '
                  </span>
                  ,
                  <span className="text-fuchsia-500">
                    '
                    <span className="text-yellow-400">
                      Professional Communication
                    </span>
                    '
                  </span>
                  <span className="text-fuchsia-500">
                    '
                    <span className="text-yellow-400">
                      TOEFL/IELTS Certified
                    </span>
                    '
                  </span>
                  <span className="text-green-400">{']'}</span>
                  <span className="text-orange-400">{'}'}</span>
                </CodeLine>

                {/* ===== TOOLS & FRAMEWORKS ===== */}
                <CodeLine indent={2}>
                  <span className="text-orange-400">{'{'}</span>
                  <span className="text-cyan-400"> category:</span>
                  <span className="text-fuchsia-500">
                    '<span className="text-lime-400">Tools and Frameworks</span>
                    '
                  </span>
                  ,<span className="text-cyan-300">list:</span>
                  <span className="text-green-400">{'['}</span>
                  <span className="text-fuchsia-500">
                    '<span className="text-yellow-400">VS Code & IDEs</span>'
                  </span>
                  ,
                  <span className="text-fuchsia-500">
                    '<span className="text-yellow-400">Figma & Adobe XD</span>'
                  </span>
                  ,
                  <span className="text-fuchsia-500">
                    '<span className="text-yellow-400">Postman & Insomnia</span>
                    '
                  </span>
                  ,
                  <span className="text-fuchsia-500">
                    '
                    <span className="text-yellow-400">
                      Jest & Testing Libraries
                    </span>
                    '
                  </span>
                  <span className="text-fuchsia-500">
                    '<span className="text-yellow-400">Webpack & Vite</span>'
                  </span>
                  <span className="text-green-400">{']'}</span>
                  <span className="text-orange-400">{'}'}</span>
                </CodeLine>

                <CodeLine indent={1}>
                  <span className="text-green-400">{']'}</span>,
                </CodeLine>
                <CodeLine indent={1}>
                  <span className="text-yellow-200">hardWorker</span>:{' '}
                  <span className="text-violet-500">true</span>,
                </CodeLine>
                <CodeLine indent={1}>
                  <span className="text-green-200">quickLearner</span>:{' '}
                  <span className="text-violet-500">true</span>,
                </CodeLine>
                <CodeLine indent={1}>
                  <span className="text-red-500">problemSolver</span>:{' '}
                  <span className="text-violet-500">true</span>,
                </CodeLine>
                <CodeLine indent={1}>
                  <span className="text-lime-400">hireable</span>:{' '}
                  <span className="text-pink-500">function</span>(){' '}
                  <span className="text-orange-400">{'}'}</span>
                </CodeLine>
                <CodeLine indent={2}>
                  <span className="text-pink-500">return</span>{' '}
                  <span className="text-orange-400">this.</span>
                  <span className="text-cyan-300">hardWorker</span>{' '}
                  <span className="text-pink-500">&amp;&amp;</span>{' '}
                  <span className="text-orange-400">this.</span>
                  <span className="text-cyan-300">problemSolver</span>;
                </CodeLine>
                <CodeLine indent={1}>
                  <span className="text-orange-400">{'}'}</span>
                </CodeLine>
                <CodeLine>
                  <span className="text-orange-400">{'}'}</span>
                </CodeLine>
                <CodeLine>
                  <span className="text-pink-500">console</span>.
                  <span className="text-orange-400">log</span>
                  <span className="text-cyan-300">{'('}</span>
                  <span className="text-fuchsia-500">
                    '<span className="text-lime-400">Statuse Hireable</span>'
                  </span>
                  <span className="text-yellow-300">:</span>
                  <span className="text-white">,</span>
                  <span className="text-cyan-300">coder</span>
                  <span className="text-white">.</span>
                  <span className="text-orange-400">hireable</span>
                  <span className="text-white">{'()'}</span>
                  <span className="text-cyan-300">{')'}</span>
                  <span className="text-white">;</span>
                </CodeLine>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= PAGE 2 : LEFT ================= */}
      <div className="min-h-screen flex items-center px-6 lg:px-20">
        <div className="max-w-3xl space-y-8">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Professional <br /> Multitalent
          </h1>

          <h2 className="leading-relaxed text-sm md:text-base">
            <span className="text-cyan-400">Full Stack Developer</span> :{' '}
            <span className="text-pink-400">Data Analyst</span> :{' '}
            <span className="text-blue-500">Software</span> :{' '}
            <span className="text-yellow-400">Data Science</span> :{' '}
            <span className="text-red-500">Architecture</span> :{' '}
            <span className="text-white">Legal Competencies</span> :{' '}
            <span className="text-orange-400">Mathematics</span> :{' '}
            <span className="text-cyan-200">English</span>
          </h2>

          <div className="flex gap-6 text-2xl text-pink-500">
            <FaGithub className="cursor-pointer hover:text-white transition" />
            <FaLinkedin className="cursor-pointer hover:text-white transition" />
            <FaFacebook className="cursor-pointer hover:text-white transition" />
            <SiLeetcode className="cursor-pointer hover:text-white transition" />
            <FaTwitter className="cursor-pointer hover:text-white transition" />
          </div>

          <div className="flex gap-4 flex-wrap">
            <button className="cursor-pointer flex items-center gap-2 px-6 py-3 rounded-full border-2 border-pink-500 hover:bg-pink-500 transition">
              Contact Me <MdPersonSearch />
            </button>
            <button className="cursor-pointer flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition">
              Get Resume <MdFileDownload />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

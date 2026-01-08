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
      <div className="min-h-screen flex items-center justify-center px-2 pt-14 lg:pt-14 lg:px-6">
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
                  <span className="text-pink-400">const</span>{' '}
                  <span className="text-cyan-300">coder</span>{' '}
                  <span className="text-pink-300">=</span>{' '}
                  <span className="text-slate-400">{'{'}</span>
                </CodeLine>
                <CodeLine indent={1}>
                  <span className="text-white">name</span>:{' '}
                  <span className="text-amber-300">'E.r T'</span>,
                </CodeLine>
                <CodeLine indent={1}>
                  <span className="text-white">skills</span>:{' '}
                  <span className="text-slate-400">[</span>
                </CodeLine>

                {/* ===== FULL STACK ===== */}
                <CodeLine indent={2}>
                  {'{'}
                  <span className="text-white"> category:</span>
                  <span className="text-amber-300">'Full Stack Dev'</span>,
                  <span className="text-white">list:</span>
                  <span>{'['}</span>
                  <span className="text-amber-300">'HTML'</span>,
                  <span className="text-amber-300">'CSS'</span>,
                  <span className="text-amber-300">
                    'JavaScript / TypeScript'
                  </span>
                  <span className="text-amber-300">'React/Next.js'</span>,
                  <span className="text-amber-300">'Docker & Kubernetes'</span>,
                  <span className="text-amber-300">'AWS/Azure/GCP'</span>
                  <span>{']'}</span>
                  {'}'}
                </CodeLine>

                {/* ===== DATA ANALYST ===== */}
                <CodeLine indent={2}>
                  {'{'}
                  <span className="text-white"> category:</span>
                  <span className="text-amber-300">'Data Analyst'</span>,
                  <span className="text-white">list:</span>
                  <span>{'['}</span>
                  <span className="text-amber-300">
                    'Python (Pandas, NumPy)'
                  </span>
                  ,
                  <span className="text-amber-300">
                    'SQL & NoSQL Databases'
                  </span>
                  ,<span className="text-amber-300">'Power BI & Tableau'</span>
                  <span className="text-amber-300">'Data Visualization'</span>,
                  <span className="text-amber-300">'Statistical Analysis'</span>
                  ,<span className="text-amber-300">'Machine Learning'</span>,
                  <span className="text-amber-300">'Excel Advanced'</span>
                  <span>{']'}</span>
                  {'}'}
                </CodeLine>

                {/* ===== Legal & Compliance Domain ===== */}
                <CodeLine indent={2}>
                  {'{'}
                  <span className="text-white"> category:</span>
                  <span className="text-amber-300">
                    'Legal & Compliance Domain'
                  </span>
                  ,<span className="text-white">list:</span>
                  <span>{'['}</span>
                  <span className="text-amber-300">
                    'Legal Fundamentals & Regulatory Frameworks'
                  </span>
                  ,
                  <span className="text-amber-300">
                    'Civil & Commercial Law'
                  </span>
                  ,
                  <span className="text-amber-300">
                    'Business & Property Law'
                  </span>
                  ,
                  <span className="text-amber-300">
                    'Contract Analysis & Agreement Engineering'
                  </span>
                  ,
                  <span className="text-amber-300">
                    'Legal Consulting & Compliance Advisory'
                  </span>
                  ,
                  <span className="text-amber-300">
                    'Legal Drafting & Documentation Systems'
                  </span>
                  <span>{']'}</span>
                  {'}'}
                </CodeLine>

                {/* ===== ARCHITECTURE ===== */}
                <CodeLine indent={2}>
                  {'{'}
                  <span className="text-white"> category:</span>
                  <span className="text-amber-300">'Architecture'</span>,
                  <span className="text-white">list:</span>
                  <span>{'['}</span>
                  <span className="text-amber-300">
                    'Architectural Home Design'
                  </span>
                  ,<span className="text-amber-300">'Interior Design'</span>
                  <span>{']'}</span>
                  {'}'}
                </CodeLine>

                {/* ===== MICROSOFT OFFICE ===== */}
                <CodeLine indent={2}>
                  {'{'}
                  <span className="text-white"> category:</span>
                  <span className="text-amber-300">'Microsoft Office'</span>,
                  <span className="text-white">list:</span>
                  <span>{'['}</span>
                  <span className="text-amber-300">'Microsoft Word'</span>,
                  <span className="text-amber-300">'Microsoft Excel'</span>,
                  <span className="text-amber-300">'Microsoft PowerPoint'</span>
                  ,<span className="text-amber-300">'Microsoft Outlook'</span>
                  <span>{']'}</span>
                  {'}'}
                </CodeLine>

                {/* ===== Mathematical & Computational Skills ===== */}
                <CodeLine indent={2}>
                  {'{'}
                  <span className="text-white"> category:</span>
                  <span className="text-amber-300">
                    'Mathematical & Computational Skills'
                  </span>
                  ,<span className="text-white">list:</span>
                  <span>{'['}</span>
                  <span className="text-amber-300">
                    'Applied Mathematics for Computing'
                  </span>
                  ,
                  <span className="text-amber-300">
                    'Calculus, Linear Algebra & Discrete Math'
                  </span>
                  ,
                  <span className="text-amber-300">
                    'Statistical Modeling & Probability Analysis'
                  </span>
                  ,
                  <span className="text-amber-300">
                    'Financial Mathematics & Quantitative Analysis'
                  </span>
                  <span className="text-amber-300">
                    'Optimization Methods & Algorithm Design'
                  </span>
                  <span>{']'}</span>
                  {'}'}
                </CodeLine>

                {/* ===== ENGLISH ===== */}
                <CodeLine indent={2}>
                  {'{'}
                  <span className="text-white"> category:</span>
                  <span className="text-amber-300">'English'</span>,
                  <span className="text-white">list:</span>
                  <span>{'['}</span>
                  <span className="text-amber-300">'Technical Writing'</span>,
                  <span className="text-amber-300">'Translation Service'</span>,
                  <span className="text-amber-300">
                    'Professional Communication'
                  </span>
                  <span className="text-amber-300">
                    'TOEFL/IELTS Certified'
                  </span>
                  <span>{']'}</span>
                  {'}'}
                </CodeLine>

                {/* ===== TOOLS & FRAMEWORKS ===== */}
                <CodeLine indent={2}>
                  {'{'}
                  <span className="text-white"> category:</span>
                  <span className="text-amber-300">'Tools and Frameworks'</span>
                  ,<span className="text-white">list:</span>
                  <span>{'['}</span>
                  <span className="text-amber-300">'VS Code & IDEs'</span>,
                  <span className="text-amber-300">'Figma & Adobe XD'</span>,
                  <span className="text-amber-300">'Postman & Insomnia'</span>,
                  <span className="text-amber-300">
                    'Jest & Testing Libraries'
                  </span>
                  <span className="text-amber-300">'Webpack & Vite'</span>
                  <span>{']'}</span>
                  {'}'}
                </CodeLine>

                <CodeLine indent={1}>],</CodeLine>
                <CodeLine indent={1}>
                  <span className="text-white">hardWorker</span>:{' '}
                  <span className="text-orange-400">true</span>,
                </CodeLine>
                <CodeLine indent={1}>
                  <span className="text-white">quickLearner</span>:{' '}
                  <span className="text-orange-400">true</span>,
                </CodeLine>
                <CodeLine indent={1}>
                  <span className="text-white">problemSolver</span>:{' '}
                  <span className="text-orange-400">true</span>,
                </CodeLine>
                <CodeLine indent={1}>
                  <span className="text-green-400">hireable</span>:{' '}
                  <span className="text-pink-400">function</span>() {'{'}
                </CodeLine>
                <CodeLine indent={2}>
                  <span className="text-pink-400">return</span>{' '}
                  <span className="text-cyan-400">this.</span>hardWorker{' '}
                  <span className="text-pink-300">&amp;&amp;</span>{' '}
                  <span className="text-cyan-400">this.</span>problemSolver;
                </CodeLine>
                <CodeLine indent={1}>{'},'}</CodeLine>
                <CodeLine>{'};'}</CodeLine>
                <CodeLine>
                  <span className="text-slate-500">
                    console.log('Status Hireable:', coder.hireable());
                  </span>
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
            Professional <br /> Multi-Talent
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

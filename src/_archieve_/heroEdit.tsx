import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { MdPersonSearch, MdFileDownload } from 'react-icons/md';

const CodeLine = ({
  indent = 0,
  children,
}: {
  indent?: number;
  children: React.ReactNode;
}) => (
  <div
    className="group flex items-start gap-3 px-3 py-[2px] rounded-md
               hover:bg-white/5 transition
               border-l-2 border-transparent hover:border-cyan-400"
    style={{ marginLeft: indent * 16 }}
  >
    {children}
  </div>
);

export function Hero() {
  return (
    <section className="min-h-screen bg-[#0d1117] text-white flex items-center justify-center p-6 lg:p-20">
      <div className="container mx-auto flex flex-col lg:flex-row-reverse gap-12">
        {/* ================= CODE CARD ================= */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div
            className="w-full max-w-md rounded-xl p-[2px]
            bg-gradient-to-br from-pink-500 via-purple-500 via-cyan-400 via-blue-500 to-yellow-400
            shadow-[0_0_40px_rgba(168,85,247,0.35)]
          "
          >
            <div className="rounded-xl bg-[#0d1224] overflow-hidden">
              <div className="flex gap-2 px-4 py-3 border-b border-white/10">
                <span className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="w-3 h-3 bg-orange-400 rounded-full" />
                <span className="w-3 h-3 bg-green-500 rounded-full" />
              </div>

              <div className="p-4 font-mono text-xs leading-relaxed overflow-x-auto">
                <CodeLine>
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
                <CodeLine indent={2}>{'{'}</CodeLine>
                <CodeLine indent={3}>
                  <span className="text-white">category</span>:{' '}
                  <span className="text-amber-300">'Full Stack Dev'</span>,
                </CodeLine>
                <CodeLine indent={3}>
                  <span className="text-white">list</span>: [
                </CodeLine>
                <CodeLine indent={4}>
                  <span className="text-amber-300">'HTML'</span>,{' '}
                  <span className="text-amber-300">'CSS'</span>,{' '}
                  <span className="text-amber-300">
                    'JavaScript/TypeScript'
                  </span>
                  ,
                </CodeLine>
                <CodeLine indent={4}>
                  <span className="text-amber-300">'React / Next.js'</span>,{' '}
                  <span className="text-amber-300">'Docker & Kubernetes'</span>,
                </CodeLine>
                <CodeLine indent={4}>
                  <span className="text-amber-300">'AWS / Azure / GCP'</span>,
                </CodeLine>
                <CodeLine indent={3}>],</CodeLine>
                <CodeLine indent={2}>{'},'}</CodeLine>

                {/* ===== DATA ANALYST ===== */}
                <CodeLine indent={2}>{'{'}</CodeLine>
                <CodeLine indent={3}>
                  <span className="text-white">category</span>:{' '}
                  <span className="text-amber-300">'Data Analyst'</span>,
                </CodeLine>
                <CodeLine indent={3}>
                  <span className="text-white">list</span>: [
                </CodeLine>
                <CodeLine indent={4}>
                  <span className="text-amber-300">
                    'Python (Pandas, NumPy)'
                  </span>
                  ,
                </CodeLine>
                <CodeLine indent={4}>
                  <span className="text-amber-300">'SQL / NoSQL'</span>,{' '}
                  <span className="text-amber-300">'Power BI'</span>,
                </CodeLine>
                <CodeLine indent={4}>
                  <span className="text-amber-300">'Statistical Analysis'</span>
                  ,
                </CodeLine>
                <CodeLine indent={3}>],</CodeLine>
                <CodeLine indent={2}>{'},'}</CodeLine>

                {/* ===== ENGLISH ===== */}
                <CodeLine indent={2}>{'{'}</CodeLine>
                <CodeLine indent={3}>
                  <span className="text-white">category</span>:{' '}
                  <span className="text-amber-300">'English'</span>,
                </CodeLine>
                <CodeLine indent={3}>
                  <span className="text-white">list</span>: [
                </CodeLine>
                <CodeLine indent={4}>
                  <span className="text-amber-300">'Technical Writing'</span>,
                </CodeLine>
                <CodeLine indent={4}>
                  <span className="text-amber-300">'Translation Service'</span>,
                </CodeLine>
                <CodeLine indent={4}>
                  <span className="text-amber-300">
                    'Professional Communication'
                  </span>
                  ,
                </CodeLine>
                <CodeLine indent={3}>],</CodeLine>
                <CodeLine indent={2}>{'}'}</CodeLine>

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
        {/* ================= LEFT ================= */}
        {/* BAGIAN KIRI: TEKS PERKENALAN */}{' '}
        <div className="w-full lg:w-1/2 text-left space-y-8">
          {' '}
          <div className="space-y-4">
            {' '}
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight text-white">
              {' '}
              Professional <span className="text-white">
                {' '}
                Multi-Talent
              </span>{' '}
              <br />{' '}
            </h1>{' '}
            <h2>
              {' '}
              <span className="text-cyan-400">Full Stack Developer</span>{' '}
              <span> : </span>{' '}
              <span className="text-pink-400">Data Analyst</span>{' '}
              <span> : </span>{' '}
              <span className="text-blue-500">
                {' '}
                Smartphone & Computer Software{' '}
              </span>{' '}
              <span> : </span>{' '}
              <span className="text-yellow-400">
                {' '}
                Data Science, Data analytics{' '}
              </span>{' '}
              <span> : </span>{' '}
              <span className="text-red-500">Architectural Home Design</span>{' '}
              <span> : </span>{' '}
              <span className="text-white">Legal Consultation</span>{' '}
              <span> : </span>{' '}
              <span className="text-orange-400">Mathematics</span>{' '}
              <span> : </span> <span className="text-cyan-200">English</span>{' '}
              <span> : </span>{' '}
              <span className="text-purple-600">Microsoft Office</span>{' '}
            </h2>{' '}
          </div>{' '}
          {/* SOSIAL MEDIA */}{' '}
          <div className="flex gap-6 text-2xl text-pink-500">
            {' '}
            <FaGithub className="cursor-pointer hover:text-white transition" />{' '}
            <FaLinkedin className="cursor-pointer hover:text-white transition" />{' '}
            <FaFacebook className="cursor-pointer hover:text-white transition" />{' '}
            <SiLeetcode className="cursor-pointer hover:text-white transition" />{' '}
            <FaTwitter className="cursor-pointer hover:text-white transition" />{' '}
          </div>{' '}
          {/* TOMBOL ACTION */}{' '}
          <div className="flex flex-wrap gap-4 pt-4">
            {' '}
            <button className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-pink-500 text-white font-bold uppercase text-xs tracking-widest hover:bg-pink-500 transition">
              {' '}
              Contact Me <MdPersonSearch size={20} />{' '}
            </button>{' '}
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold uppercase text-xs tracking-widest hover:scale-105 transition">
              {' '}
              Get Resume <MdFileDownload size={20} />{' '}
            </button>{' '}
          </div>{' '}
        </div>
        ,
      </div>
    </section>
  );
}

const coder = {
  name: 'E.r T',
  skills: [
    {
      category: 'Full Stack Dev',
      list: [
        'HTML',
        'CSS',
        'JavaScript/Typescript',
        'React.js/Next.js',
        'Python & Django/Flask',
        'PHP & Laravel',
        'Svelte & SvelteKit',
        'Java & Spring Boot',
        'C# & .NET',
        'C++',
        'Docker & Kubernetes',
        'CI/CD Pipeline',
        'AWS, Azure, GCP',
        'API Development',
        'Git & Github',
        'Microservices',
      ],
    },
    {
      category: 'Data Analyst',
      list: [
        'Python (Pandas, NumPy)',
        'SQL & NoSQL Databases',
        'Power BI & Tableau',
        'Data Visualization',
        'Statistical Analysis',
        'Machine Learning',
        'Excel Advanced',
      ],
    },
    { category: 'Smartphone & Computer Software' },
    {
      category: 'Architecture',
      list: ['Architectural Home Design', 'Interior Design'],
    },
    {
      category: 'Legal & Compliance Domain',
      list: [
        'Legal Fundamentals & Regulatory Frameworks',
        'Civil & Commercial Law',
        'Business & Property Law',
        'Contract Analysis & Agreement Engineering',
        'Legal Consulting & Compliance Advisory',
        'Legal Drafting & Documentation Systems',
      ],
    },
    {
      category: 'Microsoft Office',
      list: [
        'Microsoft Word',
        'Microsoft Excel',
        'Microsoft PowerPoint',
        'Microsoft Access',
        'Microsoft Outlook',
      ],
    },
    {
      category: 'Mathematical & Computational Skills',
      list: [
        'Applied Mathematics for Computing',
        'Calculus, Linear Algebra & Discrete Math',
        'Statistical Modeling & Probability Analysis',
        'Financial Mathematics & Quantitative Analysis',
        'Optimization Methods & Algorithm Design',
      ],
    },
    {
      category: 'English',
      list: [
        'Technical Writing',
        'Translation Service',
        'TOEFL/IELTS Certified',
        'Professional Communication',
      ],
    },
    { category: 'Tools and Frameworks', list: ['Speaking', 'Writing'] },
  ],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,

  hireable: function () {
    const totalSkills = this.skills.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.list.length;
    }, 0);

    console.log('Total Skills Count:', totalSkills);

    return this.hardWorker && this.problemSolver && totalSkills >= 10;
  },
};

console.log('Status Hireable:', coder.hireable());

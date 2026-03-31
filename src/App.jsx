import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30">
      
        {/* HEADER / NAV */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-xl font-bold tracking-tighter bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          HB.ENG
        </div>
        <div className="flex gap-4 md:gap-6 text-sm font-medium text-slate-400 items-center">
  <a href="#sobre" className="hover:text-blue-400 transition-colors text-xs">Skills</a>
  <a href="https://github.com/FHPBeto" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors text-xs">
    GitHub
  </a>
  {/* Link do LinkedIn adicionado aqui */}
  <a href="https://linkedin.com/in/humberto-oliveira-software" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors text-xs">
    LinkedIn
  </a>
  <a 
    href="/Curriculo-Humberto-Oliveira.pdf" 
    target="_blank" 
    className="bg-blue-600/10 border border-blue-500/20 text-blue-400 px-3 py-1 rounded-full hover:bg-blue-600/20 transition-all text-[10px] uppercase font-bold"
  >
    Currículo PDF
  </a>
</div>
      </nav>

      {/* HERO SECTION */}
      <main className="max-w-6xl mx-auto px-6 pt-20 pb-32">
        <div className="max-w-3xl text-left">
          <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4 block">
            Engenheiro de Software & Gestor de Projetos
          </span>
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6 text-white">
            Olá, eu sou o Humberto.
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed mb-10">
            Unindo 10 anos de liderança e rigor da engenharia ao desenvolvimento de 
            soluções digitais escaláveis. Especialista em <span className="text-slate-200 underline decoration-blue-500/50">Full-Stack</span> focado em performance e arquitetura limpa.
          </p>
          
          <div className="flex gap-4">
            <a href="https://github.com/FHPBeto" target="_blank" className="bg-white text-slate-950 px-8 py-4 rounded-xl font-bold hover:bg-blue-400 transition-all">
              Ver Projetos GitHub
            </a>
          </div>
        </div>
      </main>

      {/* SEÇÃO BENTO GRID - HARD SKILLS */}
      <section id="sobre" className="bg-slate-900/30 py-24 border-y border-slate-900">
        <div className="max-w-6xl mx-auto px-6 text-left">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-white">
            <span className="h-px w-12 bg-blue-500"></span>
            Stack & Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[500px]">
            
            {/* Card Principal: Full-Stack */}
            <div className="md:col-span-2 md:row-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500/50 transition-all group flex flex-col justify-between">
              <div>
                <div className="text-blue-500 text-3xl mb-4 group-hover:scale-110 transition-transform origin-left">💻</div>
                <h3 className="text-3xl font-bold text-white mb-4">Full-Stack Core</h3>
                <p className="text-slate-400 leading-relaxed italic">
                  Especialista em criar interfaces modernas com React (Vite) e APIs escaláveis em Node.js e Python. 
                  Foco total em performance.
                </p>
              </div>
              <div className="flex gap-3 flex-wrap mt-6 font-mono text-xs text-blue-400">
                <span className="bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">React.js</span>
                <span className="bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">Node.js</span>
                <span className="bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">Python</span>
              </div>
            </div>

            {/* Card: Arquitetura */}
            <div className="md:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-emerald-500/50 transition-all flex items-center justify-between group">
              <div>
                <h3 className="text-xl font-bold text-white">Rigor de Engenharia</h3>
                <p className="text-slate-400 text-sm mt-1">SOLID, Clean Code & Design Patterns.</p>
              </div>
              <div className="text-4xl opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all">🏗️</div>
            </div>

            {/* Card: Agilidade */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-purple-500/50 transition-all text-center flex flex-col justify-center items-center group">
              <span className="text-3xl mb-3 group-hover:rotate-12 transition-transform">🚀</span>
              <h3 className="font-bold text-white">Agile</h3>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest font-mono">Scrum • Kanban</p>
            </div>

            {/* Card: DevOps */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-orange-500/50 transition-all text-center flex flex-col justify-center items-center group">
              <span className="text-3xl mb-3 group-hover:scale-110 transition-transform">🐳</span>
              <h3 className="font-bold text-white">DevOps</h3>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest font-mono">Docker • Git</p>
            </div>

          </div>
        </div>
      </section>

       {/* SEÇÃO DE PROJETOS - O SHOWCASE */}
      <section id="projetos" className="py-24 max-w-6xl mx-auto px-6 text-left">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-white">
          <span className="h-px w-12 bg-emerald-500"></span>
          Projetos em Destaque
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Projeto 1 */}
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl hover:bg-slate-900 transition-all group">
            <div className="flex justify-between items-start mb-6">
              <span className="text-4xl">📚</span>
              <div className="flex gap-2">
                <span className="text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-1 rounded">API</span>
                <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-1 rounded">NODE.JS</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 underline decoration-blue-500/30">Biblioteca Online API</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Desenvolvimento de uma API robusta para gerenciamento de acervos, com rotas autenticadas e arquitetura REST.
            </p>
            <a href="https://github.com/FHPBeto/Biblioteca-Online-API" target="_blank" className="text-sm font-bold text-blue-400 group-hover:text-blue-300 flex items-center gap-2">
              Ver Repositório <span>→</span>
            </a>
          </div>

          {/* Projeto 2 */}
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl hover:bg-slate-900 transition-all group">
            <div className="flex justify-between items-start mb-6">
              <span className="text-4xl">🛒</span>
              <div className="flex gap-2">
                <span className="text-[10px] font-mono bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-2 py-1 rounded">PHP</span>
                <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-1 rounded">MYSQL</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 underline decoration-emerald-500/30">ecommerce-php-Completo</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Plataforma de loja virtual completa em PHP, com sistema de carrinho, gestão de estoque e banco de dados relacional.
            </p>
            <a href="https://github.com/FHPBeto/ecommerce-php-Completo" target="_blank" className="text-sm font-bold text-emerald-400 group-hover:text-emerald-300 flex items-center gap-2">
              Ver Repositório <span>→</span>
            </a>
          </div>

          {/* Projeto 3 */}
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl hover:bg-slate-900 transition-all group">
            <div className="flex justify-between items-start mb-6">
              <span className="text-4xl">🍔</span>
              <div className="flex gap-2">
                <span className="text-[10px] font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2 py-1 rounded">ANDROID</span>
                <span className="text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-1 rounded">JAVA/KOTLIN</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 underline decoration-purple-500/30">HamburgueriaZ App</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Aplicativo mobile focado em delivery de alimentos, com interface intuitiva e fluidez de navegação.
            </p>
            <a href="https://github.com/FHPBeto/HamburgueriaZ-Android-App" target="_blank" className="text-sm font-bold text-purple-400 group-hover:text-purple-300 flex items-center gap-2">
              Ver Repositório <span>→</span>
            </a>
          </div>

          {/* Projeto 4 */}
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl hover:bg-slate-900 transition-all group">
            <div className="flex justify-between items-start mb-6">
              <span className="text-4xl">🧬</span>
              <div className="flex gap-2">
                <span className="text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2 py-1 rounded">REACT</span>
                <span className="text-[10px] font-mono bg-pink-500/10 text-pink-400 border border-pink-500/20 px-2 py-1 rounded">DESIGN</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 underline decoration-cyan-500/30">Projeto-imprinting</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Landing page avançada com foco em experiência do usuário e conversão, utilizando as melhores práticas de Front-end.
            </p>
            <a href="https://github.com/FHPBeto/Projeto-imprinting" target="_blank" className="text-sm font-bold text-cyan-400 group-hover:text-cyan-300 flex items-center gap-2">
              Ver Repositório <span>→</span>
            </a>
          </div>

        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="py-20 text-center border-t border-slate-900 bg-slate-950">
        <p className="text-blue-500 font-mono text-[10px] mb-2 tracking-[0.3em] uppercase tracking-widest">Engenheiro de Software</p>
        <h2 className="text-white font-bold mb-6 text-lg">humbertoengsoftware.com.br</h2>
        
        <div className="flex justify-center gap-8 text-slate-500 text-sm">
           <a href="https://linkedin.com/in/humberto-engsoftware" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
           <a href="https://github.com/FHPBeto" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>
           <a href="mailto:humbertofhp62@gmail.com" className="hover:text-blue-400 transition-colors font-bold text-slate-400">Email</a>
        </div>
        
        <p className="mt-10 text-[10px] text-slate-700 uppercase tracking-widest">
          &copy; 2026 • Projetado com Rigor de Engenharia
        </p>
      </footer>

    </div> // Este fecha a div principal da linha 5
  )
}

export default App
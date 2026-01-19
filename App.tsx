
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  BrainCircuit, 
  Calendar, 
  ShieldCheck, 
  Timer, 
  Dumbbell, 
  Flame, 
  TrendingUp,
  AlertCircle
} from 'lucide-react';

const App: React.FC = () => {
  const PRECO = "9,90";

  return (
    <div className="min-h-screen selection:bg-emerald-500/30">
      {/* Sticky CTA for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-zinc-900/80 backdrop-blur-md border-t border-white/10">
        <button 
          onClick={() => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
        >
          QUERO MINHA CONSISTÊNCIA POR R$ {PRECO}
        </button>
      </div>

      {/* Hero Section */}
      <header className="relative pt-20 pb-16 md:pt-32 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700 text-zinc-400 text-sm font-semibold mb-8 animate-fade-in">
            <ShieldCheck size={16} className="text-emerald-500" />
            MÉTODO VALIDADO PELA CIÊNCIA
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight max-w-5xl mx-auto">
            Pare de Começar e Recomeçar: O Segredo Científico para Tornar a Academia um <span className="gradient-text">Hábito em Apenas 66 Dias</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            A Ciência Comprova: Você Não Precisa de Motivação, Você Precisa de um <span className="text-emerald-400 font-semibold italic">Método</span>.
          </p>

          <div className="flex flex-col items-center gap-6">
            <button 
              onClick={() => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black py-6 px-12 rounded-2xl text-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-[0_20px_40px_rgba(16,185,129,0.2)]"
            >
              QUERO MINHA CONSISTÊNCIA INQUEBRÁVEL
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-zinc-500 text-sm flex items-center gap-2">
              <Timer size={16} /> Acesso imediato após o pagamento
            </p>
          </div>
        </div>
      </header>

      {/* The Pain Section */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass-card p-10 md:p-16 rounded-[40px]">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              A Dor que Você Conhece Bem
            </h2>
            
            <div className="space-y-8 text-lg text-zinc-300">
              <div className="flex gap-4 items-start">
                <AlertCircle className="text-red-500 shrink-0 mt-1" />
                <p>Você já se sentiu frustrado por pagar a mensalidade da academia e ir apenas nas primeiras semanas?</p>
              </div>
              <div className="flex gap-4 items-start">
                <AlertCircle className="text-red-500 shrink-0 mt-1" />
                <p>Você se sente culpado por ter que "recomeçar" toda segunda-feira, prometendo que "agora vai", mas a motivação desaparece na quarta?</p>
              </div>
              <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 mt-12 italic text-zinc-400 leading-relaxed">
                "A verdade é que você não é preguiçoso. Você não tem falta de força de vontade. Você foi enganado por um mito: o mito de que 21 dias são suficientes para criar um hábito."
              </div>
              <p className="mt-8">
                Se você já tentou de tudo — alarmes, parceiros de treino, listas de tarefas — e ainda assim a consistência é sua maior inimiga, saiba que o problema não está em você. <span className="text-emerald-400 font-bold underline decoration-emerald-400/30 underline-offset-4">Está no método.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Science Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black mb-8 leading-tight">
                O Mito dos 21 Dias e a <span className="text-blue-400">Verdade Científica</span>
              </h2>
              <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
                Por anos, disseram que 21 dias eram o suficiente. Mas a ciência real, em um estudo revolucionário da <strong>University College London</strong>, revelou a verdade:
              </p>
              <div className="bg-emerald-500/10 border-l-4 border-emerald-500 p-8 mb-8">
                <p className="text-2xl font-bold text-emerald-400">
                  Em média, são necessários 66 dias para que um novo comportamento se torne automático.
                </p>
              </div>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Isso significa que, quando você desiste no 25º dia, você está a apenas 41 dias de distância de transformar a academia em algo tão natural quanto escovar os dentes.
              </p>
            </div>
            
            <div className="relative">
              <div className="glass-card rounded-[40px] p-8 md:p-12 relative z-10">
                <div className="mb-8">
                  <div className="text-zinc-500 text-sm mb-2">PROCESSO DE AUTOMAÇÃO</div>
                  <div className="w-full bg-zinc-800 h-4 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[35%] transition-all duration-1000" />
                  </div>
                  <div className="flex justify-between mt-2 text-sm">
                    <span className="text-zinc-500">Dia 1</span>
                    <span className="text-emerald-400 font-bold">Onde você geralmente desiste (Dia 21)</span>
                    <span className="text-zinc-500">Dia 66</span>
                  </div>
                </div>
                <p className="text-zinc-300 font-medium">
                  O que você precisa é de um guia passo a passo para atravessar esses 66 dias críticos sem falhar.
                </p>
              </div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/20 blur-3xl rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* The Product Introduction */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Apresentando: O Método <span className="text-emerald-500 underline decoration-emerald-500/30 decoration-8">66 Dias</span> de Consistência
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Este não é mais um programa de treino. É um mapa mental e comportamental desenhado para reprogramar seu cérebro.
          </p>
        </div>

        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          {/* Phase 1 */}
          <div className="glass-card p-10 rounded-[32px] group hover:border-emerald-500/50 transition-colors">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 mb-8 group-hover:scale-110 transition-transform">
              <BrainCircuit size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Fase de Iniciação</h3>
            <div className="text-emerald-500 font-semibold mb-4">Dia 1 ao 22</div>
            <p className="text-zinc-400 leading-relaxed">
              Aprender a superar a inércia inicial com <strong>"micro-hábitos"</strong> que tornam a ida à academia irresistível.
            </p>
          </div>

          {/* Phase 2 */}
          <div className="glass-card p-10 rounded-[32px] group hover:border-blue-500/50 transition-colors">
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-8 group-hover:scale-110 transition-transform">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Fase de Integração</h3>
            <div className="text-blue-500 font-semibold mb-4">Dia 23 ao 44</div>
            <p className="text-zinc-400 leading-relaxed">
              Como blindar sua rotina contra imprevistos, viagens e dias de preguiça, mantendo o ritmo <strong>sem esforço</strong>.
            </p>
          </div>

          {/* Phase 3 */}
          <div className="glass-card p-10 rounded-[32px] group hover:border-purple-500/50 transition-colors">
            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 mb-8 group-hover:scale-110 transition-transform">
              <Flame size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Fase de Automação</h3>
            <div className="text-purple-500 font-semibold mb-4">Dia 45 ao 66</div>
            <p className="text-zinc-400 leading-relaxed">
              Sinta a mágica: a academia se torna sua "zona de conforto", e faltar passa a ser <strong>mais difícil do que ir</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black mb-16 text-center">O Que Você Recebe:</h2>
            
            <div className="space-y-6">
              {[
                {
                  title: 'O Guia Completo "Método 66 Dias"',
                  desc: 'Seu passo a passo detalhado, com estratégias psicológicas e táticas de rotina para cada fase.',
                  icon: <Dumbbell className="text-emerald-500" />
                },
                {
                  title: 'Checklist de Consistência Diária',
                  desc: 'Acompanhe seu progresso e celebre cada dia, ativando o sistema de recompensa do seu cérebro.',
                  icon: <Calendar className="text-emerald-500" />
                },
                {
                  title: 'O "Plano B" Anti-Desculpa',
                  desc: 'Como lidar com falta de tempo, lesões leves ou desânimo sem quebrar a corrente de 66 dias.',
                  icon: <AlertCircle className="text-emerald-500" />
                },
                {
                  title: 'A Fórmula da "Identidade Fitness"',
                  desc: 'Como parar de "tentar ir" e se tornar "alguém que vai". A chave para o longo prazo.',
                  icon: <TrendingUp className="text-emerald-500" />
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 p-8 glass-card rounded-3xl items-center hover:bg-zinc-800/40 transition-colors">
                  <div className="shrink-0 p-4 bg-zinc-900 rounded-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-zinc-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="checkout" className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-emerald-500/5 rounded-full blur-[120px] -z-10" />
        
        <div className="container mx-auto px-6 max-w-xl text-center">
          <h2 className="text-4xl font-black mb-4">Por que o preço é tão baixo?</h2>
          <p className="text-zinc-400 mb-12">
            Eu quero que a falta de dinheiro não seja mais uma desculpa para você adiar sua saúde e seu bem-estar.
          </p>

          <div className="glass-card p-12 rounded-[40px] border-emerald-500/30 border-2 shadow-[0_0_80px_rgba(16,185,129,0.1)]">
            <div className="text-zinc-500 line-through text-2xl mb-2">R$ 99,90</div>
            <div className="text-6xl md:text-7xl font-black text-white mb-8">
              R$ <span className="gradient-text">{PRECO}</span>
            </div>
            
            <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black py-6 px-12 rounded-2xl text-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(16,185,129,0.2)] mb-6">
              QUERO MINHA CONSISTÊNCIA
              <ArrowRight />
            </button>
            
            <p className="text-zinc-400 italic text-sm">
              * Menos do que um cafezinho por dia!
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-zinc-900/50 p-12 rounded-[40px] border border-white/5">
            <div className="shrink-0">
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full" />
                <div className="relative w-full h-full bg-zinc-800 border-4 border-emerald-500/50 rounded-full flex flex-col items-center justify-center text-center">
                  <span className="text-3xl font-black text-emerald-500">7</span>
                  <span className="text-xs font-bold text-zinc-400">DIAS DE GARANTIA</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Sua Decisão Sem Riscos</h2>
              <p className="text-zinc-400 leading-relaxed">
                Eu confio tanto na ciência por trás deste método que vou assumir todo o risco. 
                Se em 7 dias você aplicar as estratégias iniciais e não sentir que está no caminho certo, basta me enviar um e-mail. <strong>Eu devolvo 100% do seu dinheiro, sem perguntas.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Urgent CTA */}
      <section className="py-24 bg-emerald-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-zinc-950 mb-8 leading-tight">
            Chega de promessas vazias.<br />Chega de recomeçar.
          </h2>
          <button 
            onClick={() => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-zinc-950 text-emerald-500 font-black py-8 px-16 rounded-3xl text-2xl transition-all hover:scale-105 active:scale-95 shadow-2xl"
          >
            QUERO COMEÇAR MINHA JORNADA AGORA
          </button>
        </div>
      </section>

      {/* Footer / PS */}
      <footer className="py-16 bg-zinc-950 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-lg text-zinc-400 italic mb-8">
            <strong>P.S.:</strong> Lembre-se, a consistência não é um dom. É uma habilidade que se aprende. E o tempo médio para aprender essa habilidade é de 66 dias. Não perca mais um dia esperando a motivação. Comece o método que funciona.
          </p>
          <div className="text-zinc-600 text-sm">
            &copy; {new Date().getFullYear()} Método 66 Dias. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

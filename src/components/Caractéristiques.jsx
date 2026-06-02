function Caractéristiques() {
  const features = [
    {
      icon: "📹",
      title: "Cours vidéo intégrés",
      desc: "Des vidéos pédagogiques soigneusement sélectionnées, accessibles à tout moment, sur tous vos appareils.",
    },
    {
      icon: "🎙️",
      title: "Récitations corrigées",
      desc: "Envoyez vos récitations audio et recevez des corrections détaillées de votre coach personnel.",
    },
    {
      icon: "📊",
      title: "Suivi de progression",
      desc: "Visualisez votre évolution jour après jour grâce à un tableau de bord personnalisé et motivant.",
    },
    {
      icon: "💬",
      title: "Messagerie interne",
      desc: "Communiquez directement avec votre coach pour poser vos questions et recevoir des conseils.",
    },
    {
      icon: "🏆",
      title: "Niveaux progressifs",
      desc: "Un parcours pédagogique structuré du débutant à l'hifz, avec des objectifs clairs à chaque étape.",
    },
    {
      icon: "🔒",
      title: "Accès sécurisé",
      desc: "Votre espace personnel sécurisé avec authentification avancée et protection de vos données.",
    },
  ];

  return (
    <>
    <section id="features" className="relative overflow-hidden px-10 py-20 bg-[#0a2218]">
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_20%_50%,rgba(29,158,117,0.08),transparent_60%)]" />

      {/* Header */}
      <div className="relative z-10 text-center mb-14"> <span className="inline-block bg-[rgba(29,158,117,0.18)] border border-[rgba(29,158,117,0.35)] text-[#5DCAA5] text-[11px] font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
          ✦ Pourquoi NourCoran ?
        </span>
        <h2 className="text-4xl font-light text-[#f0ede4] leading-snug">
          Tout ce dont vous avez besoin<br />
          pour{" "}
          <em className="not-italic font-medium text-[#5DCAA5] italic">
            progresser
          </em>
        </h2>
      </div>

      {/* Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white/[0.04] border border-[rgba(93,202,165,0.15)] hover:border-[rgba(93,202,165,0.35)] rounded-2xl p-7 transition-colors duration-200"
          >
            <div className="w-11 h-11 bg-[rgba(29,158,117,0.18)] rounded-xl flex items-center justify-center text-xl mb-4">
              {f.icon}
            </div>
            <div className="text-[#f0ede4] font-medium text-sm mb-2">
              {f.title}
            </div>
            <p className="text-[rgba(240,237,228,0.5)] text-xs leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}

export default Caractéristiques;
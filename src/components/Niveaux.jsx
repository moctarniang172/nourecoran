import React from 'react';

function Niveaux() {
  const listNiveaux = [
    {
      id: 1,
      titre: 'Débutant (Al-Qaida)',
      description: "Apprenez les bases de la prononciation, l'alphabet arabe et les règles de lecture fondamentales (Tajwid de base).",
      lecons: '12 leçons',
      badge: 'Idéal pour commencer',
      icon: '📖',
    },
    {
      id: 2,
      titre: 'Intermédiaire',
      description: 'Fluidifiez votre lecture, commencez la mémorisation des petites Sourates (Jouz Amma) avec une application stricte du Tajwid.',
      lecons: '24 leçons',
      badge: '⭐ Le plus populaire',
      popular: true,
      icon: '⚡',
    },
    {
      id: 3,
      titre: 'Avancé (Hifz)',
      description: 'Mémorisation approfondie (Hifz), maîtrise des règles complexes de récitation et perfectionnement de la voix (Tarteel).',
      lecons: 'À la carte',
      badge: 'Perfectionnement',
      icon: '🏆',
    },
  ];

  return (
    <section id="niveaux" className="relative overflow-hidden bg-[#071a10] text-white py-20 px-6 lg:px-16 xl:px-24">

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_0%,rgba(29,158,117,0.08),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block bg-[rgba(29,158,117,0.18)] border border-[rgba(29,158,117,0.35)] text-[#5DCAA5] text-[11px] font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            ✦ Votre Parcours
          </span>
          <h2 className="text-4xl font-light text-[#f0ede4] leading-snug mb-4">
            Des niveaux adaptés<br />
            à <em className="not-italic font-medium text-[#5DCAA5] italic">chaque profil</em>
          </h2>
          <p className="text-sm text-[rgba(240,237,228,0.5)] leading-relaxed">
            Peu importe votre niveau de départ, progressez pas à pas à votre rythme grâce à notre programme structuré.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {listNiveaux.map((niveau) => (
            <div
              key={niveau.id}
              className={`
                group relative flex flex-col justify-between rounded-2xl p-8
                bg-gradient-to-b from-[rgba(29,158,117,0.12)] to-[rgba(29,158,117,0.03)]
                border transition-colors duration-200
                ${niveau.popular
                  ? 'border-[rgba(93,202,165,0.3)] shadow-[0_0_0_1px_rgba(93,202,165,0.15),0_8px_32px_rgba(0,0,0,0.3)]'
                  : 'border-[rgba(93,202,165,0.12)] hover:border-[rgba(93,202,165,0.4)]'
                }
              `}
            >
              {/* Glow carte populaire */}
              {niveau.popular && (
                <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-[radial-gradient(circle,rgba(29,158,117,0.2),transparent_70%)] pointer-events-none" />
              )}

              <div>
                {/* Badge + Icône */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`
                    text-[10px] font-medium tracking-wider uppercase px-3 py-1 rounded-full border
                    ${niveau.popular
                      ? 'bg-[rgba(29,158,117,0.3)] border-[rgba(93,202,165,0.4)] text-[#5DCAA5]'
                      : 'bg-[rgba(29,158,117,0.15)] border-[rgba(93,202,165,0.2)] text-[#5DCAA5]'
                    }
                  `}>
                    {niveau.badge}
                  </span>
                  <div className={`
                    w-10 h-10 rounded-xl flex items-center justify-center text-lg border
                    ${niveau.popular
                      ? 'bg-[rgba(29,158,117,0.25)] border-[rgba(93,202,165,0.35)]'
                      : 'bg-[rgba(29,158,117,0.15)] border-[rgba(93,202,165,0.2)]'
                    }
                  `}>
                    {niveau.icon}
                  </div>
                </div>

                {/* Titre & Description */}
                <h3 className="text-base font-medium text-[#f0ede4] group-hover:text-[#5DCAA5] transition-colors duration-200 mb-3">
                  {niveau.titre}
                </h3>
                <p className="text-xs text-[rgba(240,237,228,0.5)] leading-relaxed">
                  {niveau.description}
                </p>
              </div>

              {/* Footer carte */}
              <div className="mt-7 pt-5 border-t border-[rgba(93,202,165,0.1)] flex items-center justify-between">
                <span className="text-[11px] text-[rgba(240,237,228,0.35)] uppercase tracking-wider">
                  Volume : <strong className="text-[rgba(240,237,228,0.6)] font-normal">{niveau.lecons}</strong>
                </span>
                <a href="#" className="inline-flex items-center gap-1 text-xs font-medium text-[#5DCAA5] hover:gap-2 transition-all duration-200">
                  Découvrir
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Niveaux;
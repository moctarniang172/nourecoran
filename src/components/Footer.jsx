function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#071a10]">

      {/* Ligne séparatrice top */}
      <div className="h-px bg-gradient-to-r from-transparent via-[rgba(93,202,165,0.2)] to-transparent" />

      {/* Contenu principal */}
      <div className="relative z-10 px-10 pt-14 pb-8">

        {/* Glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_10%_0%,rgba(29,158,117,0.07),transparent_55%)]" />

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10">

          {/* Col 1 — Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-[rgba(29,158,117,0.25)] border border-[rgba(93,202,165,0.3)] rounded-xl flex items-center justify-center text-lg">
                ☽
              </div>
              <span className="text-[#f0ede4] font-medium text-lg">NourCoran</span>
            </div>

            <p className="text-[rgba(240,237,228,0.45)] text-xs leading-relaxed max-w-[220px] mb-6">
              Une plateforme moderne d'apprentissage du Coran avec un suivi
              personnalisé par des coachs qualifiés.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex gap-2">
              {["📸", "▶", "✈", "💬"].map((icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-lg bg-[rgba(29,158,117,0.15)] border border-[rgba(93,202,165,0.2)] hover:bg-[rgba(29,158,117,0.3)] flex items-center justify-center text-sm transition-colors"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Col 2 — Plateforme */}
          <div>
            <div className="text-[#5DCAA5] text-[11px] font-medium tracking-widest uppercase mb-4">
              Plateforme
            </div>
            {["Fonctionnalités", "Niveaux", "Tarifs", "Coachs", "Témoignages"].map((l) => (
              <a key={l} href="#" className="block text-[rgba(240,237,228,0.45)] hover:text-[#5DCAA5] text-xs mb-2.5 transition-colors">
                {l}
              </a>
            ))}
          </div>

          {/* Col 3 — Ressources */}
          <div>
            <div className="text-[#5DCAA5] text-[11px] font-medium tracking-widest uppercase mb-4">
              Ressources
            </div>
            {["Blog", "FAQ", "Guide débutant", "Méthodes de lecture", "Support"].map((l) => (
              <a key={l} href="#" className="block text-[rgba(240,237,228,0.45)] hover:text-[#5DCAA5] text-xs mb-2.5 transition-colors">
                {l}
              </a>
            ))}
          </div>

          {/* Col 4 — Contact + Newsletter */}
          <div>
            <div className="text-[#5DCAA5] text-[11px] font-medium tracking-widest uppercase mb-4">
              Contact
            </div>
            {["contact@nourcoran.com", "WhatsApp", "Devenir coach"].map((l) => (
              <a key={l} href="#" className="block text-[rgba(240,237,228,0.45)] hover:text-[#5DCAA5] text-xs mb-2.5 transition-colors">
                {l}
              </a>
            ))}

            {/* Newsletter */}
            <div className="mt-5">
              <div className="text-[rgba(240,237,228,0.5)] text-[11px] mb-2">Restez informé</div>
              <div className="flex gap-1.5">
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="flex-1 min-w-0 bg-white/[0.05] border border-[rgba(93,202,165,0.2)] rounded-lg px-3 py-1.5 text-[#f0ede4] text-xs placeholder:text-[rgba(240,237,228,0.3)] outline-none focus:border-[rgba(93,202,165,0.4)]"
                />
                <button className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white text-xs px-3 py-1.5 rounded-lg transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-[rgba(93,202,165,0.1)] px-10 py-4 flex flex-wrap justify-between items-center gap-2">
        <span className="text-[rgba(240,237,228,0.3)] text-[11px]">
          © 2025 NourCoran — Tous droits réservés
        </span>
        <div className="flex gap-6">
          <a href="#" className="text-[rgba(240,237,228,0.3)] hover:text-[#5DCAA5] text-[11px] transition-colors">
            Politique de confidentialité
          </a>
          <a href="#" className="text-[rgba(240,237,228,0.3)] hover:text-[#5DCAA5] text-[11px] transition-colors">
            Conditions d'utilisation
          </a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
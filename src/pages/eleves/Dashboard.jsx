// src/pages/eleve/Dashboard.jsx
import { Link } from "react-router-dom";

const stats = [
  { icon: "ti-flame",      label: "Série actuelle",       val: "7 jours",  sub: "↑ Record personnel !" },
  { icon: "ti-book-2",     label: "Leçons terminées",     val: "14 / 24",  sub: "58% du niveau" },
  { icon: "ti-microphone", label: "Récitations envoyées", val: "9",        sub: "3 en attente de correction" },
  { icon: "ti-clock",      label: "Temps ce mois",        val: "4h 30",    sub: "+1h vs mois dernier" },
];

const sourates = [
  { nom: "Al-Fatiha",  pct: 100 },
  { nom: "Al-Ikhlas",  pct: 100 },
  { nom: "Al-Falaq",   pct: 75  },
  { nom: "An-Nas",     pct: 40  },
  { nom: "Al-Kawthar", pct: 10  },
];

const sessions = [
  { icon: "ti-microphone", titre: "Récitation Al-Falaq",  date: "Aujourd'hui, 09h15", badge: "Corrigée",   color: "green" },
  { icon: "ti-book",       titre: "Leçon Tajwid n°8",    date: "Hier, 20h00",         badge: "Terminée",  color: "green" },
  { icon: "ti-microphone", titre: "Récitation An-Nas",   date: "Hier, 19h30",         badge: "En attente",color: "orange"},
  { icon: "ti-video",      titre: "Vidéo Makhraj n°3",   date: "Lun. 27 mai",         badge: "Vue",       color: "gray"  },
];

const objectifs = [
  { done: true,  texte: "Finir leçon Tajwid n°8" },
  { done: true,  texte: "Envoyer récitation Al-Ikhlas" },
  { done: false, texte: "Mémoriser An-Nas (v.1-4)" },
  { done: false, texte: "Regarder vidéo Madd n°1" },
  { done: false, texte: "Envoyer récitation An-Nas" },
];

const badgeStyle = {
  green:  "bg-[rgba(29,158,117,0.2)] text-[#5DCAA5] border border-[rgba(93,202,165,0.2)]",
  orange: "bg-[rgba(239,159,39,0.15)] text-[#EF9F27] border border-[rgba(239,159,39,0.2)]",
  gray:   "bg-white/[0.06] text-[rgba(240,237,228,0.4)] border border-white/[0.08]",
};

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#0a2218] text-[#f0ede4]">

      {/* ─── SIDEBAR ─── */}
      <aside className="w-48 flex-shrink-0 bg-[#071a10] border-r border-[rgba(93,202,165,0.1)] flex flex-col py-5">

        {/* Logo */}
        <div className="flex items-center gap-2 px-4 pb-4 border-b border-[rgba(93,202,165,0.1)] mb-3">
          <div className="w-7 h-7 bg-[rgba(29,158,117,0.25)] border border-[rgba(93,202,165,0.3)] rounded-lg flex items-center justify-center text-sm">☽</div>
          <span className="text-sm font-medium">NourCoran</span>
        </div>

        {/* Nav */}
        <p className="text-[10px] text-[rgba(240,237,228,0.25)] uppercase tracking-widest px-4 mb-1">Menu</p>
        {[
          { icon: "ti-layout-dashboard", label: "Tableau de bord", active: true },
          { icon: "ti-book",             label: "Mes leçons" },
          { icon: "ti-microphone",       label: "Récitations" },
          { icon: "ti-chart-line",       label: "Progression" },
          { icon: "ti-message-circle",   label: "Messages", badge: "3" },
        ].map((item) => (
          <div key={item.label}className={`flex items-center gap-2.5 mx-2 px-3 py-2 rounded-lg text-xs cursor-pointer transition-colors
        ${item.active ? "bg-[rgba(29,158,117,0.18)] text-[#5DCAA5] font-medium" : "text-[rgba(240,237,228,0.5)] hover:bg-[rgba(29,158,117,0.1)] hover:text-[#f0ede4]"}`}>
            <i className={`ti ${item.icon} text-base`} aria-hidden="true" />
            {item.label}
            {item.badge && (<span className="ml-auto bg-[rgba(29,158,117,0.25)] text-[#5DCAA5] text-[10px] px-1.5 py-px rounded-full">{item.badge} </span> )}
          </div>
        ))}

        <p className="text-[10px] text-[rgba(240,237,228,0.25)] uppercase tracking-widest px-4 mt-3 mb-1">Compte</p>
        {[
          { icon: "ti-user",     label: "Mon profil" },
          { icon: "ti-settings", label: "Paramètres" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2.5 mx-2 px-3 py-2 rounded-lg text-xs text-[rgba(240,237,228,0.5)] hover:bg-[rgba(29,158,117,0.1)] hover:text-[#f0ede4] cursor-pointer transition-colors" >
            <i className={`ti ${item.icon} text-base`} aria-hidden="true" />
            {item.label}
          </div>
        ))}

        {/* Avatar */}
        <div className="mt-auto mx-2 pt-3 border-t border-[rgba(93,202,165,0.1)]">
          <div className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-[rgba(29,158,117,0.08)]">
            <div className="w-7 h-7 rounded-full bg-[rgba(29,158,117,0.3)] border border-[rgba(93,202,165,0.3)] flex items-center justify-center text-[10px] font-medium text-[#5DCAA5] flex-shrink-0">MA</div>
            <div>
              <p className="text-xs font-medium text-[#f0ede4]">Mamadou A.</p>
              <span className="text-[10px] text-[rgba(240,237,228,0.4)]">Niveau intermédiaire</span>
            </div>
          </div>
        </div>
      </aside>

      {/* ─── MAIN ─── */}
      <main className="flex-1 overflow-auto p-6">

        {/* Topbar */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-base font-medium text-[#f0ede4]">Bon retour, Mamadou 👋</h1>
            <span className="text-xs text-[rgba(240,237,228,0.4)]">Lundi 2 juin 2025 — Semaine 12</span>
          </div>
          <div className="relative w-8 h-8 bg-white/[0.04] border border-[rgba(93,202,165,0.15)] rounded-lg flex items-center justify-center cursor-pointer">
            <i className="ti ti-bell text-sm text-[rgba(240,237,228,0.6)]" aria-hidden="true" />
            <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#1D9E75] rounded-full" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2.5 mb-5">
          {stats.map((s) => (
            <div key={s.label} className="relative bg-white/[0.04] border border-[rgba(93,202,165,0.12)] rounded-xl p-4 overflow-hidden">
              <div className="absolute top-3 right-3 w-7 h-7 bg-[rgba(29,158,117,0.15)] rounded-lg flex items-center justify-center">
                <i className={`ti ${s.icon} text-sm text-[#5DCAA5]`} aria-hidden="true" />
              </div>
              <p className="text-[10px] text-[rgba(240,237,228,0.4)] uppercase tracking-wider mb-1">{s.label}</p>
              <p className="text-2xl font-medium text-[#f0ede4] mb-0.5">{s.val}</p>
              <p className="text-[11px] text-[#5DCAA5]">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Progression + Sessions */}
        <div className="grid grid-cols-2 gap-2.5 mb-5">

          <div className="bg-white/[0.04] border border-[rgba(93,202,165,0.12)] rounded-xl p-4">
            <p className="text-[11px] font-medium text-[rgba(240,237,228,0.5)] uppercase tracking-wider mb-4">Progression des sourates</p>
            {sourates.map((s) => (
              <div key={s.nom} className="mb-3">
                <div className="flex justify-between mb-1.5">
                  <span className="text-xs text-[#f0ede4]">{s.nom}</span>
                  <span className="text-[11px] text-[#5DCAA5] font-medium">{s.pct}%</span>
                </div>
                <div className="h-1 bg-[rgba(93,202,165,0.1)] rounded-full overflow-hidden">
                  <div className="h-full bg-[#1D9E75] rounded-full" style={{ width: `${s.pct}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/[0.04] border border-[rgba(93,202,165,0.12)] rounded-xl p-4">
            <p className="text-[11px] font-medium text-[rgba(240,237,228,0.5)] uppercase tracking-wider mb-4">Sessions récentes</p>
            {sessions.map((s) => (<div key={s.titre} className="flex items-center gap-2.5 py-2 border-b border-[rgba(93,202,165,0.06)] last:border-none">
                <div className="w-8 h-8 bg-[rgba(29,158,117,0.15)] border border-[rgba(93,202,165,0.15)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className={`ti ${s.icon} text-sm text-[#5DCAA5]`} aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[#f0ede4] truncate">{s.titre}</p>
                  <span className="text-[11px] text-[rgba(240,237,228,0.4)]">{s.date}</span>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${badgeStyle[s.color]}`}>
                  {s.badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Coach + Objectifs */}
        <div className="grid grid-cols-[2fr_1fr] gap-2.5">

          <div className="bg-white/[0.04] border border-[rgba(93,202,165,0.12)] rounded-xl p-4">
            <p className="text-[11px] font-medium text-[rgba(240,237,228,0.5)] uppercase tracking-wider mb-4">Mon coach</p>
            <div className="flex items-center gap-2.5 pb-3 border-b border-[rgba(93,202,165,0.06)]">
              <div className="w-8 h-8 rounded-full bg-[rgba(29,158,117,0.2)] border border-[rgba(93,202,165,0.2)] flex items-center justify-center text-[10px] font-medium text-[#5DCAA5]">SB</div>
              <div className="flex-1">
                <p className="text-xs text-[#f0ede4] font-medium">Sheikh Bamba</p>
                <span className="text-[11px] text-[rgba(240,237,228,0.4)]">Disponible · Répond en &lt; 2h</span>
              </div>
              <div className="w-7 h-7 bg-[rgba(29,158,117,0.12)] border border-[rgba(93,202,165,0.15)] rounded-lg flex items-center justify-center cursor-pointer">
                <i className="ti ti-message-circle text-xs text-[#5DCAA5]" aria-hidden="true" />
              </div>
            </div>
            <div className="mt-3 p-3 bg-[rgba(29,158,117,0.08)] border border-[rgba(93,202,165,0.12)] rounded-lg">
              <p className="text-[10px] text-[rgba(240,237,228,0.4)] mb-1">Dernier retour du coach</p>
              <p className="text-xs text-[rgba(240,237,228,0.75)] leading-relaxed">"Bonne progression sur Al-Falaq. Travaille l'allongement des voyelles longues (Madd)."</p>
            </div>
            <div className="font-serif text-sm text-[rgba(93,202,165,0.5)] text-center mt-3 pt-2.5 border-t border-[rgba(93,202,165,0.08)]" style={{ fontFamily: 'Amiri, serif', direction: 'rtl' }}>
              وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا
            </div>
          </div>

          <div className="bg-white/[0.04] border border-[rgba(93,202,165,0.12)] rounded-xl p-4">
            <p className="text-[11px] font-medium text-[rgba(240,237,228,0.5)] uppercase tracking-wider mb-4">Objectifs de la semaine</p>
            {objectifs.map((obj) => (
              <div key={obj.texte} className="flex items-center gap-2 py-1.5 border-b border-[rgba(93,202,165,0.06)] last:border-none">
                <div className={`w-4 h-4 rounded-[4px] flex items-center justify-center flex-shrink-0 ${obj.done ? "bg-[rgba(29,158,117,0.2)] border border-[rgba(93,202,165,0.3)]" : "bg-white/[0.04] border border-white/[0.1]"}`}>
                  {obj.done && <i className="ti ti-check text-[10px] text-[#5DCAA5]" aria-hidden="true" />}
                </div>
                <span className={`text-[11px] ${obj.done ? "line-through text-[rgba(240,237,228,0.35)]" : "text-[rgba(240,237,228,0.7)]"}`}>
                  {obj.texte}
                </span>
              </div>
            ))}
            <div className="mt-3 pt-2.5 border-t border-[rgba(93,202,165,0.08)]">
              <div className="flex justify-between text-[10px] mb-1.5">
                <span className="text-[rgba(240,237,228,0.4)]">Progression semaine</span>
                <span className="text-[#5DCAA5]">2 / 5</span>
              </div>
              <div className="h-1 bg-[rgba(93,202,165,0.1)] rounded-full overflow-hidden">
                <div className="h-full bg-[#1D9E75] rounded-full w-[40%]" />
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
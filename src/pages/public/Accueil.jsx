import { Link } from "react-router-dom";
import { Features } from "tailwindcss";
import Caractéristiques from "../../components/Caractéristiques";
import Niveaux from "../../components/Niveaux";

function Accueil() {
  return (
    <>
      <section className="relative overflow-hidden min-h-130 grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-10 py-14 bg-[#0a2218] rounded-2xl">

        {/* Glow background */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_80%_20%,rgba(29,158,117,0.15),transparent_60%)]" />

        {/* Colonne gauche */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-[rgba(29,158,117,0.18)] border border-[rgba(29,158,117,0.35)] text-[#5DCAA5] text-[11px] font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            ✦ Plateforme d'apprentissage du Coran
          </div>

          <div className="font-serif text-2xl text-[rgba(93,202,165,0.7)] text-right mb-3" style={{ fontFamily: 'Amiri, serif', direction: 'rtl' }}>
            اقْرَأْ بِاسْمِ رَبِّكَ
          </div>

          <h1 className="text-4xl font-light leading-tight text-[#f0ede4] mb-4">
            Apprenez le Coran <br />
            à votre <span className="font-medium text-[#5DCAA5] italic">rythme</span>
          </h1>

          <p className="text-sm text-[rgba(240,237,228,0.6)] leading-relaxed mb-7 max-w-sm">
            Une plateforme moderne d'apprentissage du Coran avec un suivi
            personnalisé par des coachs qualifiés. Des débutants aux
            mémorisants confirmés.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link to="/connexion" className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
                  Commencer gratuitement →
            </Link>
            <a href="#comment" className="text-[rgba(240,237,228,0.75)] hover:text-[#5DCAA5] border border-[rgba(240,237,228,0.2)] hover:border-[rgba(93,202,165,0.5)] text-sm px-5 py-2.5 rounded-lg transition-colors">
              Comment ça marche
            </a>
          </div>
        </div>

        {/* Colonne droite — carte */}
        <div className="relative z-10">
          <div className="bg-white/[0.04] border border-[rgba(93,202,165,0.2)] rounded-2xl p-8">

            <div className="text-[#f0ede4] text-center text-2xl leading-loose mb-2" style={{ fontFamily: 'Amiri, serif', direction: 'rtl' }}>
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </div>

            <div className="text-[rgba(240,237,228,0.5)] text-center text-xs italic leading-relaxed mb-6 pb-5 border-b border-[rgba(93,202,165,0.15)]">
              Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux
            </div>

            <div className="flex justify-around items-center">
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl font-medium text-[#5DCAA5]">+500</span>
                <span className="text-[10px] text-[rgba(240,237,228,0.45)] uppercase tracking-widest">Apprenants</span>
              </div>
              <div className="w-px h-8 bg-[rgba(93,202,165,0.2)]" />
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl font-medium text-[#5DCAA5]">30</span>
                <span className="text-[10px] text-[rgba(240,237,228,0.45)] uppercase tracking-widest">Coachs</span>
              </div>
              <div className="w-px h-8 bg-[rgba(93,202,165,0.2)]" />
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl font-medium text-[#5DCAA5]">3</span>
                <span className="text-[10px] text-[rgba(240,237,228,0.45)] uppercase tracking-widest">Niveaux</span>
              </div>
            </div>

          </div>
        </div>

      </section>
{/* <div className="texte-center">✦ ✦ ✦</div> */}
        <Caractéristiques />
        <Niveaux />
    </>
  );
}

export default Accueil;
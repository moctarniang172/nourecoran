import { useState } from "react";
import { Link } from "react-router-dom";

function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: logique connexion
  };

  return (
    <div className="flex min-h-screen bg-[#0a2218] text-white font-sans">

      {/* ─── GAUCHE : Formulaire ─── */}
      <div className="flex w-full flex-col justify-center px-6 py-12 md:w-1/2 lg:px-16 xl:px-24">
        <div className="mx-auto w-full max-w-md">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 mb-10">
            <div className="w-8 h-8 bg-[rgba(29,158,117,0.25)] border border-[rgba(93,202,165,0.3)] rounded-xl flex items-center justify-center text-base">
              ☽
            </div>
            <span className="text-[#f0ede4] font-medium">NourCoran</span>
          </Link>

          <h2 className="text-2xl font-light text-[#f0ede4] mb-1">Bon retour parmi nous</h2>
          <p className="text-xs text-[rgba(240,237,228,0.45)] mb-8">
            Pas encore membre ?{" "}
            <Link to="/inscription" className="text-[#5DCAA5] font-medium hover:text-[#3db88a] transition-colors">
              Commencer gratuitement
            </Link>
          </p>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-[rgba(240,237,228,0.55)] mb-1.5">
                Adresse email
              </label>
              <input
                id="email" type="email" required
                placeholder="vous@exemple.com"
                value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/[0.04] border border-[rgba(93,202,165,0.15)] rounded-lg px-3.5 py-2.5 text-[#f0ede4] text-sm placeholder:text-[rgba(240,237,228,0.25)] focus:border-[rgba(93,202,165,0.5)] focus:outline-none transition-colors"
              />
            </div>

            {/* Mot de passe */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="password" className="text-xs font-medium text-[rgba(240,237,228,0.55)]">
                  Mot de passe
                </label>
                <a href="#" className="text-[11px] text-[#5DCAA5] hover:text-[#3db88a] transition-colors">
                  Mot de passe oublié ?
                </a>
              </div>
              <input
                id="password" type="password" required
                placeholder="••••••••"
                value={password} onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/[0.04] border border-[rgba(93,202,165,0.15)] rounded-lg px-3.5 py-2.5 text-[#f0ede4] text-sm placeholder:text-[rgba(240,237,228,0.25)] focus:border-[rgba(93,202,165,0.5)] focus:outline-none transition-colors"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#1D9E75] hover:bg-[#0F6E56] text-white text-sm font-medium py-2.5 rounded-lg transition-colors duration-200"
            >
              Se connecter →
            </button>
          </form>

          {/* Séparateur */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-[rgba(93,202,165,0.1)]" />
            <span className="text-[10px] text-[rgba(240,237,228,0.3)] uppercase tracking-wider">ou continuer avec</span>
            <div className="flex-1 h-px bg-[rgba(93,202,165,0.1)]" />
          </div>

          {/* Boutons sociaux */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 bg-white/[0.04] border border-[rgba(93,202,165,0.15)] hover:border-[rgba(93,202,165,0.35)] rounded-lg px-4 py-2.5 text-[#f0ede4] text-xs font-medium transition-colors">
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M12 5.04c1.64 0 3.12.56 4.28 1.67l3.2-3.2C17.52 1.58 14.97 1 12 1 7.35 1 3.39 3.65 1.5 7.5l3.6 2.8C6.01 7.14 8.79 5.04 12 5.04z"/>
                <path fill="#4285F4" d="M23.49 12.27c0-.81-.07-1.59-.2-2.34H12v4.44h6.44c-.28 1.48-1.12 2.73-2.38 3.58l3.6 2.8c2.1-1.94 3.83-5.22 3.83-8.48z"/>
                <path fill="#FBBC05" d="M5.1 14.7c-.25-.75-.39-1.55-.39-2.37s.14-1.62.39-2.37L1.5 7.16C.54 9.07 0 11.2 0 12.43s.54 3.36 1.5 5.27l3.6-3z"/>
                <path fill="#34A853" d="M12 23c3.24 0 5.97-1.07 7.96-2.91l-3.6-2.8c-1.1.74-2.51 1.18-4.36 1.18-3.21 0-5.99-2.1-6.96-5.26l-3.6 2.8C3.39 20.35 7.35 23 12 23z"/>
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/[0.04] border border-[rgba(93,202,165,0.15)] hover:border-[rgba(93,202,165,0.35)] rounded-lg px-4 py-2.5 text-[#f0ede4] text-xs font-medium transition-colors">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              GitHub
            </button>
          </div>

          {/*  Lien inscription en bas */}
          <p className="text-center mt-7 text-xs text-[rgba(240,237,228,0.35)]">
            Vous n'avez pas de compte ?{" "}
            <Link to="/inscription" className="text-[#5DCAA5] font-medium hover:text-[#3db88a] transition-colors">
              Créer un compte →
            </Link>
          </p>

        </div>
      </div>

      {/* ─── DROITE : Décoration (inchangée) ─── */}
      <div className="relative hidden md:flex w-1/2 items-center justify-center bg-gradient-to-br from-[#071a10] to-[#0e2d1e] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_50%,rgba(29,158,117,0.18),transparent_65%)]" />
        <div className="relative z-10 text-center px-10">
          <div className="text-5xl text-[rgba(93,202,165,0.6)] mb-3 leading-loose" style={{ fontFamily: 'Amiri, serif', direction: 'rtl' }}>
            اقْرَأْ بِاسْمِ رَبِّكَ
          </div>
          <p className="text-xs text-[rgba(240,237,228,0.4)] italic mb-10">Lis au nom de ton Seigneur</p>
          <div className="flex items-center justify-center gap-8">
            {[{ n: '+500', l: 'Apprenants' }, { n: '30', l: 'Coachs' }, { n: '3', l: 'Niveaux' }].map((s, i, arr) => (
              <>
                <div key={s.l} className="text-center">
                  <div className="text-2xl font-medium text-[#5DCAA5]">{s.n}</div>
                  <div className="text-[10px] text-[rgba(240,237,228,0.35)] uppercase tracking-widest mt-1">{s.l}</div>
                </div>
                {i < arr.length - 1 && <div className="w-px h-8 bg-[rgba(93,202,165,0.15)]" />}
              </>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Connexion;
import PropTypes from "prop-types";

export default function AdminLoginGate({
  email,
  password,
  authError,
  onEmailChange,
  onPasswordChange,
  onLogin,
  onSignUp,
}) {
  return (
    <div className="admin-login-gate relative min-h-screen overflow-hidden bg-[#0a0c0b] font-mono text-[#c8e6d4] selection:bg-[#325bae] selection:text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(50,91,174,0.4) 2px, rgba(50,91,174,0.4) 3px)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0c0b_75%)]" />
      <div className="admin-login-scan pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#325bae]/25 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-lg flex-col justify-center px-4 py-16">
        <div className="mb-2 flex items-center justify-between border-b border-[#325bae]/40 pb-2 text-[10px] uppercase tracking-[0.35em] text-[#5a8a7a]">
          <span>sector 7g // internal</span>
          <span className="animate-pulse text-[#fe8983]">● live</span>
        </div>

        <div className="border border-[#325bae]/50 bg-black/50 p-6 shadow-[0_0_40px_rgba(50,91,174,0.15)] backdrop-blur-md">
          <div className="mb-1 font-headline text-[10px] font-bold uppercase tracking-[0.5em] text-[#325bae]">
            Restricted
          </div>
          <h1 className="admin-login-glitch font-headline text-3xl font-black uppercase tracking-tighter text-[#e8f4ef] md:text-4xl">
            No visitors
          </h1>
          <p className="mt-2 text-xs leading-relaxed text-[#7a9d8c]">
            You have found a door with no sign. If you hold the right keys,
            prove it. If not, this is a perfectly normal 404-ish feeling page
            wearing a trench coat.
          </p>

          <ul className="mt-4 space-y-1 border-l-2 border-[#325bae]/40 pl-3 text-[11px] text-[#5a7d6e]">
            <li>— Biometric scanner: &quot;out of order (was a sticker)&quot;</li>
            <li>— Retina scan: please do not lick the screen</li>
            <li>— Self-destruct: budget cuts (disappointing, we agree)</li>
          </ul>

          <form className="mt-8 space-y-4" onSubmit={onLogin}>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-[#5a8a7a]">
                Credential line A / email
              </label>
              <input
                className="mt-1 w-full border border-[#325bae]/40 bg-[#050706] px-3 py-2.5 text-sm text-[#e8f4ef] outline-none ring-0 focus:border-[#325bae]"
                type="email"
                autoComplete="username"
                placeholder="you@classified.local"
                value={email}
                onChange={(e) => onEmailChange(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-[#5a8a7a]">
                Credential line B / password
              </label>
              <input
                className="mt-1 w-full border border-[#325bae]/40 bg-[#050706] px-3 py-2.5 text-sm text-[#e8f4ef] outline-none focus:border-[#325bae]"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => onPasswordChange(e.target.value)}
                required
              />
            </div>
            {authError && (
              <p className="border border-[#9f403d]/50 bg-[#9f403d]/10 px-3 py-2 text-xs text-[#fe8983]">
                Access denied: {authError}
              </p>
            )}
            <button
              type="submit"
              className="w-full border-2 border-[#325bae] bg-[#325bae]/20 py-3 font-headline text-xs font-bold uppercase tracking-[0.2em] text-[#d9e2ff] transition-colors hover:bg-[#325bae]/40"
            >
              Request entry
            </button>
            <button
              type="button"
              onClick={onSignUp}
              className="w-full py-2 text-[10px] uppercase tracking-widest text-[#5a7d6e] underline decoration-dotted decoration-[#325bae]/50 hover:text-[#8ab69a]"
            >
              First time on the inside? Forge new credentials (sign up)
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-[10px] uppercase tracking-[0.25em] text-[#3d5248]">
          All attempts logged. (By Firebase. Firebase is serious.)
        </p>
      </div>
    </div>
  );
}

AdminLoginGate.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  authError: PropTypes.string,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
};

AdminLoginGate.defaultProps = {
  authError: "",
};

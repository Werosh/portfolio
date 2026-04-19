import PropTypes from "prop-types";

export default function AdminLoginGate({
  email,
  password,
  authError,
  onEmailChange,
  onPasswordChange,
  onLogin,
}) {
  return (
    <div className="admin-login-gate flex min-h-screen items-center justify-center bg-surface px-4 py-16 font-body text-on-surface">
      <div className="w-full max-w-md border border-outline-variant/40 bg-surface-container-lowest p-8 shadow-sm">
        <h1 className="font-headline text-2xl font-bold tracking-tight text-on-surface">
          Control center
        </h1>
        <p className="mt-2 text-sm text-on-surface-variant">
          Sign in with the email and password for this site&apos;s Firebase Auth
          account.
        </p>

        <form className="mt-8 space-y-4" onSubmit={onLogin}>
          <div>
            <label
              htmlFor="control-center-email"
              className="font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant"
            >
              Email
            </label>
            <input
              id="control-center-email"
              className="mt-1.5 w-full border border-outline-variant bg-surface px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
              type="email"
              autoComplete="username"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="control-center-password"
              className="font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant"
            >
              Password
            </label>
            <input
              id="control-center-password"
              className="mt-1.5 w-full border border-outline-variant bg-surface px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => onPasswordChange(e.target.value)}
              required
            />
          </div>
          {authError ? (
            <p className="border border-error/30 bg-error/10 px-3 py-2 text-sm text-error">
              {authError}
            </p>
          ) : null}
          <button
            type="submit"
            className="w-full border-2 border-primary bg-primary px-4 py-3 font-headline text-sm font-bold uppercase tracking-widest text-on-primary transition-opacity hover:opacity-90"
          >
            Sign in
          </button>
        </form>
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
};

AdminLoginGate.defaultProps = {
  authError: "",
};

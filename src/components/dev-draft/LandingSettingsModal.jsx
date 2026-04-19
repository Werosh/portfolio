import { useEffect } from "react";
import PropTypes from "prop-types";

export default function LandingSettingsModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-on-surface/40 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="settings-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Close settings"
        onClick={onClose}
      />
      <div className="hand-drawn-border relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto bg-surface p-8 shadow-2xl">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.25em] text-on-surface-variant">
              Visitor clearance
            </p>
            <h2
              id="settings-modal-title"
              className="font-headline text-2xl font-black tracking-tight text-on-surface"
            >
              Draft preferences
            </h2>
            <p className="mt-1 font-sketch text-lg text-secondary">
              (None of this does anything. It is for vibes only.)
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="border-2 border-on-surface px-3 py-1 font-label text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-on-primary"
          >
            Close
          </button>
        </div>
        <div className="space-y-6 border-t border-dashed border-outline-variant/50 pt-6">
          <FakeSlider label="Pencil sharpness" value={72} />
          <FakeSlider label="Coffee-to-code ratio" value={40} />
          <FakeToggle
            label="Enable dramatic pauses before deploys"
            checked
          />
          <FakeToggle label="Play typewriter sounds in head" checked={false} />
          <div className="rounded-sm border border-dashed border-outline-variant bg-surface-container-low p-4">
            <p className="font-body text-sm text-on-surface-variant">
              <span className="font-headline text-xs uppercase tracking-widest text-primary">
                Note
              </span>
              <br />
              Admin tools are not linked from the public site. If you are
              actually supposed to be here, you already know the URL.
            </p>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <span className="font-sketch rotate-[-2deg] text-sm text-on-surface-variant">
            stamped: OK_FOR_VISITORS
          </span>
        </div>
      </div>
    </div>
  );
}

LandingSettingsModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

function FakeSlider({ label, value }) {
  return (
    <label className="block">
      <span className="font-label text-xs font-bold uppercase tracking-tighter text-on-surface-variant">
        {label}
      </span>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        readOnly
        className="mt-2 w-full accent-primary"
      />
    </label>
  );
}

FakeSlider.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

function FakeToggle({ label, checked }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="font-body text-sm text-on-surface">{label}</span>
      <span
        className={`font-mono text-xs uppercase ${checked ? "text-primary" : "text-on-surface-variant"}`}
      >
        {checked ? "on" : "off"}
      </span>
    </div>
  );
}

FakeToggle.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
};

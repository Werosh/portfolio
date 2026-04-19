import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const empty = {
  role: "",
  organization: "",
  period: "",
  location: "",
  description: "",
  asideKind: "quote",
  asideText: "",
  asideCaption: "",
  asideIcon: "",
  sortOrder: "",
};

export default function AdminExperienceForm({
  editing,
  onClearEdit,
  onSubmit,
  busy,
}) {
  const [values, setValues] = useState(empty);

  useEffect(() => {
    if (editing) {
      setValues({
        role: editing.role || "",
        organization: editing.organization || "",
        period: editing.period || "",
        location: editing.location || "",
        description: editing.description || "",
        asideKind:
          editing.asideKind === "sketch" ? "sketch" : "quote",
        asideText: editing.asideText || "",
        asideCaption: editing.asideCaption || "",
        asideIcon: editing.asideIcon || "",
        sortOrder:
          editing.sortOrder !== undefined && editing.sortOrder !== null
            ? String(editing.sortOrder)
            : "",
      });
    } else {
      setValues(empty);
    }
  }, [editing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit({
      role: values.role,
      organization: values.organization,
      period: values.period,
      location: values.location,
      description: values.description,
      asideKind: values.asideKind,
      asideText: values.asideText,
      asideCaption: values.asideCaption,
      asideIcon: values.asideIcon,
      sortOrder: values.sortOrder,
    });
    if (!editing) {
      setValues(empty);
    }
  };

  return (
    <section
      id="experience-spec"
      className="relative col-span-12 border border-outline-variant/20 bg-surface-container-lowest p-8 shadow-sm lg:col-span-5"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(#325bae 0.5px, transparent 0.5px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="relative z-10">
        <div className="mb-10 flex items-start justify-between">
          <div>
            <h3 className="font-headline text-lg font-bold uppercase tracking-widest text-on-surface">
              {editing ? "Edit_Timeline_Entry" : "New_Timeline_Entry"}
            </h3>
            <p className="font-sketch text-lg text-secondary">
              {editing
                ? "Update experience row"
                : "Add a role to the public timeline"}
            </p>
          </div>
          <span
            className="material-symbols-outlined text-4xl opacity-20"
            data-icon="timeline"
          >
            timeline
          </span>
        </div>
        {editing && (
          <button
            type="button"
            onClick={onClearEdit}
            className="mb-6 font-label text-xs font-bold uppercase tracking-wider text-primary underline"
          >
            Cancel edit
          </button>
        )}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label className="font-label block text-xs font-bold uppercase tracking-tighter text-on-surface-variant">
              Role / title
            </label>
            <input
              name="role"
              value={values.role}
              onChange={handleChange}
              required
              className="font-body w-full border-0 border-b border-outline-variant bg-transparent py-2 text-lg transition-colors focus:border-primary focus:ring-0"
              placeholder="e.g. Associate Software Engineer"
            />
          </div>
          <div className="space-y-1">
            <label className="font-label block text-xs font-bold uppercase tracking-tighter text-on-surface-variant">
              Organization
            </label>
            <input
              name="organization"
              value={values.organization}
              onChange={handleChange}
              required
              className="font-body w-full border-0 border-b border-outline-variant bg-transparent py-2 text-lg transition-colors focus:border-primary focus:ring-0"
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-1">
              <label className="font-label block text-xs font-bold uppercase tracking-tighter text-on-surface-variant">
                Period
              </label>
              <input
                name="period"
                value={values.period}
                onChange={handleChange}
                required
                className="font-body w-full border-0 border-b border-outline-variant bg-transparent py-2 text-lg transition-colors focus:border-primary focus:ring-0"
                placeholder="2024 – 2025"
              />
            </div>
            <div className="space-y-1">
              <label className="font-label block text-xs font-bold uppercase tracking-tighter text-on-surface-variant">
                Location (optional)
              </label>
              <input
                name="location"
                value={values.location}
                onChange={handleChange}
                className="font-body w-full border-0 border-b border-outline-variant bg-transparent py-2 text-lg transition-colors focus:border-primary focus:ring-0"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="font-label block text-xs font-bold uppercase tracking-tighter text-on-surface-variant">
              Description
            </label>
            <textarea
              name="description"
              value={values.description}
              onChange={handleChange}
              required
              rows={4}
              className="font-sketch w-full resize-y border-0 border-b border-outline-variant bg-transparent py-2 text-lg transition-colors focus:border-primary focus:ring-0"
            />
          </div>
          <div className="space-y-1">
            <label className="font-label block text-xs font-bold uppercase tracking-tighter text-on-surface-variant">
              Side card style
            </label>
            <select
              name="asideKind"
              value={values.asideKind}
              onChange={handleChange}
              className="font-body w-full border border-outline-variant bg-surface px-3 py-2 text-sm focus:border-primary focus:outline-none"
            >
              <option value="quote">Quote (with optional caption)</option>
              <option value="sketch">Sketch note (optional Material icon name)</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="font-label block text-xs font-bold uppercase tracking-tighter text-on-surface-variant">
              Side card text (optional)
            </label>
            <textarea
              name="asideText"
              value={values.asideText}
              onChange={handleChange}
              rows={2}
              className="font-sketch w-full resize-y border-0 border-b border-outline-variant bg-transparent py-2 text-sm transition-colors focus:border-primary focus:ring-0"
              placeholder="Short highlight; leave empty for no side card"
            />
          </div>
          {values.asideKind === "quote" ? (
            <div className="space-y-1">
              <label className="font-label block text-xs font-bold uppercase tracking-tighter text-on-surface-variant">
                Quote caption (optional)
              </label>
              <input
                name="asideCaption"
                value={values.asideCaption}
                onChange={handleChange}
                className="font-body w-full border-0 border-b border-outline-variant bg-transparent py-2 text-lg transition-colors focus:border-primary focus:ring-0"
              />
            </div>
          ) : (
            <div className="space-y-1">
              <label className="font-label block text-xs font-bold uppercase tracking-tighter text-on-surface-variant">
                Material icon name (optional)
              </label>
              <input
                name="asideIcon"
                value={values.asideIcon}
                onChange={handleChange}
                className="font-body w-full border-0 border-b border-outline-variant bg-transparent py-2 text-lg transition-colors focus:border-primary focus:ring-0"
                placeholder="e.g. terminal, school, groups"
              />
            </div>
          )}
          <div className="space-y-1">
            <label className="font-label block text-xs font-bold uppercase tracking-tighter text-on-surface-variant">
              Display order
            </label>
            <input
              name="sortOrder"
              type="number"
              min={1}
              step={1}
              value={values.sortOrder}
              onChange={handleChange}
              className="font-body w-full border-0 border-b border-outline-variant bg-transparent py-2 text-lg transition-colors focus:border-primary focus:ring-0"
              placeholder="Lower = higher on page; blank = append"
            />
          </div>
          <div className="pt-2">
            <button
              disabled={busy}
              type="submit"
              className="group flex items-center gap-4 text-on-surface transition-colors hover:text-primary disabled:opacity-50"
            >
              <span className="font-headline text-xl font-black uppercase italic tracking-tighter">
                {busy ? "Saving…" : editing ? "Update_Entry" : "Commit_Entry"}
              </span>
              <div className="h-[2px] w-12 bg-on-surface transition-all group-hover:w-20 group-hover:bg-primary" />
              <span className="material-symbols-outlined" data-icon="arrow_forward">
                arrow_forward
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

AdminExperienceForm.propTypes = {
  editing: PropTypes.shape({
    id: PropTypes.string,
    role: PropTypes.string,
    organization: PropTypes.string,
    period: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
    asideKind: PropTypes.string,
    asideText: PropTypes.string,
    asideCaption: PropTypes.string,
    asideIcon: PropTypes.string,
    sortOrder: PropTypes.number,
  }),
  onClearEdit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  busy: PropTypes.bool.isRequired,
};

AdminExperienceForm.defaultProps = {
  editing: null,
};

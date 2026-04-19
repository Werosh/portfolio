import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const empty = {
  title: "",
  description: "",
  techStack: "",
  link: "",
  sortOrder: "",
};

export default function AdminProjectForm({
  editing,
  onClearEdit,
  onSubmit,
  busy,
}) {
  const [values, setValues] = useState(empty);

  useEffect(() => {
    if (editing) {
      setValues({
        title: editing.title || "",
        description: editing.description || "",
        techStack: Array.isArray(editing.techStack)
          ? editing.techStack.join(", ")
          : "",
        link: editing.link || "",
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
      title: values.title,
      description: values.description,
      techStack: values.techStack,
      link: values.link,
      sortOrder: values.sortOrder,
    });
    if (!editing) {
      setValues(empty);
    }
  };

  return (
    <section
      id="spec"
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
              {editing ? "Edit_Draft_Spec" : "New_Draft_Spec"}
            </h3>
            <p className="font-sketch text-lg text-secondary">
              {editing
                ? "Update project architecture"
                : "Initiate project architecture"}
            </p>
          </div>
          <span className="material-symbols-outlined text-4xl opacity-20" data-icon="architecture">
            architecture
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
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label className="font-label block text-xs font-bold uppercase tracking-tighter text-on-surface-variant">
              Project title
            </label>
            <input
              name="title"
              value={values.title}
              onChange={handleChange}
              required
              className="font-body w-full border-0 border-b border-outline-variant bg-transparent py-2 text-lg transition-colors focus:border-primary focus:ring-0"
              placeholder="e.g. Apollo-Gateway-01"
            />
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
              rows={3}
              className="font-sketch w-full resize-none border-0 border-b border-outline-variant bg-transparent py-2 text-xl transition-colors focus:border-primary focus:ring-0"
              placeholder="Add scribbles here..."
            />
          </div>
          <div className="space-y-1">
            <label className="font-label block text-xs font-bold uppercase tracking-tighter text-on-surface-variant">
              Tech stack (comma separated)
            </label>
            <input
              name="techStack"
              value={values.techStack}
              onChange={handleChange}
              className="font-body w-full border-0 border-b border-outline-variant bg-transparent py-2 text-lg transition-colors focus:border-primary focus:ring-0"
              placeholder="React, Firebase, Tailwind"
            />
          </div>
          <div className="space-y-1">
            <label className="font-label block text-xs font-bold uppercase tracking-tighter text-on-surface-variant">
              Live URL (optional)
            </label>
            <input
              name="link"
              type="url"
              value={values.link}
              onChange={handleChange}
              className="font-body w-full border-0 border-b border-outline-variant bg-transparent py-2 text-lg transition-colors focus:border-primary focus:ring-0"
              placeholder="https://example.com"
            />
          </div>
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
              placeholder="1 = first on site; leave empty for auto (end)"
            />
            <p className="font-body text-xs text-on-surface-variant">
              Lower numbers appear first on the landing page. When creating, leave
              blank to append after the current last item.
            </p>
          </div>
          <div className="pt-4">
            <button
              disabled={busy}
              type="submit"
              className="group flex items-center gap-4 text-on-surface transition-colors hover:text-primary disabled:opacity-50"
            >
              <span className="font-headline text-xl font-black uppercase italic tracking-tighter">
                {busy ? "Saving…" : editing ? "Update_Blueprint" : "Commit_Blueprint"}
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

AdminProjectForm.propTypes = {
  editing: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    techStack: PropTypes.arrayOf(PropTypes.string),
    link: PropTypes.string,
    sortOrder: PropTypes.number,
  }),
  onClearEdit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  busy: PropTypes.bool.isRequired,
};

AdminProjectForm.defaultProps = {
  editing: null,
};

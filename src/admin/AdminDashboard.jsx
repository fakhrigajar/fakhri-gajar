import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchContent, saveContent, clearToken } from "../lib/adminApi";
import { collectionSchemas, collectionOrder } from "./collectionSchemas";
import CollectionEditor from "./CollectionEditor";

function AdminDashboard({ onLogout }) {
  const [content, setContent] = useState(null);
  const [activeKey, setActiveKey] = useState(collectionOrder[0]);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [saving, setSaving] = useState(false);
  const [loadError, setLoadError] = useState("");

  const loadContent = () => {
    fetchContent()
      .then((data) => {
        setContent(data);
        setLoadError("");
      })
      .catch((err) => setLoadError(err.message));
  };

  useEffect(() => {
    loadContent();
  }, []);

  const handleLogout = () => {
    clearToken();
    onLogout();
  };

  const handleSave = async () => {
    setSaving(true);
    setStatus({ type: "", message: "" });
    try {
      const saved = await saveContent(content);
      setContent(saved);
      setStatus({ type: "success", message: "Saved. Live on the site now." });
    } catch (err) {
      setStatus({ type: "error", message: err.message });
      if (err.message === "Unauthorized.") {
        onLogout();
      }
    } finally {
      setSaving(false);
    }
  };

  if (loadError) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-surface-2 px-5 text-center">
        <div className="flex flex-col gap-3">
          <p className="text-red-400">{loadError}</p>
          <button
            onClick={loadContent}
            className="rounded-lg bg-primary px-4 py-2 text-white"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-surface-2 text-text-secondary">
        Loading content…
      </div>
    );
  }

  const schema = collectionSchemas[activeKey];

  return (
    <div className="min-h-screen bg-surface-2 text-text-primary">
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-surface-border bg-surface-1 px-5 py-4 desktop:px-10">
        <h1 className="text-lg font-semibold">Admin Dashboard</h1>
        <div className="flex items-center gap-3">
          {status.message && (
            <span
              className={`text-sm ${status.type === "error" ? "text-red-400" : "text-emerald-400"}`}
            >
              {status.message}
            </span>
          )}
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white duration-300 hover:opacity-90 disabled:opacity-50"
          >
            <i className="ri-save-line"></i>
            {saving ? "Saving..." : "Save changes"}
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-lg border border-surface-border px-3 py-2 text-sm text-text-secondary hover:border-primary hover:text-primary"
          >
            <i className="ri-logout-box-line"></i>
            Log out
          </button>
        </div>
      </header>

      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-8 desktop:px-10">
        <nav className="flex flex-wrap gap-2">
          {collectionOrder.map((key) => (
            <button
              key={key}
              onClick={() => setActiveKey(key)}
              className={`rounded-full px-4 py-2 text-sm font-medium duration-300 ${
                activeKey === key
                  ? "bg-primary text-white"
                  : "bg-surface-card text-text-secondary hover:text-primary"
              }`}
            >
              {collectionSchemas[key].label}
              <span className="ml-2 opacity-70">
                {content[key]?.length ?? 0}
              </span>
            </button>
          ))}
        </nav>

        <CollectionEditor
          schema={schema}
          items={content[activeKey] || []}
          onChange={(items) =>
            setContent((prev) => ({ ...prev, [activeKey]: items }))
          }
        />
      </div>
    </div>
  );
}

AdminDashboard.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default AdminDashboard;

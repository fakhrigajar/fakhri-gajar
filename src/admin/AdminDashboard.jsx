import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Tabs } from "antd";
import { toast } from "react-toastify";
import { fetchContent, saveContent, clearToken } from "../lib/adminApi";
import { collectionSchemas, collectionOrder } from "./collectionSchemas";
import CollectionEditor from "./CollectionEditor";

function AdminDashboard({ onLogout }) {
  const [content, setContent] = useState(null);
  const [savedContent, setSavedContent] = useState(null);
  const [activeKey, setActiveKey] = useState(collectionOrder[0]);
  const [saving, setSaving] = useState(false);
  const [loadError, setLoadError] = useState("");

  const isDirty =
    content &&
    savedContent &&
    JSON.stringify(content) !== JSON.stringify(savedContent);

  const loadContent = () => {
    fetchContent()
      .then((data) => {
        setContent(data);
        setSavedContent(data);
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
    try {
      const saved = await saveContent(content);
      setContent(saved);
      setSavedContent(saved);
      toast.success("Saved. Live on the site now.");
    } catch (err) {
      toast.error(err.message);
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
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-lg border border-surface-border px-3 py-2 text-sm text-text-secondary hover:border-primary hover:text-primary"
        >
          <i className="ri-logout-box-line"></i>
          Log out
        </button>
      </header>

      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-8 pb-28 desktop:px-10">
        <Tabs
          className="font-poppins font-medium"
          activeKey={activeKey}
          onChange={setActiveKey}
          items={collectionOrder.map((key) => ({
            key,
            label: (
              <span>
                {collectionSchemas[key].label}
                <span className="ml-2 opacity-70">
                  {content[key]?.length ?? 0}
                </span>
              </span>
            ),
          }))}
        />

        <CollectionEditor
          key={activeKey}
          schema={schema}
          items={content[activeKey] || []}
          onChange={(items) =>
            setContent((prev) => ({ ...prev, [activeKey]: items }))
          }
        />
      </div>

      <div
        className={`fixed inset-x-0 bottom-0 z-20 border-t border-surface-border bg-surface-1/95 px-5 py-4 backdrop-blur transition-transform duration-300 ease-out desktop:px-10 ${
          isDirty ? "translate-y-0" : "pointer-events-none translate-y-full"
        }`}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-end gap-3">
          {isDirty && (
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white duration-300 hover:opacity-90 disabled:opacity-50"
            >
              <i className="ri-save-line"></i>
              {saving ? "Saving..." : "Save changes"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

AdminDashboard.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default AdminDashboard;

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Tabs } from "antd";
import { toast } from "react-toastify";
import { fetchContent, saveContent, clearToken } from "../lib/adminApi";
import { collectionSchemas, collectionOrder } from "./collectionSchemas";
import CollectionEditor from "./CollectionEditor";
import AboutEditor from "./AboutEditor";

const NAV_SECTIONS = [
  { key: "portfolio", label: "Portfolio", icon: "ri-briefcase-4-line" },
  { key: "about", label: "About", icon: "ri-user-3-line" },
];

const EMPTY_ABOUT = {
  name: "",
  description: "",
  roles: [],
  resume: "",
  image: "",
};

function AdminDashboard({ onLogout }) {
  const [content, setContent] = useState(null);
  const [savedContent, setSavedContent] = useState(null);
  const [activeSection, setActiveSection] = useState("portfolio");
  const [activeKey, setActiveKey] = useState(collectionOrder[0]);
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "initial";
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileOpen]);

  const selectSection = (key) => {
    setActiveSection(key);
    setMobileOpen(false);
  };

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
    <div className="flex min-h-screen bg-surface-2 text-text-primary">
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-black/60 desktop:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex h-screen w-64 shrink-0 flex-col border-r border-surface-border bg-surface-1 duration-300 desktop:sticky desktop:top-0 desktop:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } ${collapsed ? "desktop:w-[76px]" : "desktop:w-64"}`}
      >
        <div className="flex items-center justify-between gap-2 px-4 py-5">
          {!collapsed && (
            <span className="truncate font-poppins text-sm font-semibold">
              Admin Dashboard
            </span>
          )}
          <button
            type="button"
            onClick={() => setCollapsed((prev) => !prev)}
            className={`hidden ${collapsed ? "w-full" : "w-8"} h-8 shrink-0 items-center justify-center rounded-lg text-text-secondary hover:bg-surface-2 hover:text-text-primary desktop:flex`}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <i
              className={
                collapsed ? "ri-arrow-right-s-line" : "ri-arrow-left-s-line"
              }
            ></i>
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-text-secondary hover:bg-surface-2 hover:text-text-primary desktop:hidden"
            aria-label="Close menu"
          >
            <i className="ri-close-line"></i>
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-3 px-3">
          {NAV_SECTIONS.map((section) => (
            <button
              key={section.key}
              type="button"
              onClick={() => selectSection(section.key)}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium duration-150 ${
                activeSection === section.key
                  ? "bg-white text-surface-2"
                  : "text-text-secondary hover:bg-surface-2 hover:text-text-primary"
              }`}
            >
              <i
                className={`${section.icon} ${collapsed && "w-full"} shrink-0 text-lg`}
              ></i>
              {!collapsed && <span>{section.label}</span>}
            </button>
          ))}
        </nav>

        <div className="border-t border-surface-border px-3 py-4">
          <button
            type="button"
            onClick={handleLogout}
            className="flex h-10 w-full items-center gap-3 rounded-xl px-3 text-sm font-medium text-text-secondary hover:bg-surface-2 hover:text-red-400"
          >
            <i
              className={`ri-logout-box-line ${collapsed && "w-full"} shrink-0 text-lg`}
            ></i>
            {!collapsed && <span>Log out</span>}
          </button>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-10 flex items-center gap-3 border-b border-surface-border bg-surface-1 px-4 py-4 desktop:px-10">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-text-secondary hover:bg-surface-2 hover:text-text-primary desktop:hidden"
            aria-label="Open menu"
          >
            <i className="ri-menu-line text-lg"></i>
          </button>
          <h1 className="text-lg font-semibold">
            {activeSection === "portfolio" ? "Portfolio" : "About"}
          </h1>
        </header>

        <main className="flex flex-1 flex-col gap-6 px-4 py-8 pb-28 desktop:px-10">
          {activeSection === "portfolio" ? (
            <>
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
            </>
          ) : (
            <AboutEditor
              about={content.about || EMPTY_ABOUT}
              onChange={(about) => setContent((prev) => ({ ...prev, about }))}
            />
          )}
        </main>
      </div>

      <div
        className={`fixed inset-x-0 bottom-0 z-20 border-t border-surface-border bg-surface-1/95 px-5 py-4 backdrop-blur transition-transform duration-300 ease-out desktop:px-10 ${
          isDirty ? "translate-y-0" : "pointer-events-none translate-y-full"
        }`}
      >
        <div className="mx-auto flex items-center justify-end gap-3">
          {isDirty && (
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-white duration-300 hover:opacity-90 disabled:opacity-50"
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

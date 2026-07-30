import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { login } from "../lib/adminApi";

function AdminLogin({ onSuccess }) {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await login(password);
      onSuccess();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-surface-2 px-5">
      <div className="flex w-full max-w-sm flex-col gap-3">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex w-fit items-center gap-2 text-sm font-medium text-text-secondary duration-300 hover:text-primary"
        >
          <i className="ri-arrow-left-long-fill"></i>
          Go Back
        </button>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-2xl border border-surface-border bg-surface-card p-8"
        >
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primaryOverlay text-2xl text-primary">
              <i className="ri-lock-line"></i>
            </span>
            <h1 className="text-xl font-semibold text-text-primary">
              Admin Dashboard
            </h1>
            <p className="text-sm text-text-secondary">
              Enter the admin password to manage site content.
            </p>
          </div>

          <input
            type="password"
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full rounded-lg border border-surface-border bg-surface-1 px-3 py-2 text-text-primary outline-none focus:border-primary"
          />

          {error && <p className="text-sm text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={loading || !password}
            className="rounded-lg bg-primary py-2 font-medium text-white duration-300 hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>
      </div>
    </div>
  );
}

AdminLogin.propTypes = {
  onSuccess: PropTypes.func.isRequired,
};

export default AdminLogin;

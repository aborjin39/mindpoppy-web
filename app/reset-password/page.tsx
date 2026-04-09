"use client";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://axmlummgpedenawvzrcd.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [status, setStatus] = useState<"form" | "loading" | "success" | "error">("form");
  const [error, setError] = useState("");

  useEffect(() => {
    // Supabase sends the token in the URL hash
    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.substring(1));
      const accessToken = params.get("access_token");
      const refreshToken = params.get("refresh_token");
      if (accessToken && refreshToken) {
        supabase.auth.setSession({ access_token: accessToken, refresh_token: refreshToken });
      }
    }
  }, []);

  async function handleReset() {
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    if (password !== confirm) {
      setError("Passwords don't match");
      return;
    }
    setStatus("loading");
    const { error: err } = await supabase.auth.updateUser({ password });
    if (err) {
      setError(err.message);
      setStatus("error");
    } else {
      setStatus("success");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6" style={{ background: "var(--bg-primary)" }}>
      <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(circle, #818cf8, transparent 70%)" }} />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl" style={{ background: "radial-gradient(circle, #ec4899, transparent 70%)" }} />

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <span className="text-5xl">🎈</span>
          <h1 className="text-3xl font-bold mt-4" style={{ fontFamily: "Caveat, cursive", color: "var(--gold)" }}>
            mindpoppy
          </h1>
        </div>

        <div className="rounded-2xl p-8 border" style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}>
          {status === "success" ? (
            <div className="text-center">
              <div className="text-5xl mb-4">✅</div>
              <h2 className="text-xl font-bold text-white mb-2">Password Updated!</h2>
              <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
                You can now open MindPoppy and log in with your new password.
              </p>
              <a href="/" className="inline-block px-6 py-3 rounded-full text-sm font-semibold text-white transition hover:scale-105"
                style={{ background: "linear-gradient(135deg, #818cf8, #ec4899)" }}>
                Go to Homepage
              </a>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-bold text-white mb-1">Reset Password</h2>
              <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>Enter your new password below.</p>

              {error && (
                <div className="mb-4 p-3 rounded-lg text-sm text-red-300" style={{ background: "rgba(239,68,68,0.1)" }}>
                  {error}
                </div>
              )}

              <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
                New Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(""); }}
                className="w-full px-4 py-3 rounded-xl mb-4 text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-purple-500"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              />

              <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={confirm}
                onChange={(e) => { setConfirm(e.target.value); setError(""); }}
                className="w-full px-4 py-3 rounded-xl mb-6 text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-purple-500"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              />

              <button
                onClick={handleReset}
                disabled={status === "loading"}
                className="w-full py-3 rounded-full text-white font-semibold transition hover:scale-105 disabled:opacity-50"
                style={{ background: "linear-gradient(135deg, #818cf8, #ec4899)" }}
              >
                {status === "loading" ? "Updating..." : "Update Password"}
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

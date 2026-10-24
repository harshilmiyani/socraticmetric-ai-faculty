"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated, setSession } from "@/lib/portal/auth";
import "@/styles/portal/login.css";

type AuthView = "sign-in" | "forgot-password" | "sign-up";

function AuthBrand({ titleId, title }: { titleId?: string; title: string }) {
  return (
    <div className="sm-login__brand">
      <img className="sm-login__logo" src="/logos/sm_logo.svg" alt="SocraticMetric" />
      <h1 id={titleId} className="sm-login__title">
        {title}
      </h1>
    </div>
  );
}

export function LoginForm() {
  const router = useRouter();
  const [view, setView] = useState<AuthView>("sign-in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const resetEmailRef = useRef<HTMLInputElement>(null);
  const signUpEmailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isAuthenticated()) {
      router.replace("/");
    }
  }, [router]);

  useEffect(() => {
    if (view === "forgot-password") resetEmailRef.current?.focus();
    if (view === "sign-up") signUpEmailRef.current?.focus();
  }, [view]);

  const openForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    setResetEmail(email);
    setView("forgot-password");
  };

  const openSignUp = (e: React.MouseEvent) => {
    e.preventDefault();
    setSignUpEmail(email);
    setSignUpPassword("");
    setView("sign-up");
  };

  const backToSignIn = (e: React.MouseEvent) => {
    e.preventDefault();
    setView("sign-in");
  };

  const completeAuth = (nextEmail: string) => {
    setSession(nextEmail);
    router.push("/");
  };

  const handleSignIn = (e: FormEvent) => {
    e.preventDefault();
    completeAuth(email);
  };

  const handleResetPassword = (e: FormEvent) => {
    e.preventDefault();
    // Reset email wiring comes later
  };

  const handleSignUp = (e: FormEvent) => {
    e.preventDefault();
    completeAuth(signUpEmail);
  };

  return (
    <div className="sm-login">
      <div
        className="sm-login__backdrop"
        aria-hidden="true"
        style={{ backgroundImage: "url('/images/login-bg.png')" }}
      />

      {view === "sign-in" && (
        <div className="sm-login__card">
          <AuthBrand title="Educator Portal Login v5.1" />

          <form className="sm-login__form" onSubmit={handleSignIn} autoComplete="on">
            <div className="sm-login__field">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your email address"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="sm-login__field">
              <label htmlFor="password">Your Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Your password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="sm-login__submit">
              Sign in
            </button>

            <div className="sm-login__links">
              <a href="#forgot-password" onClick={openForgotPassword}>
                Forgot your password?
              </a>
              <a href="#sign-up" onClick={openSignUp}>
                Don&apos;t have an account? Sign up
              </a>
            </div>
          </form>
        </div>
      )}

      {view === "forgot-password" && (
        <div
          className="sm-login__card sm-login__card--dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="forgot-password-title"
        >
          <AuthBrand titleId="forgot-password-title" title="Educator Portal Login v5.1" />

          <form className="sm-login__form" onSubmit={handleResetPassword} autoComplete="on">
            <div className="sm-login__field">
              <label htmlFor="reset-email">Email address</label>
              <input
                ref={resetEmailRef}
                id="reset-email"
                name="email"
                type="email"
                placeholder="Your email address"
                autoComplete="email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="sm-login__submit">
              Send reset password instructions
            </button>

            <div className="sm-login__links">
              <a href="#sign-in" onClick={backToSignIn}>
                Already have an account? Sign in
              </a>
            </div>
          </form>
        </div>
      )}

      {view === "sign-up" && (
        <div
          className="sm-login__card sm-login__card--dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="sign-up-title"
        >
          <AuthBrand titleId="sign-up-title" title="Educator Portal Login v5.1" />

          <form className="sm-login__form" onSubmit={handleSignUp} autoComplete="on">
            <div className="sm-login__field">
              <label htmlFor="sign-up-email">Email address</label>
              <input
                ref={signUpEmailRef}
                id="sign-up-email"
                name="email"
                type="email"
                placeholder="Your email address"
                autoComplete="email"
                value={signUpEmail}
                onChange={(e) => setSignUpEmail(e.target.value)}
                required
              />
            </div>

            <div className="sm-login__field">
              <label htmlFor="sign-up-password">Create a Password</label>
              <input
                id="sign-up-password"
                name="password"
                type="password"
                placeholder="Your password"
                autoComplete="new-password"
                value={signUpPassword}
                onChange={(e) => setSignUpPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="sm-login__submit">
              Sign up
            </button>

            <div className="sm-login__links">
              <a href="#sign-in" onClick={backToSignIn}>
                Already have an account? Sign in
              </a>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

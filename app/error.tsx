"use client";

import { useEffect } from "react";
import Link from "next/link";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="state-page" role="alert">
      <section className="state-card">
        <p className="eyebrow">Kitchen hiccup</p>
        <h1>That didn&apos;t go to plan.</h1>
        <p className="state-description">
          Something went wrong while preparing this page. Give it another try.
        </p>
        <div className="state-actions">
          <button className="primary-button" onClick={reset} type="button">
            Try again
          </button>
          <Link className="back-link" href="/">
            Back to recipes
          </Link>
        </div>
      </section>
    </main>
  );
}

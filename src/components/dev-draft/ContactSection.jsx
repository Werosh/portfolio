import { useState } from "react";
import { isFirebaseConfigured } from "../../firebase/app";
import { createContactMessage } from "../../services/contactMessagesApi";
import {
  getEmailJsErrorDetail,
  isEmailJsConfigured,
  sendContactViaEmailJs,
} from "../../services/emailJsContact";

const publicEmail =
  import.meta.env.VITE_PUBLIC_CONTACT_EMAIL || "hello@werosh.dev";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback("");
    const n = name.trim();
    const em = email.trim();
    const msg = message.trim();
    if (!n || !em || !msg) {
      setFeedback("Please fill in name, email, and message.");
      return;
    }

    setStatus("sending");
    let savedFirestore = false;
    let sentEmail = false;
    let firestoreErr = null;
    let emailErr = null;

    if (isFirebaseConfigured()) {
      try {
        await createContactMessage({ name: n, email: em, message: msg });
        savedFirestore = true;
      } catch (err) {
        firestoreErr = err;
        console.error(err);
      }
    }

    if (isEmailJsConfigured()) {
      try {
        await sendContactViaEmailJs({ name: n, email: em, message: msg });
        sentEmail = true;
      } catch (err) {
        emailErr = err;
        console.error("EmailJS:", getEmailJsErrorDetail(err));
      }
    }

    setStatus("idle");

    if (savedFirestore && sentEmail) {
      setFeedback("Thanks - your message was sent.");
      setName("");
      setEmail("");
      setMessage("");
      return;
    }
    if (savedFirestore && !isEmailJsConfigured()) {
      setFeedback("Thanks - your message was sent.");
      setName("");
      setEmail("");
      setMessage("");
      return;
    }
    if (sentEmail && !savedFirestore) {
      setFeedback("Thanks - your message was sent.");
      setName("");
      setEmail("");
      setMessage("");
      return;
    }
    if (savedFirestore && !sentEmail && emailErr) {
      setFeedback("Thanks - your message was sent.");
      setName("");
      setEmail("");
      setMessage("");
      return;
    }
    if (!savedFirestore && !sentEmail) {
      if (emailErr || firestoreErr) {
        setFeedback(
          "We couldn’t send that just now. Please try again in a moment, or use the email link on the left.",
        );
      } else {
        setFeedback(
          "We couldn’t send that just now. Please try again, or use the email link on the left.",
        );
      }
      return;
    }
    setFeedback(
      "We couldn’t send that just now. Please try again, or use the email link on the left.",
    );
  };

  return (
    <section
      id="journal"
      className="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden bg-surface px-4 py-20 sm:px-8 sm:py-24 md:px-20"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-full w-full opacity-5">
        <div className="absolute right-0 top-0 mt-20 -mr-40 h-[800px] w-[800px] rotate-12 border border-on-surface" />
        <div className="absolute right-0 top-0 mt-24 -mr-32 h-[800px] w-[800px] rotate-[14deg] border border-on-surface" />
      </div>
      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-20">
        <div className="space-y-6 sm:space-y-8">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Initiate <br />
            Transmission
          </h2>
          <p className="font-body max-w-md text-lg text-on-surface-variant sm:text-xl md:text-2xl">
            Ready to start a new technical draft? Drop a note below or reach out
            via direct channels.
          </p>
          <div className="space-y-4 pt-8">
            <div className="group flex cursor-pointer items-center gap-4">
              <span className="material-symbols-outlined text-primary">
                mail
              </span>
              <a
                href={`mailto:${encodeURIComponent(publicEmail)}`}
                className="font-headline text-xl underline decoration-dotted transition-colors group-hover:text-primary"
              >
                {publicEmail}
              </a>
            </div>
            <div className="group flex cursor-pointer items-center gap-4">
              <span className="material-symbols-outlined text-primary">
                terminal
              </span>
              <a
                href="https://github.com/Werosh"
                target="_blank"
                rel="noreferrer"
                className="font-headline text-xl underline decoration-dotted transition-colors group-hover:text-primary"
              >
                github.com/werosh
              </a>
            </div>
          </div>
          <div className="masking-tape relative mt-12 inline-block rotate-[-2deg] bg-tertiary-container p-6">
            <p className="font-sketch text-lg">
              &quot;The best way to predict the future is to draft it.&quot;
            </p>
            <p className="mt-2 text-xs font-bold opacity-60">
              - Logbook_Note_2026
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="signature-smudge absolute -inset-4 -z-10 blur-2xl" />
          <form
            className="hand-drawn-border space-y-6 bg-surface p-6 shadow-sm sm:space-y-8 sm:p-10"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="space-y-2">
              <label
                htmlFor="contact-name"
                className="font-sketch text-lg text-secondary"
              >
                Identifier / Name
              </label>
              <input
                id="contact-name"
                className="font-body w-full border-0 border-b-2 border-outline bg-transparent text-xl placeholder:opacity-30 focus:border-primary focus:ring-0"
                placeholder="e.g. Project Lead Zero"
                type="text"
                name="name"
                autoComplete="name"
                value={name}
                onChange={(ev) => setName(ev.target.value)}
                disabled={status === "sending"}
                required
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="contact-email"
                className="font-sketch text-lg text-secondary"
              >
                Return Link / Email
              </label>
              <input
                id="contact-email"
                className="font-body w-full border-0 border-b-2 border-outline bg-transparent text-xl placeholder:opacity-30 focus:border-primary focus:ring-0"
                placeholder="comms@hq.tech"
                type="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                disabled={status === "sending"}
                required
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="contact-message"
                className="font-sketch text-lg text-secondary"
              >
                Technical Specification / Message
              </label>
              <textarea
                id="contact-message"
                className="font-body w-full resize-y border-0 border-b-2 border-outline bg-transparent text-xl placeholder:opacity-30 focus:border-primary focus:ring-0"
                placeholder="Describe your blueprint..."
                rows={4}
                name="message"
                value={message}
                onChange={(ev) => setMessage(ev.target.value)}
                disabled={status === "sending"}
                required
              />
            </div>
            {feedback ? (
              <p
                className={`font-body text-sm ${
                  feedback.startsWith("Thanks") ? "text-primary" : "text-error"
                }`}
                role="status"
              >
                {feedback}
              </p>
            ) : null}
            <button
              className="font-headline w-full border-[3px] border-on-surface bg-surface py-5 text-lg font-black uppercase tracking-tighter text-on-surface transition-all hover:scale-[1.02] hover:border-primary hover:bg-primary hover:text-on-primary active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 sm:py-6 sm:text-2xl"
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Send Transmission"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { faqs, whatsappEnquiry } from './content';

type Turn = { role: 'user' | 'model'; text: string };

export default function BoutiqueChat() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [history, setHistory] = useState<Turn[]>([]);
  const [quickAnswer, setQuickAnswer] = useState('');
  const [error, setError] = useState('');
  const [pending, setPending] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const transcript = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) input.current?.focus();
  }, [open]);

  useEffect(() => {
    if (transcript.current) transcript.current.scrollTop = transcript.current.scrollHeight;
  }, [history, pending, quickAnswer, open]);

  function close() {
    setOpen(false);
    trigger.current?.focus();
  }

  async function send(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = question.trim();
    if (!text || pending) return;
    const messages: Turn[] = [...history.slice(-8), { role: 'user', text }];
    setError('');
    setQuickAnswer('');
    setPending(true);
    try {
      const response = await fetch('/api/chat/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages }),
        signal: AbortSignal.timeout(25_000),
      });
      const result = await response.json();
      if (!response.ok || typeof result.answer !== 'string') {
        setError(result.error || 'Chat is unavailable. Please try a quick answer or WhatsApp.');
        return;
      }
      setHistory([...messages, { role: 'model', text: result.answer }]);
      setQuestion('');
    } catch {
      setError('Chat is unavailable. Please try a quick answer or WhatsApp.');
    } finally {
      setPending(false);
    }
  }

  return (
    <aside className="boutique-chat" aria-label="Boutique chat" onKeyDown={e => {
      if (open && e.key === 'Escape') {
        e.stopPropagation();
        close();
      }
    }}>
      {open && (
        <section className="boutique-chat-panel" id="boutique-chat-panel" aria-labelledby="boutique-chat-title">
          <div className="boutique-chat-heading">
            <h2 id="boutique-chat-title">Boutique assistant</h2>
            <button type="button" onClick={close} aria-label="Close chat">×</button>
          </div>
          <div className="boutique-chat-transcript" ref={transcript} role="log" aria-live="polite">
            <p>Hi! Ask me about our bags, shoes, location or delivery.</p>
            {history.map(({ role, text }, i) => (
              <p key={i} className={role === 'user' ? 'boutique-chat-user' : undefined}>
                <strong>{role === 'user' ? 'You' : 'Assistant'}</strong> {text}
              </p>
            ))}
            {quickAnswer && <p>{quickAnswer}</p>}
            {pending && <p>Looking that up…</p>}
          </div>
          <div className="boutique-chat-quick" aria-label="Quick answers">
            {[['Delivery', faqs[0]], ['Location', faqs[1]], ['Ordering', faqs[2]], ['Prices', faqs[3]]].map(([label, faq]) => (
              <button key={String(label)} type="button" onClick={() => {
                setError('');
                setQuickAnswer(faq[1]);
              }}>{label}</button>
            ))}
          </div>
          {error && <p className="boutique-chat-error" role="alert">{error}</p>}
          <form className="boutique-chat-form" onSubmit={send}>
            <input ref={input} aria-label="Your question" placeholder="Ask about the boutique…" value={question}
              maxLength={600} readOnly={pending} onChange={e => setQuestion(e.target.value)} />
            <button type="submit" disabled={!question.trim() || pending}>Send</button>
          </form>
          <div className="boutique-chat-footer">
            <small>AI replies use Gemini.</small>
            <a href={whatsappEnquiry()} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
          </div>
        </section>
      )}
      <button ref={trigger} type="button" className="boutique-chat-launch" aria-expanded={open}
        aria-controls={open ? 'boutique-chat-panel' : undefined} onClick={open ? close : () => setOpen(true)}>
        {open ? 'Close chat' : 'Ask Amy Milito'}
      </button>
    </aside>
  );
}

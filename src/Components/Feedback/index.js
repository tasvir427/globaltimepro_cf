'use client';

import { memo, useState } from 'react';
import { toast } from 'react-toastify';
import styles from './styles.module.css';

const Feedback = () => {
  const [message, setMessage] = useState('');
  const [isLoading, setLoading] = useState(false);

  const sendFeedback = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setLoading(true);

    try {
      const response = await fetch('/api/send-feedback', {
        method: 'POST',
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          url: typeof window !== 'undefined' ? window.location.href : '',
          userAgent:
            typeof navigator !== 'undefined' ? navigator.userAgent : '',
        }),
      });
    } finally {
      setMessage('');
      setLoading(false);
      toast('Thank you for your feedback!');
    }
  };

  return (
    <div className={styles.feedbackContainer}>
      <form onSubmit={sendFeedback} className={styles.feedbackForm}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Share your feedback..."
          className={styles.feedbackInput}
          maxLength={500}
        />
        <button
          type="submit"
          disabled={!message.trim() || isLoading}
          className={styles.feedbackButton}
        >
          <span className={styles.buttonContent}>
            {isLoading ? <div className={styles.spinner} /> : 'Send'}
          </span>
        </button>
      </form>
      <div
        className={`${styles.characterCount} ${
          message.length > 400 ? styles.characterCountWarning : ''
        }`}
      >
        {message.length}/500
      </div>
    </div>
  );
};

export default memo(Feedback);

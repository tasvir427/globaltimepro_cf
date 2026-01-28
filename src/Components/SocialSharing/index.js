import { memo } from 'react';
import Link from 'next/link';
import {
  encodeStr,
  iconFaFacebookF,
  iconFaLinkedinIn,
  iconFaXTwitter,
  SITE_URL,
} from '@/utils';
import Feedback from '../Feedback';
import styles from './styles.module.css';

const SocialSharing = ({ page, title, text, hashtags }) => {
  const pageURL = encodeStr(`${SITE_URL}/${page}`);
  const encodeText = encodeStr(text);

  return (
    <section className={styles.socialSharing}>
      <Feedback />
      <h2>Share Our Tool</h2>
      <p>
        Love our {title}? Share it with your colleagues and friends on social
        media:
      </p>
      <div className={styles.socialIcons}>
        <Link
          href={`https://x.com/intent/tweet?url=${pageURL}&text=${encodeText}&hashtags=${hashtags}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {iconFaXTwitter}
        </Link>
        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=${pageURL}&quote=${encodeText}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {iconFaFacebookF}
        </Link>
        <Link
          href={`https://www.linkedin.com/shareArticle?url=${pageURL}&title=${title}&summary=${encodeText}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {iconFaLinkedinIn}
        </Link>
      </div>
    </section>
  );
};

export default memo(SocialSharing);

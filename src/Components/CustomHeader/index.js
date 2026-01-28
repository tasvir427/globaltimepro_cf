import { Fragment, memo } from 'react';
import Link from 'next/link';
import { iconTbWorldQuestion, pageLinks } from '@/utils';
import styles from './styles.module.css';

const CustomHeader = ({ title, subtitle, note }) => {
  const links = pageLinks(title);
  const otherPages = links.other;
  const currentPage = links.current[0];

  return (
    <header>
      <Link href={currentPage.href} className={styles.home_head}>
        {title}
        {note ? (
          <span className={styles.home_head_note}>{note}</span>
        ) : (
          iconTbWorldQuestion
        )}
      </Link>
      <span className={styles.home_head_bottom_txt}>{subtitle}</span>
      <div className={styles.linkContainer}>
        {otherPages.map((page, i) => (
          <Link
            key={page.href}
            href={page.href}
            title={page.tooltip}
            className={styles.link}
            target="_blank"
          >
            <p className={styles.link_title}>{page.title}</p>
            <p className={styles.link_subtitle}>{page.subtitle}</p>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default memo(CustomHeader);

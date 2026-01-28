import { memo } from 'react';
import {
  FAQs,
  Features,
  Steps,
  Tips,
  HowItWorks,
  TimeSegmentLegend,
  Routes,
} from './Parts';
import styles from './styles.module.css';

const Instructions = ({
  head,
  subHead,
  steps,
  featuresHead,
  features,
  tipsHead,
  tips,
  faqsHead,
  faqs,
  linksHead,
  links,
  howItWorksHead,
  howItWorks,
  showLegend,
}) => {
  return (
    <div className={styles.instructions}>
      {showLegend && <TimeSegmentLegend />}
      <Steps head={head} subHead={subHead} list={steps} />
      <Features head={featuresHead} list={features} />
      <Tips head={tipsHead} list={tips} />
      <FAQs head={faqsHead} list={faqs} />
      {links && <Routes head={linksHead} list={links} />}
      {howItWorks && <HowItWorks head={howItWorksHead} list={howItWorks} />}
    </div>
  );
};

export default memo(Instructions);

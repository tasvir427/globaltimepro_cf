'use client';

import React, { memo, useCallback, useRef } from 'react';
import { iconPiExportLight } from '@/utils';
import CustomBtn from '../CustomBtn';
import styles from './styles.module.css';

const ExportToPdf = ({ children, fileName = 'document.pdf' }) => {
  const printRef = useRef();

  const handleExport = useCallback(async () => {
    if (!printRef.current) return;

    const html2pdf = (await import('html2pdf.js')).default;

    const opt = {
      margin: 10,
      filename: fileName,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        windowWidth: 794, // A4 width in pixels (595pt * 96dpi/72)
      },
      jsPDF: {
        unit: 'pt',
        format: 'a4',
        orientation: 'portrait',
      },
    };

    html2pdf().set(opt).from(printRef.current).save();
  }, [printRef]);

  return (
    <div>
      <CustomBtn onClick={handleExport} className={styles.export_btn}>
        {iconPiExportLight} Export as PDF
      </CustomBtn>
      <div ref={printRef}>{children}</div>
    </div>
  );
};

export default memo(ExportToPdf);

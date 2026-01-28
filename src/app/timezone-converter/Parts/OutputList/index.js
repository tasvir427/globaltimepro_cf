'use client';

import { memo } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { OutputListItem } from '@/Components';
import { useTZ } from '@/Contexts';
import { iconFaAnglesLeft, iconFaAnglesRight, tooltips } from '@/utils';
import styles from '../../styles.module.css';

const OutputList = ({ outputOnly }) => {
  const {
    outputDiv,
    isRealTime,
    formatStr,
    outputList,
    handleRemoveTZ,
    copyToClipboard,
    handleSwap,
    timeFormat,
    handleMoreInfo,
    handlePlanJetLag,
    outputPath,
    originTime,
    timeNow,
    originTimeZone,
    currentTZData,
  } = useTZ();

  return (
    <div
      ref={outputDiv}
      className={classNames(styles.sub_divider, styles.sub_divider_2, {
        [styles.sub_divider_align_start]: outputList.length > 0,
        [styles.expand_output]: outputOnly,
      })}
    >
      <Link
        className={classNames(styles.output_btn, {
          [styles.split_btn]: outputOnly,
        })}
        title={
          outputOnly ? tooltips.expanded_output : tooltips.non_expanded_output
        }
        href={outputPath}
      >
        {outputOnly ? iconFaAnglesRight : iconFaAnglesLeft}
      </Link>
      {outputList.length ? (
        outputList.map((d) => {
          const { date, label, value, timezone } = d;

          return (
            <div
              key={value}
              className={classNames(
                styles.home_section_container,
                styles.output_item_container,
              )}
            >
              <OutputListItem
                label={label}
                date={date}
                isRealTime={isRealTime}
                formatStr={formatStr}
                timeFormat={timeFormat}
                value={value}
                timezone={timezone}
                copyToClipboard={copyToClipboard}
                handleRemoveTZ={handleRemoveTZ}
                handleSwap={handleSwap}
                handleMoreInfo={handleMoreInfo}
                handlePlanJetLag={handlePlanJetLag}
                originTime={originTime}
                timeNow={timeNow}
                originTimeZone={originTimeZone}
                currentTZData={currentTZData}
              />
            </div>
          );
        })
      ) : (
        <div
          className={classNames(
            styles.home_section_container,
            styles.output_alt_text_container,
          )}
        >
          <div className={styles.output_alt_text}>
            The converted time will appear here once you select a destination
            timezone!
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(OutputList);

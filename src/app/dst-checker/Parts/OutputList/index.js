'use client';

import { memo } from 'react';
import classNames from 'classnames';
import { ClientOnly, DynamicContainer, TimezoneClock } from '@/Components';
import { DSTCheckerPlaceholder } from '@/Components/Fallback';
import { useDST } from '@/Contexts';
import {
  getTZOptionLabel,
  iconFiAlertTriangle,
  iconFiCalendar,
  iconFiClock,
  iconFiCornerUpLeft,
  iconFiGlobe,
  iconFiInfo,
} from '@/utils';
import styles from '../../styles.module.css';

const OutputList = () => {
  const {
    originTimeZone,
    currentDSTStatus,
    currentOffset,
    nextTransitionData,
    nextTransitionText,
    transitionType,
    nextTransitionOffset,
    extraMessage,
    followingMessage,
    addInfo,
    abbrevTransition,
  } = useDST();

  return (
    <DynamicContainer
      className={classNames(styles.sub_divider, styles.sub_divider_2, {
        [styles.sub_divider_align_start]: !!originTimeZone,
      })}
    >
      <ClientOnly placeholder={<DSTCheckerPlaceholder />}>
        {originTimeZone ? (
          <div className={styles.timezoneCard}>
            <div className={styles.cardHeader}>
              {iconFiGlobe}
              <h2 className={styles.timezoneTitle}>
                {getTZOptionLabel(originTimeZone)}
              </h2>
            </div>

            <div className={styles.gridContainer}>
              <div className={styles.detailItem}>
                {iconFiClock}
                <div>
                  <div className={styles.timeDisplay}>
                    <TimezoneClock
                      isRealTime
                      formatStr="hh:mm:ss A"
                      timezone={originTimeZone.timezone}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.detailItem}>
                {iconFiCalendar}
                <div className={styles.dst_value_div}>
                  <label>DST Status</label>{' '}
                  <span className={styles.highlightText}>
                    {currentDSTStatus}
                  </span>
                </div>
              </div>

              <div className={styles.detailItem}>
                {iconFiCornerUpLeft}
                <div>
                  <label>UTC Offset</label>{' '}
                  <span className={styles.highlightText}>{currentOffset}</span>
                </div>
              </div>

              {addInfo && (
                <div className={styles.tableWrapper}>
                  <table className={styles.timezoneTable}>
                    <thead className={styles.tableHead}>
                      <tr>
                        <th className={styles.tableHeader}>IANA zone</th>
                        <th className={styles.tableHeader}>Abbreviation</th>
                        <th className={styles.tableHeader}>Country</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={styles.tableRow}>
                        <td
                          className={classNames(
                            styles.tableData,
                            styles.ianaZone_td,
                          )}
                        >
                          {addInfo.timezone}
                        </td>
                        <td
                          className={classNames(
                            styles.tableData,
                            styles.abbreviation_td,
                          )}
                        >
                          {addInfo.abbreviation}
                        </td>
                        <td
                          className={classNames(
                            styles.tableData,
                            styles.country_td,
                          )}
                        >
                          {addInfo.countryName}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {nextTransitionData && (
              <div className={styles.transitionSection}>
                <div className={styles.sectionHeader}>
                  {iconFiAlertTriangle}
                  <h3 className={styles.subHeading}>
                    Upcoming Changes ({abbrevTransition})
                  </h3>
                </div>
                <div className={styles.transitionGrid}>
                  <div className={styles.transitionItem}>
                    <span>Next {transitionType}:</span>
                    <span className={styles.emphasizedText}>
                      {nextTransitionText}
                    </span>
                  </div>
                  {nextTransitionOffset && (
                    <div className={styles.transitionItem}>
                      <span>New Offset:</span>
                      <span className={styles.emphasizedText}>
                        {nextTransitionOffset}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {extraMessage && (
              <div className={styles.footerNote}>
                <em>{extraMessage}</em>
              </div>
            )}

            {followingMessage && (
              <div className={styles.messageBubble}>
                {iconFiInfo}
                <div className={styles.dst_value_div}>
                  <span className={styles.messageLabel}>Following Change:</span>{' '}
                  <span className={styles.messageText}>{followingMessage}</span>
                </div>
              </div>
            )}
          </div>
        ) : (
          <DSTCheckerPlaceholder />
        )}
      </ClientOnly>
    </DynamicContainer>
  );
};

export default memo(OutputList);

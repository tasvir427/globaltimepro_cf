import { memo } from 'react';
import classNames from 'classnames';
import {
  getTZTime,
  iconMdContentCopy,
  iconPiAirplaneTakeoff,
  iconPiSwapFill,
  iconRiDeleteBin6Line,
  tooltips,
} from '@/utils';
import { CustomLabel, TimezoneClock, CustomBtn } from '../index';
import styles from './styles.module.css';

const OutputListItem = ({
  label,
  date,
  isRealTime,
  formatStr,
  timeFormat,
  value,
  timezone,
  copyToClipboard,
  handleRemoveTZ,
  handleSwap,
  handleMoreInfo,
  handlePlanJetLag,
  originTime,
  timeNow,
  originTimeZone,
  currentTZData,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <CustomLabel title={label} className={styles.label}>
          {label}
        </CustomLabel>
        <CustomBtn
          title={tooltips.remove_tz}
          className={styles.delete_btn}
          onClick={() => handleRemoveTZ(value, label)}
        >
          {iconRiDeleteBin6Line}
        </CustomBtn>
      </div>

      <div className={styles.clock_wrapper}>
        <TimezoneClock
          date={date}
          isRealTime={isRealTime}
          timeFormat={timeFormat}
          formatStr={formatStr}
          timezone={timezone}
          originTime={originTime}
          timeNow={timeNow}
          originTimeZone={originTimeZone}
          currentTZData={currentTZData}
          isTZ
        />
      </div>

      <div className={styles.actions}>
        <CustomBtn
          title={tooltips.swap_tz}
          className={classNames(styles.action_btn, styles.swap)}
          onClick={() => handleSwap(value)}
        >
          {iconPiSwapFill}
        </CustomBtn>
        <CustomBtn
          title={tooltips.copy_tz}
          className={classNames(styles.action_btn, styles.copy)}
          onClick={() =>
            copyToClipboard(
              `${label}: ${
                isRealTime
                  ? getTZTime(timezone, formatStr, timeFormat).time
                  : date
              }`,
            )
          }
        >
          {iconMdContentCopy}
        </CustomBtn>
        <CustomBtn
          title={tooltips.jetlag_opt}
          className={classNames(styles.action_btn, styles.jetlag)}
          onClick={() => handlePlanJetLag(value)}
        >
          {iconPiAirplaneTakeoff}
        </CustomBtn>
        <CustomBtn
          title={tooltips.info_tz}
          className={classNames(styles.action_btn, styles.info)}
          onClick={() => handleMoreInfo(value)}
        >
          View Detailed Info
        </CustomBtn>
      </div>
    </div>
  );
};

export default memo(OutputListItem);

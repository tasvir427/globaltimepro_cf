import { memo, Suspense } from 'react';
import classNames from 'classnames';
import {
  CustomHeader,
  InputLabel,
  MetaTag,
  SocialSharing,
  MiddleArrow,
  UndoBtn,
  RedoBtn,
  CopyResultBtn,
  ResetBtn,
  Instructions,
} from '@/Components';
import { TZProvider } from '@/Contexts';
import { PATHS } from '@/paramsData';
import { getMetaData, getRouteData, inputLabels, tooltips } from '@/utils';
import {
  RealTimeSwitch,
  OriginTime,
  TimezoneFormat,
  OriginTimeZone,
  DestinationTimeZone,
  CurrentDestination,
  TimeFormat,
  CustomTimeFormat,
  OutputList,
  CurrentOrigin,
} from './Parts';
import styles from './styles.module.css';

export const generateMetadata = async () => {
  const m = await getMetaData(PATHS.timezoneConverter);

  return { ...m };
};

const TimezoneConverter = async ({ outputOnly, params }) => {
  const p = await params;

  const page =
    p.origin && p.destination
      ? `timezone/from/${p.origin}/to/${p.destination}`
      : PATHS.timezoneConverter;
  const { schemaData, ssData, defaultValue, ...instData } = await getRouteData(
    page,
    PATHS.timezoneConverter,
  );

  return (
    <>
      <div className={styles.sub_divider_container}>
        <Suspense>
          <TZProvider defaultValue={defaultValue} outputOnly={outputOnly}>
            <div
              className={classNames(
                styles.head_container,
                styles.head_btn_container,
              )}
            >
              <RedoBtn />
              <UndoBtn />
              <ResetBtn />
              <CopyResultBtn />
            </div>
            {!outputOnly && (
              <div
                className={classNames(styles.sub_divider, styles.sub_divider_1)}
              >
                <div
                  className={
                    (styles.head_container, styles.head_text_container)
                  }
                >
                  <CustomHeader
                    title="TIME ZONE"
                    subtitle="converter"
                    note="DST adjusted."
                  />
                </div>
                <div className={styles.real_time_switch_container}>
                  <div title={tooltips.real_time}>
                    <RealTimeSwitch />
                  </div>
                </div>
                <OriginTime />
                <div className={styles.home_section_container}>
                  <div
                    className={styles.timezoneFormat_title}
                    title={tooltips.timezoneFormat}
                  >
                    <InputLabel className={styles.text_align_center}>
                      {inputLabels.timezoneFormat}
                    </InputLabel>
                    <TimezoneFormat />
                  </div>
                </div>
                <div className={styles.division_container}>
                  <div
                    className={classNames(
                      styles.division_part,
                      styles.division_part1,
                    )}
                  >
                    <div
                      className={styles.origin_timezone_tooltip}
                      title={tooltips.originTimeZone}
                    >
                      <InputLabel className={styles.text_align_center}>
                        {inputLabels.originTimeZone}
                      </InputLabel>
                      <OriginTimeZone />
                    </div>
                    <div className={styles.current_container}>
                      <div title={tooltips.current_origin}>
                        <CurrentOrigin />
                      </div>
                    </div>
                  </div>
                  <div className={styles.arrow_right_icon_container}>
                    <MiddleArrow />
                  </div>
                  <div className={styles.division_part}>
                    <div
                      className={styles.origin_timezone_tooltip}
                      title={tooltips.destinationTimeZone}
                    >
                      <InputLabel className={styles.text_align_center}>
                        {inputLabels.destinationTimeZone}
                      </InputLabel>
                      <DestinationTimeZone />
                    </div>
                    <div className={styles.current_container}>
                      <div title={tooltips.current_destination}>
                        <CurrentDestination />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.home_section_container}>
                  <div
                    className={styles.output_format_tooltip}
                    title={tooltips.timeFormat}
                  >
                    <InputLabel className={styles.text_align_center}>
                      {inputLabels.timeFormat}
                    </InputLabel>
                    <TimeFormat />
                  </div>
                </div>
                <CustomTimeFormat />
              </div>
            )}
            <OutputList outputOnly={outputOnly} />
          </TZProvider>
        </Suspense>
        {instData && (
          <div className={styles.ins_div}>
            <Instructions {...instData} />
          </div>
        )}
        {ssData && <SocialSharing {...ssData} page={page} />}
      </div>
      {schemaData && <MetaTag page={page} schemaData={schemaData} />}
    </>
  );
};

export default memo(TimezoneConverter);

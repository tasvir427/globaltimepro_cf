import { memo } from 'react';
import classNames from 'classnames';
import {
  CustomHeader,
  InputLabel,
  MetaTag,
  MiddleArrow,
  SocialSharing,
  UndoBtn,
  RedoBtn,
  CopyResultBtn,
  ResetBtn,
  Instructions,
} from '@/Components';
import { JLProvider } from '@/Contexts';
import { PATHS } from '@/paramsData';
import {
  buildQueryString,
  getMetaData,
  getRouteData,
  inputLabels,
  tooltips,
} from '@/utils';
import {
  TimeZoneSelector,
  CurrentDestination,
  OutputList,
  CurrentOrigin,
  OriginTime,
  TimeLine,
  DaysUntil,
  GeneratePlan,
} from './Parts';
import styles from './styles.module.css';

export const generateMetadata = async () => {
  const m = await getMetaData(PATHS.jetLagPlanner);

  return { ...m };
};

const JetLagPlanner = async ({ params, searchParams }) => {
  const p = await params;
  const initialQueryString = buildQueryString(searchParams);

  const page =
    p.origin && p.destination
      ? `jet-lag/from/${p.origin}/to/${p.destination}`
      : PATHS.jetLagPlanner;
  const { schemaData, ssData, defaultValue, ...instData } = await getRouteData(
    page,
    PATHS.jetLagPlanner,
  );

  return (
    <>
      <div className={styles.sub_divider_container}>
        <JLProvider
          defaultValue={defaultValue}
          initialQueryString={initialQueryString}
        >
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
          <div className={classNames(styles.sub_divider, styles.sub_divider_1)}>
            <div className={(styles.head_container, styles.head_text_container)}>
              <CustomHeader
                title="JET LAG"
                subtitle="planner"
                note="DST adjusted."
              />
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
                  title={tooltips.departureTZ}
                >
                  <InputLabel className={styles.text_align_center}>
                    {inputLabels.departureTZ}
                  </InputLabel>
                  <TimeZoneSelector name="departureTZ" />
                </div>
                <div className={styles.current_container}>
                  <div title={tooltips.current_departure_city}>
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
                  title={tooltips.destinationTZ}
                >
                  <InputLabel className={styles.text_align_center}>
                    {inputLabels.destinationTZ}
                  </InputLabel>
                  <TimeZoneSelector name="destinationTZ" />
                </div>
                <div className={styles.current_container}>
                  <div title={tooltips.current_destination_city}>
                    <CurrentDestination />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.division_container}>
              <div
                className={classNames(
                  styles.division_part,
                  styles.division_part1,
                )}
              >
                <div className={styles.origin_timezone_tooltip}>
                  <InputLabel className={styles.text_align_center}>
                    {inputLabels.departureTime}
                  </InputLabel>
                  <OriginTime name="departureTime" />
                </div>
              </div>
              <div className={styles.arrow_right_icon_container}>
                <MiddleArrow />
              </div>
              <div className={styles.division_part}>
                <div className={styles.origin_timezone_tooltip}>
                  <InputLabel className={styles.text_align_center}>
                    {inputLabels.arrivalTime}
                  </InputLabel>
                  <OriginTime name="arrivalTime" />
                </div>
              </div>
            </div>
            <div className={styles.division_container}>
              <div
                className={classNames(
                  styles.division_part,
                  styles.division_part1,
                )}
              >
                <div className={styles.origin_timezone_tooltip}>
                  <InputLabel className={styles.text_align_center}>
                    {inputLabels.bedTime}
                  </InputLabel>
                  <OriginTime
                    name="bedTime"
                    format="hh:mm a"
                    calendarIcon={null}
                  />
                </div>
              </div>
              <div className={styles.arrow_right_icon_container}>
                <MiddleArrow />
              </div>
              <div className={styles.division_part}>
                <div className={styles.origin_timezone_tooltip}>
                  <InputLabel className={styles.text_align_center}>
                    {inputLabels.wakeTime}
                  </InputLabel>
                  <OriginTime
                    name="wakeTime"
                    format="hh:mm a"
                    calendarIcon={null}
                  />
                </div>
              </div>
            </div>
            <div className={styles.home_section_container}>
              <div
                className={styles.output_format_tooltip}
                title={tooltips.timeLine}
              >
                <InputLabel className={styles.text_align_center}>
                  {inputLabels.timeLine}
                </InputLabel>
                <TimeLine />
              </div>
            </div>
            <DaysUntil />
            <GeneratePlan />
          </div>
          <OutputList />
        </JLProvider>
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

export default memo(JetLagPlanner);

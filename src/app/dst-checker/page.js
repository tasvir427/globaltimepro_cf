import { memo, Suspense } from 'react';
import classNames from 'classnames';
import {
  CustomHeader,
  InputLabel,
  MetaTag,
  SocialSharing,
  UndoBtn,
  RedoBtn,
  CopyResultBtn,
  ResetBtn,
  Instructions,
} from '@/Components';
import { DSTProvider } from '@/Contexts';
import { PATHS } from '@/paramsData';
import { getMetaData, getRouteData, inputLabels, tooltips } from '@/utils';
import {
  TimezoneFormat,
  OriginTimeZone,
  OutputList,
  CurrentOrigin,
} from './Parts';
import styles from './styles.module.css';

export const generateMetadata = async () => {
  const m = await getMetaData(PATHS.dstChecker);

  return { ...m };
};

const DSTChecker = async ({ params }) => {
  const p = await params;

  const page = p.city ? `dst-in/${p.city}` : PATHS.dstChecker;
  const { schemaData, ssData, defaultValue, ...instData } = await getRouteData(
    page,
    PATHS.dstChecker,
  );

  return (
    <>
      <div className={styles.sub_divider_container}>
        <Suspense>
          <DSTProvider defaultValue={defaultValue}>
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
            <div
              className={classNames(styles.sub_divider, styles.sub_divider_1)}
            >
              <div
                className={(styles.head_container, styles.head_text_container)}
              >
                <CustomHeader title="DST" subtitle="checker" />
              </div>
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
              <div className={styles.search_timezone_container}>
                <div
                  className={styles.origin_timezone_tooltip}
                  title={tooltips.timeZone}
                >
                  <InputLabel className={styles.text_align_center}>
                    {inputLabels.timezone}
                  </InputLabel>
                  <OriginTimeZone />
                </div>
                <div className={styles.current_container}>
                  <div title={tooltips.current_origin}>
                    <CurrentOrigin />
                  </div>
                </div>
              </div>
            </div>
            <OutputList />
          </DSTProvider>
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

export default memo(DSTChecker);

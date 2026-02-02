import { memo, Suspense } from 'react';
import classNames from 'classnames';
import {
  CountrySelect,
  CustomCheckbox,
  DownloadList,
  FileType,
  OffsetChoice,
} from './Parts';
import {
  CustomHeader,
  InputLabel,
  MetaTag,
  SocialSharing,
  UndoBtn,
  RedoBtn,
  ResetBtn,
  CopyResultBtn,
  Instructions,
} from '@/Components';
import { PATHS } from '@/paramsData';
import {
  checkFields,
  getMetaData,
  getRouteData,
  inputLabels,
  tooltips,
} from '@/utils';
import { DLProvider } from '@/Contexts';
import styles from './styles.module.css';

export const generateMetadata = async () => {
  const m = await getMetaData(PATHS.downloadTimezoneList);

  return { ...m };
};

const DownloadTimezoneList = async () => {
  const { schemaData, ssData, ...instData } = await getRouteData(
    PATHS.downloadTimezoneList,
  );

  return (
    <>
      <div className={styles.sub_divider_container}>
        <Suspense>
          <DLProvider>
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
                <CustomHeader title="DOWNLOAD" subtitle="timezone list" />
              </div>
              <InputLabel className={styles.text_align_center}>
                {inputLabels.dl_choose}
              </InputLabel>
              <div className={styles.division_container}>
                <div
                  className={classNames(
                    styles.division_part,
                    styles.division_part1,
                  )}
                >
                  <div className={styles.checkbox_part_container}>
                    {checkFields.slice(0, 9).map((field) => (
                      <CustomCheckbox key={field} name={field} />
                    ))}
                  </div>
                </div>
                <div className={styles.division_part}>
                  <div className={styles.checkbox_part_container}>
                    {checkFields.slice(9, 18).map((field) => (
                      <CustomCheckbox key={field} name={field} />
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.home_section_container}>
                <div
                  className={styles.output_format_tooltip}
                  title={tooltips.dl_offsetIn}
                >
                  <InputLabel className={styles.text_align_center}>
                    {inputLabels.dl_offsetIn}
                  </InputLabel>
                  <OffsetChoice />
                </div>
              </div>
              <div className={styles.home_section_container}>
                <div
                  className={styles.output_format_tooltip}
                  title={tooltips.country_select}
                >
                  <InputLabel className={styles.text_align_center}>
                    {inputLabels.country_select}
                  </InputLabel>
                  <CountrySelect />
                </div>
              </div>
              <div className={styles.home_section_container}>
                <div
                  className={styles.output_format_tooltip}
                  title={tooltips.dl_fileType}
                >
                  <InputLabel className={styles.text_align_center}>
                    {inputLabels.dl_fileType}
                  </InputLabel>
                  <FileType />
                </div>
              </div>
              <DownloadList />
            </div>
          </DLProvider>
        </Suspense>
      </div>
      {instData && (
        <div className={styles.ins_div}>
          <Instructions {...instData} />
        </div>
      )}
      {ssData && (
        <SocialSharing {...ssData} page={PATHS.downloadTimezoneList} />
      )}
      {schemaData && (
        <MetaTag page={PATHS.downloadTimezoneList} schemaData={schemaData} />
      )}
    </>
  );
};

export default memo(DownloadTimezoneList);

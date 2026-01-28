'use client';

import React, { memo } from 'react';
import classNames from 'classnames';
import { useJL } from '@/Contexts';
import { DynamicContainer, ExportToPdf } from '@/Components';
import {
  icon2FaFlask,
  iconBiSolidPlaneAlt,
  iconFaBook,
  iconFaCalendar,
  iconFaChartLine,
  iconFaExclamationTriangle,
  iconFaFlask,
  iconFaRegClock,
  iconFaRegLightbulb,
  iconGiSandsOfTime,
} from '@/utils';
import styles from '../../styles.module.css';

const PhaseSection = ({
  title,
  date,
  city,
  schedule,
  scientific,
  warnings,
}) => (
  <div className={styles.phase_section}>
    <div className={styles.phase_header}>
      <div>
        <h3 className={styles.phase_title}>
          {iconFaRegClock} {title}
        </h3>
        <div className={styles.phase_meta}>
          {date && (
            <span className={styles.phase_date}>
              {iconFaCalendar} {date}
            </span>
          )}
          {city && (
            <span className={styles.phase_timezone}>
              {iconFaChartLine} {city}
            </span>
          )}
        </div>
      </div>
    </div>

    {warnings && (
      <div className={styles.phase_warning}>
        {iconFaExclamationTriangle} {warnings.join(' • ')}
      </div>
    )}

    <div className={styles.schedule_grid}>
      {schedule.map((item, index) => (
        <div key={index} className={styles.schedule_card}>
          <div
            className={classNames(
              styles.schedule_icon,
              styles[`icon_${item.type}`],
            )}
          >
            {item.icon}
          </div>
          <div className={styles.schedule_text}>{item.text}</div>
        </div>
      ))}
    </div>

    {scientific && (
      <div className={styles.science_section}>
        <h4 className={styles.science_title}>
          {iconFaFlask} Scientific Methods
        </h4>
        <div className={styles.science_grid}>
          {scientific.map((method, index) => (
            <div key={index} className={styles.science_method}>
              <div className={styles.method_icon}>{method.icon}</div>
              <div className={styles.method_text}>{method.text}</div>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

const FlightPhaseCard = ({ phase }) => (
  <div className={classNames(styles.phase_section, styles.flight_phase)}>
    <div className={styles.phase_header}>
      <h3 className={styles.phase_title}>
        {iconBiSolidPlaneAlt} {phase.title}
      </h3>
      <div className={styles.phase_meta}>
        <span className={styles.phase_date}>
          {iconFaCalendar} {phase.date}
        </span>
      </div>
    </div>

    <div className={styles.schedule_grid}>
      {phase.schedule.map((item, index) => (
        <div key={index} className={styles.schedule_card}>
          <div
            className={classNames(
              styles.schedule_icon,
              styles[`icon_${item.type}`],
            )}
          >
            {item.icon}
          </div>
          <div className={styles.schedule_text}>{item.text}</div>
        </div>
      ))}
    </div>
  </div>
);

const OutputList = () => {
  const { show, plan } = useJL();

  return (
    <DynamicContainer
      id="jl-output"
      className={classNames(styles.sub_divider, styles.sub_divider_2)}
    >
      {show && plan && (
        <ExportToPdf
          fileName={`jet_lag_plan_${plan.meta.departureCity}_to_${plan.meta.destinationCity}.pdf`}
        >
          <div className={styles.plan_container}>
            <div className={styles.plan_header}>
              <h2 className={styles.plan_title}>
                {iconGiSandsOfTime} Jet Lag Adaptation Plan
              </h2>
              <div className={styles.plan_meta}>
                <span>
                  {iconFaChartLine} {plan.meta.timeDifference}
                </span>
                <span>
                  {iconFaFlask} {plan.meta.strategy}
                </span>
                <span>
                  {iconFaCalendar} {plan.meta.totalDays} Days
                </span>
              </div>
            </div>

            <div className={styles.plan_phases}>
              {plan.phases.preDeparture?.map((phase, index) => (
                <PhaseSection
                  key={`pre-${index}`}
                  title={phase.title}
                  date={phase.date}
                  city={phase.city}
                  schedule={phase.schedule}
                  scientific={phase.scientific}
                />
              ))}

              {plan.phases.inFlight && (
                <FlightPhaseCard phase={plan.phases.inFlight} />
              )}

              {plan.phases.recovery?.map((phase, index) => (
                <PhaseSection
                  key={`rec-${index}`}
                  title={phase.title}
                  date={phase.date}
                  city={phase.city}
                  schedule={phase.schedule}
                  scientific={phase.scientific}
                />
              ))}
            </div>

            <div className={styles.science_container}>
              <h3
                className={classNames(
                  styles.science_title,
                  styles.science_main_title,
                )}
              >
                {iconFaBook} Scientific Foundation
              </h3>
              <div className={styles.science_grid}>
                <div className={styles.science_method}>
                  {iconFaRegLightbulb}
                  <div className={styles.method_text}>
                    Based on Phase Response Curve (PRC) theory for light
                    exposure timing
                  </div>
                </div>
                <div className={styles.science_method}>
                  {icon2FaFlask}
                  <div className={styles.method_text}>
                    Phase Response Curve Theory (Light Exposure Timing)
                  </div>
                </div>
                <div className={styles.science_method}>
                  {icon2FaFlask}
                  <div className={styles.method_text}>
                    Core Body Temperature Regulation
                  </div>
                </div>
                <div className={styles.science_method}>
                  {icon2FaFlask}
                  <div className={styles.method_text}>
                    Chronopharmacology (Melatonin Administration)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ExportToPdf>
      )}
    </DynamicContainer>
  );
};

export default memo(OutputList);

'use client';

import { memo } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { ClientOnly, Placeholder } from '../index';
import { iconFaRegCalendarAlt, iconIoClose } from '@/utils';
import styles from './styles.module.css';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

const CustomDatePicker = ({ dayFormat, isRealTime, ...rest }) => {
  return (
    <ClientOnly placeholder={<Placeholder width={260} height={34.8} />}>
      <DateTimePicker
        dayPlaceholder="DD"
        hourPlaceholder="hh"
        minutePlaceholder="mm"
        monthPlaceholder="MM"
        secondPlaceholder="ss"
        yearPlaceholder="YYYY"
        calendarIcon={iconFaRegCalendarAlt}
        clearIcon={iconIoClose}
        format={dayFormat === '24H' ? 'MM/dd/y HH:mm' : 'MM/dd/y hh:mm a'}
        className={styles.custom_datetime_picker}
        disabled={isRealTime}
        {...rest}
      />
    </ClientOnly>
  );
};

export default memo(CustomDatePicker);

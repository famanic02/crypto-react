/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useCallback } from 'react';
import classNames from 'classnames';
import { Calendar } from 'antd';
import './CalendarStyle.scss';
import moment from 'moment';
// import { Moment } from 'moment';

interface IProps {
  onChange: Function;
}

const AuthComponent: React.FC<IProps> = (props: IProps) => {
  const [selected, setSelect] = useState(null);
  const [selectedDate, setDate] = useState('');
  const [selectedTime, setTime] = useState('');

  const handleChange = useCallback(
    (date: any) => {
      const { onChange } = props;
      setSelect(date);
      setDate(date.format('dddd, MMM YY'));
      setTime('');
      onChange(null);
      setTimeout(() => {
        const element = document.getElementById('customCalendar');
        if (element) {
          element.scrollLeft += 500;
        }
        const itemEle = document.getElementById('activeItem');
        if (itemEle) {
          itemEle.scrollIntoView();
        }
      }, 200);
    },
    [props],
  );

  const handleSelectTime = (time: string): any => {
    setTime(time);
    const { onChange } = props;
    const result: any = selected;
    if (result) {
      const list = time.split(/:| /);

      const selectedHour = parseInt(list[0], 10);
      const addHour = selectedHour !== 12 ? selectedHour + 12 : selectedHour;

      result.set({
        hour: list[2] === 'PM' ? addHour : list[0],
        minute: parseInt(list[1], 10),
        second: 0,
      });
      onChange(result);
    }
  };

  const createItem = (time: string, isDisabled = false): any => {
    return (
      <div
        key={time}
        className={classNames('Calendar__Timelist_listitem', {
          'Calendar__Timelist_listitem-active': time === selectedTime,
          'Calendar__Timelist_listitem-disabled': isDisabled,
        })}
        onClick={isDisabled ? () => true : () => handleSelectTime(time)}
      >
        {time}
      </div>
    );
  };

  const createItemActive = (time: string): any => {
    return (
      <div
        key={time}
        id="activeItem"
        className={classNames('Calendar__Timelist_listitem', {
          'Calendar__Timelist_listitem-active': time === selectedTime,
        })}
        onClick={() => handleSelectTime(time)}
      >
        {time}
      </div>
    );
  };

  const renderTimeList = (): any => {
    const list = [];
    for (let i = 0; i < 6; i += 1) {
      list.push(createItem(`${i}:00 AM`, true));
      list.push(createItem(`${i}:30 AM`, true));
    }
    for (let i = 6; i < 12; i += 1) {
      if (i === 6) {
        list.push(createItemActive(`${i}:00 AM`));
      } else {
        list.push(createItem(`${i}:00 AM`));
      }
      list.push(createItem(`${i}:30 AM`));
    }
    list.push(createItem(`12:00 PM`));
    list.push(createItem(`12:30 PM`));

    for (let i = 1; i < 11; i += 1) {
      list.push(createItem(`${i}:00 PM`));
      list.push(createItem(`${i}:30 PM`));
    }

    list.push(createItem(`11:00 PM`));
    list.push(createItem(`11:30 PM`, true));

    return list;
  };

  return (
    <div className="Calendar" id="customCalendar">
      <div className="Calendar__Container">
        <div>
          <p className="Calendar__Title">Select a Date & Time</p>
          <Calendar
            fullscreen={false}
            onChange={handleChange}
            // defaultValue={moment().add(1, 'day')}
            validRange={[moment().add(1, 'day'), moment().add(1, 'year')]}
          />
        </div>
        {selected && (
          <div className="Calendar__Timelist">
            <p className="Calendar__Timelist_title">{selectedDate}</p>
            <div className="Calendar__Timelist_list">{renderTimeList()}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthComponent;

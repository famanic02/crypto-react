import React from 'react';
import './StepStyle.scss';

interface Props {
  steps: {
    title: string;
  }[];
  index: number;
}

const StepComponent = ({ steps = [], index = 0 }: Props) => {
  return (
    <div className="Step">
      <div className="Step__Wrapper">
        <div className="Step__List">
          {steps.map((item, i) => {
            if (i < index) {
              return (
                <div className="Step__Item Step__Item-completed" key={`step-item-complemted_${i}`}>
                  <div className="point point--completed" />
                  <p className="Step__Item Step__Item-active--text">&nbsp;</p>
                </div>
              );
            }
            if (i === index) {
              return (
                <div className="Step__Item Step__Item-active" key={`step-item-active_${i}`}>
                  <div className="point point--active" />
                  <p className="Step__Item Step__Item-active--text">{item.title}</p>
                </div>
              );
            }
            return (
              <div className="Step__Item Step__Item-default" key={`step-item-default_${i}`}>
                <div className="point" />
                <p className="Step__Item Step__Item-active--text">&nbsp;</p>
              </div>
            );
          })}
        </div>
        <div
          className="Step__Line"
          style={{
            right: `calc(${100 - (index / (steps.length - 1)) * 100}%${
              index === steps.length - 1 ? ' + 30px' : ''
            })`,
          }}
        />
      </div>
    </div>
  );
};

export default StepComponent;

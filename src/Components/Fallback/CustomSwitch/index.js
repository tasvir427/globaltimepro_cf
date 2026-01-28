import { memo } from 'react';

const CustomSwitch = () => {
  const containerStyle = {
    position: 'relative',
    display: 'inline-block',
    textAlign: 'left',
    opacity: 1,
    direction: 'ltr',
    borderRadius: '7.5px',
    WebkitTransition: 'opacity 0.25s',
    MozTransition: 'opacity 0.25s',
    transition: 'opacity 0.25s',
    touchAction: 'none',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
  };

  const bgStyle = {
    height: '15px',
    width: '30px',
    margin: 0,
    position: 'relative',
    background: '#b9c3d3',
    borderRadius: '7.5px',
    cursor: 'pointer',
    WebkitTransition: 'background 0.25s',
    MozTransition: 'background 0.25s',
    transition: 'background 0.25s',
  };

  const handleStyle = {
    height: '10px',
    width: '10px',
    background: '#475569',
    display: 'inline-block',
    cursor: 'pointer',
    borderRadius: '50%',
    position: 'absolute',
    transform: 'translateX(2.5px)',
    top: '2.5px',
    outline: 0,
    border: 0,
    WebkitTransition:
      'background-color 0.25s, transform 0.25s, box-shadow 0.15s',
    MozTransition: 'background-color 0.25s, transform 0.25s, box-shadow 0.15s',
    transition: 'background-color 0.25s, transform 0.25s, box-shadow 0.15s',
  };

  const inputStyle = {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: '1px',
  };

  return (
    <div style={containerStyle}>
      <div className="react-switch-bg" style={bgStyle} />
      <div className="react-switch-handle" style={handleStyle} />
      <input
        type="checkbox"
        role="switch"
        aria-checked="false"
        style={inputStyle}
        checked={true}
        readOnly
      />
    </div>
  );
};

export default memo(CustomSwitch);

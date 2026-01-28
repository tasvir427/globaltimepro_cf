import { memo } from 'react';

const DSTCheckerPlaceholder = () => {
  const containerStyle = {
    width: '100%',
    padding: '0 20px',
    marginBottom: '8px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    boxSizing: 'border-box',
    margin: 'auto',
  };

  const textStyle = {
    color: 'var(--tc)',
    fontFamily: 'Arial',
    fontWeight: '500',
    textAlign: 'center',
    border: '0.8px solid var(--accent)',
    padding: '16px',
    borderRadius: '4px',
    backgroundColor: 'var(--bg)',
    maxWidth: '260px',
    boxSizing: 'border-box',
  };

  return (
    <div style={containerStyle}>
      <div style={textStyle}>
        The DST info will show here once you select a location!
      </div>
    </div>
  );
};

export default memo(DSTCheckerPlaceholder);

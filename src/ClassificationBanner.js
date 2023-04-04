import React from 'react';

const styles = {
  unclassified: {
    color: '#ffffff',
    backgroundColor: '#007a33',
  },
  cui: {
    color: '#ffffff',
    backgroundColor: '#502b85',
  },
  confidential: {
    color: '#ffffff',
    backgroundColor: '#0033a0',
  },
  controlled: {
    color: '#ffffff',
    backgroundColor: '#502b85',
  },
  secret: {
    color: '#ffffff',
    backgroundColor: '#c8102e',
  },
  topsecret: {
    color: '#000000',
    backgroundColor: '#ff8c00',
  },
  topsecret_sci: {
    color: '#000000',
    backgroundColor: '#fce83a',
  },
  container: {
    overflow: "scroll",
  },
  top: {
    position: 'fixed',
    display: 'flex',
    height: 25,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#c8102e',
    backgroundColor: '#000000',
    zIndex: 1000,
    top: 0,
  },
  children: {
    position: 'fixed',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '25px',
    marginBottom: '25px',
  },
  bottom: {
    position: 'fixed',
    display: 'flex',
    height: 25,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#c8102e',
    backgroundColor: '#000000',
    bottom: 0,
    zIndex: 1000,
  },
};

const ClassificationBanner = (props) => (
    <div className="react-classification-banner" style={{...styles.container}}>
      <div data-testid="classification-header" style={{ ...styles.top, ...styles[props.classification.toString()] }}>{props.classification.toUpperCase()}</div>
      <div style={{...styles.children}}>{props.children}</div>
      <div data-testid="classification-footer" style={{ ...styles.bottom, ...styles[props.classification.toString()] }}>{props.classification.toUpperCase()}</div>
    </div>
);

export default ClassificationBanner

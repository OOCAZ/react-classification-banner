/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
const React = require('react');

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
  top: {
    position: 'fixed',
    display: 'flex',
    height: 25,
    width: '100%',
    zIndex: 10000,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#c8102e',
    backgroundColor: '#000000',
    top: 0,
  },
  bottom: {
    position: 'fixed',
    display: 'flex',
    height: 25,
    width: '100%',
    zIndex: 10000,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#c8102e',
    backgroundColor: '#000000',
    bottom: 0,
  },
};

export default function ClassificationBanner(classification) {
  return (
    <div>
      <div data-testid="classification-header" style={{ ...styles.top, ...styles[classification.classification.toString()] }}>{classification.classification.toUpperCase()}</div>
      <div data-testid="classification-footer" style={{ ...styles.bottom, ...styles[classification.classification.toString()] }}>{classification.classification.toUpperCase()}</div>
    </div>
  );
}

import React from 'react'

const styles = {
  unclassified: {
    color: '#ffffff',
    backgroundColor: '#000000',
  },
  cui: {
    color: '#ffffff',
    backgroundColor: '#06a94d',
  },
  confidential: {
    color: '#ffffff',
    backgroundColor: '#0033a0',
  },
  secret: {
    color: '#ffffff',
    backgroundColor: '#c8102e',
  },
  topsecret: {
    color: '#ffffff',
    backgroundColor: '#ff671f',
  },
  topsecret_sci: {
    color: '#000000',
    backgroundColor: '#f7ea48',
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
}

 export default function ClassificationBanner(classification){

  return (
    <div>
      <div data-testid="classification-header" style={{...styles.top, ...styles[classification.classification.toString()]}}>{classification.classification.toUpperCase()}</div>
      <div data-testid="classification-footer" style={{...styles.bottom, ...styles[classification.classification.toString()]}}>{classification.classification.toUpperCase()}</div>
    </div>
  )
}

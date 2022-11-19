import React from 'react';

const styles = {
    container: {
        position: 'fixed',
        display: 'flex',
        height: 25,
        width: '100%',
        zIndex: 10000,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
        color: '#c8102e',
    },
    top: {
        top: 0,
    },
    bottom: {
        bottom: 0,
    },
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
}

function ClassificationBanner(classification) {
    let topStyle = { ...styles.container, ...styles.top }
    let bottomStyle = { ...styles.container, ...styles.bottom }

    if (classification.classification.toString() === 'unclassified' || classification.classification.toString() === 'confidential' || classification.classification.toString() === 'cui' || classification.classification.toString() === 'secret' || classification.classification.toString() === 'topsecret_sci' || classification.classification.toString() === 'topsecret') {
        topStyle = { ...styles.container, ...styles.top, ...styles[classification.classification.toString()] }
        bottomStyle = { ...styles.container, ...styles.bottom, ...styles[classification.classification.toString()] }
    }
    return (
        <div>
            <div data-testid="classification-header" style={topStyle}>{classification.classification.toString().toUpperCase()}</div>
            <div data-testid="classification-footer" style={bottomStyle}>{classification.classification.toString().toUpperCase()}</div>
        </div>
    );
}

export default ClassificationBanner;


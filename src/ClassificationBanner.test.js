import { render, screen } from '@testing-library/react';
import React from 'react';
import ClassificationBanner from './ClassificationBanner';

describe('Test suite for classification banner', () => {
  test('renders unclassified', () => {
    render(<ClassificationBanner classification="unclassified"/>);
    const headerElement = screen.getByTestId("classification-header");
    const footerElement = screen.getByTestId("classification-footer");
    expect(headerElement)
    expect(footerElement)
  });

  test('renders confidential', () => {
    render(<ClassificationBanner classification="confidential"/>);
    const headerElement = screen.getByTestId("classification-header");
    const footerElement = screen.getByTestId("classification-footer");
    expect(headerElement)
    expect(footerElement)
  });

  test('renders cui', () => {
    render(<ClassificationBanner classification="cui"/>);
    const headerElement = screen.getByTestId("classification-header");
    const footerElement = screen.getByTestId("classification-footer");
    expect(headerElement)
    expect(footerElement)
  });

  test('renders secret', () => {
    render(<ClassificationBanner classification="secret"/>);
    const headerElement = screen.getByTestId("classification-header");
    const footerElement = screen.getByTestId("classification-footer");
    expect(headerElement)
    expect(footerElement)
  });

  test('renders topsecret', () => {
    render(<ClassificationBanner classification="topsecret"/>);
    const headerElement = screen.getByTestId("classification-header");
    const footerElement = screen.getByTestId("classification-footer");
    expect(headerElement)
    expect(footerElement)
  });

  test('renders topsecret_sci', () => {
    render(<ClassificationBanner classification="topsecret_sci"/>);
    const headerElement = screen.getByTestId("classification-header");
    const footerElement = screen.getByTestId("classification-footer");
    expect(headerElement)
    expect(footerElement)
  });
});
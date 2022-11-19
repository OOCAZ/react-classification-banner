import { render, screen } from '@testing-library/react';
import ClassificationBanner from './ClassificationBanner';

describe('Test suite for classification banner', () => {

test('renders unclassified', () => {
  render(<ClassificationBanner classification="unclassified"/>);
  const headerElement = screen.getByTestId("classification-header");
  const footerElement = screen.getByTestId("classification-footer");
  expect(headerElement).toHaveTextContent("UNCLASSIFIED");
  expect(footerElement).toHaveTextContent("UNCLASSIFIED");
});

test('renders confidential', () => {
  render(<ClassificationBanner classification="confidential"/>);
  const headerElement = screen.getByTestId("classification-header");
  const footerElement = screen.getByTestId("classification-footer");
  expect(headerElement).toHaveTextContent("CONFIDENTIAL");
  expect(footerElement).toHaveTextContent("CONFIDENTIAL");
});

test('renders cui', () => {
  render(<ClassificationBanner classification="cui"/>);
  const headerElement = screen.getByTestId("classification-header");
  const footerElement = screen.getByTestId("classification-footer");
  expect(headerElement).toHaveTextContent("CUI");
  expect(footerElement).toHaveTextContent("CUI");
});

test('renders secret', () => {
  render(<ClassificationBanner classification="secret"/>);
  const headerElement = screen.getByTestId("classification-header");
  const footerElement = screen.getByTestId("classification-footer");
  expect(headerElement).toHaveTextContent("SECRET");
  expect(footerElement).toHaveTextContent("SECRET");
});

test('renders topsecret', () => {
  render(<ClassificationBanner classification="topsecret"/>);
  const headerElement = screen.getByTestId("classification-header");
  const footerElement = screen.getByTestId("classification-footer");
  expect(headerElement).toHaveTextContent("TOPSECRET");
  expect(footerElement).toHaveTextContent("TOPSECRET");
});

test('renders topsecret_sci', () => {
  render(<ClassificationBanner classification="topsecret_sci"/>);
  const headerElement = screen.getByTestId("classification-header");
  const footerElement = screen.getByTestId("classification-footer");
  expect(headerElement).toHaveTextContent("TOPSECRET_SCI");
  expect(footerElement).toHaveTextContent("TOPSECRET_SCI");
});
});
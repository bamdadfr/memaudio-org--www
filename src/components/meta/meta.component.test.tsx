import React from 'react';
import {cleanup, render} from '@testing-library/react';
import {MetaComponent} from './meta.component';
import {MetaConstants} from './meta.constants';

const query = (s): HTMLMetaElement => document.querySelector(s);
const getMetaItemPropContent = (s): string => query(`meta[itemprop="${s}"]`).content;
const getMetaNameContent = (s): string => query(`meta[name="${s}"]`).content;
const getMetaPropertyContent = (s): string => query(`meta[property="${s}"]`).content;

afterEach(cleanup);

describe('MetaComponent', () => {
  describe('container', () => {
    it('should be in the document', () => {
      const {container} = render(<MetaComponent />);
      expect(container).toBeInTheDocument();
    });

    it('should be visible', () => {
      const {container} = render(<MetaComponent />);
      expect(container).toBeVisible();
    });

    it('should not be empty', () => {
      const {container} = render(<MetaComponent />);
      expect(container).not.toBeEmptyDOMElement();
    });
  });

  describe('props', () => {
    describe('title', () => {
      it('should default to defaultProps', () => {
        render(<MetaComponent />);
        expect(document.title)
          .toBe(MetaConstants.title);
        expect(getMetaItemPropContent('name'))
          .toBe(MetaConstants.title);
        expect(getMetaNameContent('twitter:title'))
          .toBe(MetaConstants.title);
        expect(getMetaPropertyContent('og:site_name'))
          .toBe(MetaConstants.title);
        expect(getMetaPropertyContent('og:title'))
          .toBe(MetaConstants.title);
      });

      it('should match given props', () => {
        const title = 'my testing title';
        render(<MetaComponent title={title} />);
        expect(document.title)
          .toBe(title);
        expect(getMetaItemPropContent('name'))
          .toBe(title);
        expect(getMetaNameContent('twitter:title'))
          .toBe(title);
        expect(getMetaPropertyContent('og:site_name'))
          .toBe(title);
        expect(getMetaPropertyContent('og:title'))
          .toBe(title);
      });
    });

    describe('description', () => {
      it('should default to defaultProps', () => {
        render(<MetaComponent />);
        expect(getMetaItemPropContent('description'))
          .toBe(MetaConstants.description);
        expect(getMetaNameContent('twitter:description'))
          .toBe(MetaConstants.description);
        expect(getMetaPropertyContent('og:description'))
          .toBe(MetaConstants.description);
      });

      it('should match given prop', () => {
        const description = 'this is my long testing description';
        render(<MetaComponent description={description} />);
        expect(getMetaItemPropContent('description'))
          .toBe(description);
        expect(getMetaNameContent('twitter:description'))
          .toBe(description);
        expect(getMetaPropertyContent('og:description'))
          .toBe(description);
      });
    });

    describe('url', () => {
      it('should default to defaultProps', () => {
        render(<MetaComponent />);
        expect(getMetaPropertyContent('og:url'))
          .toBe(MetaConstants.url);
      });

      it('should match given prop', () => {
        const url = 'http://localhost/myurl';
        render(<MetaComponent url={url} />);
        expect(getMetaPropertyContent('og:url'))
          .toBe(url);
      });
    });

    describe('image', () => {
      it('should default to defaultProps', () => {
        render(<MetaComponent />);
        expect(getMetaItemPropContent('image'))
          .toBe(MetaConstants.image);
        expect(getMetaNameContent('twitter:image'))
          .toBe(MetaConstants.image);
        expect(getMetaPropertyContent('og:image'))
          .toBe(MetaConstants.image);
      });

      it('should match given prop', () => {
        const image = 'http://localhost/myimage.png';
        render(<MetaComponent image={image} />);
        expect(getMetaItemPropContent('image'))
          .toBe(image);
        expect(getMetaNameContent('twitter:image'))
          .toBe(image);
        expect(getMetaPropertyContent('og:image'))
          .toBe(image);
      });
    });
  });
});

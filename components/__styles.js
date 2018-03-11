import { css } from 'react-emotion'

export const ratio = parseFloat(1.414)
export const fontSizes = {
  base: 1,
  md: 1,
  sm: 1 / ratio,
  xs: 1 / (ratio * ratio),
  lg: 1 * ratio,
  xl: 1 * (ratio * ratio),
  xxl: 1 * (ratio * ratio * ratio),
}

export const spacingBase = 30
export const spacing = {
  base: spacingBase,
  md: spacingBase,
  sm: spacingBase / 2,
  xs: spacingBase / 3,
  xxs: spacingBase / 6,
  lg: parseInt(spacingBase * 1.35),
  xl: spacingBase * 2,
  xxl: spacingBase * 3,
}

export const typograpyStyles = `
  html {
    font-size: 150%;
    line-height: 1.25;
  }
  body {
    font-size: ${fontSizes.md}rem;
  }
  h1, h2 {
    margin-bottom: ${spacing.xl}px;
    line-height: 1.25;
  }
  h3, h4, h5, h6 {
    margin-bottom: ${spacing.md}px;
    line-height: 1.25;
  }
  h1 {
    font-size: ${fontSizes.xxl}rem;
  }
  h2 {
    font-size: ${fontSizes.xl}rem;
    margin-bottom: ${spacing.xl}px;
  }
  h3, h4, h5, h6 {
    font-size: ${fontSizes.lg}rem;
  }
  blockquote {
    margin-left: ${spacing.md}px;
  }
  p {
    margin-bottom: ${spacing.md}px;
  }

  ul, ol {
    margin-bottom: ${spacing.md}px;

    li {
      margin-bottom: ${spacing.xxs}px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`

export const bisqueLinks = css`
  a:hover,
  a:focus {
    background-color: bisque;
  }
`

const _pointLinks = css`
  a {
    &::before,
    &::after {
      visibility: hidden;
    }
  }
  a:hover,
  a:focus {
    &::before,
    &::after {
      visibility: visible;
    }
  }
`

export const pointLeftLinks = css`
  ${_pointLinks};

  a::after {
    content: '\00a0☜';
  }
`

export const pointRightLinks = css`
  ${_pointLinks};

  a::before {
    content: '☞\00a0';
  }
`

export const layoutStyles = css`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: flex-start;
  margin: ${spacing.xl}px;
`

export const headerStyles = css`
  flex: 1;
  text-align: right;

  a,
  span {
    padding: 0 ${spacing.xxs}px;
  }
`

export const mainStyles = css`
  flex: 3;
  margin-right: ${spacing.xl}px;

  div {
    margin-bottom: ${spacing.md}px;
  }

  ${bisqueLinks};
`

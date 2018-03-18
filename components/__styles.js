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

const breakpoints = {
  xs: 321,
  sm: 641, // this is the govuk 'tablet' size
  md: 768,
  lg: 992,
  xl: 1200,
}

const mq = Object.keys(breakpoints).reduce((accumulator, label) => {
  let prefix = typeof breakpoints[label] === 'string' ? '' : 'min-width:'
  let suffix = typeof breakpoints[label] === 'string' ? '' : 'px'
  accumulator[label] = cls =>
    css`
      @media (${prefix + breakpoints[label] + suffix}) {
        ${cls};
      }
    `
  return accumulator
}, {})

export const typograpyStyles = css`
  html {
    font-size: 130%;
    line-height: 1.25;
    ${mq.sm(css`
      font-size: 140%;
    `)};

    ${mq.md(css`
      font-size: 150%;
    `)};
  }
  body {
    font-size: ${fontSizes.md}rem;
  }
  h1,
  h2 {
    margin-bottom: ${spacing.xl}px;
    line-height: 1.25;
  }
  h3,
  h4,
  h5,
  h6 {
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
  h3,
  h4,
  h5,
  h6 {
    font-size: ${fontSizes.lg}rem;
  }
  blockquote {
    margin-left: ${spacing.md}px;
  }
  p {
    margin-bottom: ${spacing.md}px;
  }

  ul,
  ol {
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
  margin: ${spacing.md}px;

  ${mq.sm(css`
    margin: ${spacing.lg}px;
  `)};

  ${mq.md(css`
    margin: ${spacing.xl}px;
  `)};
`

export const headerStyles = css`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  padding: ${spacing.sm}px ${spacing.md}px;
  text-align: right;

  ${mq.sm(css`
    position: sticky;
    top: ${spacing.lg}px;
    flex: 1;
    padding: 0;
    width: initial;
  `)};

  ${mq.md(css`
    top: ${spacing.xl}px;
  `)};

  a,
  span {
    padding: 0 ${spacing.xxs}px;
  }
`

export const mainStyles = css`
  flex: 4;
  margin-right: ${spacing.xs}px;

  ${mq.md(css`
    flex: 3;
    margin-right: ${spacing.xl}px;
  `)};

  div {
    margin-bottom: ${spacing.md}px;
  }

  ${bisqueLinks};
`

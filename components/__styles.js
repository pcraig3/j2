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

export const colours = {
  primary: 'mediumslateblue',
  secondary: '#FFDFDC',
  focus: 'darkturquoise',
}

const breakpoints = {
  xxs: 321,
  xs: 440,
  sm: 641, // this is the govuk 'tablet' size
  md: 768,
  lg: 992,
  xl: 1200,
}

export const visuallyhidden = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`

export const mq = Object.keys(breakpoints).reduce((accumulator, label) => {
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
  h1 {
    margin-bottom: ${spacing.xl}px;
  }
  h2 {
    margin-bottom: ${spacing.md}px;
    ${mq.xs(css`
      margin-top: ${spacing.xl}px;
    `)};
  }
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: ${spacing.md}px;
  }
  h1 {
    font-size: ${fontSizes.xl}rem;
    ${mq.xs(css`
      font-size: ${fontSizes.xxl}rem;
    `)};
  }
  h2 {
    font-size: ${fontSizes.lg}rem;
    ${mq.xs(css`
      font-size: ${fontSizes.xl}rem;
    `)};
  }
  h3,
  h4,
  h5,
  h6 {
    font-size: ${fontSizes.md}rem;
    ${mq.xs(css`
      font-size: ${fontSizes.lg}rem;
    `)};
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
    margin-left: 22px;
    ${mq.xs(css`
      margin-left: 0;
    `)};

    li {
      margin-bottom: ${spacing.xxs}px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  button {
    font-size: ${fontSizes.md}rem;
  }
`

export const bisqueLinks = css`
  a:hover,
  a:focus {
    background-color: ${colours.secondary};
  }
`

const _pointLinks = css`
  a {
    &::before,
    &::after {
      color: transparent;
    }
  }
  a:hover,
  a:focus,
  a[aria-current] {
    &::before,
    &::after {
      color: currentColor;
    }
  }
`

export const pointLeftLinks = css`
  ${_pointLinks};

  a::after {
    content: '\00a0☜';
  }
  a::before {
    content: none;
  }
`

export const pointRightLinks = css`
  ${_pointLinks};

  a::before {
    content: '☞\00a0';
  }
  a::after {
    content: none;
  }
`

export const layoutStyles = css`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: flex-start;
  margin: ${spacing.sm}px;

  ${mq.xs(css`
    margin: ${spacing.md}px;
  `)};

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
  padding: ${spacing.sm}px ${spacing.sm}px;
  text-align: right;
  border-top: 2px solid ${colours.secondary};
  background-color: white;

  ${mq.xs(css`
    padding: ${spacing.sm}px ${spacing.md}px;
  `)};

  ${mq.sm(css`
    position: sticky;
    top: ${spacing.lg}px;
    flex: 1;
    padding: 0;
    width: initial;
    border-top: none;
    background-color: transparent;
  `)};

  ${mq.md(css`
    top: ${spacing.xl}px;
  `)};
`

export const mainStyles = css`
  flex: 4;
  margin-right: 0;
  margin-bottom: ${spacing.md}px;

  ${mq.sm(css`
    margin-right: ${spacing.xs}px;
    margin-bottom: 0;
  `)};

  ${mq.md(css`
    flex: 3;
    margin-right: ${spacing.xl}px;
  `)};

  div {
    margin-bottom: ${spacing.md}px;
  }

  ${bisqueLinks};
`

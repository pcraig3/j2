import { css } from 'react-emotion'

export const globalStyles = `
  html {
    font-family: sans-serif;
    font-size: 24px;
    text-transform: uppercase;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  a,
  a:visited {
    display: inline-block;
    text-decoration: none;
    color: mediumslateblue;
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
  margin: 60px;
`

export const headerStyles = css`
  flex: 1;
  text-align: right;

  a,
  span {
    padding: 0 4px;
  }
`

export const mainStyles = css`
  flex: 3;
  margin-right: 60px;

  div {
    margin-bottom: 30px;
  }

  ${bisqueLinks};
`

import Link from 'next/link'
import { css } from 'react-emotion'
import { assetPrefix } from '../node-env'
import {
  bisqueLinks,
  mq,
  pointRightLinks,
  pointLeftLinks,
  spacing,
} from './__styles'

const navStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  min-height: 39px;

  .hide-menu & {
    justify-content: flex-end;
  }

  ${mq.xs(css`
    justify-content: flex-end;
  `)};
`

const divStyles = css`
  order: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-left: -${spacing.xxs}px;

  .js-enabled .hide-menu & {
    display: none;
  }

  ${mq.xs(css`
    align-items: flex-end;
    margin-left: 0;
    ${pointRightLinks};
  `)};

  ${mq.sm(css`
    .js-enabled .hide-menu & {
      display: flex;
    }
  `)};

  a {
    padding: 0 ${spacing.xxs}px;
    overflow: hidden;

    &:not(:last-of-type) {
      margin-bottom: ${spacing.xxs}px;
    }
  }

  ${bisqueLinks};
`

const buttonStyles = css`
  .no-js & {
    display: none;
  }

  order: 2;
  border: none;
  background-color: transparent;
  text-transform: uppercase;
  cursor: pointer;
  margin-left: ${spacing.md}px;
  padding: 0 ${spacing.xxs}px;
  width: 30px;
  text-align: center;
  border: 2px solid bisque;

  :hover,
  :focus {
    background-color: bisque;
    outline: 2px solid darkturquoise;
  }

  ${mq.xs(css`
    width: 75px;
  `)};

  ${mq.sm(css`
    display: none;
  `)};

  span {
    padding: 0;
  }

  span > span {
    display: none;
    padding: 0;
    margin: 0;
    ${bisqueLinks};

    ${mq.xs(css`
      display: initial;
    `)};
  }
`

const ToggleButton = ({ onToggle, showMenu }) => {
  return (
    <button className={buttonStyles} onClick={onToggle}>
      {showMenu ? (
        <span>x</span>
      ) : (
        <span>
          m<span>enu</span>
        </span>
      )}
    </button>
  )
}

export default ({ onToggle, showMenu }) => (
  <nav className={navStyles}>
    <ToggleButton onToggle={onToggle} showMenu={showMenu} />
    <div className={divStyles}>
      <Link href="/about" as={`${assetPrefix}/about`}>
        <a>about</a>
      </Link>
      <Link href="/portfolio" as={`${assetPrefix}/portfolio`}>
        <a>portfolio</a>
      </Link>
      <Link href="/contact" as={`${assetPrefix}/contact`}>
        <a>contact</a>
      </Link>
    </div>
  </nav>
)

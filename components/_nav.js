import Link from 'next/link'
import { css } from 'react-emotion'
import { assetPrefix } from '../next.config'
import {
  bisqueLinks,
  colours,
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
  ${pointLeftLinks};

  .hide-menu & {
    display: none;
  }

  ${mq.xs(css`
    align-items: flex-end;
    margin-left: 0;
    ${pointRightLinks};
  `)};

  ${mq.sm(css`
    .hide-menu & {
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

const formStyles = css`
  order: 2;
`

const buttonStyles = css`
  border: none;
  background-color: transparent;
  text-transform: uppercase;
  cursor: pointer;
  margin-left: ${spacing.md}px;
  padding: 0 ${spacing.xxs}px;
  width: 30px;
  text-align: center;
  border: 2px solid ${colours.secondary};

  :hover,
  :focus {
    background-color: ${colours.secondary};
    outline: 2px solid ${colours.focus};
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

const ToggleButton = ({ onToggle, showMenu, pathname }) => {
  return (
    <form
      className={formStyles}
      action={
        showMenu ? `${assetPrefix}${pathname}` : `${assetPrefix}/m${pathname}`
      }
    >
      <button
        className={buttonStyles}
        onClick={e => {
          e.preventDefault()
          onToggle()
        }}
        aria-controls="navLinks"
        aria-expanded={showMenu}
        aria-label="Toggle navigation"
      >
        {showMenu ? (
          <span>x</span>
        ) : (
          <span>
            m<span>enu</span>
          </span>
        )}
      </button>
    </form>
  )
}

const NavLink = ({ path, pathname }) => (
  <Link href={`${assetPrefix}${path}`}>
    <a {...(path === pathname ? { 'aria-current': 'page' } : {})}>
      {path === '/' ? 'Home' : path.split('/').pop()}
    </a>
  </Link>
)

export default ({ onToggle, showMenu, pathname }) => (
  <nav className={navStyles}>
    <ToggleButton onToggle={onToggle} showMenu={showMenu} pathname={pathname} />
    <div className={divStyles} id="navLinks">
      {showMenu ? <NavLink path="/" pathname={pathname} /> : ''}
      <NavLink path="/about" pathname={pathname} />
      <NavLink path="/portfolio" pathname={pathname} />
      <NavLink path="/contact" pathname={pathname} />
    </div>
  </nav>
)

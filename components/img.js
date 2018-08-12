import { css } from 'react-emotion'
import { spacing, colours, mq } from './__styles'
import { assetPrefix } from '../next.config'

const imgStyles = css`
  background-color: #ffe4c4; /* can't use colours here because they get distorted */
  display: flex;
  flex: 1 1 100%;
  height: 100%;
  overflow: initial;
  padding: ${spacing.sm}px;
  position: relative;
  margin-bottom: ${spacing.sm} !important;

  ${mq.xs(css`
    padding: 20px;
  `)};

  img {
    filter: grayscale(100%) contrast(1) blur(0);
    flex: 1 0 100%;
    height: 100%;
    max-width: 100%;
    mix-blend-mode: multiply;
    object-fit: cover;
    opacity: 1;
    position: relative;
    width: 100%;
  }

  &::before {
    background-color: #7b68ee;
    bottom: 0;
    content: '';
    height: 100%;
    left: 0;
    mix-blend-mode: soft-light;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 1;
  }
`

const captionStyles = css`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: calc(100% - 40px);
  color: ${colours.secondary};
  z-index: 2;

  > * {
    margin: 0;
    display: inline-block;
    line-height: 0.9;
  }

  h3 {
    text-align: right;
  }
`

export default ({ src, title, year }) => (
  <div className={imgStyles}>
    <div className={captionStyles}>
      <h2>{title}</h2>
      <h3>{year}</h3>
    </div>
    <img src={`${assetPrefix}${src}`} />
  </div>
)

import styled from 'styled-components'
import media from 'styled-media-query'
import Img from "gatsby-image"

export const AvatarWrapper = styled(Img)`
  border-radius: 20%;
  height: 7.75rem;
  margin: auto;
  width: 8.75rem;

  ${media.lessThan("medium")`
    height: 2.875rem;
    width: 2.875rem;
    margin-right: 10px;
  `}
`
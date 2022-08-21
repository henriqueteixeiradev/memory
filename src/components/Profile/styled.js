import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const ProfileWrapper = styled.section`
  color: var(--texts);
  display: flex;
  flex-direction: column;
  text-align: center;

  ${media.lessThan("medium")`
    flex-direction: row;
  `}
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  ${media.lessThan("medium")`
    text-align: left;
  `}
`

export const ProfileLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  cursor: pointer;

  &:hover {
    color: var(--highlight);
  }

  .mover{
    ${media.lessThan("medium")`
    display: none;
  `}
  }

  .avatar_mobile{
    display: block;

    ${media.lessThan("4000px")`
    display: none;
  `}
  ${media.lessThan("large")`
    display: none;
  `}
  ${media.lessThan("medium")`
    display: flex;
  `}

  }

  .mover_avatar2 {
  position: absolute;
  left: 50%;
  top: 32px;
  transform: translate(-50%);
  background-color: #CCD6EB;
  border-radius: 20%;
  height: 7.75rem;
  margin: auto;
  width: 8.75rem;
  z-index: -1;
  }

  ${media.lessThan("medium")`
    display: flex;
    font-size: 1.2rem;
    margin: 0 0 0 10px;
  `}
`

export const ProfileAuthor = styled.h1`
  font-size: 1.6rem;
  margin: 1.5rem auto 0 auto;

  ${media.lessThan("medium")`
    font-size: 1.2rem;
    margin: 0;
  `}
`

export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
  margin-top: 1rem;

  ${media.lessThan("medium")`
    font-size: 0.8rem;
    margin-top: 0.2rem;
  `}
`

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
  margin: 1.5rem auto 0 auto;

  ${media.lessThan("medium")`
    display: none;
  `}
`
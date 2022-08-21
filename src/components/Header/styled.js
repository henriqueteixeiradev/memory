import styled from 'styled-components';
import media from 'styled-media-query'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;

  ${media.lessThan("medium")`
  min-height: auto;
  margin-top: 10px;
  `}

  ${media.lessThan("small")`
  margin-top: 20px;
  `}
`;

export const Typography = styled.div`
  overflow: hidden;


  h2{
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    font-weight: 900;
    color: var(--text-color-shadow);
    line-height: 0.9em;
    letter-spacing: 4px;
    font-family: 'Source Code Pro', monospace;
    font-size: 3.1rem;

    ${media.lessThan("huge")`
    font-size: 3.1rem;
  `}

    ${media.lessThan("large")`
    font-size: 2rem;
  `}

  ${media.lessThan("medium")`
    font-size: 2rem;
  `}

  ${media.lessThan("small")`
    font-size: 0.8rem;
  `}


    span {
      position: relative;
      z-index: 1;
      animation: animate 5s linear infinite;
    }
    @keyframes animate {
      0%,5%,10.1%,15.1%,25.1%,45%,70.1%,90%,100%
      {
        color: var(--texts);
        text-shadow: 0 0 0 var(--texts);
      }
      5.1%,10%,15.2%,25%,45.1%,70%,90.1%,95%
      {
        color: var(--texts);
        text-shadow:  0 0 10px var(--texts),
                      0 0 40px var(--texts),
                      0 0 80px var(--texts),
                      0 0 160px var(--texts);
      }
    }

    .text2 {
      animation-delay: -0.5s;
    }
    .text3 {
      animation-delay: -1s;
    }
    .text4 {
      animation-delay: -1.5s;
    }
    .text5 {
      animation-delay: -2s;
    }
    .text6 {
      animation-delay: -2.5s;
    }
  }
`

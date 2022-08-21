import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import getThemeColor from "../../utils/getThemeColor"

import gsap from 'gsap'

import Avatar from '../Avatar'

import * as S from './styled'


const Profile = () => {

    useEffect(() => {
      const tl = gsap.timeline()
      tl.to(".mover_avatar",
        {
          x: "5px",
          y: "-5px",
          delay: .5,
          yoyo: true,
          repeat: 10000,
        }
      ).to(".mover_avatar2",
      {
        x: "-5px",
        y: "5px",
        yoyo: true,
        repeat:10000,
      }, "<", 
    ).yoyo(true)
    }, [])

    const {
        site: {
            siteMetadata: {
                title,
                position,
                description
            },
        },
    } = useStaticQuery(graphql`
                                query MySiteMetadata {
                                    site {
                                        siteMetadata {
                                            description
                                            title
                                            position
                                        }
                                    }
                                }
                            `)

    return (
        <S.ProfileWrapper>
            <S.ProfileLink to={'/'} paintDrip duration={0.6} hex={getThemeColor()} activeClassName="active">
                {/* <Avatar ref={e => {shadowImage = e}}/> */}
                <div className="mover">
                  <div className="mover_avatar">
                  <Avatar />
                  </div>
                  <div className="mover_avatar2"></div>
                </div>
                <div className="avatar_mobile">
                    <Avatar />
                </div>
                <S.TextWrapper>
                <S.ProfileAuthor>{title}</S.ProfileAuthor>
                <S.ProfilePosition>{position}</S.ProfilePosition>
                </S.TextWrapper>
            </S.ProfileLink>
            <S.ProfileDescription>{description}</S.ProfileDescription>
        </S.ProfileWrapper>
    )
}

export default Profile

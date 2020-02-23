import styled from 'styled-components'
import {Zap} from 'styled-icons/octicons/Zap'
import {Star} from 'styled-icons/boxicons-solid/Star'
import {width, height } from '../typography/mixins'
import { backgroundColor } from '../color/mixins'
import { Facebook,  } from 'styled-icons/boxicons-logos/Facebook'
import { Twitter } from 'styled-icons/boxicons-logos/Twitter'
import { GooglePlus } from 'styled-icons/boxicons-logos/GooglePlus'
import { Linkedin } from 'styled-icons/boxicons-logos/Linkedin'
import { Youtube } from 'styled-icons/boxicons-logos/Youtube'

export  const RedZap = styled(Zap)`
  color: red;
`

export  const YellowStar = styled(Star)`
  color: yellow;
  ${width};
  ${height};
  ${backgroundColor};
`
export  const Whitefacebook = styled(Facebook)`
  color: white;
  ${width};
  ${height};
  ${backgroundColor};
`

export  const Whitetwitter = styled(Twitter)`
  color: white;
  ${width};
  ${height};
  ${backgroundColor};

`
export  const Whitegoogle = styled(GooglePlus)`
color: white;
${width};
${height};
${backgroundColor};

`
export  const Whitelinkedin = styled(Linkedin)`
color: white;
${width};
${height};
`

export  const Whiteyoutube = styled(Youtube)`
color: white;
${width};
${height};
`
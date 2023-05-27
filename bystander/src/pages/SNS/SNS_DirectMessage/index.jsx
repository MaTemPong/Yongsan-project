import * as S from './styled'
import SNSLogo from '../../../media/img/SNSLogo.png'

function SNSDirectMessage(){
  return (<S.HeaderBar>
    <S.LogoContiner>
      <a href="#">
        <img src={SNSLogo} alt="SNSLogo"/>
      </a>
    </S.LogoContiner>
  </S.HeaderBar>);
}

export default SNSDirectMessage;
import * as S from './styled';

import SNSHeader from "../SNSHeader";
import DirectMessageContents from './DirectMessageContents';
function SNSDirectMessage(){
  return (
    <S.Container>
      <SNSHeader/>
      <S.MainContent>
        <DirectMessageContents>
        </DirectMessageContents>
      </S.MainContent>
    </S.Container>
  );
}

export default SNSDirectMessage;
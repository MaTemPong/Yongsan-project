import FriendsWindow from './FriendsWindow';
import MyState from './MyState';
import * as S from './styled'

function DirectMessageContents(){

  return (
  <S.Container>
    <div>
      <MyState></MyState>
      <FriendsWindow></FriendsWindow>
    </div>
    <div>

    </div>
  </S.Container>
  )
}

export default DirectMessageContents;
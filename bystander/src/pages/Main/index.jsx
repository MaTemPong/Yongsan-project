import React from "react";
import * as S from "./styled"
import logoImg from '../../media/img/logo_biack_shadow.png'
import postIcon from '../../media/img/postIcon.png'

function Main() {
    return (
        <S.Container>
            <S.Intro>
            <S.MainContent>
                <S.Title><img src={logoImg} alt="bystander.logo" width="800px" /></S.Title>
                <S.Description>
                    당신은 이제부터 학교폭력의 방관자가 되게 됩니다.<br/>당신의 이름을 입력해주세요.
                </S.Description>
            </S.MainContent>
            <S.InputSet>
                <input placeholder="이름 작성을 작성해주세요!"/>
                <a href="#"><img src={postIcon} alt="logo" /></a>
            </S.InputSet>
            </S.Intro>
        </S.Container>
    );
}

export default Main;
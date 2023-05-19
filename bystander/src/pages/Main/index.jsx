import React from "react";
import * as S from "./styled"

function Main() {
    return (
        <S.Container>
                <S.Title>BYSTANDER</S.Title>
                <p>당신은 이제부터 학교폭력의 방관자가 되게됩니다.<br/>당신의 이름을 입력해주세요.</p>
            <S.InputSet>
                <input placeholder="이름을 입력하세요"/>
                <button>확인</button>
            </S.InputSet>
        </S.Container>
    );
}

export default Main;
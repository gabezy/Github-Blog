import styled from "styled-components";
import detailsLeft from "../../assets/details-left.svg";
import detailsRight from "../../assets/details-right.svg";

export const HeaderContainer = styled.header`
  /* position: relative; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #143351;
  height: 296px;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50;
    display: block;
    background-image: url(${detailsLeft});
    /* background: red; */
    width: 409px;
    height: 188px;
  }
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50;
    background-image: url(${detailsRight});
    width: 371px;
    height: 236px;
  }
`;

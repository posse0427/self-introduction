import styled from "styled-components";

// props.theme のなかにテーマが格納されている
const StyledDiv = styled.div`
  color: ${props => props.theme.palette.primary.main};
`;

export default StyledDiv;

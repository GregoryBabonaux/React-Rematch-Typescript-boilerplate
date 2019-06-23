import styled from 'styled-components';

type Props = {
  color?: string
}

const StyledH1 = styled.h1`
  color: ${(props:Props) => props.color};
`;

StyledH1.defaultProps = {
  color: 'rgba(255, 255, 255, 0.85)',
}

export default StyledH1;
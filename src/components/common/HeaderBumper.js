import styled from 'styled-components';

const HEADER_HEIGHT = '60px'
const HEADER_HEIGHT_MOBILE = '50px'

const HeaderBumper = styled.section`
  flex-shrink: 0;
  height: ${HEADER_HEIGHT};

  @media (max-width: 800px) {
    height: ${HEADER_HEIGHT_MOBILE};
  }
`;

export default HeaderBumper;
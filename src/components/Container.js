import styled from 'styled-components';

const StyledContainer = styled.div`
    max-width: 1280px;
    padding: 0 30px;
    margin: 0 auto;
`;

function Container(props) {
    return <StyledContainer>
        {props.children}
    </StyledContainer>
}

export default Container;
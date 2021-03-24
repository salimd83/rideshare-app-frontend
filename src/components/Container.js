import styled from 'styled-components';

const StyledContainer = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 30px;
`;

function Container(props) {
    return <StyledContainer>
        {props.children}
    </StyledContainer>
}

export default Container;
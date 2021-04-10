import styled from 'styled-components';

const StyledContainer = styled.div`
    max-width: ${(p) => p.size === 'small' ? 767 : 1280}px;
    padding: 0 30px;
    margin: 0 auto;
`;

function Container(props) {
    return <StyledContainer size={props.size}>
        {props.children}
    </StyledContainer>
}

export default Container;
import styled from '@emotion/styled'

export const Title = styled.h1`
  @media (min-width: 1900px) {
    font-size: 2.8rem;
  }

  @media (max-width: 770px) {
    font-size: 1.6rem;
    text-align: center;
    padding: 0 10px;
  }

  @media (max-width: 570px) {
    font-size: 1.3rem;
  }
`

export const Footer = styled.footer`
  margin-top: 50px;
  font-size: 0.8rem;

  & a {
    color: ${props => props.theme.palette.text.secondary};
    font-weight: bold;
    text-decoration: none;
  }

  @media (min-width: 1900px) {
    font-size: 1.2rem;
  } ;
`

export const Container = styled.main`
  background-color: ${props => props.theme.palette.background.paper};
  display: flex;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
  width: 70%;
  height: 100%;
  min-height: 100vh;

  & span {
    color: ${props => props.theme.palette.text.secondary};
    font-weight: bold;
  }

  @media (max-width: 570px) {
    width: 90%;
  } ;
`

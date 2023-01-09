import styled from '@emotion/styled'

export const Image = styled.img`
  height: 300px;
  width: 300px;
  margin: 30px 0;

  @media (min-width: 1900px) {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 570px) {
    width: 200px;
    height: 200px;
    margin: 15px 0;
  }
`

export const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media (min-width: 1900px) {
    width: 60%;
    font-size: 1.3rem;
    gap: 30px;

    & button {
      font-size: 1.2rem;
    }

    & label input {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 570px) {
    width: 70%;
  }

`

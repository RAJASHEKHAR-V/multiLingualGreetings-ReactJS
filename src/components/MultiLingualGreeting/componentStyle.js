import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: '#ffffff';
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #1e293b;
  font-weight: 700;
  font-size: 30px;
`
export const ThumbNailCard = styled.ul`
  width: 30%;
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 767px) {
    width: 70%;
  }
`
export const ImageCard = styled.div`
  min-height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LanguageImage = styled.img`
  width: 30%;
  height: 500px;
  @media (max-width: 767px) {
    height: 400px;
  }
`

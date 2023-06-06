import {Component} from 'react'
import GreetingItem from '../GreetingItems'

import {
  BgContainer,
  Heading,
  ThumbNailCard,
  ImageCard,
  LanguageImage,
} from './componentStyle'

class MultiLingualGreeting extends Component {
  constructor(props) {
    super(props)
    this.state = {thumbNailId: props.languageGreetingsList[0].id}
  }

  onThumbNail = languageId => {
    this.setState({thumbNailId: languageId})
  }

  getLanguageImage = languages => {
    const {thumbNailId} = this.state
    const languageFind = languages.filter(
      eachItem => eachItem.id === thumbNailId,
    )
    console.log(languageFind)
    return languageFind[0]
  }

  render() {
    const {thumbNailId} = this.state
    const {languageGreetingsList} = this.props
    const languageToDisplay = this.getLanguageImage(languageGreetingsList)
    const {imageUrl, imageAltText} = languageToDisplay
    console.log(imageUrl)

    return (
      <BgContainer>
        <Heading>Multilingual Greetings</Heading>
        <ThumbNailCard>
          {languageGreetingsList.map(eachThumbNail => (
            <GreetingItem
              key={eachThumbNail.id}
              thumbNail={eachThumbNail}
              isActive={eachThumbNail.id === thumbNailId}
              onThumbNail={this.onThumbNail}
            />
          ))}
        </ThumbNailCard>
        <ImageCard>
          {' '}
          <LanguageImage src={imageUrl} alt={imageAltText} />
        </ImageCard>
      </BgContainer>
    )
  }
}

export default MultiLingualGreeting

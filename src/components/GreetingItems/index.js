import {ThumbItem, Button} from './componentStyle'

const GreetingItem = props => {
  const {thumbNail, isActive, onThumbNail} = props
  const {id, buttonText} = thumbNail
  const onThumb = () => {
    onThumbNail(id)
  }

  return (
    <ThumbItem>
      <Button type="button" isActive={isActive} onClick={onThumb}>
        {buttonText}
      </Button>
    </ThumbItem>
  )
}

export default GreetingItem

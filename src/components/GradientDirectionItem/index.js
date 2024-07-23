import {GradientList, GradientButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionList, clickGradientItem, isActive} = props
  const {displayText, value} = directionList

  const onClickGradientDirectionItem = () => {
    clickGradientItem(value)
  }

  return (
    <GradientList>
      <GradientButton
        type="button"
        isActive={isActive}
        onClick={onClickGradientDirectionItem}
      >
        {displayText}
      </GradientButton>
    </GradientList>
  )
}

export default GradientDirectionItem

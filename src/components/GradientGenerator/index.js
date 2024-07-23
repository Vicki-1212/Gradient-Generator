import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  AppContainer,
  Heading,
  Paragraph,
  DirectionConatiner,
  InputContainer,
  ColorContainer,
  Label,
  ColorInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].value,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onchangeFromColor = event => {
    this.setState({fromColorInput: event.target.value})
  }

  onchangeToColor = event => {
    this.setState({toColorInput: event.target.value})
  }

  generateColor = () => {
    const {activeDirection, fromColorInput, toColorInput} = this.state
    this.setState({
      gradientValue: `to ${activeDirection}, ${fromColorInput}, ${toColorInput}`,
    })
  }

  clickGradientItem = direction => {
    this.setState({activeDirection: direction})
  }

  render() {
    const {fromColorInput, toColorInput, activeDirection, gradientValue} =
      this.state
    return (
      <AppContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Paragraph>Choose Direction</Paragraph>
        <DirectionConatiner>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              directionList={eachDirection}
              key={eachDirection.directionId}
              clickGradientItem={this.clickGradientItem}
              isActive={eachDirection.value === activeDirection}
            />
          ))}
        </DirectionConatiner>
        <Paragraph>Pick the Colors</Paragraph>
        <InputContainer>
          <ColorContainer>
            <Label>{fromColorInput}</Label>
            <ColorInput
              type="color"
              value={fromColorInput}
              onChange={this.onchangeFromColor}
            ></ColorInput>
          </ColorContainer>
          <ColorContainer>
            <Label>{toColorInput}</Label>
            <ColorInput
              type="color"
              value={toColorInput}
              onChange={this.onchangeToColor}
            ></ColorInput>
          </ColorContainer>
        </InputContainer>
        <GenerateButton type="button" onClick={this.generateColor}>
          Generate
        </GenerateButton>
      </AppContainer>
    )
  }
}

export default GradientGenerator

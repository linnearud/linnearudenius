import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { MollyThemeProvider } from '../contexts/MollyThemeContext'

import { withValueState, withCheckedState, withSelectedState } from '../helpers/withState'
import { TYPES, COLORS, SIZES } from '../helpers/constants'

import Button from '../components/button/Button'
import InvertedButton from '../components/button/InvertedButton'
import OverlayButton from '../components/OverlayButton'
import TextInput from '../components/form/TextInput'
import TextArea from '../components/form/TextArea'
import Checkbox from '../components/form/Checkbox'
import RadioButton from '../components/form/RadioButton'
import RadioButtonGroup from '../components/form/RadioButtonGroup'
import Toggle from '../components/form/Toggle'
import Range from '../components/form/Range'
import Select from '../components/form/Select'
import { H1, H2, H3, H4, H5, Body, Caption } from '../components/Typography'
import CheckIcon from '../icons/CheckIcon'

import Form from './Form'

const withMollyTheme = story => <MollyThemeProvider>{story()}</MollyThemeProvider>

storiesOf('Button', module)
  .addDecorator(withMollyTheme)
  .addDecorator(withKnobs)
  .add('regular', () => (
    <Button
      type={select('Type', Object.values(TYPES), TYPES.PRIMARY)}
      disabled={boolean('Disabled', false)}
      onClick={action('clicked')}
    >
      Click me
    </Button>
  ))
  .add('inverted', () => (
    <InvertedButton
      type={select('Type', Object.values(TYPES), TYPES.PRIMARY)}
      disabled={boolean('Disabled', false)}
      onClick={action('clicked')}
    >
      Click me
    </InvertedButton>
  ))
  .add('with icon', () => (
    <OverlayButton
      type={select('Type', Object.values(TYPES), TYPES.PRIMARY)}
      size={40}
      disabled={boolean('Disabled', false)}
      onClick={action('clicked')}
    >
      <CheckIcon css={{}} color={COLORS.WHITE} />
    </OverlayButton>
  ))

storiesOf('Text', module)
  .addDecorator(withMollyTheme)
  .addDecorator(withKnobs)
  .add('H1', () => (
    <H1 color={select('Color', Object.values(COLORS), COLORS.BLACK)}>
      Alice was beginning to get very tired of sitting by her sister on the bank.
    </H1>
  ))
  .add('H2', () => (
    <H2 color={select('Color', Object.values(COLORS), COLORS.BLACK)}>
      Alice was beginning to get very tired of sitting by her sister on the bank.
    </H2>
  ))
  .add('H3', () => (
    <H3 color={select('Color', Object.values(COLORS), COLORS.BLACK)}>
      Alice was beginning to get very tired of sitting by her sister on the bank.
    </H3>
  ))
  .add('H4', () => (
    <H4 color={select('Color', Object.values(COLORS), COLORS.BLACK)}>
      Alice was beginning to get very tired of sitting by her sister on the bank.
    </H4>
  ))
  .add('H5', () => (
    <H5 color={select('Color', Object.values(COLORS), COLORS.BLACK)}>
      Alice was beginning to get very tired of sitting by her sister on the bank.
    </H5>
  ))
  .add('Body', () => (
    <Body
      color={select('Color', Object.values(COLORS), COLORS.BLACK)}
      size={select('Size', Object.values(SIZES), SIZES.BASE)}
    >
      Alice was beginning to get very tired of sitting by her sister on the bank.
    </Body>
  ))
  .add('Caption', () => (
    <Caption color={select('Color', Object.values(COLORS), COLORS.BLACK)}>
      Alice was beginning to get very tired of sitting by her sister on the bank.
    </Caption>
  ))

storiesOf('Form Elements', module)
  .addDecorator(withMollyTheme)
  .addDecorator(withKnobs)
  .add('Text Input', () => {
    const TextInputWithValueState = withValueState(TextInput)
    return (
      <TextInputWithValueState
        label={text('Label', 'Label')}
        error={text('Error')}
        valid={boolean('Valid')}
        maxLength={number('Max Length')}
        onClearInput={action('input cleared')}
        placeholder={text('Placeholder', 'Placeholder')}
        disabled={boolean('Disabled')}
      />
    )
  })
  .add('Text Area', () => {
    const TextAreaWithValueState = withValueState(TextArea)
    return (
      <TextAreaWithValueState
        label={text('Label', 'Label')}
        error={text('Error')}
        valid={boolean('Valid')}
        maxLength={number('Max Length')}
        placeholder={text('Placeholder', 'Placeholder')}
        disabled={boolean('Disabled')}
      />
    )
  })
  .add('Checkbox', () => {
    const CheckBoxWithCheckedState = withCheckedState(Checkbox)
    return (
      <CheckBoxWithCheckedState
        type={select('Type', Object.values(TYPES), TYPES.PRIMARY)}
        label={text('Label', 'Label')}
        disabled={boolean('Disabled')}
        onClick={action('Checkbox clicked')}
      >
        {' '}
        Option{' '}
      </CheckBoxWithCheckedState>
    )
  })
  .add('Radio Button', () => {
    const RadioButtonWithCheckedState = withCheckedState(RadioButton)
    return (
      <RadioButtonWithCheckedState
        type={select('Type', Object.values(TYPES), TYPES.PRIMARY)}
        label={text('Label', 'Label')}
        disabled={boolean('Disabled')}
        onClick={action('Checkbox clicked')}
      >
        {' '}
        Option{' '}
      </RadioButtonWithCheckedState>
    )
  })
  .add('Radio Button Group', () => {
    const RadioButtonGroupWithValueState = withValueState(RadioButtonGroup)
    return (
      <RadioButtonGroupWithValueState
        type={select('Type', Object.values(TYPES), TYPES.PRIMARY)}
        label={text('Label', 'Label')}
        options={['Option 1', 'Option 2', 'Option 3']}
        disabled={boolean('Disabled')}
        name='radio'
      />
    )
  })
  .add('Toggle', () => {
    const ToggleWithCheckedState = withCheckedState(Toggle)
    return (
      <ToggleWithCheckedState
        type={select('Type', Object.values(TYPES), TYPES.PRIMARY)}
        label={text('Label', 'Label')}
        disabled={boolean('Disabled')}
        onClick={action('Checkbox clicked')}
      >
        {' '}
        Option{' '}
      </ToggleWithCheckedState>
    )
  })
  .add('Range', () => {
    const RangeWithValueState = withValueState(Range)
    return (
      <RangeWithValueState
        type={select('Type', Object.values(TYPES), TYPES.PRIMARY)}
        label={text('Label', 'Label')}
        disabled={boolean('Disabled')}
        max={100}
      />
    )
  })
  .add('Select', () => {
    const SelectWithSelectedState = withSelectedState(Select)
    return (
      <SelectWithSelectedState
        label={text('Label', 'Label')}
        options={{ 0: 'Option 1', 1: 'Option 2' }}
        placeholder='Placeholder'
        disabled={boolean('Disabled')}
      ></SelectWithSelectedState>
    )
  })

storiesOf('Complete Form', module)
  .addDecorator(withMollyTheme)
  .add('with all', () => <Form />)

import React from 'react'
import { render } from '@testing-library/react'
import Sample from './Sample'

describe('Sample Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Sample />)
    expect(asFragment()).toMatchSnapshot()
  })
})

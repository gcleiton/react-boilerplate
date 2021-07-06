import React from 'react'

import * as Styles from './home.styles'

const Home: React.FC = () => {
  return (
    <Styles.Container>
      <Styles.StyledIcon name="reactLogo" />
      <Styles.Title>React Boilerplate</Styles.Title>
      <Styles.Subtitle>
        A personal boilerplate that I use in my React applications
      </Styles.Subtitle>
    </Styles.Container>
  )
}

export default Home

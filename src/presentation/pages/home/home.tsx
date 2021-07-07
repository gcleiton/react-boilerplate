import React from 'react'
import { FaGithub } from 'react-icons/fa'

import * as Styles from './home.styles'

const Home: React.FC = () => {
  return (
    <>
      <Styles.Container>
        <Styles.Main>
          <Styles.StyledIcon name="reactLogo" />
          <Styles.Title>React Boilerplate</Styles.Title>
          <Styles.Subtitle>
            A personal boilerplate that I use in my React applications
          </Styles.Subtitle>
        </Styles.Main>

        <Styles.Footer>
          Developed by &nbsp;
          <a
            href="https://github.com/gcleiton"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            gcleiton
          </a>
        </Styles.Footer>
      </Styles.Container>
    </>
  )
}

export default Home

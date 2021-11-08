import React from 'react';

import { Link } from 'react-router-dom';
import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForksIcon,
  LinkButton,
  GithubIcon
} from './styles'

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className={'username'} to={'/batrizz'}>
          batrzz
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={'/batrizz/tsnacks'}>
          tsnacks
        </Link>
      </Breadcrumb>

      <p>Site para o controle de snacks consumidos pela Timeware</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>

        <li>
          <ForksIcon />
          <b>2</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/batrizz/tsnacks'}>
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  )
}

export default Repo

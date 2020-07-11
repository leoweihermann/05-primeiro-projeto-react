import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github.</Title>
    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>
    <Repositories>
      <a href="tteste">
        <img
          src="https://avatars1.githubusercontent.com/u/61358593?s=460&u=8f6ce4b77fdd860ebf0e423f632394bc3005a082&v=4"
          alt="Leonardo"
        />
        <div>
          <strong>leoweihermann</strong>
          <p>leonardo weihermann o poderoso lindão</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="tteste">
        <img
          src="https://avatars1.githubusercontent.com/u/61358593?s=460&u=8f6ce4b77fdd860ebf0e423f632394bc3005a082&v=4"
          alt="Leonardo"
        />
        <div>
          <strong>leoweihermann</strong>
          <p>leonardo weihermann o poderoso lindão</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="tteste">
        <img
          src="https://avatars1.githubusercontent.com/u/61358593?s=460&u=8f6ce4b77fdd860ebf0e423f632394bc3005a082&v=4"
          alt="Leonardo"
        />
        <div>
          <strong>leoweihermann</strong>
          <p>leonardo weihermann o poderoso lindão</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;

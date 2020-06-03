import React from 'react';
import { FaMotorcycle, FaCar } from 'react-icons/fa';
import Header from '../../components/Header/style';
import Container from '../../components/Container/style';
import Box from '../../components/Box/style';
import Wrapper from '../../components/Wrapper/style';
import List from '../../components/List/style';
import Input from '../../components/Input/style';
import FieldGroup from '../../components/FieldGroup/style';
import Field from '../../components/Field/style';
import Select from '../../components/Select/style';
import Form from '../../components/Form/style';
import Button from '../../components/Button/style';
import SearchItem from '../../components/SearchItem/style';

const Home = () => (
  <Container>
    <Header>
      <h1>Webmotors</h1>
    </Header>
    <Box>
      <Wrapper>
        <List>
          <SearchItem>
            <FaCar size={30} />
            <span>
              <small>comprar</small>
              <br />
              CARROS
            </span>
          </SearchItem>
          <SearchItem>
            <FaMotorcycle size={30} />
            <span>
              <small>comprar</small>
              <br />
              MOTOS
            </span>
          </SearchItem>
        </List>
        <Button bgColor="transparent" borderColor="#dcdc09" color="#dcdc09" type="button">Vender meu carro</Button>
      </Wrapper>
      <div style={{ background: '#fff' }}>
        <Form>
          <fieldset>
            <FieldGroup>
              <Field>
                <Input type="checkbox" name="new" variant="primary" />
                <legend>Novos</legend>
              </Field>
              <Field>
                <Input type="checkbox" name="old" />
                <legend>Usados</legend>
              </Field>
            </FieldGroup>
            <FieldGroup>
              <Field>
                <Input type="text" name="location" />
              </Field>
              <Field>
                <Select>
                  <option>Raio</option>
                </Select>
              </Field>
              <Field>
                <Select>
                  <option>Marca</option>
                </Select>
              </Field>
              <Field>
                <Select>
                  <option>Modelo</option>
                </Select>
              </Field>
            </FieldGroup>
            <FieldGroup>
              <Field>
                <Select>
                  <option>Ano</option>
                </Select>
              </Field>
              <Field>
                <Select>
                  <option>Faixa de Preço</option>
                </Select>
              </Field>
              <Field>
                <Select>
                  <option>Versão</option>
                </Select>
              </Field>
            </FieldGroup>
          </fieldset>
          <Button type="submit">VER OFERTAS</Button>
        </Form>
      </div>
    </Box>
  </Container>
);

export default Home;

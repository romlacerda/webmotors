import React, { useEffect, useState } from 'react';
import { FaMotorcycle, FaCar } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import Box from '../../components/Box/style';
import Wrapper from '../../components/Wrapper/style';
import List from '../../components/List/style';
import { InputText, InputCheckbox } from '../../components/Input/style';
import FieldGroup from '../../components/FieldGroup/style';
import Field from '../../components/Field/style';
import Select from '../../components/Select/style';
import Form from '../../components/Form/style';
import Button from '../../components/Button/style';
import SearchItem from '../../components/SearchItem/style';
import api from '../../services/api';
import Row from '../../components/Row/style';
import ButtonContainer from '../../components/ButtonContainer/style';

const Filter = () => {
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [versions, setVersions] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedVersion, setSelectedVersion] = useState('');

  const [selectedCategory, setSelectedCategory] = useState(0);

  useEffect(() => {
    api.get('make').then((response) => {
      setMakes(response.data);
    });
  }, []);

  useEffect(() => {
    if (selectedMake.length === 0) {
      return;
    }

    api.get('model', {
      params: {
        MakeID: selectedMake,
      },
    }).then((response) => {
      setModels(response.data);
    });
  }, [selectedMake]);

  useEffect(() => {
    if (selectedModel.length === 0) {
      return;
    }

    api.get('version', {
      params: {
        ModelID: selectedModel,
      },
    }).then((response) => {
      setVersions(response.data);
    });
  }, [selectedModel]);

  function handleSelectMake(e) {
    const make = e.target.value;
    setSelectedMake(make);
  }

  function handleSelectModel(e) {
    const model = e.target.value;
    setSelectedModel(model);
  }

  function handleSelectVersion(e) {
    const version = e.target.value;
    setSelectedVersion(version);
  }

  function handleSubmit(e) {
    e.preventDefault();
    api.get('vehicles', {
      params: {
        page: 1,
      },
    }).then((response) => {
      console.log(response.data);
    });
  }

  function handleSelectCategory(category) {
    setSelectedCategory(category);
  }

  function handleClearSelecteds(e) {
    e.preventDefault();
    setSelectedMake('');
    setSelectedModel('');
    setSelectedVersion('');
    setModels([]);
    setVersions([]);
  }

  return (
    <Box>
      <Wrapper>
        <List>
          <SearchItem onClick={() => handleSelectCategory(0)} className={selectedCategory === 0 ? 'active' : ''}>
            <FaCar size={30} />
            <span>
              <small>comprar</small>
              <br />
              CARROS
            </span>
          </SearchItem>
          <SearchItem onClick={() => handleSelectCategory(1)} className={selectedCategory === 1 ? 'active' : ''}>
            <FaMotorcycle size={30} />
            <span>
              <small>comprar</small>
              <br />
              MOTOS
            </span>
          </SearchItem>
        </List>
        <Button type="submit" variant="outlined" color="secondary" size="big" sell>Vender meu carro</Button>
      </Wrapper>
      <div style={{ background: '#fff' }}>
        <Form onSubmit={handleSubmit}>
          <fieldset>
            <FieldGroup type="checkbox">
              <Field w="10%" flex="0">
                <InputCheckbox name="new" variant="primary" />
                <legend>Novos</legend>
              </Field>
              <Field w="10%" flex="0">
                <InputCheckbox name="old" />
                <legend>Usados</legend>
              </Field>
            </FieldGroup>
            <FieldGroup content="space-between">
              <Field flex="1.67" style={{ marginRight: '0' }}>
                <label htmlFor="location">
                  <GrLocation />
                  Onde:
                </label>
                <InputText name="location" />
              </Field>
              <Field flex="0.46">
                <Select>
                  <option>Raio</option>
                </Select>
              </Field>
              <Field>
                <label htmlFor="make">Marca:</label>
                <Select
                  onChange={handleSelectMake}
                  value={selectedMake}
                  hasLabel
                >
                  <option value="null">Todas</option>
                  { makes.map((make) => (
                    <option key={make.ID} value={make.ID}>
                      { make.Name }
                    </option>
                  ))}
                </Select>
              </Field>
              <Field>
                <label htmlFor="model">Modelo:</label>
                <Select
                  onChange={handleSelectModel}
                  value={selectedModel}
                  hasLabel
                >
                  <option value="null">Todos</option>
                  { models.map((model) => (
                    <option key={model.ID} value={model.ID}>
                      { model.Name }
                    </option>
                  ))}
                </Select>
              </Field>
            </FieldGroup>
            <FieldGroup content="space-between">
              <Field flex="1">
                <Select defaultValue="">
                  <option value="" disabled>Ano desejado</option>
                </Select>
              </Field>
              <Field flex="1">
                <Select>
                  <option>Faixa de Preço</option>
                </Select>
              </Field>
              <Field flex="2">
                <label htmlFor="version">Versão:</label>
                <Select
                  onChange={handleSelectVersion}
                  value={selectedVersion}
                  hasLabel
                >
                  <option value="null">Todas</option>
                  { versions.map((version) => (
                    <option key={version.ID} value={version.ID}>
                      { version.Name }
                    </option>
                  ))}
                </Select>
              </Field>
            </FieldGroup>
          </fieldset>
          <ButtonContainer>
            <Button type="submit" variant="contained" color="primary" size="big">VER OFERTAS</Button>
            <Button variant="alternative" color="primary" onClick={handleClearSelecteds}>Limpar filtros</Button>
          </ButtonContainer>
        </Form>
      </div>
    </Box>
  );
};

export default Filter;

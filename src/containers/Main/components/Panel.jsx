import React, { memo } from 'react';
import { Card, Typography, Button, Select, MenuItem } from '../../../components';
import COUNTRIES from '../../../commons/constants/countries';
import { CardPanelContentStyled, ItemStyled, ButtonStyled, LabelCardStyled } from './style';

const navigatorHasShare = navigator.share

function Panel({ updateAt, onChange, data, country }) {
  const { cases, recovered, deaths, todayCases, todayDeaths } = data;

  const getValue = (value) => value >= 0 && (value).toLocaleString('pt-BR');

  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <ItemStyled>
        <div>{country.label}</div>
        <img src={country.flag} alt={`País-${country.label}`} />
      </ItemStyled>
    </MenuItem>
  )

  const textCovid19 =
  `País: ${country}\n
    - Total de casos: ${getValue(cases)}
    - Óbitos hoje: ${getValue(todayDeaths)}
    - Casos hoje: ${getValue(todayCases)}
    - Total de óbitos: ${getValue(deaths)}
    - Recuperados: ${getValue(recovered)}`

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19)
  }

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid19 - ${country}`,
      text: textCovid19
      // url: ''
    })
  }

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  )

  const renderCopyButton = (
    <div>
      <ButtonStyled>
        <Button variant="contained" color="primary" onClick={copyInfo}>
          Copiar
        </Button>
      </ButtonStyled>
    </div>
  )

  return (
    <Card>
      <CardPanelContentStyled>
        <div>
          <LabelCardStyled variant="h5" component="span" color="primary">COVID19</LabelCardStyled><br />
          <Typography variant="h6" component="span" color="primary">Painel Coronavírus</Typography><br />
          <Typography variant="body2" component="span" color="primary">Atualizado em: {updateAt}</Typography>
          <div className="pt-2">
            <Select onChange={onChange} value={country}>
              {COUNTRIES.map(renderCountries)}
            </Select>
          </div>
        </div>
        { navigatorHasShare ? renderShareButton : renderCopyButton }
      </CardPanelContentStyled>
    </Card>
  )
}

export default memo(Panel)

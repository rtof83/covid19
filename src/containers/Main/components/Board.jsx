import React, { memo } from 'react';
import { Grid, Skeleton } from '../../../components';
import Card from './Card';

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data;
  const md = 4;
  const xs = 12;

  const getValue = (value) => value >= 0 ? (value).toLocaleString('pt-BR') : <Skeleton variant="text" width={182} height={60} />

  return (
    <Grid container spacing={4}>
      <Grid item xs={xs} md={md}>
        <Card value={getValue(cases)} label="Total de casos" color="#5d78ff" />
      </Grid>
      <Grid item xs={xs} md={md}>
        <Card value={getValue(todayDeaths)} label="Óbitos hoje" color="#F7B829" />
      </Grid>
      <Grid item xs={xs} md={md}>
        <Card value={getValue(todayCases)} label="Casos hoje" color="#000" />
      </Grid>
      <Grid item xs={xs} md={md}>
        <Card value={getValue(deaths)} label="Total de óbitos" color="#E95078" />
      </Grid>
      <Grid item xs={xs} md={md}>
        <Card value={getValue(recovered)} label="Total de recuperados" color="#67C887" />
      </Grid>
    </Grid>
  )
}

export default memo(Board)

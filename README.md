# Mapa Interativo da Comgás com D3.js

## Introdução

&emsp;O objetivo desta ponderada é desenvolver alguma representação gráfica utilizando D3.js com dois possíveis temas: uma representação para o projeto do módulo ou uma representação para a galeria de CC. Nesta atividade, nós optamos por desenvolver uma representação gráfica para o projeto do módulo, que consiste em um mapa com as cidades onde a Comgás tem permissão para atuar.

## Objetivo

&emsp;O mapa é interativo e permite ao usuário visualizar informações adicionais sobre cada cidade ao passar o mouse sobre a região correspondente. Além disso, todo o mapa contém uma representação visual, que quanto mais verde a região, mais longe ela está de atingir o TAE (Tempo de Atendimento Eficiente) e quanto mais vermelho a região está mais perto de atingir o TAE. O vermelho intenso indica que a região já atingiu o TAE máximo. Vale ressaltar que o TAE para atendimentos de falta de gás é de 4 horas (240m) e para atendimentos de vazamento de gás é de 1 hora (60m).

&emsp;Os valores exibidos são acumulativos, considerando o período entre o primeiro dia do mês selecionado até o dia definido no _slider_. O usuário também pode selecionar o mês e o ano que deseja visualizar os dados. Na raíz do projeto, existe dados mockados **apenas** para o mês de março de 2025, mas o código está preparado para receber dados de qualquer mês e ano. Para isso, basta alterar os valores no arquivo `mockData.json` e o gráfico irá se adaptar automaticamente.

## GIF da aplicação

![GIF](./Gravaodetela1online-video-cutter.com-ezgif.com-video-to-gif-converter.gif)

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
- D3.js

## Integrantes

- Gabriel Scarpelin
- Davi Basã
- João Cherry

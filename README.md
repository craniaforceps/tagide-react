# .tágide

## Logs

### 12/05/2025

Neste momento estão 9 APIs integradas: europeana, art institute of chicago, bhagavad gita, cat api, bible-api, fbi-wanted, weather-api

Os próximos passos passam por:

- Organizar o diretório de ficheiros
- Refatorizar código;
- Integrar axios com react query e depois os loaders do react-router;

Folders organizados.
Código a ser refatorizado (poem, bible, cat e artic, já estão).
React Query e Axios estão integrados, os loaders vão ter de ser pensados estrategicamente.

## Organização

- src/api/https.js - um ficheiro com todos os axios instance por API, por enquanto sem interceptors;
- src/components - com ficheiros de todos os componentes, terão de ser feitos subdiretórios (API components, etc)
- src/hooks - com ficheiros individuais com todos os hooks de react-query;
- src/services - com os fetchs para cada API;

no fundo os folders services e api servem de suporte para que nos hooks cada API possa ser chamada

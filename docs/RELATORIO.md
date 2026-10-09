# Relatório de entrega — 09/10/2026

## Resultado e decisões
Reestruturação integral em HTML, CSS e JavaScript nativos: composição editorial, preto profundo e verde-lima discreto, fonte Manrope local, imagens reais, ausência de animação contínua. A primeira dobra apresenta especialidades comprovadas e o vídeo Portfolio Nandrade 2024 existente. Nenhum arquivo do projeto anterior foi removido: a pasta de trabalho estava vazia. O site Canva permanece intacto.

## Conteúdo e funcionalidades
- Seleção principal: A Rosa, Movimentos Marinhos e Você me concede essa dança?.
- Arquivo com oito trabalhos adicionais; filtros Todos, Filmes, Edição & conversas e Fotografia.
- Onze cases com título, resultado, contexto, participação individual, datas quando confirmadas, créditos e projetos relacionados.
- Modais nativos com Escape, fechamento, foco inicial e restauração de foco. Páginas HTML reais de case servem de alternativa e permitem links diretos e navegação sem JavaScript.
- Vídeo de portfólio local de aproximadamente 23 MB, carregado somente após interação; preload none, controles nativos, sem autoplay e com poster. Sua reprodução real foi observada no navegador, com readyState 4 e avanço do tempo.
- YouTube usa incorporação nocookie inserida por clique, sem autoplay. A Rosa carregou o player e o título oficial. O link externo permanece acessível como alternativa.
- Fotografias ampliáveis com fonte real, proporções e dimensões preservadas; retrato profissional real de Natália.
- Serviços, sobre e processo editorial proposto, sem afirmar que cada trabalho possui fluxo idêntico.
- WhatsApp 5515981176111, e-mail nandradefotos@gmail.com e redes confirmadas, sem formulário fictício.
- HTML pt-BR, título/descrição, favicon, canonical do endereço Sites confirmado, Open Graph, imagem 1200 × 630, sitemap, robots e uma página específica para cada case.
- Foco visível, link para pular conteúdo, navegação por teclado, HTML semântico, botões reais e prefers-reduced-motion.

## Arquivos
Criados: `src/index.html`, `src/styles.css`, `src/app.js`, `src/content.mjs`, `src/image-dimensions.json`; `scripts/build.mjs`, `scripts/serve.mjs`, `scripts/check.mjs`, `scripts/prepare-assets.py`, `scripts/share-image.py`; `package.json`, `.gitignore`, `README.md`, documentação e `.openai/hosting.json`. Gerados: página inicial, onze páginas em `dist/cases/`, robots, sitemap, fonte local, mídia e imagens WebP. Recuperados: imagens originais, metadados YouTube e vídeo original em `originals/`. Nenhum arquivo existente removido.

## Verificações e resultados
| Verificação | Resultado |
|---|---|
| Build estático e análise de sintaxe JavaScript | Passou |
| Links internos, âncoras, IDs únicos, imagens e caminhos dos cases | Passou |
| 320 px | Sem overflow; nenhum elemento do main fora da largura |
| 375 px | Sem overflow; nenhum elemento do main fora da largura |
| 430 px | Sem overflow; nenhum elemento do main fora da largura |
| 768 px | Sem overflow; nenhum elemento do main fora da largura |
| 1024 px | Sem overflow; nenhum elemento do main fora da largura |
| 1440 px | Sem overflow; nenhum elemento do main fora da largura |
| 1920 px | Sem overflow; nenhum elemento do main fora da largura |
| Onze modais de projeto | Abrem o título correto e não têm overflow interno na largura testada |
| Escape e foco | Modal fecha; foco retorna ao projeto acionado |
| Menu mobile | Abre, fecha por Escape e fecha após selecionar Contato; hash correto |
| Filtro Fotografia | Exibe os dois projetos corretos e anuncia a contagem |
| Filtro Todos | Restaura os oito projetos do arquivo |
| Vídeo local | Reprodução confirmada pelo controle nativo, readyState 4, tempo avançando |
| YouTube sob demanda | Iframe correto inserido por clique; player oficial A Rosa acessível |
| Carregamento inicial | Zero elementos video ou iframe antes de interação |
| Console do aplicativo | Nenhum erro ou aviso capturado durante a sequência testada |
| Recursos locais | Sem caminhos inexistentes nos testes de integridade |

As inspeções visuais foram feitas no navegador integrado e incluíram a primeira dobra, layout mobile, galeria e player. As dimensões são as do viewport real aplicado pelo controle de navegador; scrollWidth ficou abaixo da largura em todos os sete testes. As imagens têm dimensões reais registradas para reservar espaço. Os números acima não são uma pontuação Lighthouse.

## Limitações e pendências
Lighthouse, LCP, INP, CLS, auditoria completa com tecnologia assistiva e comparação entre navegadores não foram executados; não são alegadas metas de Core Web Vitals atingidas. Não foram enviadas mensagens de teste a Natália nem realizados testes de entrega de e-mail/WhatsApp. Os destinos correspondem aos contatos publicados. A publicação privada não expõe o site a clientes; liberar acesso público é uma configuração posterior explícita. A indexação e os previews sociais dependem do acesso público.

O site original não confirmou motion design nem VSL; essas ofertas foram omitidas. Não foram inventados preços, prazos, softwares dominados, resultados, depoimentos nem créditos. Projetos com poucos dados foram apresentados somente com o contexto conhecido e seu link original. A situação atual dos vínculos profissionais e de Movimentos Marinhos deve ser confirmada pela autora antes de divulgação ampla. O nome Nicholas Deloier foi obtido do título oficial YouTube (o Canva apresenta variantes Deloir/Nick Deloir).

## Execução e publicação
Na pasta `nandrade`, execute `npm run build`, `npm run check` e `npm start`. Abra http://127.0.0.1:4173. Não há dependências para instalar. Publicação por Sites reutiliza `.openai/hosting.json`; para outro servidor estático, hospede o conteúdo de `dist/` e atualize o endereço confirmado em `src/content.mjs` antes do build. Mais detalhes em `README.md`.

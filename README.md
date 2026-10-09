# Nandrade — portfólio audiovisual

Site estático, sem dependências de produção, criado a partir do portfólio publicado de Natália de Andrade Ribeiro. Arquivos originais preservados em `originals/`; imagens de apresentação usam cópias WebP. A identidade e os créditos vêm do Canva e dos metadados oficiais dos vídeos.

## Executar localmente
Requer Node.js 18 ou superior. Abra um terminal nesta pasta e execute:

```powershell
npm run build
npm run check
npm start
```

Abra http://127.0.0.1:4173. Não há instalação de pacotes. Abra pelo servidor; arquivos locais file:// não executam módulos JavaScript corretamente.

## Estrutura
- `src/index.html`: estrutura semântica da página.
- `src/styles.css`: tokens, composição, responsividade e reduced-motion.
- `src/content.mjs`: identidade, contato, projetos, serviços e fotografias.
- `src/app.js`: menu, filtros, modal, player, ampliação de fotografia e foco.
- `src/image-dimensions.json`: dimensões reais das imagens, usadas pelo gerador.
- `scripts/build.mjs`: gera a página inicial, 11 páginas de case, robots e sitemap.
- `scripts/serve.mjs`: servidor local para revisão.
- `scripts/check.mjs`: integridade de links, ativos, títulos e páginas.
- `dist/`: versão pronta para hospedar, incluindo os ativos.
- `originals/`: cópias intactas das imagens e do vídeo recuperados; não precisa ser publicado no servidor estático.
- `docs/`: auditoria, relatório, inventário de fontes e licença Manrope.
- `.openai/hosting.json`: identidade Sites e configuração estática.

## Atualizar conteúdo
Edite `src/content.mjs` e execute o build. O contato principal também aparece no template `src/index.html`; sincronize essa área ao alterar e-mail, WhatsApp ou redes. As seções usam somente serviços confirmados. Motion design e VSL não foram anunciados como competências porque o acervo acessado não confirmou esses serviços.

Para acrescentar uma imagem, preserve o original, gere uma cópia WebP em `dist/assets/`, registre suas dimensões em `src/image-dimensions.json` e adicione os dados do projeto. Os utilitários Python usam Pillow e o runtime já disponível neste computador, mas não são necessários para servir ou fazer o build da versão entregue. `prepare-assets.py` mantém o material original e consulta metadados oficiais do YouTube; não modifica o original. Confira a rede antes de executar sua recuperação opcional.

As legendas Retrato e luz, Cor e presença, Encontros e Gestos são títulos editoriais para a curadoria, e não nomes de clientes ou de ensaios atribuídos à autora. As funções individuais e a direção de Amanda Íris foram mantidas no case Movimentos Marinhos. Não há depoimentos, métricas nem clientes inventados.

## Publicação
Site público: https://nandrade-portfolio.onrender.com

Repositório: https://github.com/Wellszinho/nandrade-portfolio

A hospedagem pública usa Render Static Site e o repositório `Wellszinho/nandrade-portfolio`. Configure `npm run build && npm run check` como build e `dist` como pasta publicada. O build usa automaticamente o endereço fornecido pelo Render (`RENDER_EXTERNAL_URL`) em canonical, Open Graph, robots e sitemap. Para um domínio próprio, defina `SITE_URL`, que tem prioridade. O arquivo `render.yaml` registra essa configuração e a atualização automática após commits em main.

A versão de revisão é publicada via Sites em modo privado. A identidade está registrada no manifesto; reutilize esse projeto em atualizações. O fluxo Sites sincroniza o código, gera um pacote da pasta `dist` e publica a versão salva. Não recrie o Site nem altere seu ID.

Para hospedagem estática em outro provedor, envie apenas o conteúdo de `dist/`, preservando a pasta `cases/` e `assets/`. Ao confirmar um novo domínio, atualize `profile.siteUrl` em `src/content.mjs` e execute `npm run build` para corrigir canonical, Open Graph e sitemap. Configure MIME para `.mjs` como JavaScript e suporte a requisições Range para vídeo. A hospedagem estática do Sites fornece essa infraestrutura.

O Render oferece o endereço público para clientes. A versão de revisão no Sites permanece privada. O site original no Canva não foi editado e continua disponível.

## Informações a confirmar
Contatos e redes foram encontrados e estão configurados. Antes da divulgação ampla, vale atualizar a biografia profissional, o estado de Movimentos Marinhos e confirmar os nomes/links de eventuais projetos novos. Se desejar anunciar motion ou VSL, forneça peças e seus créditos. Um domínio próprio é opcional. Não existe formulário nem envio fictício: WhatsApp e e-mail são os destinos reais.

## Limites de validação
Leia `docs/RELATORIO.md`. A validação funcional e visual foi feita no navegador disponível. Não há pontuação Lighthouse nem medição de Core Web Vitals em condições móveis de rede real, e não foi executada uma auditoria com leitor de tela humano. Não é alegado atendimento integral à WCAG. A disponibilidade futura de YouTube, Instagram, Spotify, Behance e LinkedIn é controlada por esses serviços.

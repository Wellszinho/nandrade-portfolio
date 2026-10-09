# Auditoria anterior à implementação — 09/10/2026

## Ambiente local
A pasta nsites estava vazia, inclusive sem arquivos ocultos de projeto. Não havia framework, dependências, build, componentes, estilos ou acervo local para alterar. Nenhum arquivo existente foi removido. A solução criada é estática, com HTML semântico, CSS e JavaScript nativos e um gerador Node sem dependências.

## Fonte confirmada
https://nandrade.my.canva.site/ foi acessado no navegador. A ferramenta de leitura web não conseguiu acessá-lo; a análise foi feita sobre DOM e screenshots reais. Foram visitadas as páginas inicial, Sobre, Edição, Fotografia, Projetos e Contato.

Identidade: Nandrade / Natália de Andrade Ribeiro. Formação em Produção Audiovisual na FAPCOM, atuação publicada no Estúdio Preto e Branco, edição do podcast Close Friends e fotografia. Contatos publicados: nandradefotos@gmail.com, (15) 981176111, Instagram nandradephotos, Behance natliaribeiro2 e LinkedIn. A biografia e vínculos profissionais refletem o site publicado; confirmar sua atualidade antes de divulgação ampla.

## Achados
- Site Canva baseado em composições posicionadas, com textos em parágrafos em lugar de uma hierarquia h1/h2.
- Links de projetos e redes associados a imagens sem nomes acessíveis.
- Galeria de edição com espaços extensos, pouca informação visível e reprodução externa.
- Textos longos e pequenos; no carregamento de Projetos há trechos com baixo contraste/transição escura.
- Fotografia alterna para fundo branco; falta continuidade do sistema entre áreas.
- Múltiplos vídeos e iframes carregados durante a navegação. Não foi medida transferência total nem Core Web Vitals do original.
- Canva possui navegação por hash. URLs externas reais serão preservadas.
- Validação do original em 375px foi tentada, mas o controle de viewport expirou; não há conclusão confiável sobre responsividade do original.

## Curadoria e preservação
A Rosa (direção, roteiro, produção, edição; 2025), Movimentos Marinhos (dir. Amanda Íris; assistência de direção, edição, produção e social media; iniciado em 2024) e Você me concede essa dança? (direção, roteiro, edição; 2021) compõem a seleção principal, por clareza de contribuição, diversidade e relevância narrativa. A Rosa usa o vídeo incorporado confirmado 0x2chpmUzfM. Também serão mantidos Loucos em Paixões, Primeiro Palco, Transgressão do Corpo, Feira Beco do Inferno, Maria e as Terças-Feiras, Cultverso, Lovely e Close Friends.

Imagens observadas foram recuperadas para originals, sem alterar seus bytes; cópias WebP são usadas no site. O inventário-canva.json registra origens. Links e mídias que não têm contexto individual suficiente permanecem no acervo de referência, sem atribuição inventada. Nenhum showreel novo, estatística, marca, depoimento, VSL ou serviço de motion será fabricado. A mídia publicada como Portfolio Nandrade 2024 será oferecida com esse nome e carregada sob demanda.

## Decisão de design
Base Industrial, adaptada à direção cinematográfica solicitada: superfícies #0B0B0D, #151518 e #202024, regras finas e acento #C6F36A. A orientação tipográfica expressiva do briefing prevalece sobre a restrição monoespaçada do skill: Manrope para títulos e corpo; mono apenas em índices. Gesto principal: título em duas linhas e um grande frame real, seguido por seleção editorial assimétrica; projetos verticais preservam sua proporção. Sem fotos artificiais, fundos genéricos, neon, gradientes ou bibliotecas de animação.

## Plano implementável
Hero com fotografia real, acesso ao reel existente, assinatura, seleção e arquivo completo com filtros e modal nativo, edição, fotografia, serviços comprovados, sobre, percurso de colaboração proposto, contato real e rodapé. Modal de case mostra resultado, contexto e contribuição confirmada, mantendo links externos e créditos. Acessibilidade, carregamento por interação, foco, reduced-motion e fallback integram a estrutura.

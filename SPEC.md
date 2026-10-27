# Mate Borg — Spec

## Conceito
- Hack de Mörk Borg (base mantida; mate, cavalo e frio são regras novas).
- Pampas de fantasia sombria, base visual do séc. XIX.
- Fim do mundo: um **fungo mata a erva-mate**. A erva que sobra é contaminada.
- Tom: Mörk Borg padrão. Escravidão e guerra são pano de fundo real, sem humor.
- PT-BR, gauchês moderado, termos indígenas (guarani e outros) para estranhamento.
- Texto 100% próprio. Crédito da licença de terceiros do Mörk Borg na última página.

## Regras
- Atributos: Força, Agilidade, Presença, Tolerância.
- Núcleo: d20 contra DR 12, armadura em tiers, tabela de **Quebrado** com marcas de fungo.
- **Mate** substitui Omens. Começa com d4 doses. A dose é a única moeda.
  - 1 dose: cura d6 PV, ou repete 1 teste ruim, ou paga 1 Benzedura.
  - Descansar gasta 1 dose por dia. Sem dose: +1 Cansaço.
- Poderes viram **Benzeduras**.
- **Avanço do Fungo**: contador 0–10. +1 a cada 3 dias, mais d6 acelerador. Eventos em 3, 6 e 9.
- **Cavalo**: PV, Velocidade, 1 traço (d12). Come capim. Sem água: -1 PV por dia.
- **Frio**: contador. Fogo, poncho e mate quente o reduzem.
- **Perigos do Dia**: d12.
- **Hirelings**: PV, 1 função, custo em doses por dia, teste de moral (Presença).

## Personagem
- 8 classes. 2 habilidades escolhidas de uma lista de 6 por classe.
- Classes: Peão, Benzedeira, Soldado Farrapo, Contrabandista, Caçador de Lobisomem, Ervateiro, Karaí, Guardião Charrua.
- Sem progressão. Morte = novo personagem. O mundo persiste. Legado opcional (1 item ou 1 dose).

## Solo (v1)
- Hexcrawl em branco, 1 hex = 1 dia.
- Roteiro do dia: clima → perigo → rumo → encontro → POI → consumo → Fungo.
- Oráculo d6: 1 Não, e… · 2 Não · 3 Não, mas… · 4 Sim, mas… · 5 Sim · 6 Sim, e…
- Palavras-semente (Ação + Tema).
- 1 personagem + cavalo. Hirelings pontuais.

## Bestiário
- 3–4 monstros grandes (Boitatá, Lobisomem). Tabela de ameaças menores (fungo-gente).

## Site
- Fonte `.md` em `src/content/docs/`, um arquivo por módulo. Astro Starlight no GitHub Pages.
- Visual próprio: verde-mate, preto, ferrugem, branco-geada.
- v1: rolador do dia + oráculo em JS. Sem ficha digital (journaling em caderno).

## Checklist
- [x] Grilling de design
- [x] Repositório criado
- [x] `04-viagem-solo.md` (rascunho 1)
- [ ] `03-regras.md` mínimo
- [ ] `02-personagem.md`
- [ ] `01-mundo.md`
- [ ] `05-bestiario.md`
- [ ] `06-tabelas.md`
- [x] Site Starlight + deploy (workflow pronto; Pages ativado)
- [x] Rolador do dia + oráculo (`src/components/Rolador.astro`)

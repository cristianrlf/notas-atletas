# 🤸 Notas de Atletas

Aplicação JavaScript que recebe o nome e as notas de atletas de ginástica artística, calcula a média válida (desconsiderando a maior e menor nota) e exibe os resultados no console.

## 📋 Sobre o Projeto

Em uma competição de ginástica artística, cinco jurados avaliam cada atleta com notas de 1 a 10, cada um responsável por um critério diferente:

- Tempo de duração da apresentação
- Originalidade da coreografia
- Postura do atleta
- Dificuldade das acrobacias
- Sincronismo

A regra da competição determina que a média final é calculada com base nas **três notas do meio**, desconsiderando a maior e a menor nota.

## 🚀 Como Executar

**Pré-requisitos:** Node.js instalado na máquina.

```bash
# Clone o repositório
git clone https://github.com/seuusuario/notas-atletas.git

# Acesse a pasta
cd notas-atletas

# Execute o arquivo
node notas-atletas.js
```

## 📊 Exemplo de Saída

```
Atleta: Cesar Abascal
Notas Obtidas: 7.88,8.42,9.34,10,10
Média Válida: 9.253333333333332

Atleta: Fernando Puntel
Notas Obtidas: 7,8,9.33,10,10
Média Válida: 9.11

Atleta: Daiane Jelinsky
Notas Obtidas: 7,8,9.5,9.5,10
Média Válida: 9

Atleta: Bruno Castro
Notas Obtidas: 9,9.5,10,10,10
Média Válida: 9.833333333333334
```

## 🧠 Lógica Implementada

1. **Ordenação** — as notas de cada atleta são ordenadas em ordem crescente usando Bubble Sort implementado manualmente
2. **Filtragem** — a maior e a menor nota são descartadas com `.slice(1, 4)`
3. **Cálculo da média** — a soma das 3 notas do meio é dividida por 3 usando `.forEach()`
4. **Exibição** — nome, notas ordenadas e média são exibidos no console

## 🛠️ Tecnologias

- JavaScript (ES6+)
- Node.js

## 📁 Estrutura do Projeto

```
notas-atletas/
└── notas.js
```

---

Projeto desenvolvido como parte do curso **DEVstart Tech** — Trilha de Lógica de Programação.

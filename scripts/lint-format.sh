#!/bin/bash

# Cores para saída no terminal
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Iniciando verificação de código...${NC}"

# Verificando se há erros de ESLint
echo -e "\n${YELLOW}Verificando problemas com ESLint...${NC}"
if npx next lint; then
  echo -e "${GREEN}✓ Nenhum problema encontrado com ESLint!${NC}"
else
  echo -e "${RED}✗ Problemas encontrados com ESLint!${NC}"
  echo -e "${YELLOW}Tentando corrigir automaticamente...${NC}"
  
  npx next lint --fix
  
  # Verificando novamente
  if npx next lint; then
    echo -e "${GREEN}✓ Todos os problemas com ESLint foram corrigidos!${NC}"
  else
    echo -e "${RED}✗ Alguns problemas com ESLint persistem e precisam ser corrigidos manualmente.${NC}"
  fi
fi

# Verificando formatação com Prettier
echo -e "\n${YELLOW}Verificando formatação com Prettier...${NC}"
if npx prettier --check "**/*.{js,jsx,ts,tsx,json,md,css,scss}"; then
  echo -e "${GREEN}✓ Código está formatado corretamente!${NC}"
else
  echo -e "${RED}✗ Problemas de formatação encontrados!${NC}"
  echo -e "${YELLOW}Formatando arquivos...${NC}"
  
  npx prettier --write "**/*.{js,jsx,ts,tsx,json,md,css,scss}"
  
  echo -e "${GREEN}✓ Formatação concluída!${NC}"
fi

echo -e "\n${GREEN}Verificação de código concluída!${NC}"
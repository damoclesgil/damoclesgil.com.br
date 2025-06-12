---
author: Dâmocles Gil Marçal
pubDatetime: 2025-29-03T10:15:00Z
title: Workspace Developer Organization
slug: dev-organization
featured: false
draft: false
tags:
  - windows
  - workspace
description: My Workspace Developer Organization
---

## 🗂️ My folder structure for disk "D:" or "C:\Users\nameUser"

![Folder Structure Windows](/assets/images/folder-structure-windows.png)

You can download: clique here to download ⬇️

### 🗂️ Detailed folders structure"

```txt
├── D:/
    ├── 👨🏻‍💻 Desenvolvimento/
    │   ├── Calculato 💼/
    │   └── Projetos/
    │       ├── elementus-website
    │       ├── damoclesgil.com.br
    │       └── lorycroche
    ├── 🎮 Jogos/
    │   ├── Steam/
    │   ├── Riot/
    │   ├── Lineage 2/
    │   └── Epic Games/
    ├── 📋 Documentos/
    │   ├── Text Files/
    │   ├── Presentations/
    │   ├── Word Documents/
    │   ├── Spreadsheets/
    │   └── PDFs/
    ├── 📚 Learning/
    │   ├── English/
    │   ├── Livros_E-Books/
    │   └── Programming/
    │       ├── Sandbox/
    │       ├── GO Lang
    │       ├── NodeJS
    │       ├── Typescript
    │       └── Javascript
    ├── 📷 Imagens/
    │   ├── Fotos/
    │   ├── Gif's/
    │   ├── Ícones/
    │   ├── Logos/
    │   ├── Screenshots/
    │   └── Wallpapers/
    │       ├── Mobile/
    │       └── Desktop/
    ├── ⚙️ Configurações/
    │   ├── Cursors/
    │   ├── Settings OBS/
    │   ├── Settings Terminal/
    │   ├── Folder Icons/
    │   └── .../
    ├── 🖥️ Programas/
    │   ├── Microsoft Office 2024/
    │   ├── StatusHolder/
    │   └── .../
    ├── 🎵 Músicas/
    │   ├── Records/
    │   ├── Tracks/
    │   └── Sound Effects/
    └── 🎥 Vídeos/
         ├── Recordings/
         ├── Movies/
         ├── Animes/
         └── Series/

```

Script para criar estrutura de pastas:

```
# Caminho raiz onde a estrutura será criada
$root = "D:\"

# Lista de pastas a serem criadas
$folders = @(
    "$root👨🏻‍💻 Desenvolvimento\Calculato 💼",
    "$root👨🏻‍💻 Desenvolvimento\Projetos\elementus-website",
    "$root👨🏻‍💻 Desenvolvimento\Projetos\damoclesgil.com.br",
    "$root👨🏻‍💻 Desenvolvimento\Projetos\lorycroche",

    "$root🎮 Jogos\Steam",
    "$root🎮 Jogos\Riot",
    "$root🎮 Jogos\Lineage 2",
    "$root🎮 Jogos\Epic Games",

    "$root📋 Documentos\Text Files",
    "$root📋 Documentos\Presentations",
    "$root📋 Documentos\Word Documents",
    "$root📋 Documentos\Spreadsheets",
    "$root📋 Documentos\PDFs",

    "$root📚 Learning\English",
    "$root📚 Learning\Livros_E-Books",
    "$root📚 Learning\Programming\Sandbox",
    "$root📚 Learning\Programming\GO Lang",
    "$root📚 Learning\Programming\NodeJS",
    "$root📚 Learning\Programming\Typescript",
    "$root📚 Learning\Programming\Javascript",

    "$root📷 Imagens\Fotos",
    "$root📷 Imagens\Gif's",
    "$root📷 Imagens\Ícones",
    "$root📷 Imagens\Logos",
    "$root📷 Imagens\Screenshots",
    "$root📷 Imagens\Wallpapers\Mobile",
    "$root📷 Imagens\Wallpapers\Desktop",

    "$root⚙️ Configurações\Cursors",
    "$root⚙️ Configurações\Settings OBS",
    "$root⚙️ Configurações\Settings Terminal",
    "$root⚙️ Configurações\Folder Icons",

    "$root🖥️ Programas\Microsoft Office 2024",
    "$root🖥️ Programas\StatusHolder",

    "$root🎵 Músicas\Records",
    "$root🎵 Músicas\Tracks",
    "$root🎵 Músicas\Sound Effects",

    "$root🎥 Vídeos\Recordings",
    "$root🎥 Vídeos\Movies",
    "$root🎥 Vídeos\Animes",
    "$root🎥 Vídeos\Series"
)

# Criar todas as pastas listadas
foreach ($folder in $folders) {
    New-Item -ItemType Directory -Force -Path $folder | Out-Null
}

Write-Host "✅ Estrutura de pastas criada com sucesso em $root"
```

<!-- ```txt
├── D:/
    ├── Development/
    ├── Games/
    ├── Notes & Files/
    ├── Learning/
    ├── Images/
    ├── Configs Windows/
    ├── Programas/
    └── Videos/
``` -->

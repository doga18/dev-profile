# 🚀 Como fazer Push do dev-profile para o GitHub

> O commit local já está feito. O token atual não tem permissão de escrita, então preciso que você envie manualmente.

---

## Opção 1 — Mais rápida (via seu terminal com credenciais próprias)

O repositório local já está inicializado e com commit feito em `F:\NodeJs\Fellow\dev-profile`. Basta:

```powershell
cd F:\NodeJs\Fellow\dev-profile

# Adicionar remote com SEU token (que tenha permissão Contents: Write)
git remote add origin https://SEU_TOKEN@github.com/doga18/dev-profile.git

# Fazer push
git push -u origin main
```

**Como gerar um token com permissão de escrita:**
1. Acesse <https://github.com/settings/personal-access-tokens/new>
2. **Note**: `dev-profile-push`
3. **Expiration**: 90 dias (ou sua preferência)
4. **Repository access**: Only select repositories → `doga18/dev-profile`
5. **Permissions → Repository permissions**:
   - Contents: **Read and write**
6. Generate token → copie

Depois rode:
```powershell
git remote add origin https://TOKEN_AQUI@github.com/doga18/dev-profile.git
git push -u origin main
```

---

## Opção 2 — Via interface web do GitHub (sem git local)

1. Acesse <https://github.com/new>
2. Repository name: `dev-profile`
3. Visibility: **Public**
4. **NÃO** marque "Add a README file", "Add .gitignore" ou "Choose a license"
5. Create repository
6. Você verá uma tela com instruções — escolha **"uploading an existing file"**

Depois, comprima o projeto e faça upload:

```powershell
# Criar ZIP (sem node_modules)
Compress-Archive -Path "F:\NodeJs\Fellow\dev-profile\*" -DestinationPath "$env:USERPROFILE\Desktop\dev-profile.zip" -Exclude node_modules
```

7. No GitHub, na tela de upload, arraste **todos os arquivos e pastas** do ZIP (descompacte primeiro).
8. Commit changes na interface web.

---

## Opção 3 — GitHub Desktop (mais visual)

1. Baixe <https://desktop.github.com/>
2. File → Add local repository → selecione `F:\NodeJs\Fellow\dev-profile`
3. O commit já existe. Clique em **Push origin**
4. Se pedir credenciais, faça login com sua conta GitHub

---

## ✅ Depois de subir

Me avise que eu:
- Marco o deploy como concluído na documentação
- Adiciono o link `https://profileowner.reparadone.com` ao README e ao `doga18/doga18` (perfil)
- Atualizo a próxima sessão para focar no deploy Vercel + DNS

---

**Dica de segurança**: depois de gerar e usar o token, delete-o em <https://github.com/settings/personal-access-tokens> se não for usar mais.
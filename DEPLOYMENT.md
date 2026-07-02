# 部署指南

本專案為標準 Next.js（App Router）應用，不依賴任何後端服務、資料庫或第三方 API 金鑰，因此部署流程相當單純。

## 建議方式：Vercel

[Vercel](https://vercel.com/) 是 Next.js 官方推薦的部署平台，對 App Router、Turbopack 與 Image Optimization 有原生支援。

### 步驟

1. 將專案推送至 GitHub（或 GitLab／Bitbucket）。
2. 於 [Vercel Dashboard](https://vercel.com/new) 選擇「Import Project」，選取此儲存庫。
3. Vercel 會自動偵測為 Next.js 專案，無需額外設定：
   - **Framework Preset**：Next.js
   - **Build Command**：`next build`（預設）
   - **Output Directory**：`.next`（預設）
4. （選用）設定環境變數，詳見下方「環境變數」。
5. 點選 Deploy，即可取得預覽網址（`*.vercel.app`）。

每次推送至主要分支（如 `main`）時，Vercel 會自動觸發重新部署；每個 Pull Request 也會自動產生獨立的預覽網址，方便審閱。

## 環境變數

本專案**目前不需要任何環境變數即可運行**（純前端原型，使用本地模擬資料）。

| 變數 | 必填 | 說明 |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | 選用 | 用於 SEO metadata（Open Graph／canonical URL）解析絕對網址。未設定時預設為 `http://localhost:3000`。部署至 Vercel 後，建議設為正式網域（例如 `https://your-project.vercel.app` 或自訂網域）。 |

可參考 [`.env.example`](./.env.example) 建立本地 `.env.local`（此檔案已被 `.gitignore` 排除，不會被提交）。

## 自訂網域

Vercel 專案部署完成後，可於 Project Settings → Domains 綁定自訂網域，並依指示設定 DNS（CNAME 或 A 記錄）。綁定完成後，記得同步更新 `NEXT_PUBLIC_SITE_URL` 環境變數，確保社群分享預覽圖與 metadata 使用正確網址。

## 其他部署平台

由於本專案不依賴 Vercel 專屬功能，理論上也可部署於任何支援 Node.js 的平台（例如 Netlify、Render、或自建伺服器），只需執行：

```bash
npm install
npm run build
npm run start
```

即可在支援的環境中啟動正式環境伺服器（預設監聽 3000 埠）。

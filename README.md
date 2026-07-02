# 騎樓共行平台

### Arcade Co-Walk Platform

打造人本、永續、智慧的街道環境——全民參與、店家協力、政府支持，讓街道變得更好。

---

## 專案概述

「騎樓共行平台」是一套聚焦台灣街道獨有的「騎樓」空間治理提案，透過公民回報、資料視覺化與跨部門協作機制，協助政府與店家分級改善騎樓通行問題，讓騎樓重新成為安全、暢通的公共通行空間。

本專案目前為**前端原型（Frontend Prototype）**，以完整的頁面流程與互動示範，呈現產品的核心體驗與資訊架構，尚未串接真實後端。

## 問題背景

- 依法騎樓應保持淨空，供行人、輪椅使用者與嬰兒車安全通行，屬於全民共有的公共動線。
- 實務上，騎樓經常被機車停放、貨物堆置、招牌外推與臨時施工材料佔用，通行淨寬大幅縮減。
- 當騎樓無法通行，行人、長者與身障者往往被迫繞行至車道，大幅提高交通事故風險。
- 長期以來，騎樓管理缺乏系統性的巡檢、通報與追蹤機制，導致占用問題難以有效改善。

## 產品理念

平台核心主張是「**還路於人**」——透過一套可持續運作的資料迴圈，讓騎樓治理從被動應對，轉為主動、可追蹤、可驗證的城市管理流程：

**發現問題 → 資料分析 → 分級改善 → 友善認證 → 持續優化**

並以三個互相支援的子系統作為架構基礎：

- **智慧治理中台**：整合通報案件與 AWI（騎樓可行走性指數）資料，協助政府單位分級排程。
- **公民參與入口**：民眾可回報問題、追蹤案件進度、參與街道改善方案投票。
- **友善騎樓合作機制**：結合店家自主改善誘因與友善認證標章，建立正向循環的合作模式。

## 核心使用族群

| 族群 | 需求 |
| --- | --- |
| 一般市民 / 行人 | 回報騎樓阻礙問題、追蹤處理進度、參與改善方案投票 |
| 店家 / 建物管理者 | 配合改善、申請友善騎樓認證，提升店家形象 |
| 政府單位 | 依資料分級排程稽查與改善資源，公開透明處理進度 |
| 社區組織 / 學校 / NGO | 在地倡議、教育推廣、協力監督長期成效 |

## 主要功能

### 首頁
整合計畫願景、案件總覽統計、參與協作流程、最新消息、投票預覽、協力夥伴與友善騎樓店家展示，作為平台入口。

### 互動地圖（`/map`）
以 Leaflet + OpenStreetMap 呈現真實街道地圖，標示各案件位置與處理狀態（已通報／處理中／已完成），支援狀態篩選，點選標記可查看案件詳情。

### 回報問題（`/report`）
三步驟回報流程：上傳照片（模擬 AI 阻礙類型判讀）→ 選擇地點（地圖點選 + 地址模擬定位）→ 填寫案件資訊，完成後產生案件編號。

### 案件詳情追蹤（`/cases/[id]`）
呈現案件現況照片、處理進度時間軸、案件基本資訊，並提供「追蹤此案件」互動功能。

### 參與投票（`/voting`）
呈現進行中與已結束的街道改善方案投票，即時顯示各選項得票比例，支援使用者參與投票。

### 最新消息（`/news`、`/news/[id]`）
提供計畫公告、活動資訊、成果報告的分類瀏覽與篩選，並可查看完整新聞內容。

### 計畫介紹（`/project`）
以視覺化方式說明問題背景、核心理念、平台架構、AWI 指數定義、治理流程與預期效益，作為對外說明頁面。

### 關於我們與聯絡（`/about`）
說明平台使命與重要性，並提供聯絡表單供外界提出想法或合作提議。

## 目前實作狀態

本專案目前為**純前端原型**，實作範圍與限制如下：

- [x] 完整頁面流程、響應式版面、互動元件與動畫皆已完成
- [x] 使用**本地模擬資料**（`data/` 目錄）模擬案件、新聞、投票等內容
- [x] 互動功能（投票、追蹤案件、回報表單、聯絡表單）皆為**前端本地狀態**，重新整理頁面後不會保留
- [x] 回報流程中的 AI 判讀、地址定位皆為**模擬結果**，非真實 AI 或地理編碼服務
- [ ] 尚未串接真實後端 API、資料庫或身份驗證
- [ ] 尚未支援真實圖片上傳、通知推播或後台管理系統

## 技術棧

| 類別 | 技術 |
| --- | --- |
| 框架 | [Next.js 16](https://nextjs.org/)（App Router + Turbopack） |
| UI 函式庫 | [React 19](https://react.dev/) |
| 語言 | [TypeScript](https://www.typescriptlang.org/)（strict mode） |
| 樣式 | [Tailwind CSS v4](https://tailwindcss.com/) |
| UI 元件 | [shadcn/ui](https://ui.shadcn.com/)（基於 [Base UI](https://base-ui.com/)）＋自建共用元件 |
| 地圖 | [Leaflet](https://leafletjs.com/) + [react-leaflet](https://react-leaflet.js.org/) + [OpenStreetMap](https://www.openstreetmap.org/) 圖磚 |
| 資料層 | 本地模擬資料（`data/`）＋ 服務層（`services/`），介面設計比照未來真實 API |
| 字型 | Noto Sans TC、Geist Mono（`next/font/google`） |

## 專案架構

```
app/            Next.js App Router 頁面（路由層，僅透過 services/ 取得資料）
components/
  ui/           shadcn/ui 基礎元件（Button、Card、Input...）
  shared/       跨頁面共用元件（Typography、EmptyState、SectionHeading...）
  layout/       Navbar、Footer 等版面元件
  home/         首頁專屬區塊元件
  map/          互動地圖相關元件（含 Leaflet 動態載入處理）
  report/       回報流程各步驟元件
  cases/        案件詳情頁元件
  voting/       投票卡片與互動元件
  news/         新聞卡片與篩選元件
  project/      計畫介紹頁各區塊元件
  about/        關於我們／聯絡我們元件
services/       資料存取層，所有頁面僅透過此層取得資料（未來可替換為真實 API）
data/           本地模擬資料（案件、新聞、投票、店家、統計數據）
types/          共用 TypeScript 型別定義
hooks/          共用 React hooks（本地互動狀態，如投票、追蹤案件）
lib/            工具函式與全域常數
public/         靜態資源（圖片、圖示）
```

**架構原則**：頁面元件（`app/`）僅透過 `services/` 取得資料，不直接匯入 `data/`；`services/` 的函式簽章刻意比照未來真實 API 的非同步介面（`async function`），未來若要串接真實後端，只需替換 `services/` 內部實作，頁面與元件邏輯不需更動。

## 設計說明

- **視覺主題**：以綠色為主色調的公民科技（civic-tech）風格，傳達永續、信任與行動力。
- **響應式版面**：所有頁面皆支援手機／平板／桌面三種斷點，並針對桌面版額外優化排版寬度與字級層級。
- **統一文字排版系統**：透過 `components/shared/typography.tsx` 定義全站一致的文字階層（Hero 標題／描述、區塊標題／描述、卡片標題／描述），確保各頁面視覺一致，未來調整字級只需修改單一檔案。
- **可重用元件**：卡片、狀態標籤、空狀態（Empty State）、載入骨架（Skeleton）等元件皆抽象為共用元件，避免各頁面重複實作。

## 本地開發

### 前置需求

- [Node.js](https://nodejs.org/) 20 以上版本
- npm（或相容的套件管理工具）

### 安裝依賴套件

```bash
npm install
```

### 啟動開發伺服器

```bash
npm run dev
```

開啟 [http://localhost:3000](http://localhost:3000) 即可預覽。

### 建置正式環境版本

```bash
npm run build
```

### 啟動正式環境伺服器

```bash
npm run start
```

## 可用指令

| 指令 | 說明 |
| --- | --- |
| `npm run dev` | 啟動開發伺服器（Turbopack） |
| `npm run build` | 建置正式環境版本 |
| `npm run start` | 啟動已建置的正式環境伺服器 |
| `npm run lint` | 執行 ESLint 程式碼檢查 |

## 部署計畫

本專案建議部署於 [Vercel](https://vercel.com/)（Next.js 官方推薦平台），未來亦可綁定自訂網域。詳細部署步驟請參考 [DEPLOYMENT.md](./DEPLOYMENT.md)。

## 未來發展藍圖

以下項目為競賽原型之外，產品化所需的後續開發方向：

- [ ] 真實使用者身份驗證（民眾／店家／政府單位角色權限）
- [ ] 後端服務與資料庫（取代目前的本地模擬資料）
- [ ] 真實照片上傳與雲端儲存
- [ ] 真實地理編碼（Geocoding）服務，取代目前的模擬定位
- [ ] 政府端／管理後台儀表板（案件排程、稽查派工）
- [ ] 完整案件處理工作流程（跨單位派工、狀態轉換、審核機制）
- [ ] 基於真實資料計算 AWI（Arcade Walkability Index）指數
- [ ] 通知推播系統（案件進度更新、投票結果、認證審核通知）

## 專案狀態聲明

> **本專案目前為競賽簡報用之前端展示原型（Demo / Prototype），所有資料皆為模擬內容，互動功能僅存在於前端本地狀態，尚未包含真實後端服務。** 本專案旨在展示產品構想、使用者流程與介面設計，不代表最終上線產品的完整功能範圍。

## 授權

本專案採用 [MIT License](./LICENSE) 授權。

## 致謝與素材來源

- 地圖圖磚由 [OpenStreetMap](https://www.openstreetmap.org/copyright) 貢獻者提供，依 [ODbL](https://opendatacommons.org/licenses/odbl/) 授權使用。
- 首頁主視覺照片由 [Huy Phan](https://unsplash.com/@huyphan2602) 拍攝，取自 [Unsplash](https://unsplash.com/photos/a-motor-scooter-parked-on-the-side-of-a-street-sVCYR68uMt4)。
- 案件示意照片取自 Wikimedia Commons：由 Heidi Meudt 拍攝（[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)）與 Balon Greyjoy 拍攝（[CC0](https://creativecommons.org/publicdomain/zero/1.0/)）。

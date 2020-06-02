# Furnit
前後端分離的電商網站模型（前端部分），使用 React、React Hooks、React Router。

## 下載並安裝相依套件
```bash
git clone https://github.com/mingjunlu/furnit-frontend.git
cd furnit-frontend
npm install
```

## 前置作業
將 `package.json` 檔案裡 `proxy` 的值改成後端 API 端點，詳細資訊請見 [Proxying API Requests in Development](https://create-react-app.dev/docs/proxying-api-requests-in-development/) 頁面。

若設定完後，前端頁面只出現 `Invalid Host header` 字樣，請在 `furnit-frontend` 資料夾中新增一個 `.env.development.local` 檔案，並參考 ["Invalid Host Header" Errors After Configuring Proxy](https://create-react-app.dev/docs/proxying-api-requests-in-development/#invalid-host-header-errors-after-configuring-proxy) 章節輸入內容。

## 檢查程式語法錯誤
```bash
npm run lint
```

## 啟動開發伺服器
```bash
npm start
```

## 編譯、打包、輸出
```bash
npm run build
```

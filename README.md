# Portfolio / ポートフォリオ

I initially created it using HTML, CSS, and JavaScript, but I am now transitioning to React (Next.js) since I’ve recently started learning it.

現在作成中のポートフォリオです。  
最初は HTML、CSS、JavaScript で作成していましたが、最近 React（Next.js）を学び始めたため、現在はそちらに移行中です。

---

### Purpose / 目的

- For my career development  
- Webエンジニアの仕事を得るため

---

### Tech Stack / 技術

- React  
- Next.js  
- JavaScript (ES6+)  
- Node.js (v20, downgraded to avoid compatibility issues with Next.js 15+)  
- VS Code  

---

### Going forward / 今後

- TailwindCSS  
- TypeScript  

---

## ⚠️ エラー発生 / 解決法備忘録

### Node.js

- **問題・症状**  
  `npm run dev` 実行時に毎回バグ（エラー）が発生し、ローカルホストが立ち上がらない。

- **原因**  
  Node.js の最新版（v22以降）は Next.js 15 との互換性に問題がある模様。

- **対応**  
  最新の LTS バージョンを使用していたが、v20 にダウングレード。  
  ※ Homebrew 経由でインストールしていると再起動時に最新バージョンに戻ってしまうことがある。  
  ※ そこで一度アンインストールし、`nvm` 経由で公式コマンドを用いて Node.js v20 をインストールし、デフォルト設定に。  

- **結果**  
  以降はバグが発生していない。  
  ※ 完全に正解かは不明だが、現時点で安定している。

---

### Branch

- **問題・症状**  
  push の度に「ブランチ名 + 2, 3, 4」のような名前のブランチが勝手に作られてしまう。

- **原因（推測）**  
  VS Code の `git Auto fetch` や `git Auto repository detect` などの設定が影響している可能性。

- **対応**  
  これらの自動設定をオフにした。  
  push 時は VS Code の GUI ではなく CLI で、明確にブランチ名を指定して操作している。

---

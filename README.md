This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### command

```bash
$ yarn install
# パッケージインストール
$ yarn dev
# 開発環境立ち上げ
$ yarn build
# SGビルド
```

### version

* `node`: `20.14.0`
* `yarn`: `1.22.22`
* `Next.js`: `14.2.5`（App Router）
* `react`: `^18`

## Contents Management

📦 🛠

アート作品のコンテンツは [art-samples.ts](./src/data/art-samples.ts) で管理しています。[public/assets/](./public/assets/)ディレクトリ内に画像をアップロードして、[art-samples.ts](./src/data/art-samples.ts)に情報を流し込んでください。

## Deploy

🚚 💨

Vercelで自動デプロイされるように環境構築しています。

下記のアカウントで [works-art-galleryのプロジェクト](https://vercel.com/tomioka-tsukasas-projects/works-art-gallery)にアクセス。

* GitHubアカウント：[tomioka-tsukasa](https://github.com/tomioka-tsukasa/works-art-gallery)
* [公開URL](https://works-art-gallery-r9y1.vercel.app/)

## Git Rules

🌿 🌿 🌿 

### コミットルール

* fix: バグ修正
* hotfix: 緊急のバグ修正
* add: 新規追加
* adjust: 微細な修正など
* update: ニュース更新など機能変更ががない更新
* style: ソースのフォーマット調整
* refactor: 仕様に影響がないコード改善(リファクタ)
* change: 仕様変更
* disable: 無効化（コメントアウト等）
* remove: 削除
* revert: 変更取り消し
* env: 開発環境の追加・調整
* docs: ドキュメントの作成・調整
* upgrade: バージョンアップ

### ブランチルール

| ブランチ名 | 役割 | チェックアウト元 |
| --- |  --- |  --- | 
| main | 公開ブランチ | - |
| develop | 開発ブランチ | main |
| feature/* | 新規開発・調整ブランチ | (main), develop |
| hotfix-* | 公開中のバグ修正 | main
| store/* | ソース保存用ブランチ | [any] |

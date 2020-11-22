# Api Environment
### main package version
- node 12.6.0
- npm 6.14.8 (古いものを使うと型系のパッケージでエラーになると思う)
- typescript 4.0.5 (合わせるならこれ) 
- express 4.17.1 (合わせるならこれ)
- mysql 5.6.47 (5.6以上なら多分大丈夫。古いとdatetimeでエラーになると思われる)

### procedure
```
git clone https://github.com/gonta1026/typescript_node_deploy_practice.git
```
```
npm install
```
- .envのファイルをルートに作成してください。下記の6つの変数を用意して実際の値は自身の環境に合わせてください！
```
APP_PORT=8080　　　　　# 好きな値にしてください。
DB_HOST=""           # 僕は空でいけました
DB_PORT=3306         # mysqlのポート指定なので同じだと思います。
DB_USER=""           # 僕はめんどくさかったらでrootを使ってください。
DB_PASS=""　　　　　　 # 設定していたら指定してください。
DB_NAME="db_name"
```
- データベース作成
```
CREATE DATABASE db_name;
```
- マイグレーションを実行してテーブルを作成
```
npm run migrate:run
```
サーバーの起動
```
npm run dev:watch
```


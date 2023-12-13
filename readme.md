Node Chat
YSE 横浜システム工学院専門学校
IT・ゲームソフト科
220064
モハッマド　ワヒュ　ブディ　ムルヤ

1. Node.jsの初期化
```
npm init -y
```

2. Expressのインストール
```
npm i express
```

3. dotenvのインストール
```
npm i dotenv
```

4. Socket.ioのインストール
```
npm i socket.io
```

5. Node Monitorのインストール
```
npm i nodemon
```

6. .env 作成
```
HOST=localhost
PORT=3000
```

7. server.js 作成（サーバープログラム）

8. package.json に npm run dev スクリプトを追加

```
...
  "scripts": {
    "dev": "nodemon server",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
...
```
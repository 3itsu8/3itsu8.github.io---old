@charset "utf-8";

@font-face {
  font-family: "LINESeedJP_OTF_Bd";
  src: url(../fonts/LINESeedJP_OTF_Bd.woff) format("woff"); /* フォントファイルのパスとフォーマットを指定 */
}

body {
  font-family: "LINESeedJP_OTF_Bd", "Helvetica Neue", "Helvetica",
    "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Arial", "Yu Gothic", "Meiryo",
    sans-serif;
}

.section_title {
  text-align: center;
}

/* 
header 
*/
.header {
  grid-area: header;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
}

.header_navlist {
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header_navitem > a {
  display: block;
  padding: 30px;
  color: #93c4c0;
  text-decoration: none;
  font-size: 30px;
}

.section_title {
  padding-left: 25px;
  color: #93c4c0;
  font-size: 40px;
}
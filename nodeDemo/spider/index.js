const http = require('http')
const cheerio = require('cheerio')
const fs = require('fs')
// let webUrl = 'http://news.ifeng.com/'
let webUrl = 'http://www.gmw.cn/'

http.get(webUrl,res=>{
  let str = ''
  res.on('data',chunk=>{
    str += chunk
  })
  res.on('end',()=>{
    // console.log(str)
    formatData(str)
  })
})

function formatData(html) {
  let $ = cheerio.load(html,{decodeEntities: false})
  console.log($('.m_imgLists li').length)
  let arr = []
  $('.m_imgLists li').each((k,v)=>{
    let obj = {
      id:k+1,
      title:$(v).find('.m_enTitle a').text(),
      imgUrl: $(v).find('.m_enImgWrap img').attr('src')
    }
    // console.log(obj)
    arr.push(obj)
  })
  fs.writeFileSync('./data.json',JSON.stringify(arr))
}
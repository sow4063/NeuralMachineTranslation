// 알파벳순으로 넣기
var esc = [
  // 'apply', 
  'Angular',
  'arguments', 
  'bind',
  'Circle CI',
  'DOM',
  // 'call', 
  'eval', 
  'Front End',
  'HackerNews',
  'JavaScript',
  'jQuery',
  'React',
  'REST',
  'Reddit'
];









//====================================================
//  이곳은 건드실필요 없을듯 합니다.
//====================================================
var ESCAPE = {};
for(var i = 0; i < esc.length; i++){
  var key = esc[i];
  ESCAPE[key] = rand();
}


function rand(){
  return Math.floor(Math.random() * 100) +'es-c-a' + 
    Math.floor(Math.random() * 100) + 'c-z-t' +
    Math.floor(Math.random() * 100);
}



module.exports = ESCAPE;

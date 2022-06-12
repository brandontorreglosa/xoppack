//<----Copyright ©️XOPPACK to the XOPBOT.inc Company and its fellow employees that work hard to give user experience!---->
//<----/XOPPACK COUNTABLE/---->
module.exports={bent:function(str){let c='';for(let a,d=0,e=str.length;d<e;d++){(a=bent[str.charAt(d)]),typeof a=='undefined'&&(a=str.charAt(d)),(c+=a);}
return c;},flip:function(str){const c=[];for(let a,d=0,e=str.length;d<e;d++){(a=str.charAt(d)),d>0&&(a=='\u0324'||a=='\u0317'||a=='\u0316'||a=='\u032e')?((a=flip[str.charAt(d-1)+a]),c.pop()):((a=flip[a]),typeof a=='undefined'&&(a=str.charAt(d))),c.push(a);}
return c.reverse().join('');},mirror:function(str){let c=[];const d=[];for(let a,e=0,f=str.length;e<f;e++){(a=str.charAt(e)),e>0&&(a=='\u0308'||a=='\u0300'||a=='\u0301'||a=='\u0302')?((a=copy[str.charAt(e-1)+a]),c.pop()):((a=copy[a]),typeof a=='undefined'&&(a=str.charAt(e))),a=='\n'?(d.push(c.reverse().join('')),(c=[])):c.push(a);}
d.push(c.reverse().join(''));return d.join('\n');},randomCase:function(string){let result='';if(!string)throw new TypeError('Invalid_String: A String Was Not Specified!');if(typeof string!=='string'){throw new TypeError('Invalid_String: Provided String Is Invalid!');}
for(const i in string){const Random=Math.floor(Math.random()*2);result+=Random==1?string[i].toLowerCase():string[i].toUpperCase();}
return result;},randomHexColor:function(){return('#'+
('000000'+Math.floor(Math.random()*16777215).toString(16)).slice(-6));},randomizeNumber:function(start,end){if(!start)throw new TypeError('Invalid_Number: A Number Was Not Specified.');if(!end)throw new TypeError('Invalid_Number: A Number Was Not Specified.');if(typeof start!=='number'&&typeof end!=='number'){throw new TypeError('Error: Provided number data is Invalid');}
const res=Math.floor(Math.random()*(end-start+1)+start);return res;},randomizeString:function(array){if(!array)throw new TypeError('Error: A array was not specified.');if(typeof array!=='object'){throw new TypeError('Error: The provided array is invalid.');}
const res=Math.floor(Math.random()*array.length);return array[res];},reverseText:function(string){return string.split('').reverse().join('');},tinyCaptial:function(str){let c='',a;str=str.toUpperCase();for(let d=0,e=str.length;d<e;d++){(a=tiny[str.charAt(d)]),typeof a=='undefined'&&(a=str.charAt(d)),(c+=a);}
return c;},vaporwave:function(string){return string.replace(/[a-zA-Z0-9!\?\.'";:\]\[}{\)\(@#\$%\^&\*\-_=\+`~><]/g,(char)=>String.fromCharCode(0xfee0+char.charCodeAt(0)),).replace(/ /g,'　');},};
//<----/XOPPACK V12 Constructors/---->
//<----/Game Constructors (4)/---->
module.exports.XOPSnake = require('./src/v12/games/XOPSnake');
module.exports.XOPConnect4 = require('./src/v12/games/XOPConnect4');
module.exports.XOPTicTacToe = require('./src/v12/games/XOPTicTacToe');
module.exports.XOPRockPaperScissors = require('./src/v12/games/XOPRockPaperScissors');
//<----/Image Constructors (16)/---->
module.exports.XOPBlur = require("./src/v12/images/XOPBlur");
module.exports.XOPAD = require("./src/v12/images/XOPAD");
module.exports.XOPClown = require("./src/v12/images/XOPClown");
module.exports.XOPDOF = require("./src/v12/images/XOPDOF");
module.exports.XOPDrip = require("./src/v12/images/XOPDrip");
module.exports.XOPGrave = require("./src/v12/images/XOPGrave");
module.exports.XOPGun = require("./src/v12/images/XOPGun");
module.exports.XOPHeaven = require("./src/v12/images/XOPHeaven");
module.exports.XOPIAS = require("./src/v12/images/XOPIAS");
module.exports.XOPMNM = require("./src/v12/images/XOPMNM");
module.exports.XOPPET = require("./src/v12/images/XOPPET");
module.exports.XOPSimp = require("./src/v12/images/XOPSimp");
module.exports.XOPStonks = require("./src/v12/images/XOPStonks");
module.exports.XOPTABFLIP = require("./src/v12/images/XOPTABFLIP");
module.exports.XOPWanted = require("./src/v12/images/XOPWanted");
module.exports.XOPWPFP = require("./src/v12/images/XOPWPFP");
//<----/XOPPACK V13 Constructors/---->
//<----/Image Constructors (16)/---->
// module.exports.XOPNewBlur = require("./src/v13/images/XOPNewBlur");
// module.exports.XOPNewAD = require("./src/v13/images/XOPNewAD");
// module.exports.XOPNewClown = require("./src/v13/images/XOPNewClown");
// module.exports.XOPNewDOF = require("./src/v13/images/XOPNewDOF");
// module.exports.XOPNewDrip = require("./src/v13/images/XOPNewDrip");
// module.exports.XOPNewGrave = require("./src/v13/images/XOPNewGrave");
// module.exports.XOPNewGun = require("./src/v13/images/XOPNewGun");
// module.exports.XOPNewHeaven = require("./src/v13/images/XOPNewHeaven");
// module.exports.XOPNewIAS = require("./src/v13/images/XOPNewIAS");
// module.exports.XOPNewMNM = require("./src/v13/images/XOPNewMNM");
// module.exports.XOPNewPET = require("./src/v13/images/XOPNewPET");
// module.exports.XOPNewSimp = require("./src/v13/images/XOPNewSimp");
// module.exports.XOPNewStonks = require("./src/v13/images/XOPNewStonks");
// module.exports.XOPNewTABFLIP = require("./src/v13/images/XOPNewTABFLIP");
// module.exports.XOPNewWanted = require("./src/v13/images/XOPNewWanted");
// module.exports.XOPNewWPFP = require("./src/v13/images/XOPNewWPFP");
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0471":function(t,a,s){"use strict";s.r(a);var r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",[s("h5",{attrs:{id:"resultsection"}}),s("div",{staticClass:"row",attrs:{id:"resulttable"}},[s("div",{staticClass:"col-sm-1"}),s("div",{staticClass:"col-sm-10"},[s("table",[t._m(0),s("tr",{staticStyle:{"vertical-align":"top","font-size":"14px"}},[s("td",[s("div",{staticClass:"flist"},t._l(t.characters09,function(a){return s("div",{attrs:{id:"resultsection"}},[s("span",{staticClass:"mark"},[t._v("| ")]),s("router-link",{attrs:{to:{name:"character",params:{id:a.id}}}},[t._v(" "+t._s(a.name)+" \n                                    ")])],1)}),0)]),s("td",[s("div",{staticClass:"flist"},t._l(t.charactersad,function(a){return s("div",{attrs:{id:"resultsection"}},[s("span",{staticClass:"mark"},[t._v("| ")]),s("router-link",{attrs:{to:{name:"character",params:{id:a.id}}}},[t._v(t._s(a.name)+" \n                                    ")])],1)}),0)]),s("td",[s("div",{staticClass:"flist"},t._l(t.characterseh,function(a){return s("div",{attrs:{id:"resultsection"}},[s("span",{staticClass:"mark"},[t._v("| ")]),s("router-link",{attrs:{to:{name:"character",params:{id:a.id}}}},[t._v(t._s(a.name)+" \n                                    ")])],1)}),0)]),s("td",[s("div",{staticClass:"flist"},t._l(t.charactersil,function(a){return s("div",{attrs:{id:"resultsection"}},[s("span",{staticClass:"mark"},[t._v("| ")]),s("router-link",{attrs:{to:{name:"character",params:{id:a.id}}}},[t._v(t._s(a.name)+" \n                                    ")])],1)}),0)]),s("td",[s("div",{staticClass:"flist"},t._l(t.charactersmp,function(a){return s("div",{attrs:{id:"resultsection"}},[s("span",{staticClass:"mark"},[t._v("| ")]),s("router-link",{attrs:{to:{name:"character",params:{id:a.id}}}},[t._v(t._s(a.name)+" \n                                    ")])],1)}),0)]),s("td",[s("div",{staticClass:"flist"},t._l(t.charactersqt,function(a){return s("div",{attrs:{id:"resultsection"}},[s("span",{staticClass:"mark"},[t._v("| ")]),s("router-link",{attrs:{to:{name:"character",params:{id:a.id}}}},[t._v(t._s(a.name)+" \n                                    ")])],1)}),0)]),s("td",[s("div",{staticClass:"flist"},t._l(t.charactersux,function(a){return s("div",{attrs:{id:"resultsection"}},[s("span",{staticClass:"mark"},[t._v("| ")]),s("router-link",{attrs:{to:{name:"character",params:{id:a.id}}}},[t._v(t._s(a.name)+" \n                                    ")])],1)}),0)]),s("td",[s("div",{staticClass:"flist"},t._l(t.charactersyz,function(a){return s("div",{attrs:{id:"resultsection"}},[s("span",{staticClass:"mark"},[t._v("| ")]),s("router-link",{attrs:{to:{name:"character",params:{id:a.id}}}},[t._v(t._s(a.name)+" \n                                    ")])],1)}),0)])])])]),s("div",{staticClass:"col-sm-1"})])])])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tr",[s("th",{staticClass:"searchinfo"},[t._v("0 - 9")]),s("th",{staticClass:"searchinfo"},[t._v("A - D")]),s("th",{staticClass:"searchinfo"},[t._v("E - H")]),s("th",{staticClass:"searchinfo"},[t._v("I - L")]),s("th",{staticClass:"searchinfo"},[t._v("M - P")]),s("th",{staticClass:"searchinfo"},[t._v("Q - T")]),s("th",{staticClass:"searchinfo"},[t._v("U - X")]),s("th",{staticClass:"searchinfo"},[t._v("Y - Z")])])}],c=(s("7f7f"),s("ac6a"),s("4730"),s("bc3a")),i=s.n(c),n={name:"Characters",size:0,data:function(){return{searchResults:[],characters:[],characters09:[],charactersad:[],characterseh:[],charactersil:[],charactersmp:[],charactersqt:[],charactersux:[],charactersyz:[],toggleState:0,txtInput:""}},mounted:function(){this.start(20)},methods:{start:function(t){var a=0,s=0;for(a=0;a<t;a++)this.getCharacters(s),s+=100},toggle:function(){return 0==this.toggleState?(document.getElementById("searchmth").innerHTML="Use Search Bar",this.toggleState=1,1):1==this.toggleState?(document.getElementById("searchmth").innerHTML="View List",this.toggleState=0,0):void 0},getCharacters:function(t){var a=this,s="http://gateway.marvel.com/v1/public/characters?apikey=19fe13a0b0fa0ca0574ec10a9458cbda&limit=100&offset="+t,r="";console.log(s),i.a.get(s).then(function(t){t.data.data.results.forEach(function(t){r=t.name.charAt(0),0!=r&&1!=r&&2!=r&&3!=r&&4!=r&&5!=r&&6!=r&&7!=r&&8!=r&&9!=r||a.characters09.push(t),"A"!=r&&"B"!=r&&"C"!=r&&"D"!=r||a.charactersad.push(t),"E"!=r&&"F"!=r&&"G"!=r&&"H"!=r||a.characterseh.push(t),"I"!=r&&"J"!=r&&"K"!=r&&"L"!=r||a.charactersil.push(t),"M"!=r&&"N"!=r&&"O"!=r&&"P"!=r||a.charactersmp.push(t),"Q"!=r&&"R"!=r&&"S"!=r&&"T"!=r||a.charactersqt.push(t),"U"!=r&&"V"!=r&&"W"!=r&&"X"!=r||a.charactersux.push(t),"Y"!=r&&"Z"!=r||a.charactersyz.push(t),a.characters.push(t)})}).catch(function(t){console.log(t),document.getElementById("resultsection").innerHTML="Sorry, the amount of searches to the Marvel database allowed in one day have been exceeded by this site.",document.getElementById("resulttable").style.visibility="hidden"})}}},l=n,o=(s("0ca2"),s("2877")),h=Object(o["a"])(l,r,e,!1,null,null,null);a["default"]=h.exports},"08a7":function(t,a,s){},"0ca2":function(t,a,s){"use strict";var r=s("08a7"),e=s.n(r);e.a},"49c2":function(t,a,s){"use strict";var r=s("6866"),e=s.n(r);e.a},"66bd":function(t,a,s){"use strict";var r=s("abdb"),e=s.n(r);e.a},6866:function(t,a,s){},"7de6":function(t,a,s){t.exports=s.p+"img/universe.695a3e0c.png"},"8ee2":function(t,a,s){"use strict";s.r(a);var r=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",[r("div",[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-1"}),r("div",{staticClass:"col-sm-10"},[r("img",{staticClass:"all",attrs:{src:s("7de6"),alt:"Logo"}}),r("table",[t._m(0),r("tr",{staticStyle:{"vertical-align":"top","font-size":"14px"}},[r("td",[r("div",{staticClass:"flist"},t._l(t.characters09,function(a){return r("div",[r("span",{staticClass:"mark"},[t._v("| ")]),r("router-link",{attrs:{to:{name:"character",params:{id:a.id}}}},[t._v(" "+t._s(a.name)+" \n                                    ")])],1)}),0)]),r("td",[r("div",{staticClass:"flist"},t._l(t.charactersad,function(a){return r("div",[r("span",{staticClass:"mark"},[t._v("| ")]),r("router-link",{attrs:{to:{name:"character",params:{id:a.id}}}},[t._v(t._s(a.name)+" \n                                    ")])],1)}),0)]),r("td",[r("div",{staticClass:"flist"},t._l(t.characterseh,function(a){return r("div",[r("span",{staticClass:"mark"},[t._v("| ")]),r("router-link",{attrs:{to:{name:"character",params:{id:a.id}}}},[t._v(t._s(a.name)+" \n                                    ")])],1)}),0)]),r("td",[r("div",{staticClass:"flist"},t._l(t.charactersil,function(a){return r("div",[r("span",{staticClass:"mark"},[t._v("| ")]),r("router-link",{attrs:{to:{name:"character",params:{id:a.id}}}},[t._v(t._s(a.name)+" \n                                    ")])],1)}),0)]),r("td",[r("div",{staticClass:"flist"},t._l(t.charactersmp,function(a){return r("div",[r("span",{staticClass:"mark"},[t._v("| ")]),r("router-link",{attrs:{to:{name:"character",params:{id:a.id}}}},[t._v(t._s(a.name)+" \n                                    ")])],1)}),0)]),r("td",[r("div",{staticClass:"flist"},t._l(t.charactersqt,function(a){return r("div",[r("span",{staticClass:"mark"},[t._v("| ")]),r("router-link",{attrs:{to:{name:"character",params:{id:a.id}}}},[t._v(t._s(a.name)+" \n                                    ")])],1)}),0)]),r("td",[r("div",{staticClass:"flist"},t._l(t.charactersux,function(a){return r("div",[r("span",{staticClass:"mark"},[t._v("| ")]),r("router-link",{attrs:{to:{name:"character",params:{id:a.id}}}},[t._v(t._s(a.name)+" \n                                    ")])],1)}),0)]),r("td",[r("div",{staticClass:"flist"},t._l(t.charactersyz,function(a){return r("div",[r("span",{staticClass:"mark"},[t._v("| ")]),r("router-link",{attrs:{to:{name:"character",params:{id:a.id}}}},[t._v(t._s(a.name)+" \n                                    ")])],1)}),0)])])])]),r("div",{staticClass:"col-sm-1"})])])])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tr",[s("th",{staticClass:"searchinfo"},[t._v("0 - 9")]),s("th",{staticClass:"searchinfo"},[t._v("A - D")]),s("th",{staticClass:"searchinfo"},[t._v("E - H")]),s("th",{staticClass:"searchinfo"},[t._v("I - L")]),s("th",{staticClass:"searchinfo"},[t._v("M - P")]),s("th",{staticClass:"searchinfo"},[t._v("Q - T")]),s("th",{staticClass:"searchinfo"},[t._v("U - X")]),s("th",{staticClass:"searchinfo"},[t._v("Y - Z")])])}],c=(s("7f7f"),s("6762"),s("2fdb"),s("ac6a"),s("4730"),s("bc3a")),i=s.n(c),n={name:"Characters",size:0,data:function(){return{searchResults:[],characters:[],characters09:[],charactersad:[],characterseh:[],charactersil:[],charactersmp:[],charactersqt:[],charactersux:[],charactersyz:[],toggleState:0,txtInput:""}},mounted:function(){this.start(15)},methods:{start:function(t){var a=0,s=0;for(a=0;a<t;a++)this.getCharacters(s),s+=100},toggle:function(){return 0==this.toggleState?(document.getElementById("searchmth").innerHTML="Use Search Bar",this.toggleState=1,1):1==this.toggleState?(document.getElementById("searchmth").innerHTML="View List",this.toggleState=0,0):void 0},startSearch:function(t){var a=0,s=0,r=document.getElementById("search").value;for(a=0;a<t;a++)this.searchCharacter(s,r),s+=100},searchCharacter:function(t,a){var s=this,r="http://gateway.marvel.com/v1/public/characters?apikey=19fe13a0b0fa0ca0574ec10a9458cbda&limit=100&offset="+t;i.a.get(r).then(function(t){t.data.data.results.forEach(function(t){t.name.includes(a)&&s.searchResults.push(t)})}).catch(function(t){console.log(t)})},getCharacters:function(t){var a=this,s="http://gateway.marvel.com/v1/public/characters?apikey=19fe13a0b0fa0ca0574ec10a9458cbda&limit=100&offset="+t,r="";console.log(s),i.a.get(s).then(function(t){t.data.data.results.forEach(function(t){r=t.name.charAt(0),a.characters.push(t),0!=r&&1!=r&&2!=r&&3!=r&&4!=r&&5!=r&&6!=r&&7!=r&&8!=r&&9!=r||a.characters09.push(t),"A"!=r&&"B"!=r&&"C"!=r&&"D"!=r||a.charactersad.push(t),"E"!=r&&"F"!=r&&"G"!=r&&"H"!=r||a.characterseh.push(t),"I"!=r&&"J"!=r&&"K"!=r&&"L"!=r||a.charactersil.push(t),"M"!=r&&"N"!=r&&"O"!=r&&"P"!=r||a.charactersmp.push(t),"Q"!=r&&"R"!=r&&"S"!=r&&"T"!=r||a.charactersqt.push(t),"U"!=r&&"V"!=r&&"W"!=r&&"X"!=r||a.charactersux.push(t),"Y"!=r&&"Z"!=r||a.charactersyz.push(t),a.characters.push(t)})}).catch(function(t){console.log(t)})}}},l=n,o=(s("66bd"),s("2877")),h=Object(o["a"])(l,r,e,!1,null,null,null);a["default"]=h.exports},abdb:function(t,a,s){},e5a5:function(t,a,s){"use strict";s.r(a);var r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"container"},[s("h4",[s("router-link",{attrs:{to:"/list"}},[t._v("Full List")]),t._v(" |\n            "),s("router-link",{attrs:{to:"/search"}},[t._v("Search")])],1),t._l(t.Character,function(a){return s("div",{staticClass:"col-sm-12"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12"},[s("h2",{staticClass:"des"},[t._v(" "+t._s(a.name)+" ")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-3"},[s("img",{attrs:{src:t.url,alt:"No Image",align:"left"}})]),s("div",{staticClass:"col-sm-9"},[s("p",{staticClass:"des"},[t._v(t._s(a.description))])])])])})],2)])},e=[],c=(s("ac6a"),s("bc3a")),i=s.n(c),n={name:"Character",data:function(){return{Character:[],url:"",size:"/standard_amazing.jpg"}},mounted:function(){this.getCharacter()},methods:{getCharacter:function(){var t=this,a=this.$route.params.id;i.a.get("https://gateway.marvel.com:443/v1/public/characters/"+a+"?apikey=19fe13a0b0fa0ca0574ec10a9458cbda").then(function(a){console.log("RESULT"),console.log(a),a.data.data.results.forEach(function(a){t.Character.push(a),t.url=a.thumbnail.path+t.size,console.log("URL: "+t.url)})}).catch(function(t){console.log("ERROR"),console.log(t)})}}},l=n,o=(s("49c2"),s("2877")),h=Object(o["a"])(l,r,e,!1,null,null,null);a["default"]=h.exports},f820:function(t,a,s){"use strict";s.r(a);var r=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"about"},[s("h1",[t._v("About this Application")]),s("p",[t._v("Hello, my name is Nicholas Seamans and I have coded this application as a personal project to display information on Marvel comics different properties.")]),s("p",[t._v("This includes:")]),s("table",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("A Full Character List")])]),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("Other Planed Features")])])])])}],c=s("2877"),i={},n=Object(c["a"])(i,r,e,!1,null,null,null);a["default"]=n.exports}}]);
//# sourceMappingURL=about.202f8977.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(2),o=t.n(i),l=(t(14),t(3)),m=t(4),c=t(6),s=t(5),d=t(7),u=function(e){var a=e.name,t=e.type,n=e.id;return r.a.createElement("div",{className:"tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"".concat(a),width:"150px",height:"150px",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(n,".png")}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,t)))},p=function(e){var a=e.Pokemon;return r.a.createElement("div",null,a.map(function(e,t){return r.a.createElement(u,{key:a[t].id,id:a[t].id,name:a[t].name,type:a[t].type})}))},h=function(e){e.searchfield;var a=e.searchChange;return r.a.createElement("div",null,r.a.createElement("input",{className:"pa3 ba b--green b-lightest-blue",type:"search",placeholder:"Search Pok\xe9mon...",onChange:a}))},y=[{id:1,name:"Bulbasaur",type:"Grass, Poison"},{id:2,name:"Ivysaur",type:"Grass, Poison"},{id:3,name:"Venusaur",type:"Grass, Poison"},{id:4,name:"Charmander",type:"Fire"},{id:5,name:"Charmeleon",type:"Fire"},{id:6,name:"Charizad",type:"Fire, Flying"},{id:7,name:"Squirtle",type:"Water"},{id:8,name:"Wartortle",type:"Water"},{id:9,name:"Blastoise",type:"Water"},{id:10,name:"Caterpie",type:"Bug"},{id:11,name:"Metapod",type:"Bug"},{id:12,name:"Butterfree",type:"Bug, Flying"},{id:13,name:"Weedle",type:"Bug, Poison"},{id:14,name:"Kakuna",type:"Bug, Poison"},{id:15,name:"Beedrill",type:"Bug, Poison"},{id:16,name:"Pidgey",type:"Normal, Flying"},{id:17,name:"Pidgeotto",type:"Normal, Flying"},{id:18,name:"Pidgeot",type:"Normal, Flying"},{id:19,name:"Rattata",type:"Normal"},{id:20,name:"Raticate",type:"Normal"},{id:21,name:"Spearow",type:"Normal, Flying"},{id:22,name:"Fearow",type:"Normal, Flying"},{id:23,name:"Ekans",type:"Poison"},{id:24,name:"Arbok",type:"Poison"}],g=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(c.a)(this,Object(s.a)(a).call(this))).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={Pokemon:y,searchfield:""},e}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.state.Pokemon.filter(function(a){return a.name&&a.type.toLowerCase().includes(e.state.searchfield.toLowerCase())});return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"Pok\xe9dex"),r.a.createElement(h,{searchChange:this.onSearchChange}),r.a.createElement(p,{Pokemon:a}))}}]),a}(n.Component);t(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.cb33ff2e.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,n){},18:function(e,a,n){"use strict";n.r(a);var t=n(0),i=n.n(t),o=n(2),r=n.n(o),d=(n(14),n(3)),m=n(4),l=n(6),s=n(5),c=n(7),p=function(e){var a=e.name,n=e.type,t=e.id;return i.a.createElement("div",{className:"tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5"},i.a.createElement("img",{alt:"".concat(a),width:"150px",height:"150px",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t,".png")}),i.a.createElement("div",null,i.a.createElement("h2",null,a),i.a.createElement("p",null,n)))},u=function(e){var a=e.Pokemon;return i.a.createElement("div",null,a.map(function(e,n){return i.a.createElement(p,{key:a[n].id,id:a[n].id,name:a[n].name,type:a[n].type})}))},y=function(e){e.searchfield;var a=e.searchChange;return i.a.createElement("div",null,i.a.createElement("input",{className:"pa3 ba b--green b-lightest-blue",type:"search",placeholder:"Search Pok\xe9mon...",onChange:a}))},h=[{id:1,name:"Bulbasaur",type:"Grass, Poison"},{id:2,name:"Ivysaur",type:"Grass, Poison"},{id:3,name:"Venusaur",type:"Grass, Poison"},{id:4,name:"Charmander",type:"Fire"},{id:5,name:"Charmeleon",type:"Fire"},{id:6,name:"Charizad",type:"Fire, Flying"},{id:7,name:"Squirtle",type:"Water"},{id:8,name:"Wartortle",type:"Water"},{id:9,name:"Blastoise",type:"Water"},{id:10,name:"Caterpie",type:"Bug"},{id:11,name:"Metapod",type:"Bug"},{id:12,name:"Butterfree",type:"Bug, Flying"},{id:13,name:"Weedle",type:"Bug, Poison"},{id:14,name:"Kakuna",type:"Bug, Poison"},{id:15,name:"Beedrill",type:"Bug, Poison"},{id:16,name:"Pidgey",type:"Normal, Flying"},{id:17,name:"Pidgeotto",type:"Normal, Flying"},{id:18,name:"Pidgeot",type:"Normal, Flying"},{id:19,name:"Rattata",type:"Normal"},{id:20,name:"Raticate",type:"Normal"},{id:21,name:"Spearow",type:"Normal, Flying"},{id:22,name:"Fearow",type:"Normal, Flying"},{id:23,name:"Ekans",type:"Poison"},{id:24,name:"Arbok",type:"Poison"},{id:25,name:"Pikachu",type:"Electric"},{id:26,name:"Raichu",type:"Electric"},{id:27,name:"Sandshrew",type:"Ground"},{id:28,name:"Sandslash",type:"Ground"},{id:29,name:"Nidoran",type:"Poison"},{id:30,name:"Nidorina",type:"Poison"},{id:31,name:"Nidoqueen",type:"Poison, Ground"},{id:32,name:"Nidoran",type:"Poison"},{id:33,name:"Nidorino",type:"Poison"},{id:34,name:"Nidoking",type:"Poison, Ground"},{id:35,name:"Clefairy",type:"Fairy"},{id:36,name:"Clefable",type:"Fairy"}],g=function(e){function a(){var e;return Object(d.a)(this,a),(e=Object(l.a)(this,Object(s.a)(a).call(this))).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={Pokemon:h,searchfield:""},e}return Object(c.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.state.Pokemon.filter(function(a){return a.name&&a.type.toLowerCase().includes(e.state.searchfield.toLowerCase())});return i.a.createElement("div",{className:"tc"},i.a.createElement("h1",null,"Pok\xe9dex"),i.a.createElement(y,{searchChange:this.onSearchChange}),i.a.createElement(u,{Pokemon:a}))}}]),a}(t.Component);n(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,n){e.exports=n(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.974df0df.chunk.js.map
(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(2),c=n.n(a),i=n(3),l=n(4),s=n(6),u=n(5),d=(n(12),function(t){var e=t.goodsList,n=void 0===e?[]:e;return r.a.createElement("ul",null,n.map((function(t){return r.a.createElement("li",{key:t.id,style:{color:"".concat(t.color)}},t.name)})))});function f(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var m=function(){return f().then((function(t){return t.sort((function(t,e){return t.name.localeCompare(e.name)})),t.slice(0,5)}))},h=function(){return f().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},v=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={loadAllGoods:f(),load5FirstGoods:m(),loadRedGoods:h(),receivedGoods:[]},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.loadAllGoods,o=e.load5FirstGoods,a=e.loadRedGoods,c=e.receivedGoods;return r.a.createElement("div",null,r.a.createElement("h1",null,"Dynamic list of Goods"),r.a.createElement("button",{type:"button",onClick:function(){n.then((function(e){t.setState({receivedGoods:e})}))}},"All goods"),r.a.createElement("button",{type:"button",onClick:function(){o.then((function(e){t.setState({receivedGoods:e})}))}},"Firts five goods"),r.a.createElement("button",{type:"button",onClick:function(){a.then((function(e){t.setState({receivedGoods:e})}))}},"All red goods"),r.a.createElement(d,{goodsList:c}))}}]),n}(r.a.Component);c.a.render(r.a.createElement(v,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.e49ee4cf.chunk.js.map
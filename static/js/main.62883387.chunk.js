(this.webpackJsonpclick=this.webpackJsonpclick||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"image":"https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/9/97/S1e25_Finn_with_five_fingers.png/revision/latest/scale-to-width-down/340?cb=20131128031157"},{"id":2,"image":"https://www.nicepng.com/png/detail/872-8728725_adventure-time-jake-the-dog-blinking-jake-adventure.png"},{"id":3,"image":"https://topicimages.mrowl.com/large/gracie/adventuretime/thecharacters/ladyrainicorn_2.jpg    "},{"id":4,"image":"https://res.cloudinary.com/teepublic/image/private/s--9dodrAg2--/c_crop,x_10,y_10/c_fit,h_830/c_crop,g_north_west,h_1038,w_1038,x_-135,y_-104/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-246,y_-215/b_rgb:088c72/c_limit,f_jpg,h_630,q_90,w_630/v1564668338/production/designs/5480079_0.jpg"},{"id":5,"image":"https://pyxis.nymag.com/v1/imgs/26d/311/5d77f80ae9cb39ad03ecbcfc57faf60472-31-ice-king.rsquare.w700.jpg"},{"id":6,"image":"https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/3/3a/Tree_runks.jpg/revision/latest?cb=20110901125236"},{"id":7,"image":"https://www.overthinkingit.com/wp-content/uploads/2013/10/Lemongrab.jpg"},{"id":8,"image":"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-adventure-time-hyden-walch-princess-bubblegum.jpg"},{"id":9,"image":"https://i.pinimg.com/originals/fc/75/24/fc7524ed1e5bd64b4837210d63f0fd32.jpg"},{"id":10,"image":"https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/1/17/Modelsheet_candycrowdcenter.png/revision/latest?cb=20121002063302"},{"id":11,"image":"https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/1/1f/S1e1_manfried.png/revision/latest?cb=20120720105837"},{"id":12,"image":"https://www.syfy.com/sites/syfy/files/styles/1200x1200_hero/public/2020/04/marceline-jam.jpg"}]')},,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(3),r=a.n(i),o=(a(14),a(15),a(16),{nav:{fontWeight:900}});var s=function(e){return c.a.createElement("nav",{class:"navbar navbar-dark bg-dark"},c.a.createElement("span",{class:"navbar-brand mb-0 h1",style:o.nav},"Clicky Game"))},l={Score:{fontWeight:900}};var m=function(e){return c.a.createElement("div",{className:"container"},c.a.createElement("h4",{style:l.Score},"Score:",c.a.createElement("span",{className:l.Score},e.score),"Top Score:",c.a.createElement("span",{className:l.Score},e.topScore)))},d=a(6),g=a(4),p=a(5),u=a(8),f=a(7),h={card:{width:"200px",margin:"20px"}};var v=function(e){return c.a.createElement("div",{className:"col-3"},c.a.createElement("div",{className:""},c.a.createElement("img",{src:e.image,style:h.card,onClick:function(){e.random(),e.counter(e.id),e.topScore()}})))},w=a(1);var k=function(){return c.a.createElement("div",{class:"jumbotron jumbotron-fluid"},c.a.createElement("div",{class:"container"},c.a.createElement("h1",{class:"display-4"},"Clicky Game"),c.a.createElement("p",{class:"lead"},"This is a memory game. Don't click on an image twice!")))},_=function(e){Object(u.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={CardImages:[],clicks:[],score:0,topScore:0},e.counter=function(t){-1===e.state.clicks.indexOf(t)?e.setState({clicks:[].concat(Object(d.a)(e.state.clicks),[t]),score:e.state.score+1,topScore:e.state.score}):(console.log("farley"),e.setState({score:0}),e.setState({clicks:[]}),e.setState({topScore:e.state.score}))},e.random=function(){var t=e.state.Images;e.setState({CardImages:t.sort((function(e){var t=Math.random();return t>.1?1:t<.1?-1:0}))})},e.topScore=function(){e.state.score>e.state.topScore&&e.setState({topScore:e.state.score})},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.setState({Images:w})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(s,null),c.a.createElement(k,null),c.a.createElement(m,{score:this.state.score}),c.a.createElement("div",{className:"row",style:{margin:"4px"}},w.map((function(t){return c.a.createElement(v,{key:t.id,id:t.id,image:t.image,random:e.random,counter:e.counter,topScore:e.topScore})}))))}}]),a}(c.a.Component);var b=function(){return c.a.createElement("div",null,c.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.62883387.chunk.js.map
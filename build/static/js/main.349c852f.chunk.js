(this.webpackJsonpreactmemorygame=this.webpackJsonpreactmemorygame||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"SpongeBob","image":"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014","occupation":"Fry Cook","location":"A Pineapple Under the Sea","clicked":false},{"id":2,"name":"Mr. Krabs","image":"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131","occupation":"Restaurant Owner","location":"A Giant Anchor","clicked":false},{"id":3,"name":"Squidward","image":"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626","occupation":"Cashier","location":"An Easter Island Head","clicked":false},{"id":4,"name":"Dexter","image":"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png","occupation":"Boy Genius","location":"A Secret Laboratory","clicked":false},{"id":5,"name":"Courage","image":"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423","occupation":"A Cowardly Dog","location":"Nowhere, Kansas","clicked":false},{"id":6,"name":"Doug Funnie","image":"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511","occupation":"Student","location":"Bluffington","clicked":false},{"id":7,"name":"Bugs Bunny","image":"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607","occupation":"Looney Toon","location":"A Rabbit Burrow","clicked":false},{"id":8,"name":"Johnny Bravo","image":"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist","occupation":"Ladies Man","location":"Aron City","clicked":false},{"id":9,"name":"Tommy Pickles","image":"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641","occupation":"Adventurer","location":"California","clicked":false},{"id":10,"name":"Rocko","image":"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416","occupation":"Cashier","location":"O-Town, California","clicked":false},{"id":11,"name":"Captain Planet","image":"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836","occupation":"Superhero","location":"Earth","clicked":false},{"id":12,"name":"Ickis","image":"http://static.tvtropes.org/pmwiki/pub/images/ickis.png","occupation":"Ahhhh! A Real Monster!","location":"Under a City Dump","clicked":false}]')},,,function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),o=t(2),c=t.n(o),s=(t(14),t(3)),r=t(4),l=t(7),m=t(5),g=t(8);t(15),t(16);var u=function(e){return n.a.createElement("div",null,n.a.createElement("div",{className:"row wrapper"},n.a.createElement("h1",{className:"title"},"Superhero Guessing Game"),n.a.createElement("h3",null,"Click an image to earn points, but don't click an image twice")),n.a.createElement("div",{className:"wrapper row"},e.children),";")};t(17);var h=function(e){return n.a.createElement("div",{className:"col-md-3"},n.a.createElement("img",{onClick:function(){return e.ClickedImage(e.id)},src:e.image,alt:e.name,className:"img-thumbnail hero-img"}))};var d=function(e){return n.a.createElement("nav",{className:"navbar d-block"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"},"Superhero Clicky Game"),n.a.createElement("div",{className:"col-md-4"},e.message),n.a.createElement("div",{className:"col-md-4"},"Score: ",e.count,"||High Score: ",e.highcount)))},p=t(6),k=function(e){function a(){var e,t;Object(s.a)(this,a);for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={Score:0,HighScore:0,message:"Click a Superhero to get started!",NewSuperheros:[],Superheros:p},t.ClickedImage=function(e){var a=t.state.NewSuperheros;a.includes(e)?(t.shuffle(),t.resetGame(!1)):a.includes(e)||(t.shuffle(),t.setState({Score:t.state.Score+1},(function(){console.log("line 51: the score now is "+this.state.Score),this.state.Score>this.state.HighScore&&this.setState({HighScore:this.state.Score},(function(){12===this.state.Score&&(this.resetGame(!0),console.log("reset game damnit"))}))})),a.push(e))},t.shuffle=function(){t.state.Superheros.sort((function(){return.5-Math.random()}))},t.resetGame=function(e){e?e&&t.setState({Score:0,NewSuperheros:[],HighScore:0,message:"YAY YOU WIN!!!!!!"}):t.setState({Score:0,NewSuperheros:[],message:"OOO So close, try again!"})},t}return Object(g.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(d,{count:this.state.Score,highcount:this.state.HighScore,message:this.state.message}),n.a.createElement(u,null,this.state.Superheros.map((function(a){return n.a.createElement(h,{key:a.id,id:a.id,name:a.name,image:a.image,ClickedImage:function(){return e.ClickedImage(a.id)}})}))))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.349c852f.chunk.js.map
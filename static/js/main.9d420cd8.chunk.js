(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,s){},15:function(t,e,s){"use strict";s.r(e);var c=s(0),o=s.n(c),i=s(7),a=s.n(i),l=s(1),n=s(2),r=s(4),h=s(3),p=s(5),d=(s(13),function(t){function e(){return Object(l.a)(this,e),Object(r.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(n.a)(e,[{key:"render",value:function(){return o.a.createElement("img",{onClick:this.props.onClick,src:this.props.src,alt:this.props.alt,className:"col-sm-4 indivPhoto"})}}]),e}(o.a.Component)),u=function(t){function e(t){var s;return Object(l.a)(this,e),(s=Object(r.a)(this,Object(h.a)(e).call(this,t))).mixThemUp=function(){for(var t=s.state.photoURLs,e=t.length-1;e>=0;e--){var c=Math.floor(Math.random()*(e+1)),o=t[c];t[c]=t[e],t[e]=o}s.setState({photoURLs:t})},s.clickEvent=function(t){s.state.score>s.state.topScore&&s.setState({topScore:s.state.score});var e=t.target.alt;if(s.state.photoURLs[e-1].clicked){for(var c=s.state.photoURLs,o=0;o<c.length;o++)c[o].clicked=!1;s.setState({score:0,photoURLs:c}),console.log(s.state.photoURLs),console.log(c)}else{var i=s.state.photoURLs,a=i[e-1];a.clicked=!0,i.splice(e-1,1),i.push(a),s.setState({score:s.state.score+1,photoURLs:i}),s.mixThemUp()}s.state.score>s.state.topScore&&s.setState({topScore:s.state.score})},s.state={photoURLs:[{id:1,url:"http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw07ab65d9/images/products/vegetables/03286_01_dulcina.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196",clicked:!1},{id:2,url:"http://images.media-allrecipes.com/userphotos/960x960/4578474.jpg",clicked:!1},{id:3,url:"https://www.culinaryhill.com/wp-content/uploads/2017/10/Chipotle-Pinto-Beans-Copycat-Culinary-Hill-3-660x660.jpg",clicked:!1},{id:4,url:"https://www.bushbeans.com/sites/default/files/product-shelf/product-landing-hero-baked_0-2.png",clicked:!1},{id:5,url:"https://woodlandfoods.com/img/WF_Images/B12-swedish-brown-beans-main.jpg",clicked:!1},{id:6,url:"https://i1.wp.com/thekitchengirl.com/wp-content/uploads/Cook-Dry-Beans-in-2-Hours-No-Soaking-No-Instant-Pot-No-Crockpot-The-Kitchen-Girl_06.jpg?fit=680%2C680&ssl=1",clicked:!1},{id:7,url:"https://d213sdapb08052.cloudfront.net/assets/recipes/green-beans-gremolata/_entryTopPhotoMobile/Page-168-web-horizon.jpg?mtime=20160725145139",clicked:!1},{id:8,url:"https://www.kitchenkneads.com/wp-content/uploads/2016/06/dried-light-red-kidney-beans-20-lbs.jpg",clicked:!1},{id:9,url:"https://www.rachaelraymag.com/.image/t_share/MTQ5MTcxMjIwMDg3MDU1ODEz/beef-kidney-bean-chili-102783100.jpg",clicked:!1},{id:10,url:"https://www.tasteofhome.com/wp-content/uploads/2018/04/Three-Bean-Baked-Beans_EXPS_SDAM17_9008_D12_07_8b-696x696.jpg",clicked:!1},{id:11,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnZIezL9cUKM9rR65vS5UyyL8xJMUXhYv_MyBkHM1LU6PD1ZjI",clicked:!1},{id:12,url:"https://images.heb.com/is/image/HEBGrocery/000444186-1?id=efRRN2&fmt=jpg&fit=constrain,1&wid=296&hei=296",clicked:!1},{id:13,url:"https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/exps8127_HSC143552C08_01_2b.jpg",clicked:!1},{id:14,url:"https://detoxinista.com/wp-content/uploads/2017/06/how-to-cook-black-beans-pressure-cooker-500x500.jpg",clicked:!1},{id:15,url:"https://www.theblackpeppercorn.com/wp-content/uploads/2012/04/Mexican-Pinto-Beans-overhead.jpg",clicked:!1}],defaultURLs:[{id:1,url:"http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw07ab65d9/images/products/vegetables/03286_01_dulcina.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196",clicked:!1},{id:2,url:"http://images.media-allrecipes.com/userphotos/960x960/4578474.jpg",clicked:!1},{id:3,url:"https://www.culinaryhill.com/wp-content/uploads/2017/10/Chipotle-Pinto-Beans-Copycat-Culinary-Hill-3-660x660.jpg",clicked:!1},{id:4,url:"https://www.bushbeans.com/sites/default/files/product-shelf/product-landing-hero-baked_0-2.png",clicked:!1},{id:5,url:"https://woodlandfoods.com/img/WF_Images/B12-swedish-brown-beans-main.jpg",clicked:!1},{id:6,url:"https://i1.wp.com/thekitchengirl.com/wp-content/uploads/Cook-Dry-Beans-in-2-Hours-No-Soaking-No-Instant-Pot-No-Crockpot-The-Kitchen-Girl_06.jpg?fit=680%2C680&ssl=1",clicked:!1},{id:7,url:"https://d213sdapb08052.cloudfront.net/assets/recipes/green-beans-gremolata/_entryTopPhotoMobile/Page-168-web-horizon.jpg?mtime=20160725145139",clicked:!1},{id:8,url:"https://www.kitchenkneads.com/wp-content/uploads/2016/06/dried-light-red-kidney-beans-20-lbs.jpg",clicked:!1},{id:9,url:"https://www.rachaelraymag.com/.image/t_share/MTQ5MTcxMjIwMDg3MDU1ODEz/beef-kidney-bean-chili-102783100.jpg",clicked:!1},{id:10,url:"https://www.tasteofhome.com/wp-content/uploads/2018/04/Three-Bean-Baked-Beans_EXPS_SDAM17_9008_D12_07_8b-696x696.jpg",clicked:!1},{id:11,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnZIezL9cUKM9rR65vS5UyyL8xJMUXhYv_MyBkHM1LU6PD1ZjI",clicked:!1},{id:12,url:"https://images.heb.com/is/image/HEBGrocery/000444186-1?id=efRRN2&fmt=jpg&fit=constrain,1&wid=296&hei=296",clicked:!1},{id:13,url:"https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/exps8127_HSC143552C08_01_2b.jpg",clicked:!1},{id:14,url:"https://detoxinista.com/wp-content/uploads/2017/06/how-to-cook-black-beans-pressure-cooker-500x500.jpg",clicked:!1},{id:15,url:"https://www.theblackpeppercorn.com/wp-content/uploads/2012/04/Mexican-Pinto-Beans-overhead.jpg",clicked:!1}],score:0,topScore:0},s}return Object(p.a)(e,t),Object(n.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"row"},o.a.createElement("h1",{className:"col-sm-12"},"Score: ",this.state.score),o.a.createElement("br",null),o.a.createElement("h1",{className:"col-sm-12"},"Top Score: ",this.state.topScore),o.a.createElement(d,{onClick:this.clickEvent,src:this.state.photoURLs[0].url,alt:this.state.photoURLs[0].id}),o.a.createElement(d,{onClick:this.clickEvent,src:this.state.photoURLs[1].url,alt:this.state.photoURLs[1].id}),o.a.createElement(d,{onClick:this.clickEvent,src:this.state.photoURLs[2].url,alt:this.state.photoURLs[2].id}),o.a.createElement(d,{onClick:this.clickEvent,src:this.state.photoURLs[3].url,alt:this.state.photoURLs[3].id}),o.a.createElement(d,{onClick:this.clickEvent,src:this.state.photoURLs[4].url,alt:this.state.photoURLs[4].id}),o.a.createElement(d,{onClick:this.clickEvent,src:this.state.photoURLs[5].url,alt:this.state.photoURLs[5].id}),o.a.createElement(d,{onClick:this.clickEvent,src:this.state.photoURLs[6].url,alt:this.state.photoURLs[6].id}),o.a.createElement(d,{onClick:this.clickEvent,src:this.state.photoURLs[7].url,alt:this.state.photoURLs[7].id}),o.a.createElement(d,{onClick:this.clickEvent,src:this.state.photoURLs[8].url,alt:this.state.photoURLs[8].id}),o.a.createElement(d,{onClick:this.clickEvent,src:this.state.photoURLs[9].url,alt:this.state.photoURLs[9].id}),o.a.createElement(d,{onClick:this.clickEvent,src:this.state.photoURLs[10].url,alt:this.state.photoURLs[10].id}),o.a.createElement(d,{onClick:this.clickEvent,src:this.state.photoURLs[11].url,alt:this.state.photoURLs[11].id}),o.a.createElement(d,{onClick:this.clickEvent,src:this.state.photoURLs[12].url,alt:this.state.photoURLs[12].id}),o.a.createElement(d,{onClick:this.clickEvent,src:this.state.photoURLs[13].url,alt:this.state.photoURLs[13].id}),o.a.createElement(d,{onClick:this.clickEvent,src:this.state.photoURLs[14].url,alt:this.state.photoURLs[14].id}))}}]),e}(o.a.Component),m=function(t){function e(){return Object(l.a)(this,e),Object(r.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(n.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(u,null))}}]),e}(c.Component);a.a.render(o.a.createElement(m,null),document.getElementById("root"))},8:function(t,e,s){t.exports=s(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.9d420cd8.chunk.js.map
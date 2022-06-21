"use strict";(self.webpackChunkactix_website=self.webpackChunkactix_website||[]).push([[3912],{9340:function(e,t,s){s.r(t),s.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return n},metadata:function(){return p},toc:function(){return b}});var a=s(7462),o=s(3366),c=(s(7294),s(3905)),i=s(2536),r=["components"],n={title:"Websockets"},l="Websockets",p={unversionedId:"websockets",id:"websockets",title:"Websockets",description:"Actix Web supports WebSockets with the actix-web-actors crate. It is possible to convert a request's Payload to a stream of ws::Payload and then use stream combinators to handle actual messages, but it is simpler to handle websocket communications with an http actor.",source:"@site/docs/websockets.md",sourceDirName:".",slug:"/websockets",permalink:"/docs/websockets",draft:!1,editUrl:"https://github.com/actix/actix-website/docs/websockets.md",tags:[],version:"current",frontMatter:{title:"Websockets"},sidebar:"docs",previous:{title:"Static Files",permalink:"/docs/static-files"},next:{title:"HTTP/2",permalink:"/docs/http2"}},m={},b=[],k={toc:b};function u(e){var t=e.components,s=(0,o.Z)(e,r);return(0,c.kt)("wrapper",(0,a.Z)({},k,s,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"websockets"},"Websockets"),(0,c.kt)("p",null,"Actix Web supports WebSockets with the ",(0,c.kt)("inlineCode",{parentName:"p"},"actix-web-actors")," crate. It is possible to convert a request's ",(0,c.kt)("inlineCode",{parentName:"p"},"Payload")," to a stream of ",(0,c.kt)("a",{parentName:"p",href:"https://docs.rs/actix-web-actors/2/actix_web_actors/ws/enum.Message.html"},(0,c.kt)("em",{parentName:"a"},"ws::Message"))," with a ",(0,c.kt)("a",{parentName:"p",href:"https://docs.rs/actix-web/4/actix_web/web/struct.Payload.html"},(0,c.kt)("em",{parentName:"a"},"web::Payload"))," and then use stream combinators to handle actual messages, but it is simpler to handle websocket communications with an http actor."),(0,c.kt)("p",null,"The following is an example of a simple websocket echo server:"),(0,c.kt)(i.Z,{example:"websockets",file:"main.rs",section:"websockets",mdxType:"CodeBlock"}),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"A simple websocket echo server example is available in the ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/actix/examples/tree/master/websockets"},"examples directory"),".")),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"An example chat server with the ability to chat over a websocket or TCP connection is available in ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/actix/examples/tree/master/websockets/chat"},"websocket-chat directory"))))}u.isMDXComponent=!0}}]);
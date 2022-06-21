(self.webpackChunkactix_website=self.webpackChunkactix_website||[]).push([[7162],{1838:function(e){e.exports={rustVersion:"1.56",actixWebMajorVersion:"4"}},9390:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=n(3066),s=n(2536),l=n(1838),d=["components"],u={title:"Getting Started"},p=void 0,c={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Installing Rust",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/actix-website/docs/getting-started",draft:!1,editUrl:"https://github.com/actix/actix-website/edit/master/docs/getting-started.md",tags:[],version:"current",frontMatter:{title:"Getting Started"},sidebar:"docs",previous:{title:"What is Actix Web",permalink:"/actix-website/docs/whatis"},next:{title:"Application",permalink:"/actix-website/docs/application"}},h={},m=[{value:"Installing Rust",id:"installing-rust",level:2},{value:"Hello, world!",id:"hello-world",level:2}],g={toc:m};function k(e){var t=e.components,n=(0,i.Z)(e,d);return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"installing-rust"},"Installing Rust"),(0,r.kt)("p",null,"If you don't have Rust yet, we recommend you use ",(0,r.kt)("inlineCode",{parentName:"p"},"rustup")," to manage your Rust installation. The ",(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/book/ch01-01-installation.html"},"official rust guide")," has a wonderful section on getting started."),(0,r.kt)("p",null,"Actix Web currently has a minimum supported Rust version (MSRV) of ",l.rustVersion,". Running ",(0,r.kt)("code",null,"rustup update")," will ensure you have the latest and greatest Rust version available. As such, this guide assumes you are running Rust ",l.rustVersion," or later."),(0,r.kt)("h2",{id:"hello-world"},"Hello, world!"),(0,r.kt)("p",null,"Start by creating a new binary-based Cargo project and changing into the new directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo new hello-world\ncd hello-world\n")),(0,r.kt)("p",null,"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"actix-web")," as a dependency of your project by adding the following to your ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file."),(0,r.kt)(o.Z,{className:"language-toml",mdxType:"RenderCodeBlock"},'[dependencies]\nactix-web = "'+l.actixWebMajorVersion+'"'),(0,r.kt)("p",null,"Request handlers use async functions that accept zero or more parameters. These parameters can be extracted from a request (see ",(0,r.kt)("inlineCode",{parentName:"p"},"FromRequest")," trait) and returns a type that can be converted into an ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpResponse")," (see ",(0,r.kt)("inlineCode",{parentName:"p"},"Responder")," trait):"),(0,r.kt)(s.Z,{example:"getting-started",section:"handlers",mdxType:"CodeBlock"}),(0,r.kt)("p",null,"Notice that some of these handlers have routing information attached directly using the built-in macros. These allow you to specify the method and path that the handler should respond to. You will see below how to register ",(0,r.kt)("inlineCode",{parentName:"p"},"manual_hello")," (i.e. routes that do not use a routing macro)."),(0,r.kt)("p",null,"Next, create an ",(0,r.kt)("inlineCode",{parentName:"p"},"App")," instance and register the request handlers. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"App::service")," for the handlers using routing macros and ",(0,r.kt)("inlineCode",{parentName:"p"},"App::route")," for manually routed handlers, declaring the path and method. Finally, the app is started inside an ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpServer")," which will serve incoming requests using your ",(0,r.kt)("inlineCode",{parentName:"p"},"App"),' as an "application factory".'),(0,r.kt)(s.Z,{example:"getting-started",section:"main",mdxType:"CodeBlock"}),(0,r.kt)("p",null,"That's it! Compile and run the program with ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo run"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"#[actix_web::main]")," macro executes the async main function within the actix runtime. Now you can go to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8080/")," or any of the other routes you defined to see the results."))}k.isMDXComponent=!0}}]);
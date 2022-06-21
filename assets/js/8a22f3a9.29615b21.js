"use strict";(self.webpackChunkactix_website=self.webpackChunkactix_website||[]).push([[6367],{9764:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),i=t(2536),s=["components"],l={title:"Errors"},p="Errors",d={unversionedId:"errors",id:"errors",title:"Errors",description:"Actix Web uses its own actixweb::ResponseError trait for error handling from web handlers.",source:"@site/docs/errors.md",sourceDirName:".",slug:"/errors",permalink:"/docs/errors",draft:!1,editUrl:"https://github.com/actix/actix-website/docs/errors.md",tags:[],version:"current",frontMatter:{title:"Errors"},sidebar:"docs",previous:{title:"Handlers",permalink:"/docs/handlers"},next:{title:"URL Dispatch",permalink:"/docs/url-dispatch"}},c={},m=[{value:"An example of a custom error response",id:"an-example-of-a-custom-error-response",level:2},{value:"Error helpers",id:"error-helpers",level:2},{value:"Error logging",id:"error-logging",level:2},{value:"Recommended practices in error handling",id:"recommended-practices-in-error-handling",level:2},{value:"Error Logging",id:"error-logging-1",level:2}],u={toc:m};function h(e){var r=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"errors"},"Errors"),(0,a.kt)("p",null,"Actix Web uses its own ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/actix-web/4/actix_web/error/struct.Error.html"},(0,a.kt)("inlineCode",{parentName:"a"},"actix_web::error::Error"))," type and ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/actix-web/4/actix_web/error/trait.ResponseError.html"},(0,a.kt)("inlineCode",{parentName:"a"},"actix_web::error::ResponseError"))," trait for error handling from web handlers."),(0,a.kt)("p",null,"If a handler returns an ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")," (referring to the ",(0,a.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/error/trait.Error.html"},"general Rust trait ",(0,a.kt)("inlineCode",{parentName:"a"},"std::error::Error")),") in a ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," that also implements the ",(0,a.kt)("inlineCode",{parentName:"p"},"ResponseError")," trait, actix-web will render that error as an HTTP response with its corresponding ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/actix-web/4/actix_web/http/struct.StatusCode.html"},(0,a.kt)("inlineCode",{parentName:"a"},"actix_web::http::StatusCode")),". An internal server error is generated by default:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait ResponseError {\n    fn error_response(&self) -> Response<Body>;\n    fn status_code(&self) -> StatusCode;\n}\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"Responder")," coerces compatible ",(0,a.kt)("inlineCode",{parentName:"p"},"Result"),"s into HTTP responses:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl<T: Responder, E: Into<Error>> Responder for Result<T, E>\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Error")," in the code above is actix-web's error definition, and any errors that implement ",(0,a.kt)("inlineCode",{parentName:"p"},"ResponseError")," can be converted to one automatically."),(0,a.kt)("p",null,"Actix Web provides ",(0,a.kt)("inlineCode",{parentName:"p"},"ResponseError")," implementations for some common non-actix errors. For example, if a handler responds with an ",(0,a.kt)("inlineCode",{parentName:"p"},"io::Error"),", that error is converted into an ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpInternalServerError"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use std::io;\nuse actix_files::NamedFile;\n\nfn index(_req: HttpRequest) -> io::Result<NamedFile> {\n    Ok(NamedFile::open("static/index.html")?)\n}\n')),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/actix-web/4/actix_web/error/trait.ResponseError.html#foreign-impls"},"the actix-web API documentation")," for a full list of foreign implementations for ",(0,a.kt)("inlineCode",{parentName:"p"},"ResponseError"),"."),(0,a.kt)("h2",{id:"an-example-of-a-custom-error-response"},"An example of a custom error response"),(0,a.kt)("p",null,"Here's an example implementation for ",(0,a.kt)("inlineCode",{parentName:"p"},"ResponseError"),", using the ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/derive_more"},"derive_more")," crate for declarative error enums."),(0,a.kt)(i.Z,{example:"errors",file:"main.rs",section:"response-error",mdxType:"CodeBlock"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ResponseError")," has a default implementation for ",(0,a.kt)("inlineCode",{parentName:"p"},"error_response()")," that will render a ",(0,a.kt)("em",{parentName:"p"},"500")," (internal server error), and that's what will happen when the ",(0,a.kt)("inlineCode",{parentName:"p"},"index")," handler executes above."),(0,a.kt)("p",null,"Override ",(0,a.kt)("inlineCode",{parentName:"p"},"error_response()")," to produce more useful results:"),(0,a.kt)(i.Z,{example:"errors",file:"override_error.rs",section:"override",mdxType:"CodeBlock"}),(0,a.kt)("h2",{id:"error-helpers"},"Error helpers"),(0,a.kt)("p",null,"Actix Web provides a set of error helper functions that are useful for generating specific HTTP error codes from other errors. Here we convert ",(0,a.kt)("inlineCode",{parentName:"p"},"MyError"),", which doesn't implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"ResponseError")," trait, to a ",(0,a.kt)("em",{parentName:"p"},"400")," (bad request) using ",(0,a.kt)("inlineCode",{parentName:"p"},"map_err"),":"),(0,a.kt)(i.Z,{example:"errors",file:"helpers.rs",section:"helpers",mdxType:"CodeBlock"}),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/actix-web/4/actix_web/error/struct.Error.html"},"API documentation for actix-web's ",(0,a.kt)("inlineCode",{parentName:"a"},"error")," module")," for a full list of available error helpers."),(0,a.kt)("h2",{id:"error-logging"},"Error logging"),(0,a.kt)("p",null,"Actix logs all errors at the ",(0,a.kt)("inlineCode",{parentName:"p"},"WARN")," log level. If an application's log level is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"DEBUG")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"RUST_BACKTRACE")," is enabled, the backtrace is also logged. These are configurable with environmental variables:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},">> RUST_BACKTRACE=1 RUST_LOG=actix_web=debug cargo run\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")," type uses the cause's error backtrace if available. If the underlying failure does not provide a backtrace, a new backtrace is constructed pointing to the point where the conversion occurred (rather than the origin of the error)."),(0,a.kt)("h2",{id:"recommended-practices-in-error-handling"},"Recommended practices in error handling"),(0,a.kt)("p",null,"It might be useful to think about dividing the errors an application produces into two broad groups: those which are intended to be user-facing, and those which are not."),(0,a.kt)("p",null,"An example of the former is that I might use failure to specify a ",(0,a.kt)("inlineCode",{parentName:"p"},"UserError")," enum which encapsulates a ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidationError")," to return whenever a user sends bad input:"),(0,a.kt)(i.Z,{example:"errors",file:"recommend_one.rs",section:"recommend-one",mdxType:"CodeBlock"}),(0,a.kt)("p",null,"This will behave exactly as intended because the error message defined with ",(0,a.kt)("inlineCode",{parentName:"p"},"display")," is written with the explicit intent to be read by a user."),(0,a.kt)("p",null,"However, sending back an error's message isn't desirable for all errors -- there are many failures that occur in a server environment where we'd probably want the specifics to be hidden from the user. For example, if a database goes down and client libraries start producing connect timeout errors, or if an HTML template was improperly formatted and errors when rendered. In these cases, it might be preferable to map the errors to a generic error suitable for user consumption."),(0,a.kt)("p",null,"Here's an example that maps an internal error to a user-facing ",(0,a.kt)("inlineCode",{parentName:"p"},"InternalError")," with a custom message:"),(0,a.kt)(i.Z,{example:"errors",file:"recommend_two.rs",section:"recommend-two",mdxType:"CodeBlock"}),(0,a.kt)("p",null,"By dividing errors into those which are user facing and those which are not, we can ensure that we don't accidentally expose users to errors thrown by application internals which they weren't meant to see."),(0,a.kt)("h2",{id:"error-logging-1"},"Error Logging"),(0,a.kt)("p",null,"This is a basic example using ",(0,a.kt)("inlineCode",{parentName:"p"},"middleware::Logger")," which depends on ",(0,a.kt)("inlineCode",{parentName:"p"},"env_logger")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"log"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nenv_logger = "0.8"\nlog = "0.4"\n')),(0,a.kt)(i.Z,{example:"errors",file:"logging.rs",section:"logging",mdxType:"CodeBlock"}))}h.isMDXComponent=!0}}]);
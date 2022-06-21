"use strict";(self.webpackChunkactix_website=self.webpackChunkactix_website||[]).push([[6461],{6461:function(e,n,t){t.r(n),n.default='// <request-routing>\nuse actix_web::{get, web, App, HttpRequest, HttpServer, Responder};\n\n#[get("/")]\nasync fn index(_req: HttpRequest) -> impl Responder {\n    "Hello from the index page."\n}\n\nasync fn hello(path: web::Path<String>) -> impl Responder {\n    format!("Hello {}!", &path)\n}\n\n#[actix_web::main]\nasync fn main() -> std::io::Result<()> {\n    HttpServer::new(|| {\n        App::new()\n            .service(index)\n            .route("/{name}", web::get().to(hello))\n    })\n    .bind(("127.0.0.1", 8080))?\n    .run()\n    .await\n}\n// </request-routing>\n'}}]);
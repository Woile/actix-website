"use strict";(self.webpackChunkactix_website=self.webpackChunkactix_website||[]).push([[4147],{4147:function(n,e,t){t.r(e),e.default='// <auto>\nuse actix_web::{get, middleware, App, HttpResponse, HttpServer};\n\n#[get("/")]\nasync fn index() -> HttpResponse {\n    HttpResponse::Ok().body("data")\n}\n\n#[actix_web::main]\nasync fn main() -> std::io::Result<()> {\n    HttpServer::new(|| {\n        App::new()\n            .wrap(middleware::Compress::default())\n            .service(index)\n    })\n    .bind(("127.0.0.1", 8080))?\n    .run()\n    .await\n}\n// </auto>\n'}}]);
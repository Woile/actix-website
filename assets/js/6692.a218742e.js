"use strict";(self.webpackChunkactix_website=self.webpackChunkactix_website||[]).push([[6692],{6692:function(e,n,t){t.r(n),n.default='use actix_web::{guard, web, App, HttpRequest, HttpResponse, HttpServer, Responder};\n\n#[allow(dead_code)]\nasync fn index(_req: HttpRequest) -> impl Responder {\n    "Welcome!"\n}\n\n// <default>\n#[actix_web::main]\nasync fn main() -> std::io::Result<()> {\n    HttpServer::new(|| {\n        App::new()\n            .service(web::resource("/").route(web::get().to(index)))\n            .default_service(\n                web::route()\n                    .guard(guard::Not(guard::Get()))\n                    .to(HttpResponse::MethodNotAllowed),\n            )\n    })\n    .bind(("127.0.0.1", 8080))?\n    .run()\n    .await\n}\n// </default>\n'}}]);
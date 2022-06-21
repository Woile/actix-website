"use strict";(self.webpackChunkactix_website=self.webpackChunkactix_website||[]).push([[4808],{4808:function(e,n,t){t.r(n),n.default='// <url>\nuse actix_web::{get, guard, http::header, HttpRequest, HttpResponse, Result};\n\n#[get("/test/")]\nasync fn index(req: HttpRequest) -> Result<HttpResponse> {\n    let url = req.url_for("foo", &["1", "2", "3"])?; // <- generate url for "foo" resource\n\n    Ok(HttpResponse::Found()\n        .insert_header((header::LOCATION, url.as_str()))\n        .finish())\n}\n\n#[actix_web::main]\nasync fn main() -> std::io::Result<()> {\n    use actix_web::{web, App, HttpServer};\n\n    HttpServer::new(|| {\n        App::new()\n            .service(\n                web::resource("/test/{a}/{b}/{c}")\n                    .name("foo") // <- set resource name, then it could be used in `url_for`\n                    .guard(guard::Get())\n                    .to(HttpResponse::Ok),\n            )\n            .service(index)\n    })\n    .bind(("127.0.0.1", 8080))?\n    .run()\n    .await\n}\n// </url>\n'}}]);
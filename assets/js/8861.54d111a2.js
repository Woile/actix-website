"use strict";(self.webpackChunkactix_website=self.webpackChunkactix_website||[]).push([[8861],{8861:function(n,e,i){i.r(e),e.default='// <config-two>\nuse actix_files as fs;\nuse actix_web::{App, HttpServer};\n\n#[actix_web::main]\nasync fn main() -> std::io::Result<()> {\n    HttpServer::new(|| {\n        App::new().service(\n            fs::Files::new("/static", ".")\n                .show_files_listing()\n                .use_last_modified(true),\n        )\n    })\n    .bind(("127.0.0.1", 8080))?\n    .run()\n    .await\n}\n// </config-two>\n'}}]);
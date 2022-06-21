"use strict";(self.webpackChunkactix_website=self.webpackChunkactix_website||[]).push([[2517],{2517:function(n,a,e){e.r(a),a.default='// <arc>\nuse actix_web::{get, web, App, HttpServer, Responder};\nuse std::{\n    cell::Cell,\n    sync::atomic::{AtomicUsize, Ordering},\n    sync::Arc,\n};\n\n#[derive(Clone)]\nstruct AppState {\n    local_count: Cell<usize>,\n    global_count: Arc<AtomicUsize>,\n}\n\n#[get("/")]\nasync fn show_count(data: web::Data<AppState>) -> impl Responder {\n    format!(\n        "global_count: {}\\nlocal_count: {}",\n        data.global_count.load(Ordering::Relaxed),\n        data.local_count.get()\n    )\n}\n\n#[get("/add")]\nasync fn add_one(data: web::Data<AppState>) -> impl Responder {\n    data.global_count.fetch_add(1, Ordering::Relaxed);\n\n    let local_count = data.local_count.get();\n    data.local_count.set(local_count + 1);\n\n    format!(\n        "global_count: {}\\nlocal_count: {}",\n        data.global_count.load(Ordering::Relaxed),\n        data.local_count.get()\n    )\n}\n\n#[actix_web::main]\nasync fn main() -> std::io::Result<()> {\n    let data = AppState {\n        local_count: Cell::new(0),\n        global_count: Arc::new(AtomicUsize::new(0)),\n    };\n\n    HttpServer::new(move || {\n        App::new()\n            .app_data(web::Data::new(data.clone()))\n            .service(show_count)\n            .service(add_one)\n    })\n    .bind(("127.0.0.1", 8080))?\n    .run()\n    .await\n}\n// </arc>\n'}}]);
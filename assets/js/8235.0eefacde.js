"use strict";(self.webpackChunkactix_website=self.webpackChunkactix_website||[]).push([[8235],{8235:function(e,t,n){n.r(t),t.default='// <setup_mutable>\nuse actix_web::{web, App, HttpServer};\nuse std::sync::Mutex;\n\nstruct AppStateWithCounter {\n    counter: Mutex<i32>, // <- Mutex is necessary to mutate safely across threads\n}\n\nasync fn index(data: web::Data<AppStateWithCounter>) -> String {\n    let mut counter = data.counter.lock().unwrap(); // <- get counter\'s MutexGuard\n    *counter += 1; // <- access counter inside MutexGuard\n\n    format!("Request number: {counter}") // <- response with count\n}\n// </setup_mutable>\n\n// <make_app_mutable>\n#[actix_web::main]\nasync fn main() -> std::io::Result<()> {\n    // Note: web::Data created _outside_ HttpServer::new closure\n    let counter = web::Data::new(AppStateWithCounter {\n        counter: Mutex::new(0),\n    });\n\n    HttpServer::new(move || {\n        // move counter into the closure\n        App::new()\n            .app_data(counter.clone()) // <- register the created data\n            .route("/", web::get().to(index))\n    })\n    .bind(("127.0.0.1", 8080))?\n    .run()\n    .await\n}\n// </make_app_mutable>\n'}}]);
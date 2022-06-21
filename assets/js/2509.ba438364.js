"use strict";(self.webpackChunkactix_website=self.webpackChunkactix_website||[]).push([[2509],{2509:function(e,n,t){t.r(n),n.default='use actix_web::{web, App, HttpResponse, HttpServer, Responder};\nuse serde::{Deserialize, Serialize};\n\n// <powerful-extractors>\n#[derive(Deserialize, Serialize)]\nstruct Event {\n    id: Option<i32>,\n    timestamp: f64,\n    kind: String,\n    tags: Vec<String>,\n}\n\nasync fn capture_event(evt: web::Json<Event>) -> impl Responder {\n    let new_event = store_in_db(evt.timestamp, &evt.kind, &evt.tags);\n    format!("got event {}", new_event.id.unwrap())\n}\n// </powerful-extractors>\n\nfn store_in_db(timestamp: f64, kind: &str, tags: &[String]) -> Event {\n    // store item in db and get new_event\n    // use id to lookup item\n    Event {\n        id: Some(1),\n        timestamp,\n        kind: kind.to_string(),\n        tags: tags.to_vec(),\n    }\n}\n\n\nasync fn index() -> HttpResponse {\n    HttpResponse::Ok()\n        .content_type("text/html; charset=utf-8")\n        .body(include_str!("../static/form.html"))\n}\n\n#[actix_web::main]\nasync fn main() -> std::io::Result<()> {\n    HttpServer::new(|| {\n        App::new()\n            .route("/", web::get().to(index))\n            .route("/event", web::post().to(capture_event))\n    })\n    .bind(("127.0.0.1", 8080))?\n    .run()\n    .await\n}\n'}}]);
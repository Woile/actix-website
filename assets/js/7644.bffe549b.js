"use strict";(self.webpackChunkactix_website=self.webpackChunkactix_website||[]).push([[7644],{7644:function(n,e,t){t.r(e),e.default='// <handler>\nfn insert_new_user(db: &SqliteConnection, user: CreateUser) -> Result<User, Error> {\n    use self::schema::users::dsl::*;\n\n    // Create insertion model\n    let uuid = format!("{}", uuid::Uuid::new_v4());\n    let new_user = models::NewUser {\n        id: &uuid,\n        name: &user.name,\n    };\n\n    // normal diesel operations\n    diesel::insert_into(users)\n        .values(&new_user)\n        .execute(&self.0)\n        .expect("Error inserting person");\n\n    let mut items = users\n        .filter(id.eq(&uuid))\n        .load::<models::User>(&self.0)\n        .expect("Error loading person");\n\n    Ok(items.pop().unwrap())\n}\n// </handler>\n\n// <main>\ntype DbPool = r2d2::Pool<ConnectionManager<SqliteConnection>>;\n\n#[actix_web::main]\nasync fn main() -> io::Result<()> {\n    // Create connection pool\n    let pool = r2d2::Pool::builder()\n        .build(manager)\n        .expect("Failed to create pool.");\n\n    // Start HTTP server\n    HttpServer::new(move || {\n        App::new().app_data(web::Data::new(pool.clone()))\n            .resource("/{name}", web::get().to(index))\n    })\n    .bind(("127.0.0.1", 8080))?\n    .run()\n    .await\n}\n// </main>\n\n// <index>\nasync fn index(pool: web::Data<DbPool>, name: web::Path<(String)>) -> impl Responder {\n    let name = name.into_inner();\n\n    let conn = pool.get().expect("couldn\'t get db connection from pool");\n\n    let user = web::block(move || actions::insert_new_user(&conn, &user))\n        .await\n        .map_err(|e| {\n            eprintln!("{}", e);\n            HttpResponse::InternalServerError().finish()\n        })?;\n\n    Ok(HttpResponse::Ok().json(user))\n}\n// </index>\n'}}]);
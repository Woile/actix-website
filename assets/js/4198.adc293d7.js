"use strict";(self.webpackChunkactix_website=self.webpackChunkactix_website||[]).push([[4198],{4198:function(t,e,n){n.r(e),e.default='pub mod integration_one;\npub mod integration_two;\npub mod stream_response;\nuse actix_web::{http, web, App, HttpRequest, HttpResponse};\n\nasync fn index(req: HttpRequest) -> HttpResponse {\n    if let Some(hdr) = req.headers().get(http::header::CONTENT_TYPE) {\n        if let Ok(_s) = hdr.to_str() {\n            return HttpResponse::Ok().into();\n        }\n    }\n    HttpResponse::BadRequest().into()\n}\n\nfn main() {\n    App::new().route("/", web::get().to(index));\n}\n\n// <unit-tests>\n#[cfg(test)]\nmod tests {\n    use super::*;\n    use actix_web::{\n        http::{self, header::ContentType},\n        test,\n    };\n\n    #[actix_web::test]\n    async fn test_index_ok() {\n        let req = test::TestRequest::default()\n            .insert_header(ContentType::plaintext())\n            .to_http_request();\n        let resp = index(req).await;\n        assert_eq!(resp.status(), http::StatusCode::OK);\n    }\n\n    #[actix_web::test]\n    async fn test_index_not_ok() {\n        let req = test::TestRequest::default().to_http_request();\n        let resp = index(req).await;\n        assert_eq!(resp.status(), http::StatusCode::BAD_REQUEST);\n    }\n}\n// </unit-tests>\n'}}]);
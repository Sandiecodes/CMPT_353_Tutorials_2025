use wasm_bindgen::prelude::*;

// Import the `window.alert` function from JavaScript.
#[wasm_bindgen]
extern "C" {
#[wasm_bindgen(js_namespace = console)]
fn log(s: &str);

#[wasm_bindgen(js_name = alert)]
fn js_alert(s: &str);
}

#[wasm_bindgen]
pub fn alert(message: &str) {
js_alert(message);
}

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
log(&format!("Rust received: a={}, b={}", a, b));
let result = a + b;
log(&format!("Rust calculated: {}", result));
result
}

#[wasm_bindgen]
pub fn concat(s1: &str, s2: &str) -> String {
log(&format!("Rust received: s1='{}', s2='{}'", s1, s2));
let result = format!("{}{}", s1, s2);
log(&format!("Rust concatenated: '{}'", result));
result
}
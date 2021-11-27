/**
 * @jest-environment jsdom
 */

 const request = require("supertest");
 const index = require("../index.js");
 
 
 
 const myTest = async () => {
   const response = await request(index).get("/");
   document.body.innerHTML = response.text;
   
   const table = await document.querySelector('table');
   expect(table).not.toBe(null);
 
   const tbody = await document.querySelector('tbody');
   expect(tbody).not.toBe(null);
 
   const thead = await document.querySelector('thead');
   expect(thead).not.toBe(null);
 
   const td = await document.querySelector('td');
   expect(td).not.toBe(null);
 
   const th = await document.querySelector('th');
   expect(th).not.toBe(null);

   const tr = await document.querySelector('tr');
   expect(tr).not.toBe(null); 
   
 };
 
 test("#0 Testing all elements are present", async () => await myTest());
 
/**
 * @jest-environment jsdom
 */

 const request = require("supertest");
 const index = require("../index.js");
 
 
 
 const myTest = async () => {
   const response = await request(index).get("/");
   document.body.innerHTML = response.text;
   
   const content = await document.querySelector('.content');
   expect(content).not.toBe(null);
 
   const top = await document.querySelector('.top');
   expect(top).not.toBe(null);
 
   const logodetails = await document.querySelector('.logo-details');
   expect(logodetails).not.toBe(null);
 
   const logoname = await document.querySelector('.logo_name');
   expect(logoname).not.toBe(null);
 
   const mediaicons = await document.querySelector('.media-icons');
   expect(mediaicons).not.toBe(null);

   const box = await document.querySelector('.box');
   expect(box).not.toBe(null);
 
   const linknames = await document.querySelector('.link_name');
   expect(linknames).not.toBe(null);
 
   const btmDetails = await document.querySelector('.bottom-details');
   expect(btmDetails).not.toBe(null); 
   
   const bottom_text = await document.querySelector('.bottom_text');
   expect(bottom_text).not.toBe(null);
   
   const copyright_text = await document.querySelector('.copyright_text');
   expect(copyright_text).not.toBe(null);
    
   
 };
 
 test("#0 Testing all elements are present", async () => await myTest());
 
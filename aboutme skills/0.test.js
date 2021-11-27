/**
 * @jest-environment jsdom
 */

 const request = require("supertest");
 const index = require("../index.js");
 
 
 
 const myTest = async () => {
   const response = await request(index).get("/");
   document.body.innerHTML = response.text;
   
   const about = await document.querySelector('#about');
   expect(about).not.toBe(null);
 
   const container = await document.querySelector('.container');
   expect(container).not.toBe(null);
 
   const aboutimg = await document.querySelector('.about-img>img');
   expect(aboutimg).not.toBe(null);
 
   const aboutinfo = await document.querySelector('.about-info');
   expect(aboutinfo).not.toBe(null);
 
   const titles1 = await document.querySelector('.title-s1');
   expect(titles1).not.toBe(null);

   const titles = await document.querySelector('.title-s');
   expect(titles).not.toBe(null);
 
   const skills = await document.querySelector('.skill-mf');
   expect(skills).not.toBe(null);
 
   const icons = await document.querySelector('.iconify');
   expect(icons).not.toBe(null); 
   
   const progress = await document.querySelector('.progress');
   expect(progress).not.toBe(null);
   
   const progressBar = await document.querySelector('.progress-bar');
   expect(progressBar).not.toBe(null);
   
   const aboutme = await document.querySelector('.about-me');
   expect(aboutme).not.toBe(null);
   
   const lead= await document.querySelector('.lead');
   expect(lead).not.toBe(null);
   
   const titleleft = await document.querySelector('.title-left');
   expect(titleleft).not.toBe(null);
   
   const titleBox2 = await document.querySelector('.title-box-2');
   expect(titleBox2).not.toBe(null);
   
 };
 
 test("#0 Testing all elements are present", async () => await myTest());
 
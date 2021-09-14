/*
Install event will trigger first.
if it is the firs time it will be also activated.
whenever a change is made to the service worker it will be installed again, 
but it will not be activated because there is an instance running the old version.
*/

self.addEventListener("install", (event) => {
  console.log("installing SW ", event);
  //asyncronimus task
  //extends the lifetime of the install event until the passed promise resolves successfully.
  // event.waitUntil(
  //   //caches open, looks for a cache satatic if it finds it store it ther else
  //   //creates a new cache
  //   caches.open("static").then((cache) => {
  //     //add static files
  //     //cache.addAll add an array of files
  //     return cache.addAll([
  //       "/styles/style.css",
  //       "/offline.html",
  //       "/components/components.js",
  //       "/scripts/utils.js",
  //       "/app.js",
  //     ]);
  //   })
  // );
});

self.addEventListener("activate", (event) => {
  console.log("activating SW ", event);
  //set itself as the controler for all clients
  return self.clients.claim();
});

// self.addEventListener("fetch", (event) => {
//   console.log("SW is fetching: ", event.request);
//   event.respondWith(
//     caches.open("static").then((cache) => {
//       return cache.match(event.request).then((response) => {
//         if (response) {
//           return response;
//         } else {
//           return fetch(event.request);
//         }
//       });
//     })
//   );
// });

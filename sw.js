self.addEventListener('install',function(event){
//promosie2
	event.waitUntil(
	caches.open('cache-ku').then(function(cache){
	  	return cache.addAll([
	  		'/index.html',
	  		'/style.css',
	  		'/main.js',
	  		'/IMG_20230502_232903-removebg-preview.png'
	  		])
	})	
	)
})
//respon dan request
self.addEventListener('fetch',function(event){
 event.respondWith(
caches.match(event.request).then(function(response){
  return response || fetch(event.request)
})		
)
})


      const BaseUrl =`https://api.themoviedb.org/3/movie/popular`;
      const Api_key=`10ad75c569818326a7686e6984c4d996`;
      const language=`ko-kr`;
      const startPate=1;
      const maxPage=500;
      const root =document.getElementById('root')

      function test(page){
        const xhr =new XMLHttpRequest();
        const reqMethod ="GET";
        const requestUrl =`${BaseUrl}?api_key=${Api_key}&language=${language}&page=${page}`
        console.log(requestUrl)
        xhr.open(reqMethod,requestUrl,true)
        xhr.addEventListener('load',()=>{
          if(xhr.status===200){
            const result =JSON.parse(xhr.responseText)
            let list =[];
            result.results.forEach(element => {
              list.push(`<li>제목:${element.title}<br><img src="https://image.tmdb.org/t/p/w500/${element.poster_path}}"><br>내용:${element.overview}</li>`)
            });
            root.innerHTML+=`<ul>${list.join('')}</ul>`
            }if(page<maxPage){
              test(page+1)
              console.log(page)
            }else{
              console.error('에러')
            }
          });
          xhr.send();
        }
      test(startPate)
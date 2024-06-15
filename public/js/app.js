  const BaseUrl =`https://api.themoviedb.org/3/movie/popular`;
        const Api_key=`10ad75c569818326a7686e6984c4d996`;
        const language=`ko-kr`;
        // const startPate=1;
        const maxPage=500;
        const root =document.getElementById('root')// 문서안에서 root 라는 id 를 찾는 부분.

        function test(page){
          const xhr =new XMLHttpRequest();
          const reqMethod ="GET"; // 메서드가 GET이라는 걸 알려주는 부분.
          const requestUrl =`${BaseUrl}?api_key=${Api_key}&language=${language}&page=${page}`  // 변수로 기본 url와 apikey 언어 현재 페이지와 마지막 페이지를 받는 부분.
          console.log(requestUrl)
          xhr.open(reqMethod,requestUrl,true)
          xhr.addEventListener('load',()=>{
            if(xhr.status===200){
              const result =JSON.parse(xhr.responseText)
              let list =[];// list라는 배열을 초기화
              result.results.forEach(element => {// list 배열 을 초기화해서 배열초기화 하는 부분에 push로 넣는 부분.
                list.push(`<li><img src="https://image.tmdb.org/t/p/w500/${element.backdrop_path}}"><br>제목:${element.title}<br>내용:${element.overview}</li>`)
              });
              root.innerHTML+=`<ul>${list.join('')}</ul>` // push 로 넣은 부분을 join으로 합치는 부분
              }if(page<maxPage){// 만약 현재 페이지가 최대 페이지 보다 작으면 추가로 페이지가 1씩 늘어나게 하는 부분.
                test(page+1)
                console.log(page)
              }else{
                console.error('에러')
              }
            });
            xhr.send();
          }
        test(1)
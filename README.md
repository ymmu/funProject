# Json_generator

17-12-28. thu 

- ver1.0 : 이름과 타입을 추가하고, 만들고자 하는 갯수를 입력하면 json 파일로 제공하기 까지.

- ver2.0 :  엑셀파일에 데이터아카이브를 만들고 거기서 데이터를 제공해준다. 커스텀 필드는 만들 수 없는 상태로 바꿈. 
- ver2.1 : 
  - 데이터 아카이브파일의 컬럼의 헤더를 받아와 select option으로 채워준다. 즉, 아카이브에 새컬럼을 작성하면 select의 option으로 알아서 추가된다.
  - select  bootstrap css 연결 



**추후 수정거리:**  

- 다양한 정형화된 필드를 아카이브에 만들어서 선택지를 늘린다.
- 보내주는 데이터가 많아질 때 (십만개 이상?) 다운속도를 조사해본다. 속도의 차이가 현격할 경우 병렬처리를 해보자. 


<img src="https://github.com/ymmu/json_generator/blob/master/Screenshot%20from%202017-12-29%2001-08-21.png" />
<img src="https://github.com/ymmu/json_generator/blob/master/Screenshot%20from%202017-12-29%2000-02-53.png" />

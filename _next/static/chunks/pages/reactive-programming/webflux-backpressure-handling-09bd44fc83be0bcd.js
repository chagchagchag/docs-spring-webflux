(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3817],{9745:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reactive-programming/webflux-backpressure-handling",function(){return n(4988)}])},4988:function(e,r,n){"use strict";n.r(r),n.d(r,{__toc:function(){return o}});var a=n(5893),i=n(2673),s=n(373),t=n(8426);n(9128);var c=n(2643);let o=[{depth:2,value:"Spring Webflux 의 Backpressure 핸들링",id:"spring-webflux-의-backpressure-핸들링"},{depth:2,value:"참고자료",id:"참고자료"},{depth:2,value:"backpressure(배압) 이란?",id:"backpressure배압-이란"},{depth:2,value:"e.g. backpressure 가 발생하는상황",id:"eg-backpressure-가-발생하는상황"},{depth:2,value:"일반적인 backpressure 전략",id:"일반적인-backpressure-전략"},{depth:2,value:"이벤트 스트림 기반의 배압 제어",id:"이벤트-스트림-기반의-배압-제어"},{depth:2,value:"Spring Webflux 의 backpressure 처리",id:"spring-webflux-의-backpressure-처리"},{depth:2,value:"webflux 에서 사용자 정의 backpressure 처리 로직 구현",id:"webflux-에서-사용자-정의-backpressure-처리-로직-구현"},{depth:3,value:"request(n)",id:"requestn"},{depth:3,value:"limitRate()",id:"limitrate"},{depth:3,value:"cancel",id:"cancel"}];function _createMdxContent(e){let r=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",a:"a",blockquote:"blockquote",img:"img",code:"code",h3:"h3"},(0,c.a)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h2,{id:"spring-webflux-의-backpressure-핸들링",children:"Spring Webflux 의 Backpressure 핸들링"}),"\n",(0,a.jsxs)(r.p,{children:["우선 결론부터 이야기하면, spring webflux 에서는 Backpressure 를 지원하지만, 효율적으로 제공하지는 않습니다. 따라서 backpressure 처리가 중요한 경우 별도의 backpressure 처리로직을 작성해야 합니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(r.h2,{id:"참고자료",children:"참고자료"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"https://www.baeldung.com/spring-webflux-backpressure",children:"Backpressure Mechanism in Spring Webflux"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"https://recordsoflife.tistory.com/1329",children:"Spring Webflux 의 배압 메커니즘"})}),"\n"]}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsxs)(r.p,{children:["오늘 문서는 ",(0,a.jsx)(r.a,{href:"https://www.baeldung.com/spring-webflux-backpressure",children:"Backpressure Mechanism in Spring Webflux"})," 을 요약하면서 ",(0,a.jsx)(r.a,{href:"https://recordsoflife.tistory.com/1329",children:"Spring Webflux 의 배압 메커니즘"})," 의 내용을 참고해서 요약한 내용입니다.",(0,a.jsx)("br",{})]}),"\n"]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(r.h2,{id:"backpressure배압-이란",children:"backpressure(배압) 이란?"}),"\n",(0,a.jsx)(r.p,{children:"일반적인 backpressure 의 뜻 은 소프트웨어 시스템에서는 트래픽 통신에 부하를 주는 기능을 의미합니다."}),"\n",(0,a.jsxs)(r.p,{children:['그런데 이 단어는 정반대의 의미로도 쓰입니다. backpressure 는 트래픽 통신에 부하를 주는 기능을 처리하는 메커니즘이라는 의미로도 사용합니다. 조금 더 자세히 설명하면, "시스템이 다운 스트림을 제어하고 처리하는 데에 취하는 보호조치" 를 backpressure 메커니즘으로도 부릅니다.',(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(r.p,{children:['오늘 이 문서에서 정리하는 내용은 "다운스트림의 부하를 제어하고 처리하는 데에 취하는 보호조치라는 의미에서의 backpressure" 의 개념입니다.',(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(r.p,{children:["그리고 backpressure 라는 용어와는 혼선을 피하기 위해 backpressure 를 제어한다, backpressure 를 관리한다라는 말을 따로 쓰고, backpressure 단어 자체는 그 자체로 시스템 부하 상황에 대해서만 사용하겠습니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(r.h2,{id:"eg-backpressure-가-발생하는상황",children:"e.g. backpressure 가 발생하는상황"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Publisher, Consumer, GUI 가 있는 시스템이 있습니다."}),"\n",(0,a.jsx)(r.li,{children:"Publisher 는 10000/s 의 이벤트를 Consumer 로 보냅니다."}),"\n",(0,a.jsx)(r.li,{children:"Consumer 는 이것을 처리해야 하고 결과를 GUI 에 보냅니다."}),"\n",(0,a.jsx)(r.li,{children:"GUI 는 이 결과를 표시합니다."}),"\n",(0,a.jsx)(r.li,{children:"소비자는 7500/s 의 이벤트만 처리 가능합니다."}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{src:"https://www.baeldung.com/wp-content/uploads/2021/04/Screenshot-2021-02-18-at-13.10.26-1024x313-1.png",alt:""})}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsxs)(r.p,{children:["이미지 출처 : ",(0,a.jsx)(r.a,{href:"https://www.baeldung.com/spring-webflux-backpressure",children:"https://www.baeldung.com/spring-webflux-backpressure"})]}),"\n"]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(r.p,{children:["이 속도로는 Consumer 가 backpressure 를 처리할 수 없습니다. 결국 시스템은 붕괴되고 사용자는 결과를 볼 수 없게 됩니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(r.h2,{id:"일반적인-backpressure-전략",children:"일반적인 backpressure 전략"}),"\n",(0,a.jsx)(r.p,{children:"일반적인 backpressure 를 처리할 때에는 아래와 같은 방식으로 제어를 하게 됩니다."}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["첫번째 옵션 : 전송된 데이터 스트림 제어","\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"이 방식에서는 Publisher 가 이벤트 속도를 늦춰야 합니다. 이렇게 Publisher 에서 속도를 늦추면 Consumer는 과부하(overload)가 발생하지 않습니다. 이 방식은 모든 경우에 사용할 수 있는 방식이 아니기에 사용가능한 다른 옵션을 찾아야 할 수 있습니다."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["두번째 옵션 : 여분의 데이터를 버퍼링","\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"이 방식에서는 소비자는 나머지 이벤트를 처리할 수 있을 때 까지 임시로 데이터를 저장합니다. 즉, 버퍼링을 하는 방식입니다. 이 방식의 단점은 메모리의 충돌을 일으키는 버퍼 바인딩을 해제하는 것입니다."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["세번째 옵션 : 추적하지 못하는 추가 이벤트 삭제","\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"너무 오래된 이벤트일경우 삭제하는 방식. 이상적인 방식은 아닙니다. 이 기술을 사용하면 시스템이 붕괴되지는 않습니다."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{src:"https://www.baeldung.com/wp-content/uploads/2021/04/Screenshot-2021-02-18-at-16.48.38-1024x476-1-768x357.png",alt:""})}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsxs)(r.p,{children:["이미지 출처 : ",(0,a.jsx)(r.a,{href:"https://www.baeldung.com/spring-webflux-backpressure",children:"https://www.baeldung.com/spring-webflux-backpressure"})]}),"\n"]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(r.h2,{id:"이벤트-스트림-기반의-배압-제어",children:"이벤트 스트림 기반의 배압 제어"}),"\n",(0,a.jsx)(r.p,{children:"이 방식은 Publisher 가 보낸 이벤트를 제어하는 데에 중점을 두는 방식입니다."}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["request : Subscriber 가 요청할 경우에만 새로운 이벤트를 전송","\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"emitter 요청시 엘리먼트 들을 수집하는 Pull 전략입니다."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["limit : Client 측에서 수신할 이벤트 수를 제한","\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"위에서 정리한 제한된 푸시 전략으로 작동하며, Publisher 는 한번에 클라이언트에게 최대 항목 수를 보낼 수 있습니다."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["cancel : Consumer 가 더 아싱 이벤트를 처리할 수 없을 때 데이터 스트리밍을 취소합니다.","\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Consumer 는 언제든지 전송을 중단하고 다시 스트림을 구독할 수 있습니다."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{src:"https://www.baeldung.com/wp-content/uploads/2021/04/Screenshot-2021-02-25-at-16.51.46-1024x380-1.png",alt:""})}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsxs)(r.p,{children:["이미지 출처 : ",(0,a.jsx)(r.a,{href:"https://www.baeldung.com/spring-webflux-backpressure",children:"https://www.baeldung.com/spring-webflux-backpressure"})]}),"\n"]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(r.h2,{id:"spring-webflux-의-backpressure-처리",children:"Spring Webflux 의 backpressure 처리"}),"\n",(0,a.jsxs)(r.p,{children:["Spring Webflux 에서는 ",(0,a.jsx)(r.a,{href:"https://projectreactor.io/docs/core/release/reference/#reactive.backpressure",children:"Project Reactor"})," 가 배압의 처리를 담당하고 있습니다. 내부적으로는 ",(0,a.jsx)(r.a,{href:"https://projectreactor.io/docs/core/release/reference/#_on_backpressure_and_ways_to_reshape_requests",children:"Flux 의 개념을(On Backpressure and Ways to Reshape Requests)"})," 사용해서 emitter 에서 생성된 이벤트를 제어하는 역할을 수행합니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(r.p,{children:["webflux 는 TCP 흐름제어를 이용해서 Backpressure 를 바이트 단위로 조절합니다. 하지만 소비자가 받을 수 있는 논리적인 요소까지는 처리하지 않습니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(r.p,{children:"내부 동작은 아래와 같이 동작합니다."}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"webflux 프레임워크는 TCP 를 통해 이벤트 전송/수신을 위해 이벤트를 바이트로 변환하는 역할을 합니다."}),"\n",(0,a.jsx)(r.li,{children:"다음 논리적 요소를 요청하기 전에 소비자가 시작하고 장기 실행 작업이 발생할 수 있습니다."}),"\n",(0,a.jsx)(r.li,{children:"수신자가 이벤트를 처리하는 동안 WebFlux는 새로운 이벤트에 대한 요구가 없기 때문에 확인 없이 바이트를 큐에 넣습니다."}),"\n",(0,a.jsx)(r.li,{children:"TCP 프로토콜의 특성으로 인해 새 이벤트가 있으면 게시자가 계속해서 네트워크로 보냅니다."}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{src:"https://www.baeldung.com/wp-content/uploads/2021/04/Screenshot-2021-03-19-at-16.40.30-1024x304-1.png",alt:""})}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsxs)(r.p,{children:["이미지 출처 : ",(0,a.jsx)(r.a,{href:"https://www.baeldung.com/spring-webflux-backpressure",children:"https://www.baeldung.com/spring-webflux-backpressure"})]}),"\n"]}),"\n",(0,a.jsxs)(r.p,{children:["그림을 자세히 보면 Consumer 는 일정하게 TCP 계층에 request(1), onNext() 를 하고 있지만, TCP 계층에서 Publisher 에 요청할 때에는 request 시에는 request(10)을 하고 onNext 시에는 onNext(!) 을 합니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsx)(r.p,{children:"webflux 은 단순히 TCP/IP 를 효율적으로 수행하는 계층이고, 사용자 영역에서의 논리적인 데이터(비즈니스로직)을 효율적으로 처리하기 위한 것은 사용자 레벨에서 직접 작성해야 한다는 사실을 알 수 있습니다."}),"\n"]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(r.h2,{id:"webflux-에서-사용자-정의-backpressure-처리-로직-구현",children:"webflux 에서 사용자 정의 backpressure 처리 로직 구현"}),"\n",(0,a.jsxs)(r.p,{children:["위의 ",(0,a.jsx)(r.code,{children:"이벤트 스트림 기반의 배압 제어"})," 에서 정리한 아래의 세가지 요소들을 정의하는 세가지 예제를 살펴봅니다."]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"request(n)"}),"\n",(0,a.jsx)(r.li,{children:"limitRate()"}),"\n",(0,a.jsx)(r.li,{children:"cancel()"}),"\n"]}),"\n",(0,a.jsx)(r.h3,{id:"requestn",children:"request(n)"}),"\n",(0,a.jsx)(r.h3,{id:"limitrate",children:"limitRate()"}),"\n",(0,a.jsx)(r.h3,{id:"cancel",children:"cancel"})]})}let l={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,c.a)(),e.components);return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/reactive-programming/webflux-backpressure-handling.mdx",route:"/reactive-programming/webflux-backpressure-handling",timestamp:1710914179e3,pageMap:[{kind:"Folder",name:"concurrent-programming-basic",route:"/concurrent-programming-basic",children:[{kind:"MdxPage",name:"blocking-vs-nonblocking",route:"/concurrent-programming-basic/blocking-vs-nonblocking"},{kind:"MdxPage",name:"completable-future",route:"/concurrent-programming-basic/completable-future"},{kind:"MdxPage",name:"completable-stage",route:"/concurrent-programming-basic/completable-stage"},{kind:"MdxPage",name:"intro",route:"/concurrent-programming-basic/intro"},{kind:"MdxPage",name:"sync-vs-async",route:"/concurrent-programming-basic/sync-vs-async"},{kind:"Meta",data:{intro:"Intro","sync-vs-async":"동기 vs 비동기","blocking-vs-nonblocking":"블로킹 vs 논 블로킹","completable-future":"CompletableFuture","completable-stage":"CompletableStage"}}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"kotlin-coroutine",route:"/kotlin-coroutine",children:[{kind:"MdxPage",name:"intro",route:"/kotlin-coroutine/intro"},{kind:"Meta",data:{intro:"Intro"}}]},{kind:"Folder",name:"nio-and-aio",route:"/nio-and-aio",children:[{kind:"MdxPage",name:"intro",route:"/nio-and-aio/intro"},{kind:"MdxPage",name:"java-io-java-nio-java-aio",route:"/nio-and-aio/java-io-java-nio-java-aio"},{kind:"MdxPage",name:"java-nio-socket-communication",route:"/nio-and-aio/java-nio-socket-communication"},{kind:"MdxPage",name:"what-is-aio",route:"/nio-and-aio/what-is-aio"},{kind:"MdxPage",name:"what-is-nio",route:"/nio-and-aio/what-is-nio"},{kind:"Meta",data:{intro:"Intro","java-io-java-nio-java-aio":"Java IO,NIO,AIO","what-is-nio":"NIO 의 개념, 특징, 주요 클래스","java-nio-socket-communication":"Java NIO 소켓통신","what-is-aio":"AIO 의 개념, 특징, 예제"}}]},{kind:"Folder",name:"r2dbc-mysql",route:"/r2dbc-mysql",children:[{kind:"MdxPage",name:"example",route:"/r2dbc-mysql/example"},{kind:"MdxPage",name:"intro",route:"/r2dbc-mysql/intro"},{kind:"MdxPage",name:"what-is-r2dbc",route:"/r2dbc-mysql/what-is-r2dbc"},{kind:"Meta",data:{intro:"Intro","what-is-r2dbc":"R2DBC 란?",example:"예제"}}]},{kind:"Folder",name:"reactive-mongodb",route:"/reactive-mongodb",children:[{kind:"MdxPage",name:"example",route:"/reactive-mongodb/example"},{kind:"MdxPage",name:"intro",route:"/reactive-mongodb/intro"},{kind:"Meta",data:{intro:"Intro",example:"예제"}}]},{kind:"Folder",name:"reactive-programming",route:"/reactive-programming",children:[{kind:"MdxPage",name:"intro",route:"/reactive-programming/intro"},{kind:"MdxPage",name:"java-nio-bad-point-and-solution",route:"/reactive-programming/java-nio-bad-point-and-solution"},{kind:"MdxPage",name:"netflix-rxjava-story",route:"/reactive-programming/netflix-rxjava-story"},{kind:"MdxPage",name:"proactor-pattern",route:"/reactive-programming/proactor-pattern"},{kind:"MdxPage",name:"publisher-subscriber-subscription-backpressure",route:"/reactive-programming/publisher-subscriber-subscription-backpressure"},{kind:"MdxPage",name:"reactive-streams-libraries",route:"/reactive-programming/reactive-streams-libraries"},{kind:"MdxPage",name:"reactor-pattern",route:"/reactive-programming/reactor-pattern"},{kind:"MdxPage",name:"webflux-backpressure-handling",route:"/reactive-programming/webflux-backpressure-handling"},{kind:"MdxPage",name:"what-is-epoll",route:"/reactive-programming/what-is-epoll"},{kind:"MdxPage",name:"what-is-reactive",route:"/reactive-programming/what-is-reactive"},{kind:"Meta",data:{intro:"intro","what-is-reactive":"Reactive란?","netflix-rxjava-story":"Netflix RxJava 이야기","publisher-subscriber-subscription-backpressure":"Publisher,Subscriber,Subscription,Backpressure","reactive-streams-libraries":"Reactive Streams 라이브러리들","webflux-backpressure-handling":"Spring Webflux 에서의 배압(Backpressure)","java-nio-bad-point-and-solution":"Java NIO 의 논블로킹 방식 동기연산의 문제점과 해결책, 멀티플렉싱","what-is-epoll":"epoll 이란?","reactor-pattern":"reactor 패턴","proactor-pattern":"proactor 패턴"}}]},{kind:"Folder",name:"server-sent-event",route:"/server-sent-event",children:[{kind:"MdxPage",name:"example",route:"/server-sent-event/example"},{kind:"MdxPage",name:"intro",route:"/server-sent-event/intro"},{kind:"MdxPage",name:"what-is-sse",route:"/server-sent-event/what-is-sse"},{kind:"Meta",data:{intro:"Intro","what-is-sse":"SSE (Server Sent Event) 의 개념",example:"예제코드"}}]},{kind:"Folder",name:"spring-cloud-reactive-circuitbreaker",route:"/spring-cloud-reactive-circuitbreaker",children:[{kind:"MdxPage",name:"intro",route:"/spring-cloud-reactive-circuitbreaker/intro"},{kind:"MdxPage",name:"reactive-circuit-breaker-basic",route:"/spring-cloud-reactive-circuitbreaker/reactive-circuit-breaker-basic"},{kind:"Meta",data:{intro:"Introduce","reactive-circuit-breaker-basic":"Reactive Cricuit Breaker"}}]},{kind:"Folder",name:"spring-cloud-stream-and-kafka",route:"/spring-cloud-stream-and-kafka",children:[{kind:"MdxPage",name:"intro",route:"/spring-cloud-stream-and-kafka/intro"},{kind:"MdxPage",name:"kafka-basic",route:"/spring-cloud-stream-and-kafka/kafka-basic"},{kind:"MdxPage",name:"kafka-docker-compose",route:"/spring-cloud-stream-and-kafka/kafka-docker-compose"},{kind:"MdxPage",name:"spring-cloud-stream-kafka-binder",route:"/spring-cloud-stream-and-kafka/spring-cloud-stream-kafka-binder"},{kind:"MdxPage",name:"spring-cloud-stream",route:"/spring-cloud-stream-and-kafka/spring-cloud-stream"},{kind:"Meta",data:{intro:"Intro","kafka-basic":"Kafka 의 주요 개념들","kafka-docker-compose":"Kafak 로컬 개발환경 (docker-compose)","spring-cloud-stream":"Spring Cloud Stream","spring-cloud-stream-kafka-binder":"Spring Cloud Stream Kafka Binder"}}]},{kind:"Folder",name:"spring-webflux",route:"/spring-webflux",children:[{kind:"MdxPage",name:"annotated-controller",route:"/spring-webflux/annotated-controller"},{kind:"MdxPage",name:"codec",route:"/spring-webflux/codec"},{kind:"MdxPage",name:"dispatcher-handler-communication-spring-webflux",route:"/spring-webflux/dispatcher-handler-communication-spring-webflux"},{kind:"MdxPage",name:"intro",route:"/spring-webflux/intro"},{kind:"MdxPage",name:"servlet-stack-vs-reactive-stack",route:"/spring-webflux/servlet-stack-vs-reactive-stack"},{kind:"MdxPage",name:"spring-mvc-vs-spring-webflux",route:"/spring-webflux/spring-mvc-vs-spring-webflux"},{kind:"Meta",data:{intro:"Intro","servlet-stack-vs-reactive-stack":"Servlet Stack vs Reactive Stack","spring-mvc-vs-spring-webflux":"Spring MVC vs Spring Webflux","dispatcher-handler-communication-spring-webflux":"DispatcherHandler 와 Spring Webflux","annotated-controller":"Annotated Controller",codec:"Codec"}}]},{kind:"Folder",name:"webflux-websocket",route:"/webflux-websocket",children:[{kind:"MdxPage",name:"example",route:"/webflux-websocket/example"},{kind:"MdxPage",name:"intro",route:"/webflux-websocket/intro"},{kind:"Meta",data:{intro:"Intro",example:"예제"}}]},{kind:"Meta",data:{index:"Introduction","concurrent-programming-basic":"동시성 프로그래밍 개념들","nio-and-aio":"NIO, AIO","reactive-programming":"Reactive Programming","spring-webflux":"Spring Webflux","spring-cloud-stream-and-kafka":"Spring Cloud Stream & Kafka","spring-cloud-reactive-circuitbreaker":"Spring Cloud Reactive Circuit Breaker","kotlin-coroutine":"Kotlin Coroutine","server-sent-event":"Server Sent Event (SSE)","webflux-websocket":"Webflux Websocket","r2dbc-mysql":"Spring Data R2dbc","reactive-mongodb":"Spring Data Reactive Mongodb",contact:{title:"Contact ↗",type:"page",href:"-",newWindow:!0}}}],flexsearch:{codeblocks:!0},title:"Webflux Backpressure Handling",headings:o},pageNextRoute:"/reactive-programming/webflux-backpressure-handling",nextraLayout:s.ZP,themeConfig:t.Z};r.default=(0,i.j)(l)},8426:function(e,r,n){"use strict";var a=n(5893);n(7294);let i={logo:(0,a.jsx)("span",{children:"Docs Spring Webflux"}),project:{link:"https://github.com/chagchagchag/docs-spring-webflux"},docsRepositoryBase:"https://github.com/chagchagchag/docs-spring-webflux",footer:{text:"Nextra Docs Template"}};r.Z=i},5789:function(){}},function(e){e.O(0,[9774,6796,2888,179],function(){return e(e.s=9745)}),_N_E=e.O()}]);
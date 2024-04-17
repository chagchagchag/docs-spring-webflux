(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6667],{6452:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reactive-programming/what-is-reactive",function(){return n(697)}])},697:function(e,r,n){"use strict";n.r(r),n.d(r,{__toc:function(){return o}});var a=n(5893),i=n(2673),t=n(373),s=n(8426);n(9128);var c=n(2643);let o=[{depth:2,value:"Reactive 란?",id:"reactive-란"},{depth:2,value:"Reactive Streams 의 발전 이력",id:"reactive-streams-의-발전-이력"},{depth:2,value:"Reactive Manifesto",id:"reactive-manifesto"},{depth:2,value:"Reactive Programming 용어집",id:"reactive-programming-용어집"},{depth:2,value:"명령형 프로그래밍의 단점",id:"명령형-프로그래밍의-단점"},{depth:2,value:"Reactive Manifesto 적용",id:"reactive-manifesto-적용"}];function _createMdxContent(e){let r=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",blockquote:"blockquote",a:"a",strong:"strong"},(0,c.a)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h2,{id:"reactive-란",children:"Reactive 란?"}),"\n",(0,a.jsx)(r.h2,{id:"reactive-streams-의-발전-이력",children:"Reactive Streams 의 발전 이력"}),"\n",(0,a.jsx)(r.p,{children:"2011/06"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"MS 닷넷 프레임워크에서 Reactive Extensions 배포"}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"2013/02"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Netflix 기술블로그에서 RxJava 공개 (v0.5)"}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"2013/09"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Reactive manifesto v1 출시"}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"2013/11"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Pivotal Project reactor 1.0.0 배포"}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"2014/09"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Reactive manifesto v2 출시"}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"2014/11"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Netflix RxJava v1.0 배포"}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"2015/04"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Reactive Streams 1.0.0 이 Java 9 와 함께 배포"}),"\n",(0,a.jsx)(r.li,{children:"akka stream 1.0 배포"}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"2017/08"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Reactive Streams 1.0.1 배포"}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"2021/07"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Redhat 에서 mutiny 1.0 배포"}),"\n"]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(r.h2,{id:"reactive-manifesto",children:"Reactive Manifesto"}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsx)(r.p,{children:"참고 :"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"https://www.reactivemanifesto.org/",children:"Reactive Manifesto"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"https://www.reactivemanifesto.org/ko",children:"Reactive Manifesto - ko"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"https://www.reactivemanifesto.org/ko",children:"Reactive Manifesto - ko"})," 에서 제시하는 4가지의 Reactive 원칙은 아래와 같습니다."]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["Responsive (응답성)","\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"https://www.reactivemanifesto.org/ko/glossary#System",children:"시스템"})," 이 가능한 한 즉각적으로 응답하는 것을 응답성이 있다고 합니다. 응답성은 사용자의 편의성과 유용성의 기초가 되지만, 그것뿐만 아니라 문제를 신속하게 탐지하고 효과적으로 대처할 수 있는 것을 의미합니다. 응답성 있는 시스템은 신속하고 일관성 있는 응답 시간을 제공하고, 신뢰할 수 있는 상한선을 설정하여 일관된 서비스 품질을 제공합니다. 이러한 일관된 동작은 오류 처리를 단순화하고, 일반 사용자에게 신뢰를 조성하고, 새로운 상호작용을 촉진합니다."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["탄력성(Resilient):","\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["시스템이 ",(0,a.jsx)(r.a,{href:"https://www.reactivemanifesto.org/ko/glossary#Failure",children:"장애"})," 에 직면하더라도 응답성을 유지 하는 것을 탄력성이 있다고 합니다. 탄력성은 고가용성 시스템, 미션 크리티컬 시스템에만 적용되지 않습니다. 탄력성이 없는 시스템은 장애가 발생할 경우 응답성을 잃게 됩니다. 탄력성은 ",(0,a.jsx)(r.a,{href:"https://www.reactivemanifesto.org/ko/glossary#Replication",children:"복제"}),", 봉쇄, ",(0,a.jsx)(r.a,{href:"https://www.reactivemanifesto.org/ko/glossary#Isolation",children:"격리"}),", ",(0,a.jsx)(r.a,{href:"https://www.reactivemanifesto.org/ko/glossary#Delegation",children:"위임"}),"에 의해 실현됩니다. 장애는 각각의 ",(0,a.jsx)(r.a,{href:"https://www.reactivemanifesto.org/ko/glossary#Component",children:"구성 요소"})," 에 포함되며 구성 요소들은 서로 분리되어 있기 때문에 이는 시스템이 부분적으로 고장이 나더라도, 전체 시스템을 위험하게 하지 않고 복구 할 수 있도록 보장합니다. 각 구성 요소의 복구 프로세스는 다른(외부의) 구성 요소에 위임되며 필요한 경우 복제를 통해 고가용성이 보장됩니다. 구성 요소의 클라이언트는 장애를 처리하는데에 압박을 받지 않습니다."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["Elastic (유연성)","\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["시스템이 작업량이 변화하더라도 응답성을 유지하는 것을 유연성이라고 합니다. 리액티브 시스템은 입력 속도의 변화에 따라 이러한 입력에 할당된 ",(0,a.jsx)(r.a,{href:"https://www.reactivemanifesto.org/ko/glossary#Resource",children:"자원"}),"을 증가시키거나 감소키면서 변화에 대응합니다. 이것은 시스템에서 경쟁하는 지점이나 중앙 집중적인 병목 현상이 존재하지 않도록 설계하여, 구성 요소를 샤딩하거나 복제하여 입력을 분산시키는 것을 의미합니다. 리액티브 시스템은 실시간 성능을 측정하는 도구를 제공하여 응답성 있고 예측 가능한 규모 확장 알고리즘을 지원합니다. 이 시스템은 하드웨어 상품 및 소프트웨어 플랫폼에 비용 효율이 높은 방식으로 ",(0,a.jsx)(r.a,{href:"https://www.reactivemanifesto.org/ko/glossary#Elasticity",children:"유연성"})," 을 제공합니다."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["Message Driven (메시지 기반)","\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["리액티브 시스템은 ",(0,a.jsx)(r.a,{href:"https://www.reactivemanifesto.org/ko/glossary#Asynchronous",children:"비동기"})," ",(0,a.jsx)(r.a,{href:"https://www.reactivemanifesto.org/ko/glossary#Message-Driven",children:"메시지 전달"})," 에 의존하여 구성 요소 사이에서 느슨한 결합, 격리, ",(0,a.jsx)(r.a,{href:"https://www.reactivemanifesto.org/ko/glossary#Location-Transparency",children:"위치 투명성"})," 을 보장하는 경계를 형성합니다. 이 경계는 ",(0,a.jsx)(r.a,{href:"https://www.reactivemanifesto.org/ko/glossary#Failure",children:"장애"})," 를 메시지로 지정하는 수단을 제공합니다. 명시적인 메시지 전달은 시스템에 메시지 큐를 생성하고, 모니터링하며 필요시 ",(0,a.jsx)(r.a,{href:"https://www.reactivemanifesto.org/ko/glossary#Back-Pressure",children:"배압"})," 을 적용함으로써 유연성을 부여하고, 부하 관리와 흐름제어를 가능하게 합니다. 위치 투명 메시징을 통신 수단으로 사용하면 단일 호스트든 클러스터를 가로지르든 동일한 구성과 의미를 갖고 장애를 관리할 수 있습니다. ",(0,a.jsx)(r.a,{href:"https://www.reactivemanifesto.org/ko/glossary#Non-Blocking",children:"논블로킹"})," 통신은 수신자가 활성화가 되어 있을 때만 ",(0,a.jsx)(r.a,{href:"https://www.reactivemanifesto.org/ko/glossary#Resource",children:"자원"})," 을 소비할 수 있기 때문에 시스템 부하를 억제할 수 있습니다."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"큰 시스템은 더 작은 규모의 시스템들로 구성되어 있기 때문에 구성 요소의 리액티브 특성에 의존합니다. 즉, 리액티브 시스템은 설계 원칙을 적용하고, 이 특성을 모든 규모에 적용하여, 그 구성 요소를 합성 할 수 있게 하는 것을 의미합니다. 세계에서 가장 거대한 시스템은 이러한 특성에 기반을 둔 아키텍처에 의존하여 매일 수십억명의 요구를 처리합니다. 이러한 설계 원칙을 매번 재발견하는 것을 그만두고 처음부터 의식하여 적용할 때 입니다."}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(r.h2,{id:"reactive-programming-용어집",children:"Reactive Programming 용어집"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"https://www.reactivemanifesto.org/ko/glossary",children:"Reactive Manifesto/ko - glossary (용어집)"})," 에서는 Reactive Programming 에서 언급하는 용어들인 비동기, 배압(Back-Pressure), Batching, 컴포넌트, 위임, 탄력성, 장애, 분리, 위치투명성, 메시지 기반(Message Driven), 논블로킹(Non Blocking), 프로토콜, 복제, 자원, 확장성, 시스템, 사용자와 같은 용어들을 설명하고 있습니다. Reactive Manifesto 라는 선언문을 읽을 때보다 용어집을 읽는 것이 오히려 더 이해가 잘 될 수 있기에 이것에 대해 언급하고 넘어갑니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(r.p,{children:["취업을 준비중인 입장이라 별도의 용어를 설명할 시간이 부족하기에 용어를 정리하는 것은 이번 문서에서는 건너뛰도록 하겠습니다. 추후 시간이 된다면 용어 역시 정리를 하도록 하겠습니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(r.h2,{id:"명령형-프로그래밍의-단점",children:"명령형 프로그래밍의 단점"}),"\n",(0,a.jsxs)(r.p,{children:["명령형 프로그래밍은 의도가 명확히 보인다는 점과 결과(리턴)값 기반으로 동작한다는 점에서 이해하기 쉽다는 점은 있습니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(r.p,{children:["하지만, IO 작업이 갈수록 많아질 수록 명령형 처리의 경우 어떤 서비스가 특정 서비스의 결과값에 의존하게 되어야 하거나 특정 함수가 다른 함수의 IO 결과 값에 의존해야 합니다. 이 과정에서 서비스 또는 함수와 함수간의 경계가 모호해집니다. 그리고 독립성이 깨지면서 특정 리턴 값의 결과값에 대해 의존성이 생기게 됩니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(r.p,{children:["Netflix 의 RxJava 도입기를 보듯 서비스가 커진다면 Reactive Manifesto 기반의 시스템 적용을 고려하게 됩니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(r.h2,{id:"reactive-manifesto-적용",children:"Reactive Manifesto 적용"}),"\n",(0,a.jsxs)(r.p,{children:["Java 환경에서 Reactive Manifesto 기반의 시스템으로 전환할 때 아래의 3 종류의 선택지를 고려하게 될 가능성이 높습니다. ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(r.p,{children:["Stream, Future 를 사용할 때 모두 Backpressure 가 관리하는 점이 주요 맹점인데, Stream, Future 를 사용할 경우 이 부분에 대해 별도로 관리할 방안이 없기에 프로그래머가 직접 ExecutorService 등을 활용해서 배압관리를 해줘야 합니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Stream 기반의 흐름제어"})," : 적용 불가"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:['"비동기적으로 메시지를 주고 받으며 독립적으로 실행됨을 보장해야 한다"',"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Stream 은 동기적으로 이루어지기에 비동기적으로 수행해야 한다는 특성에 어긋나게 됩니다."}),"\n",(0,a.jsx)(r.li,{children:"하나의 Stream 과 다른 Stream 을 연결해서 사용할 때 서로 결과값을 알아야 하는 동기 방식의 동작을 하게 되고, 최종 결과 포인트인 caller 측면에서는 collect 를 통해서 결과를 조회해야 합니다."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["Message Driven","\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Stream 을 메시지 큐 처럼 사용해서 Message Driven 처럼 사용할 수 있습니다."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["배압(Back-Pressure) 관리 - 부하관리","\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Stream 을 사용할 경우 부하를 관리하지 못합니다."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Future 기반의 흐름제어"})," : 적용 불가"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:['"비동기적으로 메시지를 주고 받으며 독립적으로 실행됨을 보장해야 한다"',"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Future 기반의 흐름제어시 caller 와 callee 는 비동기적으로 동작합니다."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["Message Driven","\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Future 하나만으로는 메시지 큐의 역할을 할 수 없습니다."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["배압(Back-Pressure) 관리 - 부하관리","\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Future 하나만으로는 부하를 관리하는 배압(Back-Pressure) 를 적용할 수 없습니다."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Reactive Stream"})," : 적용 가능"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:['"비동기적으로 메시지를 주고 받으며 독립적으로 실행됨을 보장해야 한다"',"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"callee 는 최종적으로 Publisher 를 반환합니다. caller 는 Subscriber 를 등록합니다. caller 와 callee 는 각각 Publisher, Subscriber 만 바라보면 되고 서로의 결과값을 알고 있을 필요는 없습니다."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["Message Driven","\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Publisher 는 내부적으로 메시지 대기열을 생성해서 관리합니다."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["배압(Back-Pressure) - 부하관리","\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Reactive Streams 는 Back-Pressure 를 관리할 수 있는 방법이 내부적으로 갖춰져있습니다."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)("br",{})]})}let l={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,c.a)(),e.components);return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/reactive-programming/what-is-reactive.mdx",route:"/reactive-programming/what-is-reactive",timestamp:1709713851e3,pageMap:[{kind:"Folder",name:"concurrent-programming-basic",route:"/concurrent-programming-basic",children:[{kind:"MdxPage",name:"blocking-vs-nonblocking",route:"/concurrent-programming-basic/blocking-vs-nonblocking"},{kind:"MdxPage",name:"completable-future-completion-stage",route:"/concurrent-programming-basic/completable-future-completion-stage"},{kind:"MdxPage",name:"executor-service",route:"/concurrent-programming-basic/executor-service"},{kind:"MdxPage",name:"sync-vs-async",route:"/concurrent-programming-basic/sync-vs-async"},{kind:"Meta",data:{"sync-vs-async":"동기 vs 비동기","blocking-vs-nonblocking":"블로킹 vs 논 블로킹","executor-service":"ExecutorService","completable-future-completion-stage":"CompletableFuture, CompletableStage"}}]},{kind:"MdxPage",name:"concurrent-programming-basic",route:"/concurrent-programming-basic"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"kotlin-coroutine",route:"/kotlin-coroutine",children:[{kind:"Meta",data:{}}]},{kind:"MdxPage",name:"kotlin-coroutine",route:"/kotlin-coroutine"},{kind:"Folder",name:"nio-and-aio",route:"/nio-and-aio",children:[{kind:"MdxPage",name:"java-io-java-nio-java-aio",route:"/nio-and-aio/java-io-java-nio-java-aio"},{kind:"MdxPage",name:"java-nio-socket-communication",route:"/nio-and-aio/java-nio-socket-communication"},{kind:"MdxPage",name:"reactor-pattern-based-http-server",route:"/nio-and-aio/reactor-pattern-based-http-server"},{kind:"MdxPage",name:"reactor-pattern-socket-communication",route:"/nio-and-aio/reactor-pattern-socket-communication"},{kind:"MdxPage",name:"reactor-pattern",route:"/nio-and-aio/reactor-pattern"},{kind:"MdxPage",name:"what-is-aio",route:"/nio-and-aio/what-is-aio"},{kind:"MdxPage",name:"what-is-nio",route:"/nio-and-aio/what-is-nio"},{kind:"Meta",data:{"java-io-java-nio-java-aio":"Java IO,NIO,AIO","what-is-nio":"NIO 의 개념, 특징, 주요 클래스","java-nio-socket-communication":"Java NIO 소켓통신","reactor-pattern":"Reactor 패턴","reactor-pattern-socket-communication":"Reactor 패턴 소켓통신, 예제","reactor-pattern-based-http-server":"Reactor 패턴 기반의 HTTP 서버 예제","what-is-aio":"AIO 의 개념, 특징, 예제"}}]},{kind:"MdxPage",name:"nio-and-aio",route:"/nio-and-aio"},{kind:"Folder",name:"reactive-programming",route:"/reactive-programming",children:[{kind:"MdxPage",name:"java-nio-bad-point-and-solution",route:"/reactive-programming/java-nio-bad-point-and-solution"},{kind:"MdxPage",name:"netflix-rxjava-story",route:"/reactive-programming/netflix-rxjava-story"},{kind:"MdxPage",name:"proactor-pattern",route:"/reactive-programming/proactor-pattern"},{kind:"MdxPage",name:"publisher-subscriber-subscription-backpressure",route:"/reactive-programming/publisher-subscriber-subscription-backpressure"},{kind:"MdxPage",name:"reactive-streams-libraries",route:"/reactive-programming/reactive-streams-libraries"},{kind:"MdxPage",name:"webflux-backpressure-handling",route:"/reactive-programming/webflux-backpressure-handling"},{kind:"MdxPage",name:"what-is-epoll",route:"/reactive-programming/what-is-epoll"},{kind:"MdxPage",name:"what-is-reactive",route:"/reactive-programming/what-is-reactive"},{kind:"Meta",data:{"what-is-reactive":"Reactive란?","netflix-rxjava-story":"Netflix RxJava 이야기","publisher-subscriber-subscription-backpressure":"Publisher,Subscriber,Subscription,Backpressure","reactive-streams-libraries":"Reactive Streams 라이브러리들","webflux-backpressure-handling":"Spring Webflux 에서 Backpressure 핸들링","java-nio-bad-point-and-solution":"Java NIO 의 논블로킹 방식 동기연산의 문제점과 해결책, 멀티플렉싱","what-is-epoll":"epoll 이란?","reactor-pattern":"reactor 패턴","proactor-pattern":"proactor 패턴"}}]},{kind:"MdxPage",name:"reactive-programming",route:"/reactive-programming"},{kind:"Folder",name:"server-sent-event",route:"/server-sent-event",children:[{kind:"MdxPage",name:"what-is-sse",route:"/server-sent-event/what-is-sse"},{kind:"Meta",data:{"what-is-sse":"SSE (Server Sent Event) 개념, Spring Webflux, 예제"}}]},{kind:"MdxPage",name:"server-sent-event",route:"/server-sent-event"},{kind:"Folder",name:"spring-cloud-reactive-circuitbreaker",route:"/spring-cloud-reactive-circuitbreaker",children:[{kind:"MdxPage",name:"reactive-circuit-breaker-basic",route:"/spring-cloud-reactive-circuitbreaker/reactive-circuit-breaker-basic"},{kind:"Meta",data:{"reactive-circuit-breaker-basic":"Reactive Cricuit Breaker"}}]},{kind:"MdxPage",name:"spring-cloud-reactive-circuitbreaker",route:"/spring-cloud-reactive-circuitbreaker"},{kind:"Folder",name:"spring-cloud-stream-and-kafka",route:"/spring-cloud-stream-and-kafka",children:[{kind:"MdxPage",name:"kafka-basic",route:"/spring-cloud-stream-and-kafka/kafka-basic"},{kind:"MdxPage",name:"kafka-docker-compose",route:"/spring-cloud-stream-and-kafka/kafka-docker-compose"},{kind:"MdxPage",name:"spring-cloud-stream-kafka-binder",route:"/spring-cloud-stream-and-kafka/spring-cloud-stream-kafka-binder"},{kind:"MdxPage",name:"spring-cloud-stream",route:"/spring-cloud-stream-and-kafka/spring-cloud-stream"},{kind:"Meta",data:{"kafka-basic":"Kafka 의 주요 개념들","kafka-docker-compose":"Kafak 로컬 개발환경 (docker-compose)","spring-cloud-stream":"Spring Cloud Stream","spring-cloud-stream-kafka-binder":"Spring Cloud Stream Kafka Binder"}}]},{kind:"MdxPage",name:"spring-cloud-stream-and-kafka",route:"/spring-cloud-stream-and-kafka"},{kind:"MdxPage",name:"spring-data-reactive",route:"/spring-data-reactive"},{kind:"Folder",name:"spring-webflux",route:"/spring-webflux",children:[{kind:"MdxPage",name:"annotated-controller",route:"/spring-webflux/annotated-controller"},{kind:"MdxPage",name:"codec",route:"/spring-webflux/codec"},{kind:"MdxPage",name:"dispatcher-handler-communication-spring-webflux",route:"/spring-webflux/dispatcher-handler-communication-spring-webflux"},{kind:"MdxPage",name:"reactor-programming-all-2",route:"/spring-webflux/reactor-programming-all-2"},{kind:"MdxPage",name:"reactor-programming-all-3",route:"/spring-webflux/reactor-programming-all-3"},{kind:"MdxPage",name:"reactor-programming-all",route:"/spring-webflux/reactor-programming-all"},{kind:"MdxPage",name:"servlet-stack-vs-reactive-stack",route:"/spring-webflux/servlet-stack-vs-reactive-stack"},{kind:"MdxPage",name:"spring-mvc-vs-spring-webflux",route:"/spring-webflux/spring-mvc-vs-spring-webflux"},{kind:"Meta",data:{"servlet-stack-vs-reactive-stack":"Servlet Stack vs Reactive Stack","spring-mvc-vs-spring-webflux":"Spring MVC vs Spring Webflux","dispatcher-handler-communication-spring-webflux":"DispatcherHandler 와 Spring Webflux","annotated-controller":"Annotated Controller",codec:"Codec","reactor-programming-all":"Reactor 프로그래밍 (스압 주의)","reactor-programming-all-2":"Reactor 프로그래밍 2 (Thread, Scheduler, defer())","reactor-programming-all-3":"Reactor 프로그래밍 3 (Error 핸들링)"}}]},{kind:"MdxPage",name:"spring-webflux",route:"/spring-webflux"},{kind:"Folder",name:"webflux-websocket",route:"/webflux-websocket",children:[{kind:"MdxPage",name:"what-is-websocket",route:"/webflux-websocket/what-is-websocket"},{kind:"Meta",data:{"what-is-websocket":"Websocket 개념, Spring Webflux, 예제"}}]},{kind:"MdxPage",name:"webflux-websocket",route:"/webflux-websocket"},{kind:"Meta",data:{index:"Introduction","concurrent-programming-basic":"동시성 프로그래밍 개념들","nio-and-aio":"NIO, AIO","reactive-programming":"Reactive Programming","spring-webflux":"Spring Webflux","spring-cloud-stream-and-kafka":"Spring Cloud Stream & Kafka","spring-cloud-reactive-circuitbreaker":"Spring Cloud Reactive Circuit Breaker","kotlin-coroutine":"Kotlin Coroutine","server-sent-event":"Server Sent Event (SSE)","webflux-websocket":"Webflux Websocket","spring-data-reactive":"Spring Data Reactive",contact:{title:"Contact ↗",type:"page",href:"-",newWindow:!0}}}],flexsearch:{codeblocks:!0},title:"What Is Reactive",headings:o},pageNextRoute:"/reactive-programming/what-is-reactive",nextraLayout:t.ZP,themeConfig:s.Z};r.default=(0,i.j)(l)},8426:function(e,r,n){"use strict";var a=n(5893);n(7294);let i={logo:(0,a.jsx)("span",{children:"Docs Spring Webflux"}),project:{link:"https://github.com/chagchagchag/docs-spring-webflux"},docsRepositoryBase:"https://github.com/chagchagchag/docs-spring-webflux",footer:{text:"Nextra Docs Template"}};r.Z=i},5789:function(){}},function(e){e.O(0,[9774,6796,2888,179],function(){return e(e.s=6452)}),_N_E=e.O()}]);
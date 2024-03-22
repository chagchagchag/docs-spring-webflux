(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1127],{1906:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reactive-programming/reactor-pattern",function(){return r(9477)}])},9477:function(e,n,r){"use strict";r.r(n),r.d(n,{__toc:function(){return l},default:function(){return h}});var s=r(5893),a=r(2673),i=r(373),t=r(8426);r(9128);var o=r(2643),c={src:"/docs-spring-webflux/_next/static/media/REACTOR-PATTERN.a6f8b274.png",height:503,width:1567,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAAVklEQVR42gFLALT/AJeWkuTk5MXEwe/v7uXl5e3t7fj4+N3c2wDLy8nu7u7My8ru7u7e3t3l5eXq6umsq6gA4eHg9fX19PT0+/v73t7d4+Pi8vLyx8fFBQY+hCMztbkAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3};let l=[{depth:2,value:"Reactor Pattern",id:"reactor-pattern"},{depth:2,value:"Reactor Pattern 이란?",id:"reactor-pattern-이란"},{depth:2,value:"Reactor 구현",id:"reactor-구현"},{depth:2,value:"Event Handler 구현",id:"event-handler-구현"},{depth:2,value:"예제",id:"예제"}];function _createMdxContent(e){let n=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",span:"span",ul:"ul",li:"li",img:"img"},(0,o.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"reactor-pattern",children:"Reactor Pattern"}),"\n",(0,s.jsx)(n.p,{children:"Reactor Pattern 을 적용하기 전, 이전에 살펴본 nio 채팅 코드는 아래와 같았습니다."}),"\n",(0,s.jsx)(n.pre,{"data-language":"java","data-theme":"default",children:(0,s.jsxs)(n.code,{"data-language":"java","data-theme":"default",children:[(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// ..."})}),"\n",(0,s.jsx)(n.span,{className:"line",children:" "}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"key"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"isAcceptable"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"()){ "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// ACCEPT 이벤트일 경우"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// (1)"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// accept 를 통해 ClientSocket 획득"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"var"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" clientSocket "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" ((ServerSocketChannel) "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"key"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"channel"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"())"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"accept"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// clientSocket 을 non-blocking 으로 설정"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"clientSocket"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"configureBlocking"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// clientSocket 을 selector 에 등록"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"clientSocket"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"register"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(selector"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"SelectionKey"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"OP_READ"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"key"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"isReadable"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"()){ "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// READ 이벤트 일 때"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// clientSocket 을 얻어옴"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"var"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" clientSocket "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" (SocketChannel) "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"key"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"channel"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:" "}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"var"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" requestBuffer "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"ByteBuffer"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"allocate"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"1024"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// (2)"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"clientSocket"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"read"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(requestBuffer); "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// clientSocket 으로부터 데이터 Read"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"requestBuffer"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"flip"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:" "}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"var"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" received "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"String("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"requestBuffer"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"array())"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"trim"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"log"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"info"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"client received = {}"'}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" received);"})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:" "}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"var"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" send "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"답장보냅니다."'}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"var"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" responseBuffer "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"ByteBuffer"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"wrap"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"send"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"getBytes"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"());"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"clientSocket"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"write"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(responseBuffer);"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"responseBuffer"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"clear"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"clientSocket"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"close"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,s.jsx)(n.span,{className:"line",children:" "}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// ..."})})]})}),"\n",(0,s.jsxs)(n.p,{children:["(1), (2) 로 표시한 부분에서는 accept, read 를 함수 호출로 처리하고 있습니다. 이렇게 함수를 그대로 작성해서 하는 것 보다는 조금은 확장성이 가능하도록 하는 코드를 작성해야 할 것 같습니다. 이번 문서에서는 이런 Plain 한 통신 로직을 Reactor Pattern 으로 바꾸면 어떻게 되는지를 확인해봅니다. Reactor 패턴은 이벤트를 감지하고 분류하는 Reactor 와 이벤트를 처리하는 Handler 로 이뤄져 있습니다.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.h2,{id:"reactor-pattern-이란",children:"Reactor Pattern 이란?"}),"\n",(0,s.jsx)(n.p,{children:"Reactor 패턴은 동시에 들어오는 요청들을 처리하기 위해 만들어진 이벤트 핸들링 패턴입니다. Reactor 패턴에는 Reactor, Handler 라고 하는 대표적인 두 요소가 있습니다."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Reactor : 별도의 스레드에서 실행합니다. 여러 요청의 WRITE, ACCEPT, READ 이벤트를 한 곳에 등록한 후 관찰합니다. 그리고 준비완료된 이벤트가 있을 경우 해당 이벤트를 request handler 에 전달합니다."}),"\n",(0,s.jsx)(n.li,{children:"Handler : Reactor 로부터 이벤트를 받아서 처리합니다. 이 Handler 는 들어오는 요청들을 demultiplexing (다중화 된 것을 풀어서 원하는 주소를 찾는 방식)을 해서 요청에 맞는 Request Handler 에 동기적으로 전달합니다."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["이렇게 이벤트의 처리를 핸들러가 처리하게끔 하는 방식은 Selector 를 이용한 Java NIO 처리와 유사한 모습이 있습니다. 조금 더 자세히 살펴보면 아래와 같은 구조로 처리를 수행합니다.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{placeholder:"blur",src:c})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.p,{children:"위 그림에서 ACCEPT 이벤트를 처리하는 Handler, READ 이벤트를 처리하는 Handler 가 각각 존재합니다. 각각을 설명해보면 아래와 같습니다."}),"\n",(0,s.jsx)(n.p,{children:"Acceptor"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["EventHandler 구현체의 일부입니다. Acceptor 는 ACCEPT 이벤트에만 집중합니다.",(0,s.jsx)("br",{})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Acceptor 외의 Handler  (그림에서는 오른쪽 Handler)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["위 그림에서는 ",(0,s.jsx)(n.code,{children:"Handler #1"}),", ",(0,s.jsx)(n.code,{children:"Handler #2"}),", ... ",(0,s.jsx)(n.code,{children:"Handler #n"})," 이 Handler 입니다."]}),"\n",(0,s.jsx)(n.li,{children:"READ 이벤트에 집중해서 처리를 합니다."}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h2,{id:"reactor-구현",children:"Reactor 구현"}),"\n",(0,s.jsxs)(n.p,{children:["Reactor 는 별도의 스레드에서 동작해야 합니다. 주로 Runnable 기반의 람다를 별도의 ExecutorService 에서 실행하는 경우가 많습니다.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(n.p,{children:["그리고 Selector 를 이용해서 요청들을 받으면서 요청이 어떤 이벤트인지 분류하고 이벤트들을 등록하고, 감시합니다. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(n.p,{children:["그리고 이벤트의 준비가 되면 Dispatch 를 합니다. EventHandler 객체를 생성하고 call 을 합니다.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h2,{id:"event-handler-구현",children:"Event Handler 구현"}),"\n",(0,s.jsxs)(n.p,{children:["Reactor 로부터 이벤트를 받아서 처리합니다. Read 이벤트, Accept 이벤트에 따라 EventHandler를 각각 따로 EventHandler 를 만듭니다. 그리고 EventHandler 의 처리는 Reactor 에 영향을 주어서는 안되기에 EventHandler 의 처리는 별도의 스레드에서 실행합니다.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h2,{id:"예제",children:"예제"})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.a)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/reactive-programming/reactor-pattern.mdx",route:"/reactive-programming/reactor-pattern",timestamp:1710222679e3,pageMap:[{kind:"Folder",name:"concurrent-programming-basic",route:"/concurrent-programming-basic",children:[{kind:"MdxPage",name:"blocking-vs-nonblocking",route:"/concurrent-programming-basic/blocking-vs-nonblocking"},{kind:"MdxPage",name:"completable-future",route:"/concurrent-programming-basic/completable-future"},{kind:"MdxPage",name:"completable-stage",route:"/concurrent-programming-basic/completable-stage"},{kind:"MdxPage",name:"intro",route:"/concurrent-programming-basic/intro"},{kind:"MdxPage",name:"sync-vs-async",route:"/concurrent-programming-basic/sync-vs-async"},{kind:"Meta",data:{intro:"Intro","sync-vs-async":"동기 vs 비동기","blocking-vs-nonblocking":"블로킹 vs 논 블로킹","completable-future":"CompletableFuture","completable-stage":"CompletableStage"}}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"kotlin-coroutine",route:"/kotlin-coroutine",children:[{kind:"MdxPage",name:"intro",route:"/kotlin-coroutine/intro"},{kind:"Meta",data:{intro:"Intro"}}]},{kind:"Folder",name:"nio-and-aio",route:"/nio-and-aio",children:[{kind:"MdxPage",name:"intro",route:"/nio-and-aio/intro"},{kind:"MdxPage",name:"java-io-java-nio-java-aio",route:"/nio-and-aio/java-io-java-nio-java-aio"},{kind:"MdxPage",name:"java-nio-socket-communication",route:"/nio-and-aio/java-nio-socket-communication"},{kind:"MdxPage",name:"what-is-aio",route:"/nio-and-aio/what-is-aio"},{kind:"MdxPage",name:"what-is-nio",route:"/nio-and-aio/what-is-nio"},{kind:"Meta",data:{intro:"Intro","java-io-java-nio-java-aio":"Java IO,NIO,AIO","what-is-nio":"NIO 의 개념, 특징, 주요 클래스","java-nio-socket-communication":"Java NIO 소켓통신","what-is-aio":"AIO 의 개념, 특징, 예제"}}]},{kind:"Folder",name:"r2dbc-mysql",route:"/r2dbc-mysql",children:[{kind:"MdxPage",name:"example",route:"/r2dbc-mysql/example"},{kind:"MdxPage",name:"intro",route:"/r2dbc-mysql/intro"},{kind:"MdxPage",name:"what-is-r2dbc",route:"/r2dbc-mysql/what-is-r2dbc"},{kind:"Meta",data:{intro:"Intro","what-is-r2dbc":"R2DBC 란?",example:"예제"}}]},{kind:"Folder",name:"reactive-mongodb",route:"/reactive-mongodb",children:[{kind:"MdxPage",name:"example",route:"/reactive-mongodb/example"},{kind:"MdxPage",name:"intro",route:"/reactive-mongodb/intro"},{kind:"Meta",data:{intro:"Intro",example:"예제"}}]},{kind:"Folder",name:"reactive-programming",route:"/reactive-programming",children:[{kind:"MdxPage",name:"intro",route:"/reactive-programming/intro"},{kind:"MdxPage",name:"java-nio-bad-point-and-solution",route:"/reactive-programming/java-nio-bad-point-and-solution"},{kind:"MdxPage",name:"netflix-rxjava-story",route:"/reactive-programming/netflix-rxjava-story"},{kind:"MdxPage",name:"proactor-pattern",route:"/reactive-programming/proactor-pattern"},{kind:"MdxPage",name:"publisher-subscriber-subscription-backpressure",route:"/reactive-programming/publisher-subscriber-subscription-backpressure"},{kind:"MdxPage",name:"reactive-streams-libraries",route:"/reactive-programming/reactive-streams-libraries"},{kind:"MdxPage",name:"reactor-pattern",route:"/reactive-programming/reactor-pattern"},{kind:"MdxPage",name:"webflux-backpressure-handling",route:"/reactive-programming/webflux-backpressure-handling"},{kind:"MdxPage",name:"what-is-epoll",route:"/reactive-programming/what-is-epoll"},{kind:"MdxPage",name:"what-is-reactive",route:"/reactive-programming/what-is-reactive"},{kind:"Meta",data:{intro:"intro","what-is-reactive":"Reactive란?","netflix-rxjava-story":"Netflix RxJava 이야기","publisher-subscriber-subscription-backpressure":"Publisher,Subscriber,Subscription,Backpressure","reactive-streams-libraries":"Reactive Streams 라이브러리들","webflux-backpressure-handling":"Spring Webflux 에서 Backpressure 핸들링","java-nio-bad-point-and-solution":"Java NIO 의 논블로킹 방식 동기연산의 문제점과 해결책, 멀티플렉싱","what-is-epoll":"epoll 이란?","reactor-pattern":"reactor 패턴","proactor-pattern":"proactor 패턴"}}]},{kind:"Folder",name:"server-sent-event",route:"/server-sent-event",children:[{kind:"MdxPage",name:"intro",route:"/server-sent-event/intro"},{kind:"MdxPage",name:"what-is-sse",route:"/server-sent-event/what-is-sse"},{kind:"Meta",data:{intro:"Intro","what-is-sse":"SSE (Server Sent Event) 개념, Spring Webflux, 예제"}}]},{kind:"Folder",name:"spring-cloud-reactive-circuitbreaker",route:"/spring-cloud-reactive-circuitbreaker",children:[{kind:"MdxPage",name:"intro",route:"/spring-cloud-reactive-circuitbreaker/intro"},{kind:"MdxPage",name:"reactive-circuit-breaker-basic",route:"/spring-cloud-reactive-circuitbreaker/reactive-circuit-breaker-basic"},{kind:"Meta",data:{intro:"Introduce","reactive-circuit-breaker-basic":"Reactive Cricuit Breaker"}}]},{kind:"Folder",name:"spring-cloud-stream-and-kafka",route:"/spring-cloud-stream-and-kafka",children:[{kind:"MdxPage",name:"intro",route:"/spring-cloud-stream-and-kafka/intro"},{kind:"MdxPage",name:"kafka-basic",route:"/spring-cloud-stream-and-kafka/kafka-basic"},{kind:"MdxPage",name:"kafka-docker-compose",route:"/spring-cloud-stream-and-kafka/kafka-docker-compose"},{kind:"MdxPage",name:"spring-cloud-stream-kafka-binder",route:"/spring-cloud-stream-and-kafka/spring-cloud-stream-kafka-binder"},{kind:"MdxPage",name:"spring-cloud-stream",route:"/spring-cloud-stream-and-kafka/spring-cloud-stream"},{kind:"Meta",data:{intro:"Intro","kafka-basic":"Kafka 의 주요 개념들","kafka-docker-compose":"Kafak 로컬 개발환경 (docker-compose)","spring-cloud-stream":"Spring Cloud Stream","spring-cloud-stream-kafka-binder":"Spring Cloud Stream Kafka Binder"}}]},{kind:"Folder",name:"spring-webflux",route:"/spring-webflux",children:[{kind:"MdxPage",name:"annotated-controller",route:"/spring-webflux/annotated-controller"},{kind:"MdxPage",name:"codec",route:"/spring-webflux/codec"},{kind:"MdxPage",name:"dispatcher-handler-communication-spring-webflux",route:"/spring-webflux/dispatcher-handler-communication-spring-webflux"},{kind:"MdxPage",name:"intro",route:"/spring-webflux/intro"},{kind:"MdxPage",name:"reactor-programming-all",route:"/spring-webflux/reactor-programming-all"},{kind:"MdxPage",name:"servlet-stack-vs-reactive-stack",route:"/spring-webflux/servlet-stack-vs-reactive-stack"},{kind:"MdxPage",name:"spring-mvc-vs-spring-webflux",route:"/spring-webflux/spring-mvc-vs-spring-webflux"},{kind:"Meta",data:{intro:"Intro","servlet-stack-vs-reactive-stack":"Servlet Stack vs Reactive Stack","spring-mvc-vs-spring-webflux":"Spring MVC vs Spring Webflux","dispatcher-handler-communication-spring-webflux":"DispatcherHandler 와 Spring Webflux","annotated-controller":"Annotated Controller",codec:"Codec","reactor-programming-all":"Reactor 프로그래밍 (스압 주의)"}}]},{kind:"Folder",name:"webflux-websocket",route:"/webflux-websocket",children:[{kind:"MdxPage",name:"intro",route:"/webflux-websocket/intro"},{kind:"MdxPage",name:"what-is-websocket",route:"/webflux-websocket/what-is-websocket"},{kind:"Meta",data:{intro:"Intro","what-is-websocket":"Websocket 개념, Spring Webflux, 예제"}}]},{kind:"Meta",data:{index:"Introduction","concurrent-programming-basic":"동시성 프로그래밍 개념들","nio-and-aio":"NIO, AIO","reactive-programming":"Reactive Programming","spring-webflux":"Spring Webflux","spring-cloud-stream-and-kafka":"Spring Cloud Stream & Kafka","spring-cloud-reactive-circuitbreaker":"Spring Cloud Reactive Circuit Breaker","kotlin-coroutine":"Kotlin Coroutine","server-sent-event":"Server Sent Event (SSE)","webflux-websocket":"Webflux Websocket","r2dbc-mysql":"Spring Data R2dbc","reactive-mongodb":"Spring Data Reactive Mongodb",contact:{title:"Contact ↗",type:"page",href:"-",newWindow:!0}}}],flexsearch:{codeblocks:!0},title:"Reactor Pattern",headings:l},pageNextRoute:"/reactive-programming/reactor-pattern",nextraLayout:i.ZP,themeConfig:t.Z};var h=(0,a.j)(d)},8426:function(e,n,r){"use strict";var s=r(5893);r(7294);let a={logo:(0,s.jsx)("span",{children:"Docs Spring Webflux"}),project:{link:"https://github.com/chagchagchag/docs-spring-webflux"},docsRepositoryBase:"https://github.com/chagchagchag/docs-spring-webflux",footer:{text:"Nextra Docs Template"}};n.Z=a},5789:function(){}},function(e){e.O(0,[9774,6796,2888,179],function(){return e(e.s=1906)}),_N_E=e.O()}]);
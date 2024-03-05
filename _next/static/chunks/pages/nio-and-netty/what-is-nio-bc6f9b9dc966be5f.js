(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[47],{5298:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nio-and-netty/what-is-nio",function(){return s(6989)}])},6989:function(e,n,s){"use strict";s.r(n),s.d(n,{__toc:function(){return c},default:function(){return d}});var r=s(5893),t=s(2673),o=s(373),a=s(8426);s(9128);var i=s(2643),l={src:"/docs-spring-webflux/_next/static/media/SELECTABLE-CHANNEL.daf7fa84.png",height:438,width:616,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAkklEQVR42mP4////79+/Z0yf3NtV19RQ8eTJE6DI379/GYDUv3//Pn78+PTp0xcvXgAVQUQYgCRQvq21qTA7KMjX+ubNm0CJP3/+ACVA4PHjR3fv3n7w4P6PHz8gIgzfv39///7958+fgZxv3749f/7szZs3QBGGSRP7qsuzp0ye8O/f/w3r1zY3lPV1N02bOgkAR4J4gdhT92wAAAAASUVORK5CYII=",blurWidth:8,blurHeight:6};let c=[{depth:2,value:"Java NIO",id:"java-nio"},{depth:2,value:"Channel, Buffer 의 개념",id:"channel-buffer-의-개념"},{depth:2,value:"Buffer 클래스의 종류",id:"buffer-클래스의-종류"},{depth:2,value:"Buffer 의 주요 필드",id:"buffer-의-주요-필드"},{depth:2,value:"Java NIO 의 주요 Buffer들 (커널 접근 가능 여부 등)",id:"java-nio-의-주요-buffer들-커널-접근-가능-여부-등"},{depth:3,value:"DirectByteBuffer",id:"directbytebuffer"},{depth:3,value:"HeapByteBuffer",id:"heapbytebuffer"},{depth:2,value:"Java NIO 사용시 Non Blocking 방식으로 사용하는 방법",id:"java-nio-사용시-non-blocking-방식으로-사용하는-방법"}];function _createMdxContent(e){let n=Object.assign({h2:"h2",p:"p",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",pre:"pre",span:"span",img:"img"},(0,i.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"java-nio",children:"Java NIO"}),"\n",(0,r.jsxs)(n.p,{children:["Java NIO 는 ",(0,r.jsx)(n.code,{children:"Java New Input/Output"})," 을 의미합니다. (Non blocking IO 를 의미하는 것은 아닙니다.)",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(n.p,{children:["Java NIO 는 Java 1.4 에서 처음 도입되었고 파일과 네트워크에 데이터를 읽고 쓸 수 있는 API 를 제공하고 있습니다. 대부분의 I/O에 대해서는 논블로킹 방식의 동기 연산을 지원하지만 Java NIO 역시 File I/O 의 경우는 블로킹 방식의 동기 연산만 지원됩니다.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(n.p,{children:["Selector, Channel 기반으로 높은 성능을 제공하는데, 톰캣에서도 NIO가 지원되고 Netty 역시 NIO 기반으로 이루어져 있습니다. 다만 톰캣의 경우 스레드 풀 기반으로 커넥션 풀을 관리하는데 스레드를 그대로 가져다 쓰는 것으로 인해 Netty 에 비해 조금은 무거운 컨테이너입니다.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(n.p,{children:["JAVA IO 는 byte 또는 character 기반의 데이터 단위로 데이터를 처리하지만 Java NIO 는 buffer 단위로 데이터를 처리합니다. Java IO 에서는 흔히 잘 알려져 있는 InputStream, OutputStream 을 이용해서 데이터를 처리하지만 Java NIO 에서는 Channel 단위로 데이터를 처리합니다.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(n.p,{children:["지금까지의 내용을 정리해보면 아래와 같습니다.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{align:"center",children:"Java NIO"}),(0,r.jsx)(n.th,{align:"center",children:"Java IO"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"데이터 처리 방향"}),(0,r.jsx)(n.td,{align:"center",children:"양방향"}),(0,r.jsx)(n.td,{align:"center",children:"단방향"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"데이터 처리 방식"}),(0,r.jsx)(n.td,{align:"center",children:"Channel"}),(0,r.jsx)(n.td,{align:"center",children:"InputStream, OutputStream"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"데이터 단위"}),(0,r.jsx)(n.td,{align:"center",children:"buffer"}),(0,r.jsx)(n.td,{align:"center",children:"byte, character"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nonblocking?"}),(0,r.jsx)(n.td,{align:"center",children:"File IO를 제외한 모든 IO에 대해 논블로킹방식의 동기연산을 지원"}),(0,r.jsx)(n.td,{align:"center",children:"모든 IO 연산을 Blocking 방식의 동기연산으로만 수행 가능"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"etc"}),(0,r.jsx)(n.td,{align:"center",children:"Selector 지"}),(0,r.jsx)(n.td,{align:"center"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"channel-buffer-의-개념",children:"Channel, Buffer 의 개념"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"buffer-클래스의-종류",children:"Buffer 클래스의 종류"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"buffer-의-주요-필드",children:"Buffer 의 주요 필드"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"java-nio-의-주요-buffer들-커널-접근-가능-여부-등",children:"Java NIO 의 주요 Buffer들 (커널 접근 가능 여부 등)"}),"\n",(0,r.jsx)(n.h3,{id:"directbytebuffer",children:"DirectByteBuffer"}),"\n",(0,r.jsxs)(n.p,{children:["DirectByteBuffer 는 ",(0,r.jsx)(n.code,{children:"off-heap"})," 메모리에 데이터를 저장합니다. 커널 메모리에서 복사ㅡㄹ 하지 않기에 데이터를 읽고 쓰는 속도가 빠릅니다. 다만 비용이 많이 드는 System Call 을 사용하기에 allocate, deallocate가 느리다는 단점이 있습니다.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(n.p,{children:["allocateDirect() 함수로 생성가능합니다. 아래는 ",(0,r.jsx)(n.code,{children:"DirectByteBuffer"})," 를 생성하는 예제 코드입니다."]}),"\n",(0,r.jsx)(n.pre,{"data-language":"java","data-theme":"default",children:(0,r.jsxs)(n.code,{"data-language":"java","data-theme":"default",children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"var"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" directByteBuffer "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"ByteBuffer"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"allocateDirect"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"1024"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"assert"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"directByteBuffer"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"isDirect"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(); "})]})]})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h3,{id:"heapbytebuffer",children:"HeapByteBuffer"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"HeapByteBuffer"})," 는 데이터를 JVM Heap 메모리에 저장합니다. byte array 를 래핑하는 Buffer 인데, 커널 메모리에서 복사해서 저장하는 버퍼이기에 복사에 대한 연산으로 인해 커널을 한번 더 IO 가 일어난다는 점에서 읽기 속도가 느리다는 단점이 있습니다. (내부적으로는 임시로 Direct Buffer 를 만드는 연산을 수행하기에 성능이 저하됩니다.)",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(n.p,{children:["GC에 의해 관리되기에 allocate, deallocate 가 빠릅니다.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(n.p,{children:["allocate() 함수 또는 wrap() 함수로 생성 가능합니다. 아래는 ",(0,r.jsx)(n.code,{children:"HeapByteBuffer"})," 를 생성하는 예제 코드 입니다."]}),"\n",(0,r.jsx)(n.pre,{"data-language":"java","data-theme":"default",children:(0,r.jsxs)(n.code,{"data-language":"java","data-theme":"default",children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"var"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" heapByteBuffer "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"ByteBuffer"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"allocate"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"1024"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"assert"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"!"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"heapByteBuffer"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"isDirect"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(); "})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"var"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" byteBufferByWrap "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"ByteBuffer"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"wrap"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"hello"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"getBytes"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"()); "})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"assert"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"!"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"byteBufferByWrap"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"isDirect"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]})]})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"java-nio-사용시-non-blocking-방식으로-사용하는-방법",children:"Java NIO 사용시 Non Blocking 방식으로 사용하는 방법"}),"\n",(0,r.jsxs)(n.p,{children:["SocketChannel, ServerSeocketChannel 이 extends 하고 있는 AbstractSelectableChannel 은 ",(0,r.jsx)(n.code,{children:"SelectableChannel"})," 을 extends 하고 있습니다.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{placeholder:"blur",src:l})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.p,{children:["그리고 ",(0,r.jsx)(n.code,{children:"SelectableChannel"})," 은 ",(0,r.jsx)(n.code,{children:"configureBlocking(boolean)"}),", ",(0,r.jsx)(n.code,{children:"register()"})," 함수를 제공하는데 그 중 ",(0,r.jsx)(n.code,{children:"configureBlocking(boolean)"})," 메서드를 이용해 논블로킹을 지정가능합니다."]}),"\n",(0,r.jsxs)(n.p,{children:["serverSocketChannel 의 accept(), socketChannel 의 connect() 사용시 위의 configureBlocking(boolean) 을 사용하면 논블로킹으로 네트워크 IO를 할지여부를 지정가능합니다.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(n.p,{children:"e.g. ServerSocketChannel 의 accept() 메서드를 nonblocking 하게 실행"}),"\n",(0,r.jsx)(n.pre,{"data-language":"java","data-theme":"default",children:(0,r.jsxs)(n.code,{"data-language":"java","data-theme":"default",children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"try"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"var"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" serverChannel "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"ServerSocketChannel"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"open"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"()){"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"var"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" address "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"InetSocketAddress("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"localhost"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"8080"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:")"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"serverChannel"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"bind"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(address);"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"serverChannel"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"configureBlocking"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"); "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"/// nonblocking 설정 "})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "})}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"var"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" clientSocket "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"serverChannel"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"accept"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(); "})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"assert"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" clientSocket "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"!=="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"null"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.p,{children:"e.g. SocketChannel 의 connect() 메서드를 nonblocking 하게 실행"}),"\n",(0,r.jsx)(n.pre,{"data-language":"java","data-theme":"default",children:(0,r.jsxs)(n.code,{"data-language":"java","data-theme":"default",children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"try"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"var"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" socketChannel "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"SocketChannel"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"open"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"()){"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"var"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" address "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"InetSocketAddress("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"localhost"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"8080"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:")"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"socketChannel"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"configureBlocking"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"var"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" connected "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"socketChannel"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"connect"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(address);"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"assert"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"!"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"connected;"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,r.jsx)("br",{})]})}let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.a)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/nio-and-netty/what-is-nio.mdx",route:"/nio-and-netty/what-is-nio",timestamp:1709638181e3,pageMap:[{kind:"Folder",name:"concurrent-programming-basic",route:"/concurrent-programming-basic",children:[{kind:"MdxPage",name:"blocking-vs-nonblocking",route:"/concurrent-programming-basic/blocking-vs-nonblocking"},{kind:"MdxPage",name:"sync-vs-async",route:"/concurrent-programming-basic/sync-vs-async"},{kind:"Meta",data:{"sync-vs-async":"동기 vs 비동기","blocking-vs-nonblocking":"블로킹 vs 논 블로킹"}}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"nio-and-netty",route:"/nio-and-netty",children:[{kind:"MdxPage",name:"java-io-java-nio-java-aio",route:"/nio-and-netty/java-io-java-nio-java-aio"},{kind:"MdxPage",name:"java-socket-communication",route:"/nio-and-netty/java-socket-communication"},{kind:"MdxPage",name:"tomcat-vs-netty",route:"/nio-and-netty/tomcat-vs-netty"},{kind:"MdxPage",name:"what-is-nio",route:"/nio-and-netty/what-is-nio"},{kind:"Meta",data:{"java-io-java-nio-java-aio":"Java IO,NIO,AIO","java-socket-communication":"Java 의 소켓 통신방식","what-is-nio":"NIO 의 개념, 장점","tomcat-vs-netty":"Tomcat vs Netty"}}]},{kind:"Folder",name:"r2dbc-mysql",route:"/r2dbc-mysql",children:[{kind:"MdxPage",name:"example",route:"/r2dbc-mysql/example"},{kind:"MdxPage",name:"what-is-r2dbc",route:"/r2dbc-mysql/what-is-r2dbc"},{kind:"Meta",data:{"what-is-r2dbc":"R2DBC 란?",example:"예제"}}]},{kind:"Folder",name:"reactive-mongodb",route:"/reactive-mongodb",children:[{kind:"MdxPage",name:"example",route:"/reactive-mongodb/example"},{kind:"Meta",data:{example:"예제"}}]},{kind:"Folder",name:"reactive-programming",route:"/reactive-programming",children:[{kind:"MdxPage",name:"intro",route:"/reactive-programming/intro"},{kind:"Meta",data:{intro:"intro"}}]},{kind:"Folder",name:"server-sent-event",route:"/server-sent-event",children:[{kind:"MdxPage",name:"example",route:"/server-sent-event/example"},{kind:"MdxPage",name:"what-is-sse",route:"/server-sent-event/what-is-sse"},{kind:"Meta",data:{"what-is-sse":"SSE (Server Sent Event) 의 개념",example:"예제코드"}}]},{kind:"Folder",name:"webflux-websocket",route:"/webflux-websocket",children:[{kind:"MdxPage",name:"example",route:"/webflux-websocket/example"},{kind:"Meta",data:{example:"예제"}}]},{kind:"Meta",data:{index:"Introduction","concurrent-programming-basic":"동시성 프로그래밍 개념들","nio-and-netty":"NIO, Netty","reactive-programming":"Reactive Programming","server-sent-event":"Server Sent Event (SSE)","webflux-websocket":"Webflux Websocket","r2dbc-mysql":"Spring Data R2dbc",contact:{title:"Contact ↗",type:"page",href:"-",newWindow:!0}}}],flexsearch:{codeblocks:!0},title:"What Is Nio",headings:c},pageNextRoute:"/nio-and-netty/what-is-nio",nextraLayout:o.ZP,themeConfig:a.Z};var d=(0,t.j)(h)},8426:function(e,n,s){"use strict";var r=s(5893);s(7294);let t={logo:(0,r.jsx)("span",{children:"Docs Spring Webflux"}),project:{link:"https://github.com/chagchagchag/docs-spring-webflux"},docsRepositoryBase:"https://github.com/chagchagchag/docs-spring-webflux",footer:{text:"Nextra Docs Template"}};n.Z=t},5789:function(){}},function(e){e.O(0,[774,796,888,179],function(){return e(e.s=5298)}),_N_E=e.O()}]);
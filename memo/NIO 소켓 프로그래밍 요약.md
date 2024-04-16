## NIO 소켓 프로그래밍 요약 (임시 자료)

## 참고자료 

- [Java NIO 와 멀티플렉싱 기반의 다중 접속 서버](https://jongmin92.github.io/2019/03/03/Java/java-nio/)
- [비동기 서버에서 이벤트 루프를 블록하면 안되는 이유 2부 - Java NIO 와 멀티플렉싱 기반의 다중 접속 서버](https://engineering.linecorp.com/ko/blog/do-not-block-the-event-loop-part2)



<br/>



## ServerSocketChannel, Selector 기반 서버 코드

### ServerSocketChannel 객체 생성, 소켓 개방

```java
ServerSocketChannel channel = ServerSocketChannel.open();

channel.bind(new InetSocketAddress("localhost", 8080));
channel.configureBlocking(false);
```

<br/>



### Selector 객체 생성

```java
Selector selector = Selector.open();
```

<br/>



### Selector 에 Channel 등록

```java
// Selector 에 channel 을 등록
SelectionKey selectionKey = channel.register(selector, SelectionKey.OP_ACCEPT);
```

<br/>



### Selector 를 이용해서 채널 선택

```java
selector.select();
```

참고

- select()
  - 등록한 이벤트에 대해 하나 이상의 채널이 준비될 때 까지 blocking
  - 몇개의 채널이 준비되었는지 준비된 채널의 수를 return
  - 이 채널의 수는 마지막으로 select() 를 호출한 이후 준비된 채널 수를 의미
- select(long timeout)
  - 최대 몇 ms 동안 timeout 을 적용할지를 지정한 select() 메서드
- selectNow()
  - 채널이 준비될 때 까지 blocking 하지 않고 이미 준비되어 있는 채널이 있으면 그것을 즉시 return

<br/>



select() 는 레거시 Socket 프로그래밍의 accept() 와 비슷한 역할을 수행한다. 다만, 위에서 channel.configureBlocking(false) 로 지정했기 때문에 논 블로킹 방식으로 수행된다. 블로킹 코드처럼 보이지만, 채널이 준비되기를 기다리는 동안 내부적으로는 다른 일을 처리하고 있는다. (다른 작업을 blocking 하지 않는다)

<br/>



selector.selectedKeys() 를 통해 준비된 채널의 Set 을 획득

```java
Set<SelectionKey> selectedKeys = selector.selectedKeys();
```

<br/>



각각의 SelectionKey 에 대해 이벤트 처리작업 수행 후 remove 수행

```java
Iterator<SelectionKey> selectionKeys = selectedKeys.iterator();

while(selectionKeys.hasNext()){
    SelectionKey key = selectedKeys.next();
    
    if(key.isAcceptable()){
        SocketChannel clientSocket = ((ServerSocketChannel)key.channel()).accept();
        clientSocket.configureBlocking(false);
        clientSocket.register(selector, SelectionKey.OP_READ);
    }
    else if(key.isReadable()){
        SocketChannel clientSocket = (SocketChannel) key.channel();
        String requestBody = handleRequest(clientSocket);
        sendResponse(clientSocket, responseBody);
    }
    
    selectionKeys.remove();
}
```

<br/>



## 참고) SelectionKey

### SelectionKey 상수

SelectionKey 내에 정의된 상수들은 아래와 같습니다.

```java
SelectionKey.OP_CONNECT
SelectionKey.OP_ACCEPT
SelectionKey.OP_READ
SelectionKey.OP_WRITE
```

<br/>

위의 이벤트 상수들은 아래와 같이 조합해서 사용하는 것이 가능합니다.

```java
int events = SelectionKey.OP_READ | SelectionKey.OP_WRITE;
```

<br/>



### InterestSet

```java
// Selector 에 channel 을 등록
SelectionKey selectionKey = channel.register(selector, SelectionKey.OP_ACCEPT);
```

SelectionKey 에는 interestOps() 라는 메서드가 있으며 셀렉터에 등록된 채널이 확인하려고 하는 이벤트들의 조합을 int 정수형으로 돌려받을 수 있습니다. 예를 들면 아래와 같은 형식입니다.

```java
int interestSet = selectionKey.interestOps();

boolean isInterestedInAccept  = interestSet & SelectionKey.OP_ACCEPT;
boolean isInterestedInConnect = interestSet & SelectionKey.OP_CONNECT;
boolean isInterestedInRead    = interestSet & SelectionKey.OP_READ;
boolean isInterestedInWrite   = interestSet & SelectionKey.OP_WRITE;
```

<br/>



### readySet()

readySet() 은 셀렉터에 등록된 채널에서 준비되어 처리 가능한 이벤트들의 집합을 찾을 때 사용하는 메서드입니다.

```java
int readySet = SelectionKey.readyOps();
selectionKey.isAcceptable();
selectionKey.isConnectable();
selectionKey.isReadable();
selectionKey.isWritable();
```

<br/>



### SelectionKey 로 채널, 셀렉터에 접근 가능

```jav
Channel  channel  = selectionKey.channel();
Selector selector = selectionKey.selector(); 
```

<br/>



###  SelectionKey 에 객체를 첨부하는 것 역시 가능

채널에 추가 정보를 첨부하려고 하거나, 채널에서 사용하는 버퍼 객체 등을 첨부하려 할 때 사용 가능한 방법입니다.

```java
selectionKey.attach(theObject);
Object attachedObj = selectionKey.attachment();
```

<br/>



### 셀렉터에 채널을 등록할때 객체를 첨부하는 것 역시 가능

```java
SelectionKey key = channel.register(selector, SelectionKey.OP_READ, theObject);
```

<br/>
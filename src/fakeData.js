const troublesItems = [
  {
    id: 1,
    title: '다른 곳을 클릭 했을 때 드롭다운 메뉴를 사라지게 하는 방법',
    category: 'js',
    createdAt: '2021-04-01',
    page: {
      items: [
        {
          type: 'subTitle',
          value: '목표'
        },
        {
          type: 'list',
          value: 'blur 이벤트를 이용해서 다른 곳을 클릭할 때 드롭다운 메뉴를 사라지게 할 수 있다.' 
        },
        {
          type: 'subTitle',
          value: '선행 지식'
        },
        {
          type: 'list',
          value: '드롭다운 메뉴를 만드는 방법'
        },
        {
          type: 'subTitle',
          value: 'Shooting'
        },
        {
          type: 'text',
          value: '버튼을 눌렀을 때 드롭다운 메뉴가 나타나도록 구현했다고 가정합시다. 아직은 다른 곳을 클릭하더라도 드롭다운 메뉴가 사라지지 않습니다. 다른 곳을 클릭했을 때 사라지게 하는 가장 간단한 방법은 blur 이벤트를 이용하는 것입니다. 다만 blur 이벤트는 <input>류의 엘리먼트에서만 작동하니 주의해야 합니다. 다행히 <button>에는 blur 이벤트를 사용할 수 있습니다.'
        },
        {
          type: 'text',
          value: '<button>에 blur 이벤트를 걸어주고 이벤트 호출시 드롭다운 메뉴의 display를 none으로 바꾸면 <button>의 선택이 해제될 때 드롭다운 메뉴가 사라지게 됩니다.'
        },
        {
          type: 'js',
          value: `button.addEventListener('blur', () => {
  const dropDown = document.querySelector('.dropdown');
  dropDown.style.display = 'none';
});`
        },
        {
          type: 'subTitle',
          value: '참고'
        },
        {
          type: 'link',
          value: '드롭다운',
          url: 'https://youtu.be/X0bf0hfE3qA'
        },
      ],
      previewCode: {
        html: `<div class="button-wrap">
  <button class="button">클릭</button>
  <ul class="dropdown">
    <li class="dropdown-item">서울</li>
    <li class="dropdown-item">대전</li>
    <li class="dropdown-item">대구</li>
    <li class="dropdown-item">부산</li>
  </ul>
</div>`,
        js: `const button = document.querySelector('.button');

button.addEventListener('click', () => {
  const dropDown = document.querySelector('.dropdown');
  dropDown.style.display = 'block';
});

button.addEventListener('blur', () => {
  const dropDown = document.querySelector('.dropdown');
  dropDown.style.display = '';
});`,
        css: `body {
  display: flex;
  justify-content: center;
  height: 100vh;
  margin: 0;
}

.button-wrap {
  position: relative;
}

.button {
  display: flex;
  align-items: center;
}

.dropdown {
  display: none;
  position: absolute;
  top: 30px;
  border: 1px solid #d0d0d0;
  border-radius: 3px;
  margin: 0;
  padding: 4px 0;
}

.dropdown-item {
  white-space: nowrap;
  cursor: default;
  list-style: none;
  padding: 3px 20px;
}

.dropdown-item:hover {
  background: skyblue;
}`
      }
    }
  },
  {
    id: 2,
    thumbnail: '',
    title: '드롭다운 메뉴를 만드는 방법',
    category: 'js',
    createdAt: '2021-01-12',
    page: {
      items: [
        {
          type: 'subTitle',
          value: '목표'
        },
        {
          type: 'list',
          value: '드롭다운 메뉴를 구현한다.' 
        },
        {
          type: 'subTitle',
          value: '선행 지식'
        },
        {
          type: 'list',
          value: 'CSS의 position, z-index'
        },
        {
          type: 'subTitle',
          value: 'Shooting'
        },
        {
          type: 'text',
          value: '드롭다운 메뉴는 기존에 구성해놓은 박스 영역에 제한되지 않고 떠 있어야 합니다. 이것을 가능하게 해주는 CSS의 속성이 position입니다. position을 absolute로 설정하면 엘리먼트는 더 이상 부모 엘리먼트의 한 영역을 차지하지 않고 겹쳐진 채로 독자적인 영역을 지니게 됩니다.'
        },
        {
          type: 'text',
          value: '<button>에 blur 이벤트를 걸어주고 이벤트 호출시 드롭다운 메뉴의 display를 none으로 바꾸면 <button>의 선택이 해제될 때 드롭다운 메뉴가 사라지게 됩니다.'
        },
        {
          type: 'js',
          value: `button.addEventListener('click', () => {
  const dropDown = document.querySelector('.dropdown');
  dropDown.style.display = 'block';
});`
        },
        {
          type: 'subTitle',
          value: '참고'
        },
        {
          type: 'link',
          value: '드롭다운',
          url: 'https://youtu.be/X0bf0hfE3qA'
        },
      ],
      previewCode: {
        html: `<div class="button-wrap">
  <button class="button">클릭</button>
  <ul class="dropdown">
    <li class="dropdown-item">서울</li>
    <li class="dropdown-item">대전</li>
    <li class="dropdown-item">대구</li>
    <li class="dropdown-item">부산</li>
  </ul>
</div>`,
        css: `body {
  display: flex;
  justify-content: center;
  height: 100vh;
  margin: 0;
}

.button-wrap {
  position: relative;
}

.button {
  display: flex;
  align-items: center;
}

.dropdown {
  display: none;
  position: absolute;
  top: 30px;
  border: 1px solid #d0d0d0;
  border-radius: 3px;
  margin: 0;
  padding: 4px 0;
}

.dropdown-item {
  white-space: nowrap;
  cursor: default;
  list-style: none;
  padding: 3px 20px;
}

.dropdown-item:hover {
  background: skyblue;
}`,
        js: `const button = document.querySelector('.button');

button.addEventListener('click', () => {
  const dropDown = document.querySelector('.dropdown');
  dropDown.style.display = 'block';
});

button.addEventListener('blur', () => {
  const dropDown = document.querySelector('.dropdown');
  dropDown.style.display = '';
});`
      }
    }
  },
  {
    id: 3,
    thumbnail: '',
    title: 'AWS EC2를 이용해서 백엔드 api 서버 만들기',
    category: 'aws',
    createdAt: '2021-04-01',
  },
  {
    id: 4,
    thumbnail: '',
    title: 'AWS EC2에 MySQL, NodeJS 설치하기',
    category: 'nodejs',
    createdAt: '2021-04-01',
  },
  {
    id: 5,
    thumbnail: 'https://i.ytimg.com/vi/AP4JWtzIAt0/maxresdefault.jpg',
    title: '웹 앱에서 AWS S3에 파일 올리는 방법',
    category: 'aws',
    createdAt: '2021-04-01',
  },
  {
    id: 6,
    thumbnail: '',
    title: '다른 곳을 클릭 했을 때 드롭다운 메뉴를 사라지게 하는 방법',
    category: 'html',
    createdAt: '2021-04-01',
  },
  {
    id: 7,
    thumbnail: 'https://repository-images.githubusercontent.com/65794292/bdacfa80-6132-11e9-90b9-33e6eee04d1f',
    title: 'Styled Components의 단점',
    category: 'css',
    createdAt: '2021-04-01',
  },
  {
    id: 8,
    thumbnail: '',
    title: 'AWS EC2를 이용해서 백엔드 api 서버 만들기',
    category: 'aws',
    createdAt: '2021-04-01',
  },
  {
    id: 9,
    thumbnail: '',
    title: 'AWS EC2에 MySQL, NodeJS 설치하기',
    category: 'nodejs',
    createdAt: '2021-04-01',
  },
  {
    id: 10,
    thumbnail: '',
    title: '웹 앱에서 AWS S3에 파일 올리는 방법',
    category: 'aws',
    createdAt: '2021-04-01',
  },
];

const beginnerItems = [
  {
    id: 1,
    thumbnail: '',
    title: '자바스크립트란?',
    category: 'basic',
    createdAt: '2021-04-01',
    page: {
      items: [
        {
          type: 'text',
          value: '자바스크립트(JavaScript)가 언어로서 지닌 특징에 대해 알아보겠습니다. 이어서 자바스크립트로 무엇을 할 수 있을지, 다른 기술들이 자바스크립트를 어떻게 활용하고 있는지도 이야기해 보겠습니다.'
        },
        {
          type: 'subTitle',
          value: '정의'
        },
        {
          type: 'text',
          value: `자바스크립트는 ‘웹페이지에 생동감을 불어넣기 위해’ 만들어진 프로그래밍 언어입니다. 

(엔터가 돼야 함)
자바스크립트로 작성한 프로그램을 스크립트(script) 라고 부릅니다. 스크립트는 웹페이지의 HTML 안에 작성할 수 있는데, 웹페이지를 불러올 때 스크립트가 자동으로 실행됩니다. 스크립트는 특별한 준비나 컴파일 없이 보통의 문자 형태로 작성할 수 있고, 실행도 할 수 있습니다. 이런 관점에서 보면 자바스크립트는 자바(Java)와는 매우 다른 언어라고 할 수 있습니다.`
        },
        {
          type: 'title',
          value: '‘script’ 태그'
        },
        {
          type: 'text',
          value: '<script> 태그를 이용하면 자바스크립트 프로그램을 HTML 문서 대부분의 위치에 삽입할 수 있습니다.'
        },
        {
          type: 'html',
          value: `<!DOCTYPE HTML>
<html>

<body>

  <p>스크립트 전</p>

  <script>
    alert( 'Hello, world!' );
  </script>

  <p>스크립트 후</p>

</body>

</html>`
        },
        {
          type: 'text',
          value: '오른쪽 위에 있는 ‘재생’ 버튼을 누르면 예제가 실행됩니다. <script> 태그엔 자바스크립트 코드가 들어갑니다. 브라우저는 이 태그를 만나면 안의 코드를 자동으로 처리합니다.'
        },
        {
          type: 'subTitle',
          value: '모던 마크업'
        },
        {
          type: 'text',
          value: '<script> 태그엔 몇 가지 속성(attribute)이 있습니다. 요즘엔 잘 사용하진 않지만, 오래된 코드에서 종종 이 속성을 발견할 수 있습니다.'
        },
        {
          type: 'text',
          value: 'type 속성: <script type=…>'
        },
        {
          type: 'text',
          value: 'HTML4에선 스크립트에 type을 명시하는 것이 필수였습니다. 따라서 type="text/javascript" 속성이 붙은 스크립트를 어렵지 않게 찾을 수 있었습니다. 이젠 타입 명시가 필수가 아닙니다. 게다가 모던 HTML 표준에선 이 속성의 의미가 바뀌었습니다. 이제 이 속성은 자바스크립트 모듈에 사용할 수 있습니다. 모듈은 심화 내용이기 때문에 다른 파트에서 다시 이야기하도록 하겠습니다.'
        },
        {
          type: 'text',
          value: 'language 속성: <script language=…>'
        },
        {
          type: 'text',
          value: '이 속성은 현재 사용하고 있는 스크립트 언어를 나타냅니다. 지금은 자바스크립트가 기본 언어이므로 속성의 의미가 퇴색된 상황입니다. 더는 사용할 필요가 없어졌죠.'
        },
        {
          type: 'text',
          value: '스크립트 전후에 위치한 주석'
        },
        {
          type: 'text',
          value: '아주 오래된 책과 가이드에서는 다음과 같이 <script> 태그 안에 주석이 존재하는 걸 볼 수 있습니다.'
        },
        {
          type: 'html',
          value: `<script type="text/javascript"><!--
    ...
//--></script>`
        },
        {
          type: 'text',
          value: '모던 자바스크립트에선 이런 트릭을 사용하지 않습니다. 태그 옆에 붙은 주석은 <script> 태그를 처리하지 못하는 브라우저가 해당 스크립트를 읽지 못하게 하려고 사용했었죠. 지난 15년간 출시된 브라우저는 <script> 태그를 처리할 수 있으므로, 이런 형태의 주석을 보면 아주 오래된 코드라는 사실을 알 수 있습니다.'
        },
        {
          type: 'subTitle',
          value: '외부 스크립트'
        },
        {
          type: 'text',
          value: '자바스크립트 코드의 양이 많은 경우엔, 파일로 소분하여 저장할 수 있습니다. 이렇게 분해해 놓은 각 파일은 src 속성을 사용해 HTML에 삽입합니다.'
        },
        {
          type: 'html',
          value: '<script src="/path/to/script.js"></script>'
        },
      ],
      previewCode: {
        html: `<div>자바스크립트</div>
<div>JavaScript</div>`,
        css: `body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}`,
        js: `// 웰컴`
      }
    }
  },
];

export {
  troublesItems,
  beginnerItems
}
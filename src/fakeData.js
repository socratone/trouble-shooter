const troublesItems = [
  {
    id: 1,
    image: 'https://miro.medium.com/max/3600/1*6ahbWjp_g9hqhaTDSJOL1Q.png',
    title: '다른 곳을 클릭 했을 때 드롭다운 메뉴를 사라지게 하는 방법',
    description: '버튼을 클릭 했을 때 드롭다운 메뉴가 나타나게 하는 것까지는 했다고 치자. 여기서 메뉴를 클릭하지 않고 다른 곳을 클릭 했을 때 드롭다운 메뉴가 사라지는 방법에 대해 다루겠다. 알고 보면 별 것 아닌데 모르면 어렵게 구현해야 한다.',
    category: 'html',
    shoot: {
      items: [
        {
          type: 'title',
          value: '목표'
        },
        {
          type: 'list',
          value: 'blur 이벤트를 이용해서 다른 곳을 클릭할 때 드롭다운 메뉴를 사라지게 할 수 있다.' 
        },
        {
          type: 'title',
          value: '선행 지식'
        },
        {
          type: 'list',
          value: '드롭다운 메뉴를 만드는 방법'
        },
        {
          type: 'title',
          value: 'Shooting'
        },
        {
          type: 'text',
          value: '버튼을 눌렀을 때 드롭다운 메뉴가 나타나도록 구현했다고 가정합시다. 아직은 다른 곳을 클릭하더라도 드롭다운 메뉴가 사라지지 않습니다. 다른 곳을 클릭했을 때 사라지게 하는 가장 간단한 방법은 blur 이벤트를 이용하는 것입니다. blur 이벤트는 <input>류의 엘리먼트만 적용 가능합니다. <button>도 blur 이벤트를 사용할 수 있습니다.'
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
          type: 'title',
          value: '참고'
        },
        {
          type: 'link',
          value: '드롭다운',
          url: 'https://youtu.be/X0bf0hfE3qA'
        },
      ],
      fullCodes: [
        {
          type: 'html',
          value: `<div class="button-wrap">
  <button class="button">클릭</button>
  <div class="dropdown">
    <p class="dropdown-item">서울</p>
    <p class="dropdown-item">대전</p>
    <p class="dropdown-item">대구</p>
    <p class="dropdown-item">부산</p>
  </div>
</div>`
        },
        {
          type: 'js',
          value: `const button = document.querySelector('.button');

button.addEventListener('click', () => {
  const dropDown = document.querySelector('.dropdown');
  dropDown.style.display = 'block';
});

button.addEventListener('blur', () => {
  const dropDown = document.querySelector('.dropdown');
  dropDown.style.display = '';
});`
        },
        {
          type: 'css',
          value: `body {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 100vh;
}

.button-wrap {
  position: relative;
}

.button {
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 0;
  padding: 0;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
}

.dropdown {
  display: none;
  position: absolute;
  top: 30px;
  width: 80px;
  border: 1px solid #d0d0d0;
  border-radius: 3px;
}

.dropdown-item {
  margin: 10px;
}`
        },
      ]
    }
  },
  {
    id: 2,
    image: 'https://i1.wp.com/www.whileifblog.com/wp-content/uploads/2020/04/o-que-e-o-css3.jpg?fit=1280%2C720&ssl=1',
    title: 'Styled Components의 단점',
    description: '스타일 컴포넌트를 이용하면 css class의 이름 중복 걱정을 하지 않아도 된다는 장점이 있다. 그러나 이는 css 모듈을 사용해도 마찬가지고 다음 열거할 몇 가지 단점 때문에 필자는 스타일 컴포넌트 보다는 css 모듈을 사용한다. 그러나 이는 css 모듈을 사용해도 마찬가지고 다음 열거할 몇 가지 단점 때문에 필자는 스타일 컴포넌트 보다는 css 모듈을 사용한다.',
    category: 'css'
  },
  {
    id: 3,
    image: 'https://techbeacon.com/sites/default/files/styles/social/public/html5-mobile-app-native-hybrid-pros-cons.jpg?itok=R3pMKIzh',
    title: 'AWS EC2를 이용해서 백엔드 api 서버 만들기',
    description: '요즘에는 정적 인터넷 웹페이지를 S3에 올리고 EC2를 백엔드 api로 활용하는 방식을 많이 쓰는 것 같다. 별도의 자동화 툴 없이도 S3에 변화된 내용을 바로 적용할 수 있어 개발하기 좋다.',
    category: 'js'
  },
  {
    id: 4,
    image: 'https://logz.io/wp-content/uploads/2020/09/Node.JS-and-Observability-1-1024x536.png',
    title: 'AWS EC2에 MySQL, NodeJS 설치하기',
    description: '우선 EC2를 생성하고 터미널로 pem 키를 이용해서 EC2의 ubuntu 컴퓨터 접속까지 성공해야 한다.',
    category: 'nodejs'
  },
  {
    id: 5,
    image: 'https://4matt.com.br/wp-content/uploads/2020/04/Amazon-S3.jpg',
    title: '웹 앱에서 AWS S3에 파일 올리는 방법',
    description: 'AWS의 콘솔에서 S3에 파일을 직접 올리는 방법도 있지만 앱에서 사용자가 파일을 올릴 수 있게 하려면 web에서 javascript 코드를 이용해 파일을 올리는 방법을 알아야 한다.',
    category: 's3'
  },
  {
    id: 6,
    image: 'data:image/png;base64,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',
    title: '다른 곳을 클릭 했을 때 드롭다운 메뉴를 사라지게 하는 방법',
    description: '버튼을 클릭 했을 때 드롭다운 메뉴가 나타나게 하는 것까지는 했다고 치자. 여기서 메뉴를 클릭하지 않고 다른 곳을 클릭 했을 때 드롭다운 메뉴가 사라지는 방법에 대해 다루겠다. 알고 보면 별 것 아닌데 모르면 어렵게 구현해야 한다.',
    category: 'html'
  },
  {
    id: 7,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png',
    title: 'Styled Components의 단점',
    description: '스타일 컴포넌트를 이용하면 css class의 이름 중복 걱정을 하지 않아도 된다는 장점이 있다. 그러나 이는 css 모듈을 사용해도 마찬가지고 다음 열거할 몇 가지 단점 때문에 필자는 스타일 컴포넌트 보다는 css 모듈을 사용한다. 그러나 이는 css 모듈을 사용해도 마찬가지고 다음 열거할 몇 가지 단점 때문에 필자는 스타일 컴포넌트 보다는 css 모듈을 사용한다.',
    category: 'css'
  },
  {
    id: 8,
    image: 'https://miro.medium.com/max/720/1*LjR0UrFB2a__5h1DWqzstA.png',
    title: 'AWS EC2를 이용해서 백엔드 api 서버 만들기',
    description: '요즘에는 정적 인터넷 웹페이지를 S3에 올리고 EC2를 백엔드 api로 활용하는 방식을 많이 쓰는 것 같다. 별도의 자동화 툴 없이도 S3에 변화된 내용을 바로 적용할 수 있어 개발하기 좋다.',
    category: 'js'
  },
  {
    id: 9,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
    title: 'AWS EC2에 MySQL, NodeJS 설치하기',
    description: '우선 EC2를 생성하고 터미널로 pem 키를 이용해서 EC2의 ubuntu 컴퓨터 접속까지 성공해야 한다.',
    category: 'nodejs'
  },
  {
    id: 10,
    image: 'https://d1.awsstatic.com/icons/jp/console_s3_icon.64795d08c5e23e92c12fe08c2dd5bd99255af047.png',
    title: '웹 앱에서 AWS S3에 파일 올리는 방법',
    description: 'AWS의 콘솔에서 S3에 파일을 직접 올리는 방법도 있지만 앱에서 사용자가 파일을 올릴 수 있게 하려면 web에서 javascript 코드를 이용해 파일을 올리는 방법을 알아야 한다.',
    category: 's3'
  },
];

export {
  troublesItems
}
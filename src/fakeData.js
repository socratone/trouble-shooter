const troublesItems = [
  {
    id: 1,
    thumbnail: 'https://bashooka.com/wp-content/uploads/2018/06/css-dropdown-menu-ex-2.jpg',
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
    thumbnail: '',
    title: 'Styled Components의 단점',
    description: '스타일 컴포넌트를 이용하면 css class의 이름 중복 걱정을 하지 않아도 된다는 장점이 있다. 그러나 이는 css 모듈을 사용해도 마찬가지고 다음 열거할 몇 가지 단점 때문에 필자는 스타일 컴포넌트 보다는 css 모듈을 사용한다. 그러나 이는 css 모듈을 사용해도 마찬가지고 다음 열거할 몇 가지 단점 때문에 필자는 스타일 컴포넌트 보다는 css 모듈을 사용한다.',
    category: 'css'
  },
  {
    id: 3,
    thumbnail: '',
    title: 'AWS EC2를 이용해서 백엔드 api 서버 만들기',
    description: '요즘에는 정적 인터넷 웹페이지를 S3에 올리고 EC2를 백엔드 api로 활용하는 방식을 많이 쓰는 것 같다. 별도의 자동화 툴 없이도 S3에 변화된 내용을 바로 적용할 수 있어 개발하기 좋다.',
    category: 'js'
  },
  {
    id: 4,
    thumbnail: '',
    title: 'AWS EC2에 MySQL, NodeJS 설치하기',
    description: '우선 EC2를 생성하고 터미널로 pem 키를 이용해서 EC2의 ubuntu 컴퓨터 접속까지 성공해야 한다.',
    category: 'nodejs'
  },
  {
    id: 5,
    thumbnail: 'https://i.ytimg.com/vi/AP4JWtzIAt0/maxresdefault.jpg',
    title: '웹 앱에서 AWS S3에 파일 올리는 방법',
    description: 'AWS의 콘솔에서 S3에 파일을 직접 올리는 방법도 있지만 앱에서 사용자가 파일을 올릴 수 있게 하려면 web에서 javascript 코드를 이용해 파일을 올리는 방법을 알아야 한다.',
    category: 's3'
  },
  {
    id: 6,
    thumbnail: '',
    title: '다른 곳을 클릭 했을 때 드롭다운 메뉴를 사라지게 하는 방법',
    description: '버튼을 클릭 했을 때 드롭다운 메뉴가 나타나게 하는 것까지는 했다고 치자. 여기서 메뉴를 클릭하지 않고 다른 곳을 클릭 했을 때 드롭다운 메뉴가 사라지는 방법에 대해 다루겠다. 알고 보면 별 것 아닌데 모르면 어렵게 구현해야 한다.',
    category: 'html'
  },
  {
    id: 7,
    thumbnail: 'https://repository-images.githubusercontent.com/65794292/bdacfa80-6132-11e9-90b9-33e6eee04d1f',
    title: 'Styled Components의 단점',
    description: '스타일 컴포넌트를 이용하면 css class의 이름 중복 걱정을 하지 않아도 된다는 장점이 있다. 그러나 이는 css 모듈을 사용해도 마찬가지고 다음 열거할 몇 가지 단점 때문에 필자는 스타일 컴포넌트 보다는 css 모듈을 사용한다. 그러나 이는 css 모듈을 사용해도 마찬가지고 다음 열거할 몇 가지 단점 때문에 필자는 스타일 컴포넌트 보다는 css 모듈을 사용한다.',
    category: 'css'
  },
  {
    id: 8,
    thumbnail: '',
    title: 'AWS EC2를 이용해서 백엔드 api 서버 만들기',
    description: '요즘에는 정적 인터넷 웹페이지를 S3에 올리고 EC2를 백엔드 api로 활용하는 방식을 많이 쓰는 것 같다. 별도의 자동화 툴 없이도 S3에 변화된 내용을 바로 적용할 수 있어 개발하기 좋다.',
    category: 'ec2'
  },
  {
    id: 9,
    thumbnail: '',
    title: 'AWS EC2에 MySQL, NodeJS 설치하기',
    description: '우선 EC2를 생성하고 터미널로 pem 키를 이용해서 EC2의 ubuntu 컴퓨터 접속까지 성공해야 한다.',
    category: 'nodejs'
  },
  {
    id: 10,
    thumbnail: '',
    title: '웹 앱에서 AWS S3에 파일 올리는 방법',
    description: 'AWS의 콘솔에서 S3에 파일을 직접 올리는 방법도 있지만 앱에서 사용자가 파일을 올릴 수 있게 하려면 web에서 javascript 코드를 이용해 파일을 올리는 방법을 알아야 한다.',
    category: 's3'
  },
];

export {
  troublesItems
}
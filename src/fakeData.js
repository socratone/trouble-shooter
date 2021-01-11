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
    title: 'Styled Components의 단점',
    category: 'css',
    createdAt: '2021-04-01',
  },
  {
    id: 3,
    thumbnail: '',
    title: 'AWS EC2를 이용해서 백엔드 api 서버 만들기',
    category: 'js',
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
    category: 's3',
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
    category: 'ec2',
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
    category: 's3',
    createdAt: '2021-04-01',
  },
];

const beginnerItems = [
  {
    id: 1,
    thumbnail: '',
    title: 'AWS EC2를 이용해서 백엔드 api 서버 만들기',
    category: 'js',
    createdAt: '2021-04-01',
    page: {
      items: []
    }
  },
];

export {
  troublesItems,
  beginnerItems
}
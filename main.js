const image = document.getElementById('image');

// 変更したい画像のパス
const originalImage = 'sitagaki.jpg';
const hoverImage = 'tabineko.jpg';

// マウスが画像の上に乗ったときの動作
image.addEventListener('mouseover', () => {
  image.src = hoverImage;
});

// マウスが画像から離れたときの動作
image.addEventListener('mouseout', () => {
  image.src = originalImage;
});



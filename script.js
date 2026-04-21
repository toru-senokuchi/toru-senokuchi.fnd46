"use strict";


//野菜のデータ
const vegetables = [
    { id: 'tomato', name: 'トマト', img: 'tomato.png', selectImg: 'tomato-select.png' },
    { id: 'carrot', name: 'にんじん', img: 'carrot.png' },
    { id: 'broccoli', name: 'ブロッコリー', img: 'broccoli.png' },
    { id: 'onion', name: 'たまねぎ', img: 'onion.png' },
    { id: 'eggplant', name: 'なす', img: 'eggplant.png' },
    { id: 'cabbage', name: 'キャベツ', img: 'cabbage.png' },
    { id: 'potato', name: 'ジャガイモ', img: 'potato.png' },
    { id: 'spinach', name: 'ほうれん草', img: 'spinach.png' },
    { id: 'taro', name: 'さといも', img: 'taro.png' },
    { id: 'white-radish', name: 'だいこん', img: 'white-radish.png' },
    { id: 'chinese-cabbage', name: 'はくさい', img: 'chinese-cabbage.png' }, 
    { id: 'cucumber', name: 'きゅうり', img: 'cucumber.png' },
    { id: 'green-onion', name: 'ねぎ', img: 'green-onion.png' },
    { id: 'green-pepper', name: 'ピーマン', img: 'green-pepper.png' },
    { id: 'lettuce', name: 'レタス', img: 'lettuce.png' }
];

//野菜を並べる箱（vege-container）を取得
const container = document.getElementById('vege-container');

//野菜のデータ（配列）からカードを自動生成
for (let i = 0; i < vegetables.length; i++) {
    const vege = vegetables[i];
    const item = document.createElement('div');
    item.className = 'vege-item';

    item.innerHTML = `
        <img src="images/${vege.img}" class="vege-icon">
        <p class="vege-name">${vege.name}</p>
    `;

    // 各カードをクリックしたときの処理
    item.onclick = function() {
        document.getElementById('home-page').classList.add('hidden');
        document.getElementById('detail-page').classList.remove('hidden');
        document.getElementById('vege-title').innerText = "おいしい" + vege.name + "の見分け方";

        const imgElement = document.getElementById('img-select');
        
        if (vege.selectImg) {
            imgElement.src = "images/" + vege.selectImg;
        } else {
            imgElement.src = "images/no-image.png"; 
        }
    };

    container.appendChild(item);
}

// 戻るボタンの処理
document.getElementById('back-btn').onclick = function() {
    document.getElementById('detail-page').classList.add('hidden');
    document.getElementById('home-page').classList.remove('hidden');
};

import React from 'react';
import { useLocation } from 'react-router-dom';
import Books from '../components/books';

const categoryData = {
    '/labtops': {
        name: '  لابتوب ',
        items: [
            { title: '   Laptop DELL 5530', des: '', url: './1713238354.jpg', pice: '1500' },
            { title: '   Laptop Lenovo Legion 5  ', des: '', url: './1713229652.webp', pice: '2000' },
            { title: '   Laptop Lenovo LOQ 15APH8 ', des: '', url: './1713222420.webp', pice: '1000' },
            { title: '   HP Victus 16-d1058ne   ', des: '', url: './1712187593.webp', pice: '3000' },
        ],
    },
    '/pc': {
        name: '   كمبيوتر ',
        items: [
            { title: '    جيزموباور جهاز كمبيوتر جيمنج    ', des: '', url: 'N40643449A_1.avif', pice: '5000' },
            { title: '  باور جهاز كمبيوتر جيمنج ', des: '', url: 'N40643454A_1.avif', pice: '3000' },
            { title: ' جيزموباور جهاز كمبيوتر جيمنج  ', des: '', url: 'N40643446A_1.avif', pice: '2600' },
            { title: '   ديل كمبيوتر محمول أوبتيبلكس    ', des: '', url: 'N44667668A_1.avif', pice: '3500' },
        ],
    },
    '/Mobile': {
        name: '  هواتف       ',
        items: [
            { title: ' الشريحة، أسود، 4 جيجابايت رام،  ', des: '', url: 'N53407977A_1.avif', pice: '1000' },
            { title: '  ريل مي هاتف C55 ثنائي  ', des: '', url: 'N53390292A_1.avif', pice: '950' },
            { title: '   نوكيا هاتف C1 الإصدار الثاني  ', des: '', url: 'N49748681A_1.avif', pice: '800' },
            { title: '  ريل مي C55 بشريحتين سن شاور   ', des: '', url: 'N53339783A_2.avif', pice: '1400' },
        ],
    },
    '/bags': {
        name: '  شنط    ',
        items: [
            { title: ' رحالة KG-121 شنطة لاب توب ء', des: '', url: 'f3a6a242-d01a-4d39-820f-1b844b1daa98.avif', pice: '500' },
            { title: ' أركتيك هانتر حقيبة ظهر لاب توب ', des: '', url: '12692f8b-7462-484d-8a00-ee8ed072b17e.avif', pice: '350' },
            { title: '  15.6-انش ظهر مقاومة للماء  ', des: '', url: 'ff3d3bb1-0216-49fc-acdc-938363ad25be.avif', pice: '400' },
        ],
    },
};

function CategoryBooks() {
    const location = useLocation();
    const { name, items } = categoryData[location.pathname] || { name: '', items: [] };


    return <Books data={items} name={name} />;
}

export default CategoryBooks;

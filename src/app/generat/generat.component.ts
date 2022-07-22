import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generat',
  templateUrl: './generat.component.html',
  styleUrls: ['./generat.component.scss']
})
export class GeneratComponent implements OnInit {
  leo = {
    inform: {
      name: 'Леонадро Да Винчи ',
      info: 'Это один из самых гениальных и загадочных людей за всю историю человечества. Изобретатель, писатель, музыкант… но известен нам, прежде всего, как художник. Да Винчи был признан еще при жизни: владел собственной мастерской, писал портреты итальянской знати и расписывал стены храмов. Имя мастера часто фигурирует в кино и литературе, поэтому его хорошо знают даже подростки. ',
      img: 'https://print4you.com.ua/upload/medialibrary/ad1/ad1efe18170fb8dd3f723764bed88df4.jpg',
    },
    works: [
      {
        name: 'Мона Лиза',
        year: '1503 г.',
        place: 'Лувр',
        size: '77 см x 53 см',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/250px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
      },
      {
        name: 'Тайная вечеря',
        year: '1498 г.',
        place: 'Санта-Мария-делле-Грацие',
        size: '4,6 м x 8,8 м',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg/350px-The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg',
      },
      {
        name: 'Витрувианский человек',
        year: '1492 г.',
        place: 'Галерея Академии в Венеции.',
        size: '35 см x 26 см',
        img: 'https://billionnews.ru/uploads/posts/2021-09/1631790015_2.jpg',
      },
    ],
  };
  constructor() { }

  ngOnInit(): void {
  }

}

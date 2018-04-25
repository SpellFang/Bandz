import { Pipe, PipeTransform } from '@angular/core';
import { Event } from '../models/Event';
import * as moment from 'moment';

@Pipe({
  name: 'EventSearchFilter',
  pure: false
})
export class EventSearchFilter implements PipeTransform {
    // @items the value on the left side of | being passed before transformation
    // @filter the value after :
    transform(items, dateValue, price) {
      if ((dateValue === undefined || dateValue === null) && (price[1] === 100 && price[0] === 0)) {
        console.log(price);
        return items;
      }
      // filter items array, items which match and return true will be kept,
      // false will be filtered out
      if ((items && items.length))  {
        return items.filter(event => {
          if ((dateValue === undefined || dateValue === null)
              && ((price[0] <= event.price) && (price[1] >= event.price))) {
            console.log('inside if statement when date is default');
            return true;
          } else if ((moment(dateValue).format('L') === event.date)
                    && ((price[0] <= event.price) && (price[1] >= event.price))) {
                      console.log('inside filtering gdy date i price wlaczony');
              return true;
          } else {
            console.log(`Data to : ${dateValue}
                          Price z inputu caly to : ${price}
                          PriceEventu to : ${event.price} `);
            console.log('fail');
              return false;
          }
        });
      }
      }
    }
  }

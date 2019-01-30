import {
    animation, trigger, animateChild, group,
    transition, animate, style, query
  } from '@angular/animations';
  
export const slideInAnimation =
  trigger('routeAnimations', [
    transition('SearchPage => DetailsPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '100%'})
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('500ms ease-in-out', style({ left: '-100%'}))
          ]),
          query(':enter', [
            animate('500ms ease-in-out', style({ left: '0%'}))
          ])
        ]),
        query(':enter', animateChild()),
      ]),
    transition('DetailsPage => SearchPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('500ms ease-in-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('500ms ease-in-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('DetailsPage => EditPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '100%'})
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('500ms ease-in-out', style({ left: '-100%'}))
          ]),
          query(':enter', [
            animate('500ms ease-in-out', style({ left: '0%'}))
          ])
        ]),
        query(':enter', animateChild()),
      ]),
    transition('EditPage => DetailsPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('500ms ease-in-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('500ms ease-in-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);
import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('HomePage => GalleryPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ 
          right: '-100%',
          // backgroundImage: "url('/assets/imgs/mixer.jpg')",
          // backgroundPosition: '50% 50%',
          // backgroundRepeat: 'no-repeat',
          // backgroundSize: 'cover'
        })
      ]),
      query(':leave',  animateChild()),
      group([
        query(':leave', [
          animate('500ms linear', style({ right: '100%' })),
        ]),
        query(':enter', [
          animate('500ms linear', style({ right: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);
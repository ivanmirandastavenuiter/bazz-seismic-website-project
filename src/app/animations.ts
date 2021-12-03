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
          right: '-100%'
        })
      ]),
      query('div.dv-lvl-0.background-container.gallery', [
        style({ 
          height: '100vh',
          overflow: 'hidden'
        })
      ]),
      query('div.dv-lvl-0.background-container.home', [
        style({ 
          height: '100vh',
          overflow: 'hidden'
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
    ]),
    transition('GalleryPage => HomePage', [
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
          left: '-100%',
        })
      ]),
      query('div.dv-lvl-0.background-container.gallery', [
        style({ 
          height: '100vh',
          overflow: 'hidden'
        })
      ]),
      query('div.dv-lvl-0.background-container.home', [
        style({ 
          height: '100vh',
          overflow: 'hidden'
        })
      ]),
      query(':leave',  animateChild()),
      group([
        query(':leave', [
          animate('500ms linear', style({ left: '0%' })),
        ]),
        query(':enter', [
          animate('500ms linear', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('GalleryPage => MusicPage', [
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
          right: '-100%'
        })
      ]),
      query('div.dv-lvl-0.background-container.music', [
        style({ 
          height: '100vh',
          overflow: 'hidden'
        })
      ]),
      query('div.dv-lvl-0.background-container.gallery', [
        style({ 
          height: '100vh',
          overflow: 'hidden'
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
    ]),
    transition('MusicPage => GalleryPage', [
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
          left: '-100%',
        })
      ]),
      query('div.dv-lvl-0.background-container.music', [
        style({ 
          height: '100vh',
          overflow: 'hidden',
          zIndex: 1
        })
      ]),
      query('div.dv-lvl-0.background-container.gallery', [
        style({ 
          height: '100vh',
          overflow: 'hidden',
          zIndex: 2
        })
      ]),
      query(':leave',  animateChild()),
      group([
        query(':leave', [
          animate('500ms linear', style({ left: '0%' })),
        ]),
        query(':enter', [
          animate('500ms linear', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('MusicPage => ContactPage', [
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
          right: '-100%'
        })
      ]),
      query('div.dv-lvl-0.background-container.contact', [
        style({ 
          height: '100vh',
          overflow: 'hidden'
        })
      ]),
      query('div.dv-lvl-0.background-container.music', [
        style({ 
          height: '100vh',
          overflow: 'hidden'
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
    ]),
    transition('ContactPage => MusicPage', [
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
          left: '-100%',
        })
      ]),
      query('div.dv-lvl-0.background-container.contact', [
        style({ 
          height: '100vh',
          overflow: 'hidden'
        })
      ]),
      query('div.dv-lvl-0.background-container.music', [
        style({ 
          height: '100vh',
          overflow: 'hidden'
        })
      ]),
      query(':leave',  animateChild()),
      group([
        query(':leave', [
          animate('500ms linear', style({ left: '0%' })),
        ]),
        query(':enter', [
          animate('500ms linear', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('ContactPage => HomePage', [
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
          right: '-100%'
        })
      ]),
      query('div.dv-lvl-0.background-container.home', [
        style({ 
          height: '100vh',
          overflow: 'hidden'
        })
      ]),
      query('div.dv-lvl-0.background-container.contact', [
        style({ 
          height: '100vh',
          overflow: 'hidden'
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
    ]),
    transition('HomePage => ContactPage', [
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
          left: '-100%',
        })
      ]),
      query('div.dv-lvl-0.background-container.home', [
        style({ 
          height: '100vh',
          overflow: 'hidden'
        })
      ]),
      query('div.dv-lvl-0.background-container.contact', [
        style({ 
          height: '100vh',
          overflow: 'hidden'
        })
      ]),
      query(':leave',  animateChild()),
      group([
        query(':leave', [
          animate('500ms linear', style({ left: '0%' })),
        ]),
        query(':enter', [
          animate('500ms linear', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);
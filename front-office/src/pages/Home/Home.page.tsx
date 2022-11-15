import React from 'react';
import {
  CenterBoxComponent,
  ImageCardGroupComponent,
  ImageCardProps,
  ImageComponent,
} from '../../components';
import { useApp } from '../../contexts';
import { _NewTo3DPrinting, _NewTo3DPrintingTitle } from '@content/main/promos';
import { _HomePageBottomBanner } from '@content/main/footer';
import { Steps } from 'intro.js-react';

import 'intro.js/introjs.css';
import {
  _TutorialDoneButton,
  _TutorialNextButton,
  _TutorialPreviousButton,
  _TutorialSkipButton,
  _TutorialStep1,
  _TutorialStep2,
  _TutorialStep3,
  _TutorialStep4,
  _TutorialStep5,
  _TutorialStep6,
  _TutorialStep7,
  _TutorialStep8,
} from '@content/tutorial';

const heading = {
  text: {
    title: _NewTo3DPrintingTitle,
    text: _NewTo3DPrinting,
  },
  image: {
    image: '/media/images/printers-printing.jpg',
    alt: 'Printers working.',
  },
};

const featuredArticles: ImageCardProps[] = [
  {
    image: '/media/images/001 - FDM Printer.jpg',
    alt: '3D Printer',
    title: 'Black .75 FDM Filament',
    price: '$198.00',
  },
  {
    image: '/media/images/002 - Resin Printer.jpg',
    alt: '3D Printer',
    title: '3D Printer',
    price: '$412.00',
  },
  {
    image: '/media/images/101 - Black.jpg',
    alt: '3D Printer',
    title: '3D Printer',
    price: '$32.00',
  },
];

const recommendedArticles: ImageCardProps[] = [
  {
    image: '/media/images/101 - Black.jpg',
    alt: '3D Printer',
    title: 'Black .75 FDM Filament',
    price: '$32.00',
  },
  {
    image: '/media/images/102 - Gray.jpg',
    alt: '3D Printer',
    title: 'Black .75 FDM Filament',
    price: '$32.00',
  },
  {
    image: '/media/images/103 - Light Gray.jpg',
    alt: '3D Printer',
    title: 'Black .75 FDM Filament',
    price: '$32.00',
  },
];

const options = {
  showProgress: true,
  showBullets: true,
  exitOnOverlayClick: true,
  exitOnEsc: true,
  nextLabel: _TutorialNextButton,
  prevLabel: _TutorialPreviousButton,
  // hidePrev: true,
  doneLabel: _TutorialDoneButton,
  skipLabel: _TutorialSkipButton,
  overlayOpacity: 0.5,
  overlayColor: '#000',
  showStepNumbers: true,
  keyboardNavigation: true,
  scrollToElement: true,
  helperElementPadding: 10,
  showButtons: true,
};

export const HomePage = (): JSX.Element => {
  const app = useApp();
  app?.setTitle('Home');
  app?.setNavigationInfo('reset', '');
  app?.setFooterInfoText(_HomePageBottomBanner);

  const intro = localStorage.getItem('intro') || null;

  const [stepsEnabled, setStepsEnabled] = React.useState(false);
  const [step, setStep] = React.useState(1);

  if (!intro && !stepsEnabled) setStepsEnabled(true);

  const steps = [
    {
      element: '#step_1',
      intro: _TutorialStep1,
    },
    {
      element: '#step_2',
      intro: _TutorialStep2,
    },
    {
      element: '#step_3',
      intro: _TutorialStep3,
    },
    {
      element: '#step_4',
      intro: _TutorialStep4,
    },
    {
      element: '#step_5',
      intro: _TutorialStep5,
    },
    {
      element: '#step_6',
      intro: _TutorialStep6,
    },
    {
      element: '#step_7',
      intro: _TutorialStep7,
    },
    {
      element: '#step_8',
      intro: _TutorialStep8,
    },
  ];

  return (
    <>
      <Steps
        steps={steps}
        enabled={stepsEnabled}
        initialStep={0}
        onExit={(e) => {
          localStorage.setItem('intro', 'true');
          setStepsEnabled(false);
        }}
        onComplete={() => localStorage.setItem('intro', 'true')}
        options={options}
      />
      <div id={'step_2'}></div>
      <div id={'step_3'}></div>
      <div id={'step_4'}></div>
      <div id={'step_5'}></div>
      <div id={'step_6'}></div>
      <div id={'step_7'}></div>
      <div id={'step_8'}></div>
      <div id={'step_1'}>
        <CenterBoxComponent
          title={heading.text.title}
          text={heading.text.text}
        />
      </div>
      <div id={'step_2'}>
        <ImageComponent
          image={heading.image.image}
          alt={heading.image.alt}
          nice={true}
        />
      </div>
      <ImageCardGroupComponent
        cards={featuredArticles}
        title={'Featured Products'}
      />
      <ImageCardGroupComponent
        cards={recommendedArticles}
        title={'Recommended For You'}
      />
    </>
  );
};

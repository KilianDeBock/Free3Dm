import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
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
import { Steps } from 'intro.js-react';

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

export const TutorialLayout = () => {
  const navigate = useNavigate();
  const intro = localStorage.getItem('intro') || null;

  const [stepsEnabled, setStepsEnabled] = React.useState(false);
  const [ref, setRef] = React.useState<Steps | null>(null);

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
      element: '#step_filter',
      intro: _TutorialStep3,
    },
    {
      element: '.step_like',
      intro: _TutorialStep4,
    },
    {
      element: '.step_wishlist',
      intro: _TutorialStep5,
    },
    {
      element: '.step_add_cart',
      intro: _TutorialStep6,
    },
    {
      element: '.step_cart',
      intro: _TutorialStep7,
    },
    {
      element: '.step_login',
      intro: _TutorialStep8,
    },
  ];
  return (
    <>
      {!intro && (
        <Steps
          steps={steps}
          enabled={stepsEnabled}
          initialStep={0}
          onExit={() => {
            localStorage.setItem('intro', 'true');
            setStepsEnabled(false);
            navigate('/');
          }}
          onComplete={() => localStorage.setItem('intro', 'true')}
          onBeforeChange={(step) => {
            switch (step) {
              case 0:
                navigate('/');
                break;
              case 1:
                navigate('/category/filaments');
                break;
              case 2:
                navigate('/category/filaments');
                break;
              case 3:
                navigate('/category/filaments');
                break;
              case 4:
                navigate('/category/filaments/product/2/5/red%20pla');
                break;
              case 5:
                navigate('/category/filaments/product/2/5/red%20pla');
                break;
              case 6:
                navigate('/cart');
                break;
              case 7:
                navigate('/');
                break;
              default:
                break;
            }

            try {
              // @ts-ignore
              ref.updateStepElement(step);
            } catch (e) {}
          }}
          options={options}
          ref={(r) => setRef(r)}
        />
      )}
      <Outlet />
    </>
  );
};

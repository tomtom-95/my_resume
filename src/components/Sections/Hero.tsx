import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, useState} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {imageSrc, name, description, actions} = heroData;

  const [isLoading, setIsLoading] = useState(false); // Stato per il caricamento
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Stato per l'errore

  // Funzione per gestire il download del CV
  const handleResumeDownload = async () => {
    setIsLoading(true); // Mostra l'icona di caricamento
    setErrorMessage(null); // Resetta eventuali errori precedenti

    try {
      const response = await fetch('/api/generate-pdf');
      if (!response.ok) {
        throw new Error('Errore durante il download del PDF.');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Resume.pdf';
      link.click();
      window.URL.revokeObjectURL(url); // Pulisce l'URL generato
    } catch (error) {
      console.error('Errore durante la generazione del PDF:', error);
      setErrorMessage('Errore durante il download del curriculum. Riprova più tardi.');
    } finally {
      setIsLoading(false); // Nasconde l'icona di caricamento
    }
  };

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <style jsx>{`
        .loader {
          display: inline-block;
          width: 1.25rem;
          height: 1.25rem;
          border: 2px solid white;
          border-radius: 50%;
          border-top-color: transparent;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .error-message {
          color: #f87171; /* Red-400 */
          font-size: 0.875rem;
          margin-top: 1rem;
        }
      `}</style>
      <div className="relative flex h-screen w-full items-center justify-center">
        {/* Immagine di sfondo */}
        <Image
          alt={`${name}-image`}
          className="absolute z-0 h-full w-full object-cover"
          placeholder="blur"
          priority
          src={imageSrc}
        />
        <div className="z-10 max-w-screen-lg px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">
            {/* Nome e descrizione */}
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">I'm {name}.</h1>
            {description}
            {/* Socials */}
            <div className="flex gap-x-4 text-neutral-100">
              <Socials />
            </div>
            {/* Azioni */}
            <div className="flex w-full justify-center gap-x-4">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                    primary ? 'border-orange-500 ring-orange-500' : 'border-white ring-white',
                  )}
                  href={href}
                  key={text}>
                  {text}
                  {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
                </a>
              ))}
              {/* Secondo pulsante per ambiente dev */}
              {process.env.NODE_ENV === 'development' && (
                <button
                  onClick={handleResumeDownload}
                  className={classNames(
                    'flex gap-x-2 items-center rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                    'border-orange-500 ring-orange-500',
                  )}
                  disabled={isLoading} // Disabilita il pulsante durante il caricamento
                >
                  {isLoading ? <span className="loader"></span> : <>Download Resume (Dev)</>}
                </button>
              )}
            </div>
            {/* Messaggio di errore */}
            {errorMessage && <div className="error-message">{errorMessage}</div>}
          </div>
        </div>
        {/* Freccia per scorrere */}
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <a
            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.About}`}>
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;

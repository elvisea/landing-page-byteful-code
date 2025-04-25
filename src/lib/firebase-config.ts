// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from 'firebase/app';

import { Analytics, getAnalytics, isSupported, logEvent } from 'firebase/analytics';

import { Logger } from './logger';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

type EventParams = {
  [key: string]: string | number | boolean;
};

class FirebaseService {
  private static instance: FirebaseService;
  private app: FirebaseApp;
  private analytics: Analytics | null = null;

  private constructor() {
    const config = {
      apiKey: 'AIzaSyDHU-1O1Cr5uRuHpq1NpxD233wAQQNiKqo',
      authDomain: 'bytefulcode.firebaseapp.com',
      projectId: 'bytefulcode',
      storageBucket: 'bytefulcode.firebasestorage.app',
      messagingSenderId: '1062241774168',
      appId: '1:1062241774168:web:b69c79cc0227d11110382d',
      measurementId: 'G-GF4P90JVBF',
    };

    this.app = initializeApp(config);
    this.initializeAnalytics();
  }

  public static getInstance(): FirebaseService {
    if (!FirebaseService.instance) {
      FirebaseService.instance = new FirebaseService();
    }
    return FirebaseService.instance;
  }

  private async initializeAnalytics(): Promise<void> {
    if (typeof window === 'undefined') return;

    try {
      const supported = await isSupported();
      if (supported) {
        this.analytics = getAnalytics(this.app);
        Logger.info('Firebase Analytics inicializado com sucesso', {
          prefix: 'Firebase',
        });
      }
    } catch (err) {
      Logger.error(
        `Erro ao verificar suporte do Analytics: ${err instanceof Error ? err.message : 'Erro desconhecido'}`,
        { prefix: 'Firebase' }
      );
    }
  }

  public logEvent(eventName: string, eventParams?: EventParams): void {
    if (this.analytics) {
      try {
        logEvent(this.analytics, eventName, eventParams);
        Logger.info(
          `Evento registrado: ${eventName} - Parâmetros: ${JSON.stringify(eventParams)}`,
          { prefix: 'Firebase' }
        );
      } catch (error) {
        Logger.error(
          `Erro ao registrar evento ${eventName}: ${error instanceof Error ? error.message : 'Erro desconhecido'}`,
          { prefix: 'Firebase' }
        );
      }
    } else {
      Logger.warn(`Analytics não disponível para registrar evento: ${eventName}`, {
        prefix: 'Firebase',
      });
    }
  }

  public getApp(): FirebaseApp {
    return this.app;
  }

  public getAnalytics(): Analytics | null {
    return this.analytics;
  }
}

// Exporta uma instância única do serviço
export const firebaseService = FirebaseService.getInstance();

// Exporta um método simplificado para logging de eventos
export const logAnalyticsEvent = (eventName: string, eventParams?: EventParams): void => {
  firebaseService.logEvent(eventName, eventParams);
};

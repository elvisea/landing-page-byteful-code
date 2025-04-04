type LogLevel = 'info' | 'warn' | 'error';

interface LogOptions {
  prefix?: string;
  data?: any;
  error?: Error;
}

class Logger {
  private static logMessage(level: LogLevel, message: string, options: LogOptions = {}) {
    const prefix = options.prefix ? `[${options.prefix}] ` : '';
    const fullMessage = `${prefix}${message}`;

    // Em produção, não exibimos logs de nível info
    if (process.env.NODE_ENV === 'production' && level === 'info') {
      return;
    }

    switch (level) {
      case 'info':
        console.info(fullMessage);
        break;
      case 'warn':
        console.warn(fullMessage);
        break;
      case 'error':
        console.error(fullMessage);
        break;
    }
  }

  static info(message: string, options: LogOptions = {}) {
    this.logMessage('info', message, options);
  }

  static warn(message: string, options: LogOptions = {}) {
    this.logMessage('warn', message, options);
  }

  static error(message: string, options: LogOptions = {}) {
    this.logMessage('error', message, options);
  }
}

export { Logger };

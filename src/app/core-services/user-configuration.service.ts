import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserConfigurationService {
  private static LocalStorageKey = 'user-configuration';

  private configuration: { [key: string]: any } | undefined;

  public get<T>(key: string): T | undefined {
    const config = this.getConfig();
    const value = config[key];
    if (!value) {
      return value;
    }

    return value as T;
  }

  public set<T>(key: string, value: T): void {
    const config = this.getConfig();
    config[key] = value;
    this.setConfig(config);
  }

  public unset(key: string) {
    const config = this.getConfig();
    delete config[key];
    this.setConfig(config);
  }

  public clear() {
    localStorage.removeItem(UserConfigurationService.LocalStorageKey);
  }

  private getConfig(): { [key: string]: any } {
    if (this.configuration) {
      return this.configuration;
    }

    const configStr = localStorage.getItem(UserConfigurationService.LocalStorageKey);
    const config = configStr ? JSON.parse(configStr) : {};
    this.configuration = config;
    return config;
  }

  private setConfig(config: { [key: string]: any }): void {
    const configStr = JSON.stringify(config);
    localStorage.setItem(UserConfigurationService.LocalStorageKey, configStr);
  }
}

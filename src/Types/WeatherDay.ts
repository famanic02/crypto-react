import { getIcon } from 'Helpers/ImageHelper';
import moment from 'moment';

export class WeatherDay {
  id: number;

  weather_state_name: string;

  weather_state_abbr: string;

  wind_direction_compass: string;

  created: string;

  applicable_date: string;

  min_temp: number;

  max_temp: number;

  the_temp: number;

  wind_speed: number;

  wind_direction: number;

  air_pressure: number;

  humidity: number;

  visibility: number;

  predictability: number;

  constructor(json?: any) {
    this.id = json.id || '';
    this.weather_state_name = json.weather_state_name || -1;
    this.weather_state_abbr = json.weather_state_abbr || '';
    this.wind_direction_compass = json.wind_direction_compass || '';
    this.created = json.created || '';
    this.applicable_date = json.applicable_date || '';
    this.min_temp = json.min_temp || 0;
    this.max_temp = json.max_temp || 0;
    this.the_temp = json.the_temp || 0;
    this.wind_speed = json.wind_speed || 0;
    this.wind_direction = json.wind_direction || 0;
    this.air_pressure = json.air_pressure || 0;
    this.humidity = json.humidity || 0;
    this.visibility = json.visibility || 0;
    this.predictability = json.predictability || 0;
  }

  get icon() {
    return getIcon(this.weather_state_abbr);
  }

  get minTemperature() {
    return `${Math.round(this.min_temp)}°`;
  }

  get maxTemperature() {
    return `${Math.round(this.max_temp)}°`;
  }

  get dayName() {
    return moment(this.applicable_date).calendar(null, {
      sameDay: '[Today]',
      nextDay: '[Tomorrow]',
      nextWeek: 'dddd',
      lastDay: '[Yesterday]',
      lastWeek: '[Last] dddd',
      sameElse: 'DD/MM/YYYY',
    });
  }

  get isToday() {
    return moment(this.applicable_date).isSame(moment.now(), 'date');
  }
}

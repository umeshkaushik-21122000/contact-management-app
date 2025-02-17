export interface CountryData {
    country: string;
    countryInfo: {
        lat: number;
        long: number;
    };
    active: number;
    recovered: number;
    deaths: number;
}

export interface GraphData {
    timeline: {
        cases: Record<string, number>;
        deaths: Record<string, number>;
        recovered: Record<string, number>;
    };
}

export interface TextInputProps {
    id: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    maxLength?: number;
  }

export interface RadioGroupProps {
    value: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

  export interface FormContainerProps {
    children: React.ReactNode;
  }